import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from '../common/toastr.service';
import { EventService } from './shared/event.service';

declare let toastr: { success: (arg0: any) => void; }

@Component({
  selector: 'events-list',
  template: `
  <div>
    <h1>Upcoming Angular Events</h1>
    <hr />
    <div class="row">
      <div *ngFor="let event of events" class="col-md-5">
        <event-thumbnail (click)="handleThumbnanilClick(event.name)"  [event]="event" ></event-thumbnail>
      </div>
    </div>
  </div>
  `
})
export class EventListComponent implements OnInit {
  events:any

  constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute) {
    
  }
  
  ngOnInit(): void {
      this.events = this.route.snapshot.data['events']
  }

  handleThumbnanilClick(eventName: any) {
    this.toastr.success(eventName)
  }

}