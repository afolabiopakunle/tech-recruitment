import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroComponent } from './hero/hero.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { HowItCardComponent } from './how-it-card/how-it-card.component';
import { WhyChooseSellerHubComponent } from './why-choose-seller-hub/why-choose-seller-hub.component';
import { SuccessfulStoriesComponent } from './successful-stories/successful-stories.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    HowItWorksComponent,
    HowItCardComponent,
    WhyChooseSellerHubComponent,
    SuccessfulStoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
