import { ListeGenresComponent } from './liste-genres/liste-genres.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { AddGameComponent } from './add-game/add-game.component';
import { UpdateGameComponent } from './update-game/update-game.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { GameGuard } from './game.guard';
import { RechercheParGenreComponent } from './recherche-par-genre/recherche-par-genre.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
const routes: Routes = [
{path: "games", component : GamesComponent},
{path : "add-game", component : AddGameComponent, canActivate:[GameGuard]},
{path: "updateGame/:id", component: UpdateGameComponent, canActivate:[GameGuard]},
{path: 'login', component: LoginComponent},
{path: 'forbidden', component: ForbiddenComponent},
{path: "", redirectTo: "games", pathMatch: "full"},
{path: "rechercheParGenre", component : RechercheParGenreComponent},
{path: "rechercheParNom", component : RechercheParNomComponent},
{path: "listeGenres", component : ListeGenresComponent},



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
