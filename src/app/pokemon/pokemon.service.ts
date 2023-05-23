import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './pokemon';

// TODO: à déplacer dans un folder à part pour les services /services + providedIn: 'root' à éviter si tu laisses le services à côté du module, il vaut mieux le déclarer en providers dans le NgModule
@Injectable({
    providedIn: 'root'
})
export class PokemonService {

    url : string = 'https://api.pokemontcg.io/v1/cards' //TODO : ; + indentation

    constructor(private http: HttpClient) { }

    getAll():Observable<Pokemon[]> {

        return this.http.get<any>(this.url)
            .pipe(
                // TODO : spécifier le map dans le pipe
                map((response: { cards: Pokemon[]; }) => {
                    let cards : Pokemon[] = [];
                    cards = response.cards;
                    // TODO : .sort agit sur l'objet mutable cards directement
                    cards.sort((a, b) => a.name.localeCompare(b.name));
                    return cards;

                })
            )

    }



}
