import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodejsTrainigComponent } from './nodejs-trainig.component';

describe('NodejsTrainigComponent', () => {
  let component: NodejsTrainigComponent;
  let fixture: ComponentFixture<NodejsTrainigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodejsTrainigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodejsTrainigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
