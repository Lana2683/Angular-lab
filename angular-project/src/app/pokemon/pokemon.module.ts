import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonsComponent } from '../pokemon/pokemons.component';
import { PokemonItemComponent } from './components/pokemon-item/pokemon-item.component';

@NgModule({
  declarations: [ PokemonsComponent, PokemonItemComponent ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [PokemonsComponent, PokemonItemComponent]
})
export class PokemonModule { }
