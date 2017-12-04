import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import {FirebaseListObservable,AngularFireDatabase } from 'angularfire2/database';
import { Component, ViewChild, enableProdMode } from '@angular/core';
import { Http } from '@angular/http';
import {  PushObject, PushOptions } from '@ionic-native/push';
import { Push} from 'ionic-native';

import { HomePage } from "../pages/home/home";
import { QuotesPage } from "../pages/quotes/quotes";
import { IonicPageModule } from 'ionic-angular';
import { ArticlesPage } from "../pages/articles/articles";
import { EventsPage } from "../pages/events/events";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { SuperTabsModule } from 'ionic2-super-tabs';
import {AboutPage} from '../pages/about/about';
import {ContactUsPage} from '../pages/contactus/contactus';
import {QuoteDetailsPage} from '../pages/quote-details/quote-details';
import {EventDetailsPage} from '../pages/event-details/event-details';
import {ArticleTextPage} from '../pages/article-text/article-text';
import {ArticleDetailsPage} from '../pages/article-details/article-details';
import { QuotesService } from "../services/quotes";
import {EventsService} from "../services/events";
import { SettingsService } from "../services/settings";
import { HttpModule } from '@angular/http';
import { NavController} from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AngularFireOfflineModule } from 'angularfire2-offline';
import { 
  AfoListObservable, 
  AngularFireOfflineDatabase } from 'angularfire2-offline/database';
  import { SafariViewController } from '@ionic-native/safari-view-controller';
import { AngularFireModule } from 'angularfire2';
import { InAppBrowser , InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { AngularFireDatabaseModule } from 'angularfire2/database';
export const firebaseConfig={

  apiKey: "AIzaSyAlQ05uPHksMr7v5poqBUeKuzXl5CD-Tew",
  authDomain: "geethamandalam-ionic2-68284.firebaseapp.com",
  databaseURL: "https://geethamandalam-ionic2-68284.firebaseio.com",
  projectId: "geethamandalam-ionic2-68284",
  storageBucket: "geethamandalam-ionic2-68284.appspot.com",
  messagingSenderId: "321809133893"
};

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    HomePage,
    TabsPage,
    AboutPage,
    ContactUsPage,
    QuotesPage,
    ArticlesPage,
    EventsPage,
    QuoteDetailsPage,
    EventDetailsPage,
    ArticleTextPage,
    ArticleDetailsPage
  ],
  imports: [
       
    BrowserModule,
    SuperTabsModule.forRoot(),
    IonicPageModule.forChild(QuotesPage),
    IonicPageModule.forChild(EventDetailsPage),
    IonicPageModule.forChild(ArticlesPage),
    IonicModule.forRoot(MyApp,{tabsHideOnSubPages: true,tabsPlacement: 'top'}),
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireOfflineModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    HomePage,
    TabsPage,
    ContactUsPage,
    QuotesPage,
    QuoteDetailsPage,
    ArticlesPage,
    EventsPage,
    EventDetailsPage,
    ArticleTextPage,
    ArticleDetailsPage,
    AboutPage
  ],
  providers: [
   
    QuotesService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SettingsService,
    AngularFireOfflineDatabase,
    AngularFireOfflineModule,
    AngularFireDatabase,
    EventsService,
    AngularFireModule,
    Push,
    SocialSharing,
    InAppBrowser,
    SafariViewController,
  ]
})
export class AppModule {}
