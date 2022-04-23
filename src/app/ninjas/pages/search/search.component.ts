import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Ninja } from '../../interfaces/ninjas.interface';
import { NinjasService } from '../../services/ninjas.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  term: string = ''
  ninjas: Ninja[] = []

  ninjaSelected: Ninja|undefined

  constructor(private ninjasService: NinjasService) { }

  ngOnInit(): void {
  }

  search(){
    this.ninjasService.getSuggests( this.term.trim() )
    .subscribe( ninjas => {
      this.ninjas = ninjas
    });
  }

  optSelected(event: MatAutocompleteSelectedEvent){

    if (!event.option.value) {
      this.ninjaSelected = undefined;
      // console.log("No hay valor")
      return;
    }

    const ninja: Ninja = event.option.value;
    this.term = ninja.name;

    this.ninjasService.getNinjaById( ninja.id! )
      .subscribe( ninja => this.ninjaSelected = ninja );
  }

}