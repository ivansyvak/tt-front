import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    public clientsService: ClientsService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');   

    if (id == 0) {
      this.setNewClient();
    } else {
      this.clientsService.selectClient(id);

      this.clientsService.selectedClient.subscribe(console.log)
        .unsubscribe();
    }
  }

  setNewClient() {
    this.clientsService.selectedClient.next({
      id: 0,
      firstName: '',
      lastName: '',
      email: '',
      birthDate: new Date(),
      registrationDate: new Date(),
      status: 'lead',
      files: []
    });
  }
}
