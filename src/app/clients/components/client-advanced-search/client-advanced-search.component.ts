import { Component, OnInit } from '@angular/core';

import { ClientsService } from '../../services/clients.service';


@Component({
  selector: 'app-client-advanced-search',
  templateUrl: './client-advanced-search.component.html',
  styleUrls: ['./client-advanced-search.component.scss']
})
export class ClientAdvancedSearchComponent implements OnInit {

  name: string;
  email: string;
  birthDateFrom: Date;
  birthDateTo: Date;
  status: 'lead' | 'demo' | 'client';

  constructor(private clientsService: ClientsService) { }

  ngOnInit(): void {
  }

  search() {
    // this.clientsService.getList({
    //   name: this.name,
    //   email: this.email,
    //   birthDateFrom: this.birthDateFrom? new Date(this.birthDateFrom) : undefined,
    //   birthDateTo: this.birthDateTo? new Date(this.birthDateTo) : undefined,
    //   status: this.status
    // });
  }

  reset() {    
    this.name = undefined;
    this.email = undefined;
    this.birthDateFrom = undefined;
    this.birthDateTo = undefined;
    this.status = undefined;    
  }
}
