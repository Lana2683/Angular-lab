import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent implements OnInit {
  name: string;
  @Output() filterPokemon = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  findPokemon(name) {
    this.filterPokemon.emit(name);
  }

}
