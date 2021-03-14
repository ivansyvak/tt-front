import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAdvancedSearchComponent } from './client-advanced-search.component';

describe('ClientAdvancedSearchComponent', () => {
  let component: ClientAdvancedSearchComponent;
  let fixture: ComponentFixture<ClientAdvancedSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAdvancedSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAdvancedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
