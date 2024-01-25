import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeventhpageComponent } from './seventhpage.component';

describe('SeventhpageComponent', () => {
  let component: SeventhpageComponent;
  let fixture: ComponentFixture<SeventhpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeventhpageComponent]
    });
    fixture = TestBed.createComponent(SeventhpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
