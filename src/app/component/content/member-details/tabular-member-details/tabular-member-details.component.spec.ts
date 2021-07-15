import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabularMemberDetailsComponent } from './tabular-member-details.component';

describe('TabularMemberDetailsComponent', () => {
  let component: TabularMemberDetailsComponent;
  let fixture: ComponentFixture<TabularMemberDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabularMemberDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabularMemberDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
