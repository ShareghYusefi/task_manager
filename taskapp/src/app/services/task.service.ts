import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  // Inject http client class to make a request
  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    // Data Push System :: httpClient get method returns an Observable data producer which emits data type Task[]
    return this.http.get<Task[]>('http://localhost:3000'); 
  }

  createTask(task: Task): Observable<Task[]> {
    return this.http.post<Task[]>('http://localhost:3000', task); 
  }

  deleteTask(id: number): Observable<Task> {
    return this.http.delete<Task>(`http://localhost:3000/${id}`);
  }

}
