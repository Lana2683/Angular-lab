import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonsComponent } from '../pokemon/pokemons.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonRowComponent } from './components/pokemon-row/pokemon-row.component';
import { PokemonSearchComponent } from './components/pokemon-search/pokemon-search.component';

@NgModule({
  declarations: [ PokemonsComponent, PokemonCardComponent, PokemonRowComponent, PokemonSearchComponent ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [PokemonsComponent]
})
export class PokemonModule { }
