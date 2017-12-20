import { Component } from '@angular/core';
import { NavController, NavParams,IonicPage } from 'ionic-angular';
import {ArticleDetails} from "../../data/articles.interface";
import {ArticleTextPage} from '../article-text/article-text';
import { 
  AfoListObservable, 
  AngularFireOfflineDatabase } from 'angularfire2-offline/database';
/**
 * Generated class for the ArticleDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-article-details',
  templateUrl: 'article-details.html',
})
export class ArticleDetailsPage {
  article: AfoListObservable<any[]>;
tabBarElement : any;
catid: number;
  articleGroup: {article_category: string, articledetails: ArticleDetails[]}[];
articleTextPage=ArticleTextPage;
  constructor(public navCtrl: NavController,
    private navParams: NavParams) {
       this.articleGroup = this.navParams.get('firstParamName');
       this.catid=this.navParams.get('secondParamName');
  this.tabBarElement=document.querySelector('.tabbar.show-tabbar');
    }
    navigate(article,catid,id) {
      this.navCtrl.push(ArticleTextPage, {
        firstPassed: article,
        articletext:article.spiritual_text_url,
        articlename:article.article_name,
        catidval:catid,
        idval:id
      })
    }
    ionViewDidLoad() {
      console.log("Article details details");
      
    }




ionViewWillEnter(){
this.tabBarElement.style.display='none';
}

ionViewWillLeave(){
this.tabBarElement.style.display='flex';
}


}
