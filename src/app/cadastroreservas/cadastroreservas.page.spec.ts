import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroreservasPage } from './cadastroreservas.page';

describe('CadastroreservasPage', () => {
  let component: CadastroreservasPage;
  let fixture: ComponentFixture<CadastroreservasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastroreservasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
