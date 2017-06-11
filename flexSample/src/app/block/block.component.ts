import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit, AfterViewInit  {

  color:string;
  @ViewChild('block') block: ElementRef;

  constructor(private renderer: Renderer) { }

  ngOnInit() {

    // base on the width and height to draw the block
    this.generateBlockColor();
    console.log(`block ngOnInit ...`);
  }

  ngAfterViewInit(){
    console.log(`block ngAfterViewInit ...`);
    console.log(this.block);
    this.renderer.setElementStyle(this.block.nativeElement, "background-color", this.color);
  }


  generateBlockColor(){
    let red = parseInt((255 * Math.random()).toString()).toString(16);
    let green = parseInt((255 * Math.random()).toString()).toString(16);
    let blue = parseInt((255 * Math.random()).toString()).toString(16);

    this.color = `#${red}${green}${blue}`; 
    console.log(this.color);
  }

}
