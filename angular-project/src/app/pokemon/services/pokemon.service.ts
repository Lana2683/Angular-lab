import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  getPokemones() {
    return [
      {
        id: 1,
        name: 'Bulbasaur',
        damage: 23,
        catched: false,
        img: '../../../../assets/img/1.png'
      },
      {
        id: 2,
        name: 'Charmander',
        damage: 50,
        catched: true,
        img: '../../../../assets/img/4.png'
      },
      {
        id: 3,
        name: 'Squirtle',
        damage: 64,
        catched: false,
        img: '../../../../assets/img/7.png'
      },
      {
        id: 4,
        name: 'Beedrill',
        damage: 40,
        catched: false,
        img: '../../../../assets/img/15.png'
      },
      {
        id: 5,
        name: 'Pidgey',
        damage: 35,
        catched: false,
        img: '../../../../assets/img/16.png'
      },
      {
        id: 6,
        name: 'Raticate',
        damage: 21,
        catched: false,
        img: '../../../../assets/img/19.png'
      },
      {
        id: 7,
        name: 'Ekans',
        damage: 49,
        catched: false,
        img: '../../../../assets/img/23.png'
      },
      {
        id: 8,
        name: 'Pikachu',
        damage: 89,
        catched: false,
        img: '../../../../assets/img/25.png'
      },
      {
        id: 9,
        name: 'Sandshrew',
        damage: 46,
        catched: false,
        img: '../../../../assets/img/27.png'
      },
      {
        id: 10,
        name: 'Clefairy',
        damage: 56,
        catched: false,
        img: '../../../../assets/img/35.png'
      },
      {
        id: 11,
        name: 'Vulpix',
        damage: 36,
        catched: false,
        img: '../../../../assets/img/37.png'
      },
      {
        id: 12,
        name: 'Jigglypuff',
        damage: 9,
        catched: false,
        img: '../../../../assets/img/39.png'
      }
    ]
  }
}
