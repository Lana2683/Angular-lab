import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../../models/Pokemon';
import { PokemonService } from '../../services/pokemon.service'


@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.css']
})
export class PokemonsListComponent implements OnInit {
  pokemons: Pokemon[];
  @Input() pokemon: Pokemon;
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

  filterPokemon(name: string) {
    this.pokemons = this.pokemonService.filterPokemons(name)
  }
}
