import { Genre } from './../model/genre.model';
import { Injectable } from '@angular/core';
import { Game } from '../model/game.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GameService {
  apiURL: string = 'http://localhost:8080/games/api';
  apiURLGenre: string = 'http://localhost:8080/games/api/genre';
  games!: Game[];
  game!: Game;
  genres!: Genre[];

  constructor(private http: HttpClient) {
  }
  listeGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.apiURL + "/genre");
  }

  consulterGenre(id: number): Genre {
    return this.genres.find(cat => cat.idGenre == id)!;
  }

  listeGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.apiURL);
  }

  ajouterGame(prod: Game): Observable<Game> {
    return this.http.post<Game>(this.apiURL, prod, httpOptions);
  }
  supprimerGame(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterGame(id: number): Observable<Game> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Game>(url);
  }
  updateGame(prod: Game): Observable<Game> {
    return this.http.put<Game>(this.apiURL, prod, httpOptions);
  }
  rechercherParGenre(idGenre: number): Observable<Game[]> {
    const url = `${this.apiURL}/gamegenre/${idGenre}`;
    return this.http.get<Game[]>(url);
  }
  rechercherParNom(nom: string):Observable< Game[]> {
    const url = `${this.apiURL}/prodsByName/${nom}`;
    return this.http.get<Game[]>(url);
    }
    ajouterGenre( cat: Genre):Observable<Genre>{
      return this.http.post<Genre>(this.apiURLGenre, cat, httpOptions);
      }
      
      supprimerGenre(id : number) {
        const url = `${this.apiURLGenre}/${id}`;
        return this.http.delete(url, httpOptions);
        } 


}