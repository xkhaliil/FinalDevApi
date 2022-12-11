import { GameService } from './../services/game.service';
import { Genre } from './../model/genre.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-genres',
  templateUrl: './liste-genres.component.html',
  styles: [
  ]
})
export class ListeGenresComponent implements OnInit {
  genres!: Genre[];
  updatedGenre: Genre = { "idGenre": 0, "nomGenre": "" };

  ajout: boolean = true;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.listeGenres().subscribe(cats => {
      this.genres = cats;
    });
  }
  chargerGenres() {
    this.gameService.listeGenres().subscribe(cats => {
      this.genres = cats;
    });
  }

  updateGenre(cat: Genre) {
    this.updatedGenre = cat;
    this.ajout = false;
  }


  genreUpdated(cat: Genre) {
    console.log("genre updated event", cat);
    this.gameService.ajouterGenre(cat).subscribe(() => this.chargerGenres());
  }


  supprimerGenre(cat: Genre) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf) {
      this.gameService.supprimerGenre(cat.idGenre).subscribe(() => {
        console.log("Genre supprimée");
        this.chargerGenres();
      });
    }
  }
}
