import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMarkComponent } from './order-mark.component';

describe('OrderMarkComponent', () => {
  let component: OrderMarkComponent;
  let fixture: ComponentFixture<OrderMarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderMarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
