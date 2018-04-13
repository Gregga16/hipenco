import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logoImg: string;
  toggleMenu = false;   // store state

  constructor(private router: Router) {
    this.logoImg = 'assets/images/hipenco.png'
  }

  ngOnInit() {
  }

  onToggleMenu() { // click handler
    if (this.toggleMenu === true) {
      this.toggleMenu = false;
    } else {
      this.toggleMenu = true;
    }
  }

}
