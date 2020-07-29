import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/Pokemon';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css']
})
export class PokemonPageComponent implements OnInit {
  @Input() pokemon: Pokemon;
  id: number;
  @Output() onChanged = new EventEmitter<void>();

  private subscription: Subscription;
  constructor(private activateRoute: ActivatedRoute, private pokemonService: PokemonService){
    this.id = activateRoute.snapshot.params['id'];
    this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
    this.pokemon = this.pokemonService.getPokemonById(activateRoute.snapshot.params['id']);
  }

  ngOnInit(): void {
    
  }

  catchPokemon(pokemon) {
    this.pokemonService.catchPokemon(pokemon);
  }

  randomDate(start, end) {
    let date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date;
}

}
