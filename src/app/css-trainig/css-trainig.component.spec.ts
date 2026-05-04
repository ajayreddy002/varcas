import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssTrainigComponent } from './css-trainig.component';

describe('CssTrainigComponent', () => {
  let component: CssTrainigComponent;
  let fixture: ComponentFixture<CssTrainigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssTrainigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssTrainigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
