import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  // Inject http client class to make a request
  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    // Data Push System :: httpClient get method returns an Observable data producer which emits data type Task[]
    return this.http.get<Task[]>('http://localhost:3000'); 
  }

  deleteTask(task: any): Observable<Task> {
    return this.http.delete<Task>(`http://localhost:3000/${task.id}`);
  }

}
