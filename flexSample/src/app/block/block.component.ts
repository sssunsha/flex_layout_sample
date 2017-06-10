import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css'],
  styles:['background-color: #ff8080;']
})
export class BlockComponent implements OnInit {

  color:string;

  constructor() { }

  ngOnInit() {

    // base on the width and height to draw the block
    this.generateBlockColor();
  }


  generateBlockColor(){
    let red = parseInt((255 * Math.random()).toString()).toString(16);
    let green = parseInt((255 * Math.random()).toString()).toString(16);
    let blue = parseInt((255 * Math.random()).toString()).toString(16);

    this.color = `#${red}${green}${blue}`; 
    console.log(this.color);
  }

}
