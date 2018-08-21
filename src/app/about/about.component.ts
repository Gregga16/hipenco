import {Component, OnInit, ViewChild} from '@angular/core';
import {} from '@types/googlemaps';
import {latLng, marker, icon, tileLayer} from 'leaflet';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  logoImg: string;

  public latitude: any;
  longitude: any;

  streetmaps = tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 25, attribution: '...' });

  marker = marker([ 51.4594217, 5.6107367 ], {
    icon: icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'assets/images/marker-icon.png',
      shadowUrl: 'assets/images/marker-shadow.png'
    })
  });

  options = {
    layers: [
      this.streetmaps,
      this.marker
    ],
    zoom: 18,
    center: latLng(51.459404, 5.610919)
  };

  constructor() {
    this.logoImg = 'assets/images/hipenco.png';
  }

  ngOnInit() {
    // this.layers.push(this.marker);
    // const myLatlng = new google.maps.LatLng(51.459404, 5.610719);
    // const mapProp = {
    //   center: myLatlng,
    //   zoom: 15,
    //   mapTypeId: google.maps.MapTypeId.ROADMAP
    // };
    //  this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    //
    // const marker = new google.maps.Marker({
    //   position: myLatlng
    // });
    //
    // marker.setMap(this.map);

  }

  setMapType(mapTypeId: string) {
    this.map.setMapTypeId(mapTypeId);
  }

  setCenter() {
    // this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));
    //
    // const location = new google.maps.LatLng(this.latitude, this.longitude);
    //
    // const marker = new google.maps.Marker({
    //   position: location,
    //   map: this.map,
    //   title: 'Got you!'
    // });
    //
    // marker.addListener('click', this.simpleMarkerHandler);
    //
    // marker.addListener('click', () => {
    //   this.markerHandler(marker);
    // });
  }

  // simpleMarkerHandler() {
  //   alert('Simple Component\'s function...');
  // }
  //
  // markerHandler(marker: google.maps.Marker) {
  //   alert('Marker\'s Title: ' + marker.getTitle());
  // }

}
