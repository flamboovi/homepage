import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthpageComponent } from './fourthpage.component';

describe('FourthpageComponent', () => {
  let component: FourthpageComponent;
  let fixture: ComponentFixture<FourthpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FourthpageComponent]
    });
    fixture = TestBed.createComponent(FourthpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
