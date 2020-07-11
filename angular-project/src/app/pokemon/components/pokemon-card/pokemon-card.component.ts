import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Pokemon } from '../../models/Pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: Pokemon;
  @Output() onChanged = new EventEmitter<void>();

  constructor() { }

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
    this.onChanged.emit(pokemon);
  }

}
