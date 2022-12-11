import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Genre } from '../model/genre.model';

@Component({
  selector: 'app-update-genre',
  templateUrl: './update-genre.component.html',
  styles: [
  ]
})
export class UpdateGenreComponent implements OnInit {
  @Input()
  genre! : Genre;

  @Input()
  ajout!:boolean;

  @Output() 
  genreUpdated = new EventEmitter<Genre>();


  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateGenre ",this.genre);
    }
    

  saveGenre(){
    this.genreUpdated.emit(this.genre);
  }


  modeAjout()
  {
    this.ajout=true;
    this.genre.idGenre = 0;
    this.genre.nomGenre="";
  }
}