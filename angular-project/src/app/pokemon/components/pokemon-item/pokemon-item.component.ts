import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../../models/Pokemon';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css']
})
export class PokemonItemComponent implements OnInit {
  @Input() pokemon: Pokemon;
  @Input() switched: boolean;
  str: string;

  constructor() { }

  ngOnInit(): void {
  }

  setClasses() {
    let classes = {
      pokemon: true,
      'border border-danger list-group-item-danger': this.pokemon.damage > 50
    }
    return classes;
  }

  catchPokemon(pokemon) {
    pokemon.catched ? pokemon.catched = false : pokemon.catched = true;
    pokemon.catched ? this.str = "catched" : this.str = "released";
    console.log(pokemon.name + ' was ' + this.str);
  }

}

