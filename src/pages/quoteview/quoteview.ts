import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import {Quote} from "../../data/quote.interface";
import { 
  AfoListObservable, 
  AngularFireOfflineDatabase } from 'angularfire2-offline/database';
/**
 * Generated class for the QuoteviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-quoteview',
  templateUrl: 'quoteview.html',
})
export class QuoteviewPage {
  
  quote: AfoListObservable<any[]>;
  path: any;
  quotecatidVal :number;
  quoteidVal :number;
  quoteId : string;
  quoteMainId: string;
  quoteIdNum : number;
  quoteMainIdNum: number;
  private ref: any;
  constructor( angFire: AngularFireOfflineDatabase,private navParams: NavParams,private socialSharing: SocialSharing) {
   // this.quote = this.navParams.get("firstPassed");
    this.quoteId = this.navParams.get("quoteId");
    this.quoteMainId = this.navParams.get("quoteMainId");
    this.quoteidVal = this.navParams.get("id");
    this.quotecatidVal = this.navParams.get("catid");
    if(this.quoteId != null){
      this.quoteIdNum=+this.quoteId;
      this.quoteMainIdNum=+this.quoteMainId;
    this.quoteMainIdNum= this.quoteMainIdNum-1;
    //this.quoteId=this.quoteId-1;
    console.log('this.quoteMainId'+this.quoteMainIdNum);
    console.log('this.quoteId'+this.quoteIdNum);
    this.path = '/data/Quotes/'+this.quoteMainIdNum+'/quotesDetails/';
    console.log('this.path='+this.path);
    
    this.quote = angFire.list(this.path, {
      query: {
      orderByChild: "id",
      equalTo: this.quoteIdNum,
      limitToFirst: 1
      }
      });
    }
    else if (this.quoteidVal != null){
      this.quotecatidVal= this.quotecatidVal-1;
      //this.quoteId=this.quoteId-1;
      console.log('this.quotecatidVal'+this.quotecatidVal);
      console.log('this.quoteidVal'+this.quoteidVal);
      this.path = '/data/Quotes/'+ this.quotecatidVal+'/quotesDetails/';
      console.log('this.path='+this.path);
      
      this.quote = angFire.list(this.path, {
        query: {
        orderByChild: "id",
        equalTo: this.quoteidVal,
        limitToFirst: 1
        }
        });
    }
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuoteviewPage');
  }

}
