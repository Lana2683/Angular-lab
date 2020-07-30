import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { PokemonsComponent } from '../pokemon/pokemons.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonRowComponent } from './components/pokemon-row/pokemon-row.component';
import { PokemonSearchComponent } from './components/pokemon-search/pokemon-search.component';
import { PokemonPageComponent } from './components/pokemon-page/pokemon-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PokemonsListComponent } from './components/pokemons-list/pokemons-list.component';
import { EditComponent } from './components/edit/edit.component';
import { ExitGuard } from './exit.guard';

const appRoutes: Routes = [
  { path: '', component: PokemonsListComponent},
  { path: 'pokemon/:id', component: PokemonPageComponent },
  { 
    path: 'pokemon/edit/:id', component: EditComponent,
    canDeactivate: [ExitGuard]
  },
  { path: '**', component: NotFoundComponent }
];
@NgModule({
  declarations: [
    PokemonsComponent,
    PokemonCardComponent,
    PokemonRowComponent,
    PokemonSearchComponent,
    PokemonPageComponent,
    NotFoundComponent,
    PokemonsListComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule 
  ],
  providers: [ExitGuard],
  exports: [PokemonsComponent]
})
export class PokemonModule { }
