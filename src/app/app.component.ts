import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController,AlertController , Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';

import { HomePage } from "../pages/home/home";
import { QuotesPage } from "../pages/quotes/quotes";
import { ArticlesPage } from "../pages/articles/articles";
import { EventsPage } from "../pages/events/events";
import { TabsPage } from '../pages/tabs/tabs';
import firebase from 'firebase';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireOfflineModule } from 'angularfire2-offline';
import {AngularFireDatabase } from 'angularfire2/database';
import {PushObject, PushOptions } from '@ionic-native/push';
import { Push} from 'ionic-native';
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
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'My First List', component: ListPage },
      {title : 'Home Page',component: HomePage},
        {title : 'Quotes Page',component: QuotesPage},
          {title : 'Events Page',component: EventsPage},
            {title : 'Articles Page',component: ArticlesPage}
    ];
    this.initPushNotification();
  }



initPushNotification(){
    if (!this.platform.is('cordova')) {
      console.warn("Push notifications not initialized. Cordova is not available - Run in physical device");
      return;
    }
    let push = Push.init({
      android: {
        senderID: "210517257729"
      },
      ios: {
        alert: "true",
        badge: false,
        sound: "true"
      },
      windows: {}
    });

    push.on('registration', (data) => {
      console.log("device token ->", data.registrationId);
      //TODO - send device token to server
    });
    push.on('notification', (data) => {
      console.log('message', data.message);
      let self = this;
      //if user using app and push notification comes
      if (data.additionalData.foreground) {
        // if application open, show popup
        let confirmAlert = this.alertCtrl.create({
          title: 'New Notification',
          message: data.message,
          buttons: [{
            text: 'Ignore',
            role: 'cancel'
          }, {
            text: 'View',
            handler: () => {
              //TODO: Your logic here
              self.nav.push(ArticlesPage, {message: data.message});
            }
          }]
        });
        confirmAlert.present();
      } else {
        //if user NOT using app and push notification comes
        //TODO: Your logic on click of push notification directly
        self.nav.push(ArticlesPage, {message: data.message});
        console.log("Push notification clicked");
      }
    });
    push.on('error', (e) => {
      console.log(e.message);
    });
}


 
  

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
