import { ToDo } from './../models/ToDos';
import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  taskCompleted = false;

  constructor() { }


  ngOnInit(): void {
  }

  completeTask (){
    this.taskCompleted = true;
  }





}
