import { Injectable } from "@angular/core";
import { BehaviorSubject, interval } from "rxjs";
import { Client } from "../../shared/interfaces/client";
import { HttpClient, HttpParams, HttpRequest } from "@angular/common/http";
import { delay, map } from "rxjs/operators";

interface SearchParams {
    name?: string;
    email?: string;
    birthDateFrom?: Date;
    birthDateTo?: Date;
    status?: 'lead' | 'demo' | 'client';
}

@Injectable()
export class ClientsService {
    private url = 'http://localhost:3000/clients';

    private _isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    private _searchParams: SearchParams = {};
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

    public setSearchParams(params: SearchParams) {
        this._searchParams = params;
    }

    setAdvancedSearchMode(value: boolean) {
        this.advancedSearch.next(value);
    }

    getAll() {
        this.isLoading.next(true);

        let searchParamsObj = {} as {[param: string]: string};
        for (let key in this._searchParams) {
            let value = this._searchParams[key];
            
            if (value !== undefined && value !== null) {
                searchParamsObj[key] = value;
            }
        }
        
        let params = new HttpParams({fromObject: searchParamsObj});    
        
        this.http.get(`${this.url}`, {params})
            // .pipe(delay(500))         
            .subscribe(data => {
                this.searchResult.next(data as Client[]);
                this.isLoading.next(false); 
            });   
    }

    selectClient(id: number) {
        this.isLoading.next(true);
        this.http.get(`${this.url}/${id}`)
        // .pipe(delay(500))
        .subscribe(res => {
            this.isLoading.next(false);
            this.selectedClient.next(res as Client); 
        });        
    }

    update(client: Client) {
        this.http.post<Client>(`${this.url}/`, client).subscribe(res => {
            this.selectedClient.next(res);
        });
    }

    delete(id: number) {
        return this.http.delete(`${this.url}/${id}`);
    }

    saveFile(clientId: number, file: File) {        
        const formData = new FormData();
        formData.append('clientFile', file, file.name);

        const params = new HttpParams();
        
        const options = {params};        
        
        this.http.post(`${this.url}/${clientId}/files`, formData).subscribe(e => {            
            this.selectedClient.next(e as Client);
        })

    }    
}
