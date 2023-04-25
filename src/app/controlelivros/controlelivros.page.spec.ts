import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControlelivrosPage } from './controlelivros.page';

describe('ControlelivrosPage', () => {
  let component: ControlelivrosPage;
  let fixture: ComponentFixture<ControlelivrosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ControlelivrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
