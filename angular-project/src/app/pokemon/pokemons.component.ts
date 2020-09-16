import { Component, OnInit } from '@angular/core';
import { Pokemon } from './models/Pokemon';
import { PokemonService } from './services/pokemon.service'

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  pokemons: Pokemon[];
  switched: boolean = false;
  theCheckbox: boolean = false;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemons = this.pokemonService.getPokemones();
  }

  toggleVisibility(e){
    this.switched= e.target.checked;
  }

  setClasses() {
    let classes = {
      'd-flex flex-wrap justify-content-around bg-primary': !this.switched
    }
    return classes;
  }
}
