import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantuserComponent } from './restaurantuser.component';

describe('RestaurantuserComponent', () => {
  let component: RestaurantuserComponent;
  let fixture: ComponentFixture<RestaurantuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantuserComponent]
    });
    fixture = TestBed.createComponent(RestaurantuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
