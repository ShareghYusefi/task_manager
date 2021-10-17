import { Component, OnInit } from '@angular/core';
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
  constructor(private service: TasksService) {
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
   }

  ngOnInit(): void {
  }

}
