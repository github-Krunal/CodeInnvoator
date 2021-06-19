import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsActivityComponent } from './ps-activity.component';

describe('PsActivityComponent', () => {
  let component: PsActivityComponent;
  let fixture: ComponentFixture<PsActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
