import { Component, OnInit } from '@angular/core';
import { PublicService } from '../services/public.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent implements OnInit {
searchText:any;
 

  constructor(private service: PublicService) { }

  tasklist:any=[];
  deletedataById:any=[];

  ngOnInit(): void {

   this.gettasklist()

  }

  gettasklist(){
    this.service.getItems().subscribe(res=>{
      this.tasklist=res
      console.log((res));
      
    })
  }
DeleteUser(task_id:any){
    this.service.deleteItems(task_id).subscribe(()=>{
      this.gettasklist();
    })
  }
  deleteTask(data:any){
    this.service.deleteData(data.id).subscribe({next: (d)=>
    {
      console.log(d)
    },
  error:(e)=>{
    console.log(e)
    alert("error")
  },
  complete: ()=>{
    console.log("record deleted")
    alert("record deleted")
  }
  })
  }

}