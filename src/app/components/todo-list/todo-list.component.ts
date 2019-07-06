import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

	public todo = [
		'Get to work',
		'Pick up groceries',
		'Go home',
		'Fall asleep'
	];

	public done = [
		'Get up',
		'Brush teeth',
		'Take a shower',
		'Check e-mail',
		'Walk dog'
	];
	constructor() { }

	ngOnInit() {
	}

	drop(event: CdkDragDrop<string[]>) {
		if (event.previousContainer === event.container) {
			moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
		} else {
			transferArrayItem(event.previousContainer.data,
			                event.container.data,
			                event.previousIndex,
			                event.currentIndex);
		}
	}

}
