import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ClientsService } from '../../services/clients.service';

import { debounceTime, distinctUntilChanged, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-client-fast-search',
  templateUrl: './client-fast-search.component.html',
  styleUrls: ['./client-fast-search.component.scss']
})
export class ClientFastSearchComponent implements OnInit {  
  name: string;

  searchTextChanged = new Subject<string>();


  constructor(public clientsService: ClientsService) { }

  ngOnInit(): void {
    let subscription = this.searchTextChanged.pipe(
      debounceTime(500),
      distinctUntilChanged(),
    ).subscribe(s => {
      // this.clientsService.getList({name: this.name})
    });
  }

  search() {
    this.searchTextChanged.next(this.name);
  }

  addNewClient() {
    
  }

}
