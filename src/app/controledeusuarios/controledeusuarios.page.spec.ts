import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControledeusuariosPage } from './controledeusuarios.page';

describe('ControledeusuariosPage', () => {
  let component: ControledeusuariosPage;
  let fixture: ComponentFixture<ControledeusuariosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ControledeusuariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
