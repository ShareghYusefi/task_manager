import { Task } from './../../interfaces/task';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task!: Task; // ! tells Typescript the variable is not null or undefined
  constructor() { }

  ngOnInit(): void {
  }

}
