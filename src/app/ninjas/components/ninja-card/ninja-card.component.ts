import { Component, Input } from '@angular/core';
import { Ninja } from '../../interfaces/ninjas.interface';

@Component({
  selector: 'app-ninja-card',
  templateUrl: './ninja-card.component.html',
  styleUrls: ['./ninja-card.component.css']
})
export class NinjaCardComponent {

  @Input() ninja!: Ninja;

}
