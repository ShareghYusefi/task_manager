import { Component } from '@angular/core';
import { Task } from '../interfaces/task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  tasks!: Task[]; // loop through these items in html file

  constructor(private service: TaskService, private taskService: TaskService) {

  }

  onDelete(task: Task){
    console.log(task);
    this.taskService.deleteTask(task.id).subscribe(
      // success callback  
      (task)=>{
        // find index value of task deleted in DB
        let index = this.tasks.findIndex((item) => {
          return item.id === task.id
        });

      this.tasks.splice(index, 1); // remove task item located at index
      },
      // failure callback
      (error) => {
        console.log(error);
      });
  }

  // ion lifecycle hook for when a page pushes onto view stack
  ionViewWillEnter(){
    // Subscribe and listen for data from TaskService
    this.service.getTasks().subscribe(
    // success callback  
    (results)=>{
      this.tasks = results;
    },
    // failure callback
    (error) => {
      console.log(error);
    });
  }
}
