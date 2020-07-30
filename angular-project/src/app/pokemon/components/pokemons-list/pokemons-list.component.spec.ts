import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsListComponent } from './pokemons-list.component';

describe('PokemonsListComponent', () => {
  let component: PokemonsListComponent;
  let fixture: ComponentFixture<PokemonsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have 12 pokemons', async(() => {
    expect(component.pokemons.length).toEqual(12);
  }));
});
