import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularService } from '../angular.service';

@Component({
  selector: 'app-managerlogin',
  templateUrl: './managerlogin.component.html',
  styleUrls: ['./managerlogin.component.css']
})
export class ManagerloginComponent implements OnInit {
  public user!: string;
  public password!:string;
  err=true;
  constructor(private angularService: AngularService, private router:Router) { }

  ngOnInit(): void {
  }
  //LoginManager(){
   // if(this.user == "manager" && this.password == "pass", this.err=!this.err)
    //{
     // alert ("Wrong credentials");
      
    //}
   // else {
     // alert ("Welcome");
     // this.router.navigateByUrl('/managerdashboard')
   // }
//}
onsubmit(item:any){

  console.log(item)

  if(item.name=="manager" && item.password=='manager'){

    console.log(this.router);

    this.router.navigate(['managerdashboard']);

  }

 else{
  window.alert("username or password doesnot match")
}
}

}
