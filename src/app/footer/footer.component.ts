import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  instagram: string
  facebook: string
  constructor() {
    this.instagram = 'assets/images/instagram.png'
    this.facebook = 'assets/images/facebook.png'
  }

  ngOnInit() {
  }

}
