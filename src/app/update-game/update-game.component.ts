import { Genre } from './../model/genre.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { GameService } from '../services/game.service';
import { Game } from '../model/game.model';


@Component({
  selector: 'app-update-game',
  templateUrl: './update-game.component.html',
  styles: [
  ]
})
export class UpdateGameComponent implements OnInit {
  currentGame = new Game();
  genres! : Genre[];
updatedGenreId! : number;
  constructor(
  private activatedRoute: ActivatedRoute,
  private router :Router,
  private gameService: GameService) 
  { }
  
  ngOnInit() {
    this.gameService.listeGenres().subscribe(cats => {this.genres = cats;
    console.log(cats);
    });
    this.gameService.consulterGame(this.activatedRoute.snapshot.params['id']).
     subscribe( prod =>{ this.currentGame = prod;
      this.updatedGenreId =
      this.currentGame.genre.idGenre;
       } ) ;   
    }
    
  updategame()
  {
    this.currentGame.genre = this.genres. find(cat => cat.idGenre == this.updatedGenreId)!;
    this.gameService.updateGame(this.currentGame).subscribe(prod => {
    this.router.navigate(['games']); }
    );
    }
    
}
