import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AngularService {
  api_url = 'http://127.0.0.1:8000/task/';
  constructor(private http: HttpClient) { }


  getData() {
    return this.http.get('https://reqres.in/api/users');
  }
  postData(newData:any) {
    return this.http.post('https://reqres.in/api/users',newData);
  }
}

