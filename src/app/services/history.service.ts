import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  public history:any[]=[];
  constructor() { }

  add(value):void{
      this.history.push(value);
  }
  read():object[]{
    return this.history
  }
  delete(){
    this.history=[]
  }
}
