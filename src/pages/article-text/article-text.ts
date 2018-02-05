
import { NavController, IonicPage,NavParams,LoadingController  } from 'ionic-angular';
import {ArticleDetails} from "../../data/articles.interface";
import { Component, NgZone } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';
import {HttpProvider} from '../../providers/http-provider';
import { SocialSharing } from '@ionic-native/social-sharing';

import { 
  AfoListObservable, 
  AngularFireOfflineDatabase } from 'angularfire2-offline/database';
/**
 * Generated class for the ArticleTextPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-article-text',
  templateUrl: 'article-text.html',
  providers:[HttpProvider]
})
export class ArticleTextPage {
 public message: any;
 
 firestore = firebase.storage();
 article: any;
 article_name: string;
 textsource: string;
 newsData: any;
  loading: any;
  imgsource: string;
  substring: string;
  tabBarElement: any;
  articleId: string;
  articleMainId : string;
  articleIdNum: number;
  articleMainIdNum : number;
  path : any;
  data: any;
  articletext : any;
  articlename: any;
  check : any;
  catid: number
  idval: number;
  articledata: AfoListObservable<any[]>;
  angFireDb:AngularFireOfflineDatabase;
constructor(angFire: AngularFireOfflineDatabase,
    private navParams: NavParams,private socialSharing: SocialSharing,public zone: NgZone, private httpProvider:HttpProvider,public loadingCtrl: LoadingController,public http: Http) {
     this.angFireDb=angFire;
    
      this.catid=this.navParams.get("catidval");
      this.idval=this.navParams.get("idval");
      
      this.articledata = this.navParams.get("firstPassed");
      this.articlename=this.navParams.get("articlename");
      this.tabBarElement=document.querySelector('.tabbar.show-tabbar');
      
      this.articleId = this.navParams.get("articleId");
      
      if(this.articleId != null){
        this.articleIdNum=+this.articleId;
        this.articleMainId = this.navParams.get("articleMainId");
        this.articleMainIdNum=+this.articleMainId;
        this.articleMainIdNum= this.articleMainIdNum-1;
        
       
     // this.path = 'data/spiritualarticles/'+ this.articleMainId+'/articledetails/';
      this.path='data/spiritualarticles/'+ this.articleMainIdNum+'/articledetails/';
        this.articledata = angFire.list(this.path, {
        query: {
        orderByChild: "id",
        equalTo: this.articleIdNum,
        limitToFirst: 1
        }
        });
        this.articledata.subscribe(articledata => {
          // items is an array
          articledata.forEach(item => {
            this.article =item.spiritual_text_url.join('<br><br>');
            this.articlename=item.article_name;
          });
      });
      }
      else if (this.idval != null){

        
        this.catid= this.catid-1;
        
        
     // this.path = 'data/spiritualarticles/'+ this.articleMainId+'/articledetails/';
      this.path='data/spiritualarticles/'+ this.catid+'/articledetails/';
        this.articledata = angFire.list(this.path, {
        query: {
        orderByChild: "id",
        equalTo: this.idval,
        limitToFirst: 1
        }
        });
        this.articledata.subscribe(articledata => {
          // items is an array
          articledata.forEach(item => {
              this.article =item.spiritual_text_url.join('<br><br>');
              this.articlename=item.article_name;
          });
      });
      }
    }

    ionViewDidLoad() {
      console.log("Article Text details");
      
    }


    regularShare(index){
      index= index.concat(" \n Sent from Geetha Mandalam App !");
      var msg = index;
      msg = msg.replace(/<br><br>/g," \n ");
      this.socialSharing.share(msg, null, null, null);
    }
    whatsappShare(index){
      var msg  = index;
       this.socialSharing.shareViaWhatsApp(msg, null, null);
     }
    
     twitterShare(index){
      var msg  = index;
      this.socialSharing.shareViaTwitter(msg, null, null);
    }
    
    facebookShare(index){
      var msg  = index;
       this.socialSharing.shareViaFacebook(msg, null, null);
     }

ionViewWillEnter(){
this.tabBarElement.style.display='none';
}

ionViewWillLeave(){
this.tabBarElement.style.display='flex';
}


display() {
 
    this.firestore.ref().child(this.article).getDownloadURL().then((url) => {
      this.zone.run(() => {
        this.imgsource = url;
      // this.imgsource=this.imgsource+"./json";
        console.log( this.imgsource);
       })
    });
  

   
  }
   
    getdata() {
   //   this.display();
     //  this.loading.present();
    this.http.get("https://firebasestorage.googleapis.com/v0/b/geethamandalam-ionic2.appspot.com/o/articles%2Ffirebase.txt?alt=media&token=0e5de361-695f-4244-9d02-db7328309200").map(res => res.json()).subscribe(
      result => {
        this.newsData=result;
        console.log("Success : "+this.newsData);
      },
      err =>{
        console.error("Error : "+err);
      } ,
      () => {
       // this.loading.dismiss();
        console.log('getData completed');
      }
    );
  }
 



} 
