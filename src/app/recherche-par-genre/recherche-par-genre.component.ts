import { Game } from './../model/game.model';
import { Genre } from './../model/genre.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-recherche-par-genre',
  templateUrl: './recherche-par-genre.component.html',
  styleUrls: ['./recherche-par-genre.component.css']
})
export class RechercheParGenreComponent implements OnInit {

  games! : Game[];
  IdGenre! : number;
  genres! : Genre[];
  


  constructor(private gameService: GameService,
    private router: Router,
    public authService: AuthService) {
    // this.games = gameService.listeGames();
  }

  ngOnInit(): void {
    this.gameService.listeGenres().subscribe((data) => {
      this.genres = data;
    });
    

    this.chargerGames();
    this.gameService.listeGames().subscribe(prods => {
      console.log(prods);
      this.games = prods;
    });
  }
  chargerGames() {
    this.gameService.listeGames().subscribe(prods => {
      console.log(prods);
      this.games = prods;
    });
  }

  supprimerGame(p: Game) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.gameService.supprimerGame(p.idGame).subscribe(() => {
        console.log("jeu supprimé");
        this.chargerGames();
      });
  }
  onChange() {
    this.gameService.rechercherParGenre(this.IdGenre).
    subscribe((games) => {
      console.log(games);
      this.games = games;
    });
}
}
