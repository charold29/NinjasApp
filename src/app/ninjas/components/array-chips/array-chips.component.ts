import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-array-chips',
  templateUrl: './array-chips.component.html',
  styleUrls: ['./array-chips.component.css']
})
export class ArrayChipsComponent {

  @Input() array!: string[];
  @Input() text!: string;

}
