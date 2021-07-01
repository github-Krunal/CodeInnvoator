import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsOverallStatusComponent } from './ps-overall-status.component';

describe('PsOverallStatusComponent', () => {
  let component: PsOverallStatusComponent;
  let fixture: ComponentFixture<PsOverallStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsOverallStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsOverallStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
