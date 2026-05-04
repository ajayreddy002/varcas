import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactTrainigComponent } from './react-trainig.component';

describe('ReactTrainigComponent', () => {
  let component: ReactTrainigComponent;
  let fixture: ComponentFixture<ReactTrainigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactTrainigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactTrainigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
