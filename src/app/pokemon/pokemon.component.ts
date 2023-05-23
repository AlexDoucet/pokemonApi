import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  cards : Pokemon[] = []
  constructor(private pokemonService : PokemonService) { }

  ngOnInit() {

    this.pokemonService.getAll().subscribe(data => this.cards = data);

  }

}
