import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbookticketComponent } from './viewbookticket.component';

describe('ViewbookticketComponent', () => {
  let component: ViewbookticketComponent;
  let fixture: ComponentFixture<ViewbookticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewbookticketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbookticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
