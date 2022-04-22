import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-chips',
  templateUrl: './array-chips.component.html',
  styleUrls: ['./array-chips.component.css']
})

export class ArrayChipsComponent implements OnInit {

  @Input() array!: string[];
  @Input() text!: string;

  isSelected: boolean = true

  ngOnInit(): void {

    console.log(this.array[0])

    if (this.text != "Main Technique")
      this.isSelected = false

  }



}
