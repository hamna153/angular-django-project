import { Component, OnInit } from '@angular/core';
import { UserdataComponent } from '../userdata/userdata.component';
import { SharedService } from '../shared.service';
@Component({
  providers: [UserdataComponent],
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

  public searchTerm = '';
  public taskById:any;
  public taskByIdCopy:any;
  public updatedTask:any;
  public task:any;

  constructor(
    public comp: UserdataComponent,
    private api:SharedService
  ) { }

  ngOnInit(): void {
  }
  action(pk:number) {
    console.log(pk)
    this.api.getTaskById(pk).subscribe((response)=>{
      this.taskById = response;
      console.log(this.taskById)
      this.taskByIdCopy = {...response};
    })
  }
  
  onSubmit() {

    this.api.updateusers(this.taskById.task_id, this.taskById).subscribe((response)=>{
      this.updatedTask = response;
      console.log(this.updatedTask)
      window.alert("Task action taken successfully")
   })
    
  }
 
}
