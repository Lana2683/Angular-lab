import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Pokemon } from '../../models/Pokemon';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Subject } from 'rxjs';
import { PokemonService } from '../../services/pokemon.service';
import { ComponentCanDeactivate } from '../../exit.guard';
import { Observable } from "rxjs";


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements ComponentCanDeactivate {
  pokemonForm: FormGroup;
  pokemonInfo = {
    name: '',
    date: '',
    damage: ''
  }
  submitted = false;
  @Input() pokemon: Pokemon;
  id: number;
  saved: boolean = false;

  private success = new Subject<string>();

  private subscription: Subscription;
  constructor(private activateRoute: ActivatedRoute, private pokemonService: PokemonService, private router: Router ){
    this.id = activateRoute.snapshot.params['id'];
    this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
    this.pokemon = this.pokemonService.getPokemonById(activateRoute.snapshot.params['id']);
    this.createForm();
  }

  ngOnInit(): void {}

  createForm(): void {
    this.pokemonForm = new FormGroup({
      'name': new FormControl(this.pokemonInfo.name, [
        Validators.required
      ]),
      'date': new FormControl(this.pokemonInfo.date, [
        Validators.required,
        Validators.pattern("(([0-2][0-9])|([1-9])|(3[0-1]))-(([0-2][0-9]))-[0-9]{4}")
      ]),
      'damage': new FormControl(this.pokemonInfo.damage, [
        Validators.required
      ])
    })
  }
     
  onSubmit(): void {
    this.submitted = true;
    this.pokemonService.editPokemon(this.id, this.pokemonForm.value);
    this.router.navigate(['pokemon/:id']);
    this.pokemonService.changeSuccess();
    this.saved = true;
  }

  canDeactivate() : boolean | Observable<boolean>{   
    if(!this.saved){
      return confirm("Are you sure?");
    }
    else{
      return true;
    }
 }
}
