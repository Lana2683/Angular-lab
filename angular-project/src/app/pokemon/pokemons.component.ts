import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from './models/Pokemon';
import { PokemonService } from './services/pokemon.service'

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  pokemons: Pokemon[];
  @Input() pokemon: Pokemon;
  switched: boolean = false;
  theCheckbox: boolean = false;
  str: string;

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

  onChanged(pokemon: Pokemon){
    pokemon.catched ? pokemon.catched = false : pokemon.catched = true;
    pokemon.catched ? this.str = "catched" : this.str = "released";
    console.log(pokemon.name + ' was ' + this.str);
  }
}
