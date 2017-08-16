import { Component, OnInit,NgModule } from '@angular/core';
import {DefaultApi} from '../app/shared/DefaultApi';
import {HttpModule,Http} from '@angular/http';
import { Router, CanActivate } from '@angular/router';
import { AppComponents, AppRoutes } from "./app.routing";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DefaultApi,HttpModule]
})

export class AppComponent {
    public items : string;
    test=false;
     hidAuth;
     hiDash;
    SessName=' ';
  name;
  SessPass=' ';
  constructor(public userAp: DefaultApi, http: Http){
    this.SessName=sessionStorage.getItem("userName");
     this.SessPass=sessionStorage.getItem('pass');
  if((this.SessName !=' ')&&(this.SessPass !=' ')){
    this.name=this.SessName;
    this.hidAuth=true;
    this.hiDash=false;
    }
    else{
       this.hidAuth=false;
       this. hiDash=true;
    }
}
  loginUser(e) {   
	e.preventDefault();
  var username=e.target.elements[0].value;
  var pass=e.target.elements[1].value;
  this.userAp.getUser().subscribe(res=>{
    this.items=res;
    for (var index = 0; index < res.length; index++) {
     if((res[index].pass ==pass)&& (res[index].name ==username)){
      this.test=true;
      username=res[index].name ;
      pass=res[index].pass ;
      this.name=username;
      break;
     }
   }
   if(this.test==true){
     alert("hello "+username);
      this.hidAuth=true;
      this.hiDash=false;
      sessionStorage.setItem('userName',username);
      sessionStorage.setItem('pass',pass);
   }
   else{
      alert("Vérifier votre nom ou mote de passe");
   }
    
  },
  error => {
alert(error.text());
});
}
logout(){
  this.hidAuth=false;
  this. hiDash=true;
  sessionStorage.setItem('userName',' ');
  sessionStorage.setItem('pass',' ');
}
}

