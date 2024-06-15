import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetotpPage } from './getotp.page';

describe('GetotpPage', () => {
  let component: GetotpPage;
  let fixture: ComponentFixture<GetotpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GetotpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
