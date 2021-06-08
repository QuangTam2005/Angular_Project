import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRoleTableComponent } from './list-role-table.component';

describe('ListRoleTableComponent', () => {
  let component: ListRoleTableComponent;
  let fixture: ComponentFixture<ListRoleTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRoleTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRoleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
