import { Component, OnInit } from '@angular/core';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  actToIn: number;
  inToAct: number;

  constructor(private counterService:CounterService){};
  
  ngOnInit() {
    this.actToIn = this.counterService.actToIn;
    this.inToAct = this.counterService.inToAct;
  }

  onStatusChanges() {
    this.actToIn = this.counterService.actToIn;
    this.inToAct = this.counterService.inToAct;
  }
}
