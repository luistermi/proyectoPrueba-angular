import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcomponente2DePruebaComponent } from './subcomponente2-de-prueba.component';

describe('Subcomponente2DePruebaComponent', () => {
  let component: Subcomponente2DePruebaComponent;
  let fixture: ComponentFixture<Subcomponente2DePruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subcomponente2DePruebaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subcomponente2DePruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
