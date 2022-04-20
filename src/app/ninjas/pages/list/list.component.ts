import { Component, OnInit } from '@angular/core';
import { NinjasService } from '../../services/ninjas.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor( private ninjasService: NinjasService ) { }

  ngOnInit(): void {

    this.ninjasService.getNinjas()
      .subscribe(resp => console.log(resp ))

  }

}
