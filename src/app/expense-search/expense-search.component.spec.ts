import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseSearchComponent } from './expense-search.component';

describe('ExpenseSearchComponent', () => {
  let component: ExpenseSearchComponent;
  let fixture: ComponentFixture<ExpenseSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
