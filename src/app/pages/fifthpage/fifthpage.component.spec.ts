import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthpageComponent } from './fifthpage.component';

describe('FifthpageComponent', () => {
  let component: FifthpageComponent;
  let fixture: ComponentFixture<FifthpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FifthpageComponent]
    });
    fixture = TestBed.createComponent(FifthpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
