import { Injectable } from "@angular/core";
import { BehaviorSubject, interval } from "rxjs";
import { Client } from "../../shared/interfaces/client";
import { HttpClient, HttpParams, HttpRequest } from "@angular/common/http";
import { delay } from "rxjs/operators";

interface searchParams {
    name?: string;
    email?: string;
    birthDateFrom?: Date;
    birthDateTo?: Date;
    status?: 'lead' | 'demo' | 'client';
}

@Injectable()
export class ClientsService {
    private url = 'http://localhost:3000';

    private _isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private _advancedSearch: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private _searchResult: BehaviorSubject<Client[]> = new BehaviorSubject<Client[]>([]);
    private _selectedClient: BehaviorSubject<Client> = new BehaviorSubject<Client>(null);

    get isLoading() {
        return this._isLoading;
    }

    get searchResult() {
        return this._searchResult;
    }

    public get advancedSearch() {
        return this._advancedSearch;
    }

    public get selectedClient() {
        return this._selectedClient;
    }

    constructor(private http: HttpClient) {}

    setAdvancedSearchMode(value: boolean) {
        this.advancedSearch.next(value);
    }

    getAll(searchParams: searchParams) {
        this.isLoading.next(true);

        this.http.get(`${this.url}/clients`)
            .pipe(delay(500))         
            .subscribe(data => {
                this.searchResult.next(data as Client[]);
                this.isLoading.next(false); 
            });   
    }

    selectClient(id: number) {
        this.isLoading.next(true);
        this.http.get(`${this.url}/clients/${id}`)
        .pipe(delay(500))
        .subscribe(res => {
            this.isLoading.next(false);
            this.selectedClient.next(res as Client); 
        });        
    }

    update(client: Client) {

    }

    delete(id: number) {

    }

    saveFile(clientId: number, file: File) {
        debugger;
        const formData = new FormData();
        formData.append('upload', file, file.name);

        const params = new HttpParams();
        

        const options = {params};

        const req = new HttpRequest('POST', `${this.url}/${clientId}/files`, formData, options);
        this.http.request(req).subscribe(event => {

        });        
    }    
}
