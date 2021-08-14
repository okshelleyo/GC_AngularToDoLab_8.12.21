import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToDo } from './models/ToDos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent
{
  title = 'AngularLab';
  newTask: string = "";
  completed: boolean = false;
  myClass = "";

  constructor () {}

  parentToDoList: ToDo[] = [

    {task: 'Research Angular',
    completed: false },
    {task: 'Review TypeScript',
    completed: true },
    {task: 'Fix Movie API Lab',
    completed: false },
    {task: 'Angular Lab',
    completed: false },
    {task: 'Job Search Prep',
    completed: false },
    {task: 'Prep for Behavioral Interview',
    completed: false },
    {task: 'Re-do Assessment 7',
    completed: true }

  ]

  addTask (newTaskForm: NgForm) {

    this.newTask = newTaskForm.form.value.newTaskFromForm;

    this.parentToDoList.push({
      task: this.newTask,
      completed: false
    });
  }




}
