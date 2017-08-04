import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';

import { EventsModel } from "../models/eventsModel";

@Injectable()
export class EventsService {
  private events: EventsModel[] = [];

  constructor(private http: Http) {}

  addEvent(event_date: string,
            event_desc: string,
            event_header: string,
            event_image_url: string) {
    this.events.push(new EventsModel(event_date, event_desc, event_header, event_image_url));
    console.log(this.events);
  }

  getEvents() {
    return this.events.slice();
  }

  
  

  fetchList() {
    return this.http.get('https://geethamandalam-ionic2.firebaseio.com/data/events')
      .map((response: Response) => {
        const events: EventsModel[] = response.json() ? response.json() : [];
        for (let item of events) {
          if (!item.hasOwnProperty('event_image_url')) {
            item.event_image_url = "";
          }
        }
        return events;
      })
      .do((events: EventsModel[]) => {
        if (events) {
          this.events = events;
        } else {
          this.events = [];
        }
      });
  }
}
