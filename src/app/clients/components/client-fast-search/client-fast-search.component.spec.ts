import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFastSearchComponent } from './client-fast-search.component';

describe('ClientFastSearchComponent', () => {
  let component: ClientFastSearchComponent;
  let fixture: ComponentFixture<ClientFastSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientFastSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientFastSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
