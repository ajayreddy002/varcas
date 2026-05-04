import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './home/banner/banner.component';
import { HomeAboutComponent } from './home/home-about/home-about.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { ContactComponent } from './contact/contact.component';
import { StaffingComponent } from './staffing/staffing.component';
import { SoftwareDevComponent } from './software-dev/software-dev.component';
import { AngularTrainigComponent } from './angular-trainig/angular-trainig.component';
import { HtmlTrainigComponent } from './html-trainig/html-trainig.component';
import { CssTrainigComponent } from './css-trainig/css-trainig.component';
import { ReactTrainigComponent } from './react-trainig/react-trainig.component';
import { NodejsTrainigComponent } from './nodejs-trainig/nodejs-trainig.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    BannerComponent,
    HomeAboutComponent,
    WebDevelopmentComponent,
    ContactComponent,
    StaffingComponent,
    SoftwareDevComponent,
    AngularTrainigComponent,
    HtmlTrainigComponent,
    CssTrainigComponent,
    ReactTrainigComponent,
    NodejsTrainigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
