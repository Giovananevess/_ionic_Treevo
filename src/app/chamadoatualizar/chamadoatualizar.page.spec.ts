import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChamadoatualizarPage } from './chamadoatualizar.page';

describe('ChamadoatualizarPage', () => {
  let component: ChamadoatualizarPage;
  let fixture: ComponentFixture<ChamadoatualizarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChamadoatualizarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
