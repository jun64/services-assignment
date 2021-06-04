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
    console.log('Inactive to Active : ' + this.inToAct);
  }

  countActiveToInactive (){
    this.actToIn++;
    console.log('Active to Inactive : ' + this.actToIn);
  }
}
