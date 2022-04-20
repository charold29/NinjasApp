import { Component, OnInit } from '@angular/core';
import { Anime, Ninja } from '../../interfaces/ninjas.interface';
import { NinjasService } from '../../services/ninjas.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  animeName !:Anime;
  ninjas !: Ninja[];

  constructor( private ninjasService: NinjasService ) { }

  ngOnInit(): void {

    this.ninjasService.getNinjas()
      .subscribe( ninjas => {
        this.animeName = ninjas[0].anime
        this.ninjas = ninjas
      });

  }

}
