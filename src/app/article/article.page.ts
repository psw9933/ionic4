import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { HistoryService } from '../services/history.service';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from "../services/http.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {
  public data:any="";

  constructor(public history:HistoryService,public http:HttpService,public activatedRoute:ActivatedRoute,public navController:NavController) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.activatedRoute.queryParams.subscribe((data:any)=>{
      var title=data.title;
      console.log(title);
       this.http.post("article/find",{
        title
       }).then((res:any)=>{
        if(res){
          this.data=res[0];
          console.log(this.data);
        }
      }).catch((err)=>{
        console.log(err);
      })     
  })
  }

  goBack(){
    this.navController.navigateBack('/tabs/tab1');
  }
  
  completRead(){
    this.history.add(this.data);
    console.log(this.history.read());
    this.goBack();
  }
}
