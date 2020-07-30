import { Injectable } from '@angular/core';
import { Pokemon } from '../models/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemons: Pokemon[] = [
    {
      id: 1,
      name: 'Bulbasaur',
      damage: 23,
      catched: false,
      img: '../../../../assets/img/1.png',
      date: '15-04-2017'
    },
    {
      id: 2,
      name: 'Charmander',
      damage: 50,
      catched: true,
      img: '../../../../assets/img/4.png',
      date: '12-04-2017'
    },
    {
      id: 3,
      name: 'Squirtle',
      damage: 64,
      catched: false,
      img: '../../../../assets/img/7.png',
      date: '08-06-2019'
    },
    {
      id: 4,
      name: 'Beedrill',
      damage: 40,
      catched: false,
      img: '../../../../assets/img/15.png',
      date: '09-04-2018'
    },
    {
      id: 5,
      name: 'Pidgey',
      damage: 35,
      catched: false,
      img: '../../../../assets/img/16.png',
      date: '19-12-2017'
    },
    {
      id: 6,
      name: 'Raticate',
      damage: 21,
      catched: false,
      img: '../../../../assets/img/19.png',
      date: '19-02-2019'
    },
    {
      id: 7,
      name: 'Ekans',
      damage: 49,
      catched: false,
      img: '../../../../assets/img/23.png',
      date: '05-03-2020'
    },
    {
      id: 8,
      name: 'Pikachu',
      damage: 89,
      catched: false,
      img: '../../../../assets/img/25.png',
      date: '27-11-2019'
    },
    {
      id: 9,
      name: 'Sandshrew',
      damage: 46,
      catched: false,
      img: '../../../../assets/img/27.png',
      date: '01-03-2018'
    },
    {
      id: 10,
      name: 'Clefairy',
      damage: 56,
      catched: false,
      img: '../../../../assets/img/35.png',
      date: '11-06-2020'
    },
    {
      id: 11,
      name: 'Vulpix',
      damage: 36,
      catched: false,
      img: '../../../../assets/img/37.png',
      date: '16-12-2018'
    },
    {
      id: 12,
      name: 'Jigglypuff',
      damage: 9,
      catched: false,
      img: '../../../../assets/img/39.png',
      date: '06-06-2017'
    }
  ];
  private pokemon: Pokemon;
  str: string;
  public success: boolean = false;

  constructor() { }

  getPokemones(): Pokemon[] {
    return this.pokemons
  }

  getPokemonById(id: number): Pokemon {
    this.pokemons.map((pokemon: Pokemon) => {
      if(pokemon.id == id){
        this.pokemon = pokemon
      }
      return null;
    });
    return this.pokemon
  };

  filterPokemons(value: string) {
    return this.pokemons.filter((pokemon: Pokemon) => pokemon.name.toLowerCase().indexOf(value) != -1)
  }

  catchPokemon(pokemon: Pokemon){
    pokemon.catched ? pokemon.catched = false : pokemon.catched = true;
    pokemon.catched ? this.str = "catched" : this.str = "released";
    console.log(pokemon.name + ' was ' + this.str);
  }

  editPokemon(id, item): Pokemon {
    this.pokemons.map((pokemon: Pokemon) => {
      if(pokemon.id == id){
        pokemon.name = item.name,
        pokemon.damage = item.damage,
        pokemon.date = item.date
      }
      return null;
    });
    return this.pokemon
  };

  changeSuccess() {
    this.success = true;
  }

  cancelSuccess() {
    this.success = false;
  }
}
