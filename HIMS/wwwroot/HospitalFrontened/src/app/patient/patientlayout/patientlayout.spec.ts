import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Patientlayout } from './patientlayout';

describe('Patientlayout', () => {
  let component: Patientlayout;
  let fixture: ComponentFixture<Patientlayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Patientlayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Patientlayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
