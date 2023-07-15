import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastrousuariosPage } from './cadastrousuarios.page';

describe('CadastrousuariosPage', () => {
  let component: CadastrousuariosPage;
  let fixture: ComponentFixture<CadastrousuariosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastrousuariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
