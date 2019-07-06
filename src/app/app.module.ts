import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*Angular Material*/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field/';
import { MatInputModule, MatIconModule } from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';
/*FormBuilder*/
import { FormsModule, ReactiveFormsModule } from '@angular/forms/';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoListComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
