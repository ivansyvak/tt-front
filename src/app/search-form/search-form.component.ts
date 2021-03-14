import { Component, OnInit } from '@angular/core';
import { SearchService } from '../_services/serach.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  name: string;
  email: string;
  birthDateFrom: Date;
  birthDateTo: Date;
  status: 'lead' | 'demo' | 'client';

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  search() {
    this.searchService.search({
      name: this.name,
      email: this.email,
      birthDateFrom: this.birthDateFrom? new Date(this.birthDateFrom) : undefined,
      birthDateTo: this.birthDateTo? new Date(this.birthDateTo) : undefined,
      status: this.status
    });
  }

  reset() {    
    this.name = undefined;
    this.email = undefined;
    this.birthDateFrom = undefined;
    this.birthDateTo = undefined;
    this.status = undefined;    
  }
}
