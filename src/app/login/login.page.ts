import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { HttpService } from "../services/http.service";
import { LocalstorageService } from '../services/localstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public userinfo:any={
    username:'',
    password:''
  };

  public success:any={'status':"Verify success"};
  public fail:any={'status':"Verify fail"};

  constructor(public navController:NavController,public http:HttpService,public storage:LocalstorageService){

  }
  ngOnInit() {
  }
  doLogin(){
    var user={
      userid:this.userinfo.username,
      password:this.userinfo.password,
    };
    this.http.post("user/login_do",user).then((res:any)=>{
      if(res){
        console.log(res[0]);
        this.storage.set('userinfo',res[0]);
        this.navController.navigateBack('/tabs/tab3');
      }
    }).catch((err)=>{
      console.log(err);
    })
  }
}
