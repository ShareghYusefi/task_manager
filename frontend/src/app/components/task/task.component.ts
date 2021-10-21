import { Task } from './../../interfaces/task';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  // @Input is used in property binding where data is passed down a child component
  @Input() task!: Task;

  // @Output is used to pass data to a parent component through event binding
  @Output() deleteEvent = new EventEmitter(); // create an event emitter object

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(){
    this.deleteEvent.emit(this.task); // emit deleteEvent event & pass associated task
  }

}
