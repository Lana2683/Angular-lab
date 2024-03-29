import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonRowComponent } from './pokemon-row.component';

describe('PokemonRowComponent', () => {
  let component: PokemonRowComponent;
  let fixture: ComponentFixture<PokemonRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
