import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController,AlertController , Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';

import { HomePage } from "../pages/home/home";
import {EventDetailsPage} from "../pages/event-details/event-details";
import { QuotesPage } from "../pages/quotes/quotes";
import { ArticlesPage } from "../pages/articles/articles";
import { EventsPage } from "../pages/events/events";
import {QuoteDetailsPage} from "../pages/quote-details/quote-details"
import { TabsPage } from '../pages/tabs/tabs';
import firebase from 'firebase';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireOfflineModule } from 'angularfire2-offline';
import {AngularFireDatabase } from 'angularfire2/database';
import {PushObject, PushOptions } from '@ionic-native/push';
import { Push} from 'ionic-native';
import { Deeplinks} from 'ionic-native';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = TabsPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
     public push: Push, public alertCtrl: AlertController
  ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
  
      // OneSignal Code start:
      // Enable to debug issues:
       window["plugins"].OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
  
      var notificationOpenedCallback = function(jsonData) {
        console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
       
       

        
      };

      
  
      window["plugins"].OneSignal
        .startInit("0d68aa70-1bd4-4aef-b2d3-fbec5b6ed9eb", "731588461435")
        .handleNotificationOpened(notificationOpenedCallback)
        .endInit();
    });
    
    firebase.initializeApp({
      apiKey: "AIzaSyCk0d69i6RsYaxYLnjrmCOvmItS1XlEj-0",
    authDomain: "geethamandalam-ionic2.firebaseapp.com",
    databaseURL: "https://geethamandalam-ionic2.firebaseio.com",
    projectId: "geethamandalam-ionic2",
    storageBucket: "geethamandalam-ionic2.appspot.com",
    messagingSenderId: "731588461435"
    }
    );

    
    // set our app's pages
    this.pages = [
      { title: 'About Us', component: HelloIonicPage }
    ];
  }
    ngAfterViewInit() {
      this.platform.ready().then(() => {
        /*
        IonicDeeplink.route({
          '/about-us': AboutPage,
          '/universal-links-test': AboutPage,
          '/products/:productId': ProductPage
        }, function(match) {
          // Handle the route manually
        }, function(nomatch) {
          // No match
        })
        */
  
        // Convenience to route with a given nav
        Deeplinks.routeWithNavController(this.nav, {
          '/quotes': QuotesPage,
          '/articlespage': ArticlesPage,
          '/eventdetails': EventDetailsPage
        }).subscribe((match) => {
          console.log('Successfully routed', match);
        }, (nomatch) => {
          console.warn('Unmatched Route', nomatch);
        });
      })
    }
  }






 
  

