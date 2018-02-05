import { Component, OnInit } from '@angular/core';
import { NavParams ,IonicPage} from "ionic-angular";

import {QuoteviewPage} from '../quoteview/quoteview';
import {Quote} from "../../data/quote.interface";

import { SocialSharing } from '@ionic-native/social-sharing';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { 
  AfoListObservable, 
  AngularFireOfflineDatabase } from 'angularfire2-offline/database';
@Component({
  selector: 'page-quote-details',
  templateUrl: 'quote-details.html',
})
export class QuoteDetailsPage  {
  tabBarElement: any;
  quote: AfoListObservable<any[]>;
  quoteGroup: {category: string, quotes: Quote[], icon: string}[];
  catid: any;
  constructor(public navCtrl: NavController,
    private navParams: NavParams,private socialSharing: SocialSharing) {
       this.quoteGroup = this.navParams.get("firstParamName");
       this.catid=this.navParams.get("secondParamName")
       this.tabBarElement=document.querySelector('.tabbar.show-tabbar');
    }

ionViewWillEnter(){
this.tabBarElement.style.display='none';

}
navigate(quote,idVal,catidval) {
  this.navCtrl.push(QuoteviewPage, {
    firstPassed: quote,
    id: idVal,
    catid: catidval
  })
}
ionViewWillLeave(){
this.tabBarElement.style.display='flex';
}

regularShare(index){
  var msg = index.text;
  msg=msg + "  -" + index.person;
  msg= msg.concat(" \n Sent from Geetha Mandalam App !");
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
