import { Component } from '@angular/core';

import { LocalstorageService } from '../services/localstorage.service';
import { HttpService } from "../services/http.service";
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public img:any="";
  public userid:string="";

  constructor(public navController:NavController,public http:HttpService,public storage:LocalstorageService){
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if(this.storage.get('userinfo')){
      this.img=this.http.local_server+this.storage.get('userinfo').pic;//拼接头像图片地址
      this.userid=this.storage.get('userinfo').userid;
    }
  }
  logout(){
    this.storage.remove('userinfo');
    this.navController.navigateBack('/tabs/tab1');
  }
}
