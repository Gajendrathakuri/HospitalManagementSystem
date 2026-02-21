import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllpatient } from './list-allpatient';

describe('ListAllpatient', () => {
  let component: ListAllpatient;
  let fixture: ComponentFixture<ListAllpatient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAllpatient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAllpatient);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
