import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {Routes, RouterModule} from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import {HttpClientModule} from '@angular/common/http';
import {EmailService} from './_services/email.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {FlashService} from './_services/flash.service';
import { TermsComponent } from './about/terms/terms.component';
import { GiftsComponent } from './products/gifts/gifts.component';
import { HappyhComponent } from './products/happyh/happyh.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  // {path: 'home', component: HomeComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'about', component: AboutComponent},
  {path: 'product', component: ProductsComponent},
  {path: 'terms', component: TermsComponent},
  {path: 'gifts', component: GiftsComponent},
  {path: 'happyh', component: HappyhComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GalleryComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    TermsComponent,
    GiftsComponent,
    HappyhComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
    RouterModule.forRoot(routes, { useHash: true }),
    NgbModule.forRoot(),
  ],
  providers: [
    EmailService,
    FlashService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
