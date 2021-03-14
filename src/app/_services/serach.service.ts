import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { clientsMock } from "../_mocks/clients.mock";
import { Client } from "../_models/client";

interface searchParams {
    name?: string;
    email?: string;
    birthDateFrom?: Date;
    birthDateTo?: Date;
    status?: 'lead' | 'demo' | 'client';
}

@Injectable()
export class SearchService {
    private _isSearching: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private _searchResult: BehaviorSubject<Client[]> = new BehaviorSubject<Client[]>(clientsMock);

    get isSearching() {
        return this._isSearching;
    }

    get searchResult () {
        return this._searchResult;
    }

    constructor() {

    }

    search(searchParams: searchParams) {                
        this.isSearching.next(true);

        setTimeout(() => {
            let res = clientsMock.filter(client => this.clientSatisfiesSearchConditions(client, searchParams));

            this.isSearching.next(false);
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
