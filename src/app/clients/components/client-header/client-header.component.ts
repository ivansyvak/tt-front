import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/interfaces/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.scss']
})
export class ClientHeaderComponent implements OnInit {
  client: Client;

  constructor(private clientService: ClientsService) { }

  ngOnInit(): void {
    this.clientService.selectedClient
      .subscribe(c => (this.client = c))      
  }

  getRegistrationDate() {
    if (!this.client) {
      return;
    }
    let res = formatDate(this.client.registrationDate, 'yyyy-MM-dd', 'EN');    
    return res;
  }

  handleFileInput(files) {    
    this.clientService.saveFile(this.client.id, files[0]);
  }

  saveClient() {    
    // костыль для добавления нового клиента
    if (this.client.id == 0) {
      delete this.client.id;
    }

    this.clientService.update(this.client);
  }
}
