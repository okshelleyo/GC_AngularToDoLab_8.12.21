import { ToDo } from './../models/ToDos';
import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: string = "";
  @Input() completed: boolean = true;
  @Output() removeTask = new EventEmitter<string>();
  @Input() toDoList: ToDo[] = [];

  constructor() { }

  taskCompleted = true;
  editable = true;

  ngOnInit(): void {
  }

  completeTask (){

    this.taskCompleted = false;
  }



  // deleteTask(){
  // this.toDoList.splice(this.toDoList.indexOf(, 1)
  // }

}
