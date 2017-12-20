
import { Component,OnInit,NgZone } from '@angular/core';
//import { IonicPage } from 'ionic-angular';

import {QuotesService} from '../../services/quotes';
import {EventsService} from '../../services/events';
import {EventsModel} from '../../models/eventsModel';
import {ArticlesPage} from '../articles/articles';
import {EventDetailsPage} from '../event-details/event-details';
import {QuotesPage} from '../quotes/quotes';

import {AboutPage} from '../about/about'
import { 
  AfoListObservable, 
  AngularFireOfflineDatabase } from 'angularfire2-offline/database';
import firebase from 'firebase';
 import {  ViewChild } from '@angular/core';
 import {Slides,Platform} from 'ionic-angular';
//import {FirebaseListObservable,AngularFireDatabase } from 'angularfire2/database';
// for Observables
//import {FirebaseListObservable,AngularFireDatabase } from 'angularfire2/database';
import { InAppBrowser , InAppBrowserOptions } from '@ionic-native/in-app-browser';
import {
  IonicPage,
  NavController,
  NavParams,
  PopoverController,
  LoadingController,
  AlertController
} from "ionic-angular";
/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-contactus',
  templateUrl: 'contactus.html',
})
export class ContactUsPage {

  options : InAppBrowserOptions = {
    location : 'yes',//Or 'no' 
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls 
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only 
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only 
    toolbar : 'yes', //iOS only 
    enableViewportScale : 'no', //iOS only 
    allowInlineMediaPlayback : 'no',//iOS only 
    presentationstyle : 'pagesheet',//iOS only 
    fullscreen : 'yes',//Windows only    
};
constructor(private theInAppBrowser: InAppBrowser) {

}
public openWithInAppBrowserGmail(url : string){
  url="https://mail.google.com/mail/?view=cm&fs=1&to=geethamandalam1978@gmail.com&su=Geethamandalam App:- Feedback/Want to know more about the organisation&body=BODY";
  let target = "_blank";
    this.theInAppBrowser.create(url,target,this.options);
}
public openWithInAppBrowserFB(url : string){
  url="http://facebook.com/people/Geetha-Mandalam/100008054685779";
    let target = "_blank";
    this.theInAppBrowser.create(url,target,this.options);
}
public openWithCordovaBrowser(url : string){
    let target = "_self";
    this.theInAppBrowser.create(url,target,this.options);
}  
}


