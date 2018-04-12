import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  logoImg: string;
  retour: string;
  geisha: string;
  bnosy: string;
  tygo: string;
  flo: string;
  lofff: string;
  lovestation: string;
  legends: string;

  constructor() {
    this.retour = 'assets/images/retour.png'
    this.geisha = 'assets/images/geisha.png'
    this.bnosy = 'assets/images/bnosy.png'
    this.tygo = 'assets/images/tygovito.png'
    this.flo = 'assets/images/flo.png'
    this.lofff = 'assets/images/lofff.png'
    this.lovestation = 'assets/images/lovestation.png'
    this.legends = 'assets/images/legends.png';
  }

  ngOnInit() {
  }

}
