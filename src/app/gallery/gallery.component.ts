import {AfterViewInit, Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, AfterViewInit{
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $.getScript('assets/js/custom.js');
  }

}
