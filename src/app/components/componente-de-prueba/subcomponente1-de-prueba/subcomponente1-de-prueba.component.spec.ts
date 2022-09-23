import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcomponente1DePruebaComponent } from './subcomponente1-de-prueba.component';

describe('Subcomponente1DePruebaComponent', () => {
  let component: Subcomponente1DePruebaComponent;
  let fixture: ComponentFixture<Subcomponente1DePruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subcomponente1DePruebaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subcomponente1DePruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
