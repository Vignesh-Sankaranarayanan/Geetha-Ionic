import { NavController, NavParams } from 'ionic-angular';
import {Events} from "../../data/events.interface";
import { Component, NgZone } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';
import { SocialSharing } from '@ionic-native/social-sharing';
import {
  Input, ElementRef, AfterViewInit, ViewChild
} from '@angular/core';
import {Platform} from 'ionic-angular';
import {  OnInit } from '@angular/core';
import { Observable ,Observer} from 'rxjs';
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
export class EventDetailsPage implements OnInit {
  base64Image: any;
eventsGroup: string;
firestore = firebase.storage();
  imgsource: any;
  uid : string;
  event_desc : string;
  event_header : string;
tabBarElement: any;
img:any;
ngOnInit() {
  let imageUrl = this.eventsGroup;

  this.getBase64ImageFromURL(imageUrl).subscribe(base64data => {
    console.log("base64data" +base64data);
    this.base64Image = 'data:image/jpg;base64,' + base64data;
  });
}

  constructor(
    private navParams: NavParams,public zone: NgZone,private socialSharing: SocialSharing,platform: Platform) {
       this.eventsGroup =  this.navParams.get("firstParamName");
       this.event_desc= this.navParams.get("secondParamName");
      this.event_header= this.navParams.get("thirdParamName");
      this.tabBarElement=document.querySelector('.tabbar.show-tabbar');
      
      
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
      
    }
    
    regularShare(index){
      var msg ;
      msg=this.base64Image;
      this.socialSharing.share(null, null, msg, null);
    }
    



ionViewWillEnter(){
this.tabBarElement.style.display='none';
}

ionViewWillLeave(){
this.tabBarElement.style.display='flex';
}

}