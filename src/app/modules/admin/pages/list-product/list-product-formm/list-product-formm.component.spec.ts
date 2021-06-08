import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductFormmComponent } from './list-product-formm.component';

describe('ListProductFormmComponent', () => {
  let component: ListProductFormmComponent;
  let fixture: ComponentFixture<ListProductFormmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProductFormmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductFormmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
