import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastrolivrosPage } from './cadastrolivros.page';

describe('CadastrolivrosPage', () => {
  let component: CadastrolivrosPage;
  let fixture: ComponentFixture<CadastrolivrosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastrolivrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
