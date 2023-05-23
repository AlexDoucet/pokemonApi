import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

url : string = 'https://api.pokemontcg.io/v1/cards'

constructor(private http: HttpClient) { }

getAll():Observable<Pokemon[]> {

// const header = new HttpHeaders({'X-api-key': '37133a90-8a15-4cfc-80a6-6b3676d8b00b'});
return this.http.get<any>(this.url)
.pipe(
  map((response) => {
    let cards : Pokemon[] = [];
    cards = response.cards;
    const sorted = cards.sort((a, b) => a.name.localeCompare(b.name));
    return sorted;
  })
)

}



}
