import { Component, OnInit } from '@angular/core';
import { ClientFile } from 'src/app/shared/interfaces/client-file';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-client-files',
  templateUrl: './client-files.component.html',
  styleUrls: ['./client-files.component.scss']
})
export class ClientFilesComponent implements OnInit {
  displayedColumns = ['fileName', 'originalName', 'mime', 'size']

  files: ClientFile[] = [];

  constructor(public clientsService: ClientsService) { }

  ngOnInit(): void {
    this.clientsService.selectedClient
      .subscribe(c => (this.files = c.files))
      .unsubscribe();
  }

}
