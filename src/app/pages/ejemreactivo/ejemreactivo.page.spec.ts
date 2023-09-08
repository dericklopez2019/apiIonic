import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EjemreactivoPage } from './ejemreactivo.page';

describe('EjemreactivoPage', () => {
  let component: EjemreactivoPage;
  let fixture: ComponentFixture<EjemreactivoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EjemreactivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
