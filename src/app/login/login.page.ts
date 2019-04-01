import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public success:any={'status':"Verify success"};
  public fail:any={'status':"Verify fail"};
  constructor(public http:HttpService){

  }
  ngOnInit() {
  }
  doLogin(body){
    this.http.post("user/login_do",body).then((res:any)=>{
      if(res==this.success){
        alert("login success");
      }
    }).catch((err)=>{
      console.log(err);
    })
  }
}
