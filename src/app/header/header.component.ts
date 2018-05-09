import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FlashService} from '../_services/flash.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logoImg: string;
  toggleMenu = false;   // store state
  term: string;
  merken = 'retour, geisha, flo, lofff, lovestation, legends, tygo, vito, bnosy';
  happyhorse = 'happy, horse';
  gift = 'gift, cadeaubon, cadeau, bon, kado';
  gallery = 'gallerij, instagram, insta';
  contact = 'contact, adres, hip, co';
  terms = 'ruilen, retourneren';

  constructor(private router: Router, private flash: FlashService) {
    this.logoImg = 'assets/images/hipenco.png';
  }

  ngOnInit() {
  }

  doSearch() {
    const merkenRegExp = new RegExp(this.term.toLowerCase());

    if (merkenRegExp.test(this.merken)) {
      this.router.navigate(['/product']);
    } else if (merkenRegExp.test(this.happyhorse)) {
      this.router.navigate(['/happyh']);
    } else if (merkenRegExp.test(this.gift)) {
      this.router.navigate(['/gifts']);
    } else if (merkenRegExp.test(this.gallery)) {
      this.router.navigate(['/gallery']);
    } else if (merkenRegExp.test(this.contact)) {
      this.router.navigate(['/about']);
    } else if (merkenRegExp.test(this.terms)) {
      this.router.navigate(['/terms']);
    } else {
      this.flash.warn('Niets gevonden met ' + this.term);
    }
  }

}
