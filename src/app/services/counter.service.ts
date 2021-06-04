import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  inToAct = 0;
  actToIn = 0;
  
  constructor() { }

  countInactiveToActive (){
    this.inToAct++;
  }

  countActiveToInactive (){
    this.actToIn++;
  }
}
