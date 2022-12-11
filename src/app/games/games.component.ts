import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../model/game.model';
import { AuthService } from '../services/auth.service';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games! : Game[]; //un tableau de chînes de caractères

  constructor(private gameService: GameService ,
              private router :Router,
              public authService: AuthService) {
   // this.games = gameService.listeGames();
    }

    ngOnInit(): void {
      this.chargerGames();

      this.gameService.listeGames().subscribe(prods => {
      console.log(prods);
      this.games = prods;
      });
      }
      chargerGames(){
        this.gameService.listeGames().subscribe(prods => {
        console.log(prods);
        this.games = prods;
        });
        }
        
  supprimerGame(p: Game)
  {
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
  this.gameService.supprimerGame(p.idGame).subscribe(() => {
  console.log("jeu supprimé");
  this.chargerGames();
  });
  } 
}
