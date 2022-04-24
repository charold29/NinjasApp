import { Component, OnInit } from '@angular/core';
import { Anime, Ninja } from '../../interfaces/ninjas.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  chakraTypes = [
    {
      id:  'fire',
      desc: 'Fire'
    },
    {
      id:  'wind',
      desc: 'Wind'
    },
    {
      id:  'lightning',
      desc: 'Lightning'
    },
    {
      id:  'earth',
      desc: 'Earth'
    },
    {
      id:  'water',
      desc: 'Water'
    }
  ]

  ninja: Ninja = {
    name : '',
    anime: Anime.NarutoShippuden,
    village: '',
    techniques: [],
    chakra_affinity: []
  }

  constructor() { }

  ngOnInit(): void {
  }

}
