import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloricRequirementCalculatorComponent } from './caloric-requirement-calculator.component';

describe('CaloricRequirementCalculatorComponent', () => {
  let component: CaloricRequirementCalculatorComponent;
  let fixture: ComponentFixture<CaloricRequirementCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaloricRequirementCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaloricRequirementCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
