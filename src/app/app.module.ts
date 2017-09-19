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
import { Push, PushObject, PushOptions } from '@ionic-native/push';


import { HomePage } from "../pages/home/home";
import { QuotesPage } from "../pages/quotes/quotes";
import { IonicPageModule } from 'ionic-angular';
import { ArticlesPage } from "../pages/articles/articles";
import { EventsPage } from "../pages/events/events";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { SuperTabsModule } from 'ionic2-super-tabs';
import {QuoteDetailsPage} from '../pages/quote-details/quote-details';
import {EventDetailsPage} from '../pages/event-details/event-details';
import {ArticleTextPage} from '../pages/article-text/article-text';
import {ArticleDetailsPage} from '../pages/article-details/article-details';
import { QuotesService } from "../services/quotes";
import {EventsService} from "../services/events";
import { SettingsService } from "../services/settings";
import { HttpModule } from '@angular/http';

import { AngularFireOfflineModule } from 'angularfire2-offline';
import { 
  AfoListObservable, 
  AngularFireOfflineDatabase } from 'angularfire2-offline/database';

import { AngularFireModule } from 'angularfire2';

import { AngularFireDatabaseModule } from 'angularfire2/database';
export const firebaseConfig={
apiKey: "AIzaSyCk0d69i6RsYaxYLnjrmCOvmItS1XlEj-0",
    authDomain: "geethamandalam-ionic2.firebaseapp.com",
    databaseURL: "https://geethamandalam-ionic2.firebaseio.com",
    projectId: "geethamandalam-ionic2",
    storageBucket: "geethamandalam-ionic2.appspot.com",
    messagingSenderId: "731588461435"
};

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    HomePage,
    TabsPage,
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
    QuotesPage,
    QuoteDetailsPage,
    ArticlesPage,
    EventsPage,
    EventDetailsPage,
    ArticleTextPage,
    ArticleDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuotesService,
    SettingsService,
    AngularFireOfflineDatabase,
    AngularFireOfflineModule,
    AngularFireDatabase,
    EventsService,
    AngularFireModule,
    Push,
  ]
})
export class AppModule {}
