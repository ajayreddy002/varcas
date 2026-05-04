import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTrainigComponent } from './angular-trainig.component';

describe('AngularTrainigComponent', () => {
  let component: AngularTrainigComponent;
  let fixture: ComponentFixture<AngularTrainigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularTrainigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularTrainigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
