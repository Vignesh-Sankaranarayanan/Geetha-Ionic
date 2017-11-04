import { Component, OnInit } from '@angular/core';
import { NavParams } from "ionic-angular";


import {Quote} from "../../data/quote.interface";

import { SocialSharing } from '@ionic-native/social-sharing';
@Component({
  selector: 'page-quote-details',
  templateUrl: 'quote-details.html',
})
export class QuoteDetailsPage  {
  tabBarElement: any;
  quoteGroup: {category: string, quotes: Quote[], icon: string}[];

  constructor(
    private navParams: NavParams,private socialSharing: SocialSharing) {
       this.quoteGroup = this.navParams.data;
       this.tabBarElement=document.querySelector('.tabbar.show-tabbar');
    }

ionViewWillEnter(){
this.tabBarElement.style.display='none';

}

ionViewWillLeave(){
this.tabBarElement.style.display='flex';
}

regularShare(index){
  var msg = index.text;
  msg=msg + "  -" + index.person;
  this.socialSharing.share(msg, null, null, null);
}
whatsappShare(index){
  var msg  = index.text;
  msg=msg + "  -" + index.person;
   this.socialSharing.shareViaWhatsApp(msg, null, null);
 }

 twitterShare(index){
  var msg  = index.text;
  msg=msg + "  -" + index.person;
  this.socialSharing.shareViaTwitter(msg, null, null);
}

facebookShare(index){
  var msg  = index.text;
  msg=msg + "  -" + index.person;
   this.socialSharing.shareViaFacebook(msg, null, null);
 }

}
