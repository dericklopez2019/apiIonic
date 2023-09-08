import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoClientePage } from './nuevo-cliente.page';

describe('NuevoClientePage', () => {
  let component: NuevoClientePage;
  let fixture: ComponentFixture<NuevoClientePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevoClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
