import { Component } from '@angular/core';

import { HomePage } from "../home/home";
import { QuotesPage } from "../quotes/quotes";
import { ArticlesPage } from "../articles/articles";
import { EventsPage } from "../events/events";
import { IonicPage } from 'ionic-angular';

@Component({
  selector: 'page-tabs',
  template: `
    <ion-tabs>
      <ion-tab [root]="homePage" tabTitle="Home" tabIcon="home"></ion-tab>
      <ion-tab [root]="quotesPage" tabTitle="quotes" tabIcon="quote"></ion-tab>
       <ion-tab [root]="articlesPage" tabTitle="articles" tabIcon="book"></ion-tab>
      <ion-tab [root]="eventsPage" tabTitle="events" tabIcon="calendar"></ion-tab>
    </ion-tabs>
  `
})
export class TabsPage {
  eventsPage = EventsPage;
  articlesPage = ArticlesPage;
  homePage=HomePage;
  quotesPage=QuotesPage;
} 
