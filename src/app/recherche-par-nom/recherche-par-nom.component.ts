import { GameService } from './../services/game.service';
import { Game } from './../model/game.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: [
  ]
})
export class RechercheParNomComponent implements OnInit {
  allGames! : Game[];
  games! :Game[];
  searchTerm!: string;
  nomGame! : string;
  constructor(private gameService: GameService,
    private router: Router,
    public authService: AuthService) {
    
  }

 
ngOnInit(): void {
this.gameService.listeGames().subscribe(prods => {
console.log(prods);
this.allGames = prods;
});
}
rechercherProds(){
  this.gameService.rechercherParNom(this.nomGame).
  subscribe(prods => {
  this.games = prods;
  console.log(prods)});
  }
  
 onKeyUp(filterText : string){
this.games = this.allGames.filter(item =>item.nomGame.toLowerCase().includes(filterText));
}  
}
