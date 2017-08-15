import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ArticleDetails} from "../../data/articles.interface";
import {ArticleTextPage} from '../article-text/article-text';
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
tabBarElement : any;
  articleGroup: {article_category: string, articledetails: ArticleDetails[]}[];
articleTextPage=ArticleTextPage;
  constructor(
    private navParams: NavParams) {
       this.articleGroup = this.navParams.data;
  this.tabBarElement=document.querySelector('.tabbar.show-tabbar');
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
