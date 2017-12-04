import { Component, ViewChild } from '@angular/core';

import { Platform,MenuController,AlertController , Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';

import { HomePage } from "../pages/home/home";
import {EventDetailsPage} from "../pages/event-details/event-details";
import { QuotesPage } from "../pages/quotes/quotes";
import { AboutPage } from "../pages/about/about";
import { ContactUsPage } from "../pages/contactus/contactus";
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
import { SafariViewController } from '@ionic-native/safari-view-controller';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = TabsPage;
  pages: Array<{title: string, component: any}>;
  page: any;
  
  constructor(
    
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public _SplashScreen: SplashScreen,
    public menuCtrl: MenuController,
     public push: Push, public alertCtrl: AlertController
  ) {
    
    platform.ready().then(() => {
      statusBar.styleDefault();
      setTimeout(()=> {
        this._SplashScreen.hide();
      },100);
      
  
      // OneSignal Code start:
      // Enable to debug issues:
       //window["plugins"].OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
  
      var notificationOpenedCallback = function(jsonData) {
        console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
       
       

        
      };

      
  
      window["plugins"].OneSignal
        .startInit("400b87a2-01ac-4e95-910c-3169a8ee4c65", "321809133893")
        .handleNotificationOpened(notificationOpenedCallback)
        .endInit();
    });
    
    firebase.initializeApp({
      apiKey: "AIzaSyAlQ05uPHksMr7v5poqBUeKuzXl5CD-Tew",
    authDomain: "geethamandalam-ionic2-68284.firebaseapp.com",
    databaseURL: "https://geethamandalam-ionic2-68284.firebaseio.com",
    projectId: "geethamandalam-ionic2-68284",
    storageBucket: "geethamandalam-ionic2-68284.appspot.com",
    messagingSenderId: "321809133893"
    }
    );

    
    // set our app's pages
    this.pages = [
      { title: 'Home', component: this.rootPage},
      { title: 'About Us', component: AboutPage },
      { title: 'Contact Us', component: ContactUsPage }
      
    ];
  }

  openPage(p){
    
   
      this.nav.setRoot(p.component);
      this.menuCtrl.close();
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
          '/eventdetails': EventsPage
        }).subscribe((match) => {
          console.log('Successfully routed', match);
        }, (nomatch) => {
          console.warn('Unmatched Route', nomatch);
        });
      })
    }
  }






 
  

