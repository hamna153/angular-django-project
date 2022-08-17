import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PublicService {
  private apiRoot = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) { }


  getItems(){
    return this.http.get<any>(this.apiRoot.concat('task/')).pipe(
      map(
        (res =>{
          return res;
        })
      )
    )
  }

  postData(data:any){
    return this.http.post<any>(this.apiRoot.concat('task/'), data).pipe(
      map(
        (res =>{
          return res;
        })
      )
    )
  }
deleteItems(task_id: number){
 return this.http.delete<any>(this.apiRoot.concat('task/')+task_id);
}
deleteData(id:number){
 return this.http.delete<any>(this.apiRoot.concat('task/')+id).pipe(
map(
     (
      res =>{
          return res;
        })
 )
  )
    }
      
    //deletedataById(id:number){
      //return this.http.delete('http://127.0.0.1:8000/'+id)


     
 }



