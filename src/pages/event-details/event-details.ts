import { NavController, NavParams } from 'ionic-angular';
import {Events} from "../../data/events.interface";
import { Component, NgZone } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';
import { SocialSharing } from '@ionic-native/social-sharing';
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
export class EventDetailsPage {

eventsGroup: string;
firestore = firebase.storage();
  imgsource: any;
  uid : string;
  event_desc : string;
  event_header : string;
tabBarElement: any;
  constructor(
    private navParams: NavParams,public zone: NgZone,private socialSharing: SocialSharing) {
       this.eventsGroup =  this.navParams.get("firstParamName");
       this.event_desc= this.navParams.get("secondParamName");
      this.event_header= this.navParams.get("thirdParamName");
      this.tabBarElement=document.querySelector('.tabbar.show-tabbar');
      
    }
    
    ionViewDidLoad() {
      console.log("Events details");
      
    }

    regularShare(index){
      var msg = index;
      this.socialSharing.share(null, null, msg, null);
    }
    whatsappShare(index){
      var msg  = index;
       this.socialSharing.shareViaWhatsApp(null, msg, null);
     }
    
     twitterShare(index){
      var msg  = index;
      this.socialSharing.shareViaTwitter(null, msg, null);
    }
    
    facebookShare(index){
      var msg  = index;
       this.socialSharing.shareViaFacebook(null, msg, null);
     }



ionViewWillEnter(){
this.tabBarElement.style.display='none';
}

ionViewWillLeave(){
this.tabBarElement.style.display='flex';
}

}