import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthpageComponent } from './sixthpage.component';

describe('SixthpageComponent', () => {
  let component: SixthpageComponent;
  let fixture: ComponentFixture<SixthpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SixthpageComponent]
    });
    fixture = TestBed.createComponent(SixthpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
