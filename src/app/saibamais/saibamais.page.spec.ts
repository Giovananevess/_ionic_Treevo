import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaibamaisPage } from './saibamais.page';

describe('SaibamaisPage', () => {
  let component: SaibamaisPage;
  let fixture: ComponentFixture<SaibamaisPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SaibamaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
