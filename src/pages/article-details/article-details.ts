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

  articleGroup: {article_category: string, articledetails: ArticleDetails[]}[];
articleTextPage=ArticleTextPage;
  constructor(
    private navParams: NavParams) {
       this.articleGroup = this.navParams.data;
    }



}
