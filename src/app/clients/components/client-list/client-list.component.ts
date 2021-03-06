import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';



@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  displayedColumns: string[] = [
    'firstName', 
    'lastName', 
    'email', 
    'birthDate', 
    'registrationDate', 
    'ipAddress',
    'status',
    'actions'
  ];

  constructor(public clientsService: ClientsService) {     
  }

  ngOnInit(): void {}

  removeClient(event: Event, id: number) {
    event.cancelBubble = true;
    this.clientsService.delete(id).subscribe(res => {      
      this.clientsService.getAll();
    });
  }
}
