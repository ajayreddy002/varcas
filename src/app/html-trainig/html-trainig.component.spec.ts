import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlTrainigComponent } from './html-trainig.component';

describe('HtmlTrainigComponent', () => {
  let component: HtmlTrainigComponent;
  let fixture: ComponentFixture<HtmlTrainigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlTrainigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlTrainigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
