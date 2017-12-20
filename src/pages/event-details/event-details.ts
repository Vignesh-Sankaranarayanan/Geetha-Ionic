import { NavController, NavParams,IonicPage } from 'ionic-angular';
import {Events} from "../../data/events.interface";
import { Component, NgZone } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';

import {
  Input, ElementRef, AfterViewInit, ViewChild
} from '@angular/core';
import {Platform} from 'ionic-angular';
import {  OnInit } from '@angular/core';
import { Observable ,Observer} from 'rxjs';
import {FirebaseListFactoryOpts} from "angularfire2/interfaces";
import { 
  AfoListObservable, 
  AngularFireOfflineDatabase } from 'angularfire2-offline/database';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AngularFireDatabase ,FirebaseListObservable} from 'angularfire2/database';
/**
 * Generated class for the EventDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-event-details',
  templateUrl: 'event-details.html',
})
export class EventDetailsPage implements OnInit  {
 myPerson: any;
  base64Image: string;
  base64ImageVal : string;
eventsGroup: string;
eventsGroupValue: string;
index: string;
firestore = firebase.storage();
  imgsource: any;
  uid : string;
  event_desc : string;
  event_header : string;
  eventId : string;
  eventIdNum: number;
  i:any;
tabBarElement: any;
angFireData: AngularFireOfflineDatabase
events: AfoListObservable<any[]>;
img:any;
prop : any;
platform: Platform;
eventsval:FirebaseListObservable<any[]>;
ngOnInit() {
  let imageUrl = this.eventsGroup;
  console.log("this.eventsGroupimageUrl=" +this.eventsGroup);
  this.getBase64ImageFromURL(imageUrl).subscribe(base64data => {
    console.log("base64datangOnInit" +base64data);
    this.base64Image = 'data:image/jpg;base64,' + base64data;
  });

}
  constructor(public af: AngularFireDatabase,
    private navParams: NavParams, angFire: AngularFireOfflineDatabase,public zone: NgZone,private socialSharing: SocialSharing,platform: Platform ,private eltRef:ElementRef) {
      this.eventsGroupValue=this.navParams.get("fourthParamName");
      this.event_desc= this.navParams.get("secondParamName");
      this.event_header= this.navParams.get("thirdParamName");
      
      this.tabBarElement=document.querySelector('.tabbar.show-tabbar');
      this.eventId = this.navParams.get("eventId");
      this.eventIdNum=+this.eventId;
      console.log("this.eventIdNum=" +this.eventIdNum);  
      if(this.eventIdNum >0){
      this.events = angFire.list('data/events', {
        query: {
        orderByChild: "id",
        equalTo: this.eventIdNum,
        }
        });
      this.events.subscribe(items => {
          // items is an array
          items.forEach(item => {
            this.eventsGroup=item.event_image_url;          
              console.log("this.eventsGroupeventIdNum" +this.eventsGroup);
              this.ngOnInit();
          });
      });
       
      console.log("this.events"+ this.events);
      }
      else{ this.events = angFire.list('data/events', {
        query: {
        orderByChild: "event_image_url",
        equalTo: this.eventsGroupValue,
        }
        });
        this.events.subscribe(items => {
          // items is an array
          items.forEach(item => {
            this.eventsGroup=item.event_image_url;         
              console.log("this.eventsGroupevent_image_url" +this.eventsGroup);
              this.ngOnInit();
          });
      });
       
      console.log("this.events"+ this.events);
      }
      
     
     
     
    }



    shareInfo(index: string)
    {
      
      var msg ;
      msg=this.base64Image;
    this.socialSharing.share(null, null, msg, null).
    then(() => {
    
    // Success!
    }).catch(() => {
    
    });
    }
    getBase64ImageFromURL(url: string) {
      return Observable.create((observer: Observer<string>) => {
        let img = new Image();
        img.crossOrigin = 'Anonymous';
        img.src = url;
        if (!img.complete) {
          img.onload = () => {
            observer.next(this.getBase64Image(img));
            observer.complete();
          };
          img.onerror = (err) => {
            observer.error(err);
          };
        } else {
          observer.next(this.getBase64Image(img));
          observer.complete();
        }
      });
    }

    getBase64Image(img: HTMLImageElement) {
      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      var dataURL = canvas.toDataURL("image/png");
      return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    }
  
   
    ionViewDidLoad() {
      
      console.log("Events details");
      console.log("this.eventsGroupionViewDidLoad=" +this.eventsGroup);
    }
  
   



ionViewWillEnter(){
this.tabBarElement.style.display='none';
console.log("this.eventsGroupionViewWillEnter=" +this.eventsGroup);
}

ionViewWillLeave(){
this.tabBarElement.style.display='flex';
}

}