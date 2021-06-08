import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductTableComponent } from './list-product-table.component';

describe('ListProductTableComponent', () => {
  let component: ListProductTableComponent;
  let fixture: ComponentFixture<ListProductTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProductTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
