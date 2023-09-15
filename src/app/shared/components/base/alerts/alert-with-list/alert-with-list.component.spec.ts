import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertWithListComponent } from './alert-with-list.component';

describe('AlertWithListComponent', () => {
  let component: AlertWithListComponent;
  let fixture: ComponentFixture<AlertWithListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertWithListComponent]
    });
    fixture = TestBed.createComponent(AlertWithListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
