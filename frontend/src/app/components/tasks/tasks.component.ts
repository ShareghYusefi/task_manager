import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/interfaces/task';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks!: Task[]; // loop through these items in html file

  // Inject TasksService class to retrieving data
  // Inject ActivatedRoute class to retrieve URL data
  constructor(private service: TasksService, private route:ActivatedRoute) {
      // Subscribe and listen for data from TaskService
      service.getTasks().subscribe(
      // success callback  
      (results)=>{
        this.tasks = results;
      },
      // failure callback
      (error) => {
        console.log(error);
      });
   
      // Subscribe and listen for any paramters being passed through with this component
      route.paramMap.subscribe((params) => {
        console.log(params.get('id'));
        console.log(params.get('name'));
      }); 
    }

  ngOnInit(): void {
  }

  deleteTask(task: any): void {
    // Delete task
    this.service.deleteTask(task).subscribe(
      // success callback  
      (results)=>{
        console.log(results);
      },
      // failure callback
      (error) => {
        console.log(error);
      });
  }

}
