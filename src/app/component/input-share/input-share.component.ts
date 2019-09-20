import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'input-share',
  templateUrl: './input-share.component.html',
  styleUrls: ['./input-share.component.css']
})
export class InputShareComponent implements OnInit {

  @Input () value : string;
  constructor() { }

  ngOnInit() {
  }

}