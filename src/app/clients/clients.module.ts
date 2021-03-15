import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './pages/clients/clients.component';
import { ClientComponent } from './pages/client/client.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientHeaderComponent } from './components/client-header/client-header.component';
import { ClientAdvancedSearchComponent } from './components/client-advanced-search/client-advanced-search.component';
import { ClientFastSearchComponent } from './components/client-fast-search/client-fast-search.component';

import { ClientsService } from './services/clients.service';
import { ClientFilesComponent } from './components/client-files/client-files.component';

import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ClientsComponent,
    ClientComponent,
    ClientListComponent,
    ClientHeaderComponent,
    ClientAdvancedSearchComponent,
    ClientFilesComponent,
    ClientFastSearchComponent,    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClientsRoutingModule,
    HttpClientModule,

    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatProgressBarModule

  ],
  providers: [ClientsService]
})
export class ClientsModule { }
