import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../../models/Pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: Pokemon;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
  }

  setClasses() {
    let classes = {
      pokemon: true,
      'border border-danger': this.pokemon.damage > 50
    }
    return classes;
  }

  catchPokemon(pokemon) {
    this.pokemonService.catchPokemon(pokemon);
  }

}
