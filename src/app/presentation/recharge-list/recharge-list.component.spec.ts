import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargeListComponent } from './recharge-list.component';

describe('RechargeListComponent', () => {
  let component: RechargeListComponent;
  let fixture: ComponentFixture<RechargeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RechargeListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechargeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
