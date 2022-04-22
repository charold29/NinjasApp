import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-chips',
  templateUrl: './array-chips.component.html',
  styleUrls: ['./array-chips.component.css']
})

export class ArrayChipsComponent implements OnInit {

  @Input() array!: string[];
  @Input() text!: string;
  @Input() firstElementColor: string = 'none';

  firstElement: string = ''

  ngOnInit(): void {
    this.firstElement = this.array[0]
    this.array.shift()
  }
}
