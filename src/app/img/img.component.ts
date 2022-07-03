import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {

  img: any = '';

  @Input('img')
  set changeImg(newImg: any) {
    this.img = newImg;
    }

  constructor() { }

  ngOnInit(): void {
  }

}
