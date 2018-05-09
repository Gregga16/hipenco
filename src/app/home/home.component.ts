import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

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
  closeResult: string;
  image: string;

  constructor(private modalService: NgbModal) {
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

  open(content, img) {
    this.image = 'assets/images/' + img + '.jpg';
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
