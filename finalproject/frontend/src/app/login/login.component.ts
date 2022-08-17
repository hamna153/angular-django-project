import { Component, OnInit } from '@angular/core';
import { PublicService } from '../services/public.service' ;
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private publicService: PublicService) {

        
         }

  ngOnInit(): void {
    
    }
    myfrm = new FormGroup({
      username : new FormControl(''),
      password : new FormControl('')
    });

   savefrm(){
    console.log(this.myfrm.value)
   }
  
   cancel(){
    this.myfrm.reset();
   }
  
   get username(){
    return this.myfrm.get('username');
   }
  
   get password(){
    return this.myfrm.get('password');
   }
  
   
  }
  






