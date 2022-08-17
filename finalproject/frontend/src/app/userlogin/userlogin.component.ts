import { Component, OnInit } from '@angular/core';
import { AngularService } from '../angular.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
 // publicuser!: string;
  //publicpassword!:string;
  //errtrue;
  
  constructor(private angularService: AngularService, private router:Router) { }

  ngOnInit(): void {
  }


  //LoginUser(){
    //if(this.user == "user" && this.password == "pass", this.err=!this.err)
    //{
    // alert ("Wrong credentials");
      
   // }
    //else {
     // alert ("Welcome");
     // this.router.navigateByUrl('/userdashboard')
    //}
  
    onsubmit(item:any){

      console.log(item)
    
      if(item.name=="user" && item.password=='user'){
    
        console.log(this.router);
    
        this.router.navigate(['userdashboard']);
    
      }
    
     else{
      window.alert("username or password doesnot match")
    }
}

}
