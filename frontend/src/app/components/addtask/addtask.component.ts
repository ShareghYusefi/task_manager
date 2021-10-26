import { TasksService } from 'src/app/services/tasks.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  taskForm; // initialize taskForm object property binded to in html
  // Inject the FormBuilder class to create a Model Driven Form (MDF)
  constructor(private formBuilder: FormBuilder, private taskService: TasksService) { 
    this.taskForm = formBuilder.group({
      // Define form controls
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      category: ['', [Validators.required]],
      task_date: ['', [Validators.required]],
      priority_level: ['', [Validators.required]],
      progress_level: ['', [Validators.required]]
    })
   }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.taskForm.value);
    this.taskService.createTask(this.taskForm.value).subscribe((results) => {
      console.log(results);
    }, (error) => {
      console.log(error);
    });
  }

  // getter defined to access form control values for frontend use
  get titleFormControl(){
    return this.taskForm.get('title')!; // ! means get('title') can be null or undefined
  }

}
