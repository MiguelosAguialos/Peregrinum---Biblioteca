import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControleusuariosPage } from './controleusuarios.page';

describe('ControleusuariosPage', () => {
  let component: ControleusuariosPage;
  let fixture: ComponentFixture<ControleusuariosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ControleusuariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
