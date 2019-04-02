import { Component } from '@angular/core';
import { HttpService } from "../services/http.service";
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public list:any[]=[];
  public url:string=this.http.local_server;
  constructor(public http:HttpService){

  }
  ngOnInit(): void {
    this.http.get("article/list").then((res:any)=>{
      this.list=res;
    }).catch((err)=>{
      console.log(err);
    })
  }
}
