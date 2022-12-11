import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../model/game.model';
import { GameService } from '../services/game.service';
import { Genre } from './../model/genre.model';
@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {
  newGame = new Game();
  genres! : Genre[];
newIdGenre! : number;
newGenre! : Genre;
  constructor(private gameService: GameService,private router :Router,) { }

  ngOnInit(): void {
    this.gameService.listeGenres().
    subscribe(cats => {this.genres = cats;
    console.log(cats);
    });
  }
  addGame(){
    this.newGame.genre = this.genres.find(cat => cat.idGenre == this.newIdGenre)!;
    this.gameService.ajouterGame(this.newGame).subscribe(prod => {
    console.log(prod);
    this.router.navigate(['games']);
    });
    }
}
