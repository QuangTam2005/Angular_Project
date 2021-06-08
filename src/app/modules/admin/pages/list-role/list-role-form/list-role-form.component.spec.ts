import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRoleFormComponent } from './list-role-form.component';

describe('ListRoleFormComponent', () => {
  let component: ListRoleFormComponent;
  let fixture: ComponentFixture<ListRoleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRoleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRoleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
