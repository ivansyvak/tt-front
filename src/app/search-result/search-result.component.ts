import { Component, OnInit } from '@angular/core';
import { SearchService } from '../_services/serach.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {  

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'birthDate', 'registrationDate', 'ipAddress', 'status'];

  constructor(public searchService: SearchService) {     
  }

  ngOnInit(): void {
  }

}
