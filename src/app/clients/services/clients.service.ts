import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { clientsMock } from "./clients.mock";
import { Client } from "../../shared/interfaces/client";

interface searchParams {
    name?: string;
    email?: string;
    birthDateFrom?: Date;
    birthDateTo?: Date;
    status?: 'lead' | 'demo' | 'client';
}

@Injectable()
export class ClientsService {
    private _isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private _advancedSearch: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private _searchResult: BehaviorSubject<Client[]> = new BehaviorSubject<Client[]>(clientsMock);    

    get isLoading() {
        return this._isLoading;
    }

    get searchResult () {
        return this._searchResult;
    }

    public get advancedSearch(): BehaviorSubject<boolean> {
        return this._advancedSearch;
    }

    constructor() {

    }

    setAdvancedSearchMode(value: boolean) {
        this.advancedSearch.next(value);
    }

    search(searchParams: searchParams) {                
        this.isLoading.next(true);

        setTimeout(() => {
            let res = clientsMock.filter(client => this.clientSatisfiesSearchConditions(client, searchParams));

            this.isLoading.next(false);
            this.searchResult.next(res);
        }, 1000);        
    }

    clientSatisfiesSearchConditions(client: Client, searchParams: searchParams) {
        let satisfies = true;
        for (let param in searchParams) {
            let value = searchParams[param];
            if (value === undefined) {
                continue;
            }

            switch (param) {
                case 'name': {
                    let fullName = `${client.firstName} ${client.lastName}`;
                    if (!fullName.includes(value)) {
                        satisfies = false;
                    }
                    break;
                }

                case 'birthDateFrom': {
                    if (client.birthDate < value) {
                        satisfies = false;
                    }
                    break;
                }

                case 'birthDateTo': {
                    if (client.birthDate > value) {
                        satisfies = false;
                    }
                    break;
                }

                default: {
                    if (client[param] != value) {
                        satisfies = false;
                    }
                    break;
                }
            }

        }

        return satisfies;
    }
}
