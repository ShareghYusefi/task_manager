import { AddtaskComponent } from './components/addtask/addtask.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Add URL's to routes
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'tasks', component: TasksComponent},
  {path: 'add-task', component: AddtaskComponent},
  {path: 'tasks/:id/:name', component: TasksComponent},
  {path:'**', component: NotfoundComponent} // ** :: any other URL
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
