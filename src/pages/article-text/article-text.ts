
import { NavController, NavParams,LoadingController  } from 'ionic-angular';
import {ArticleDetails} from "../../data/articles.interface";
import { Component, NgZone } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';
import {HttpProvider} from '../../providers/http-provider';

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
 article: string;
 article_name: string;
 textsource: string;
 newsData: any;
  loading: any;
  imgsource: string;
  substring: string;
  
constructor(
    private navParams: NavParams,public zone: NgZone, private httpProvider:HttpProvider,public loadingCtrl: LoadingController,public http: Http) {

       this.article =  this.navParams.get("firstParamName");
       this.article_name= this.navParams.get("secondParamName");
     // this.event_header= this.navParams.get("thirdParamName");
     
     this.loading = this.loadingCtrl.create({
      content: `
      <ion-spinner ></ion-spinner>`
    });
this.display();
    
    }

    ionViewDidLoad() {
      console.log("Article Text details");
   
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
