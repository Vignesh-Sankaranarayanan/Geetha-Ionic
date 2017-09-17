import { Quotes } from "../models/quotes";
import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';

@Injectable()
export class QuotesService {
  
  private quotes: Quotes[] = [];
 

  constructor(private http: Http) {
  }

  getQuotes() {
    if(this.getQuotesVal() ==null)
   this.getQuotesList();
    return this.quotes.slice();
  }

setQuotes(quotesNew: Quotes[]){
  this.quotes=quotesNew;
}

getQuotesVal(){
  return this.quotes;
}
 getQuotesList(){
   
    
     this.http.get('https://geethamandalam-ionic2.firebaseio.com/data/Quotes/')
      .map((response: Response) => {
        return response.json();
      })
      .do((quotes: Quotes[]) => {
        if (quotes) {
          this.setQuotes(quotes);
          return this.quotes = quotes
        } else {
          return this.quotes;
        }
      });
  
}


}
