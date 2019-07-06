import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms/';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	@ViewChild('inputTask', {static: false}) inputTask : ElementRef;
	public showForm: boolean = false;
	public formTask = new FormGroup ({
		task: new FormControl('', [Validators.required]),
		status: new FormControl('todo', []),
	});

	constructor() { }

	ngOnInit() {
	}

	addTask() {
		this.showForm = true;
		setTimeout(() => this.inputTask.nativeElement.focus(), 100);
	}
	cancelAddTask() {
		this.showForm = false;
	}

	submit() {
		console.log(this.formTask.value);
		this.formTask.reset();
		this.cancelAddTask();
	}
}
