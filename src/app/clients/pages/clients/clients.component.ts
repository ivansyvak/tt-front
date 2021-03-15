import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  constructor(public clientsService: ClientsService, private router: Router) { }

  ngOnInit(): void {
    this.clientsService.getAll({});
  }

  addClient() {
    this.router.navigate([`/clients/0`]);
  }

}
