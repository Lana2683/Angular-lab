import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../../models/Pokemon';

@Component({
  selector: 'app-pokemon-row',
  templateUrl: './pokemon-row.component.html',
  styleUrls: ['./pokemon-row.component.css']
})
export class PokemonRowComponent implements OnInit {
  @Input() pokemon: Pokemon;

  constructor() { }

  ngOnInit(): void {
  }

  setClasses() {
    let classes = {
      pokemon: true,
      'list-group-item-danger': this.pokemon.damage > 50
    }
    return classes;
  }
}
