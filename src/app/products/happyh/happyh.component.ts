import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-happyh',
  templateUrl: './happyh.component.html',
  styleUrls: ['./happyh.component.css']
})
export class HappyhComponent implements OnInit {
  closeResult: string;
  image: string;

  constructor(private modalService: NgbModal) { }

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
