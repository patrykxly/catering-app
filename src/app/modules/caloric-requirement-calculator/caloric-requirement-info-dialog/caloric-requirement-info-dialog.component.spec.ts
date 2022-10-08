import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloricRequirementInfoDialogComponent } from './caloric-requirement-info-dialog.component';

describe('CaloricRequirementInfoDialogComponent', () => {
  let component: CaloricRequirementInfoDialogComponent;
  let fixture: ComponentFixture<CaloricRequirementInfoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaloricRequirementInfoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaloricRequirementInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
