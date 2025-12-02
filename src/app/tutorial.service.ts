import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environments';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) {}

  getAllTutorials(): Observable<any[]> {
  return this.http.get<any[]>(`${environment.apiUrl}/tutorial`);
}


  getTutorial(id: number) {
    return this.http.get(`${environment.apiUrl}/tutorial/${id}`);
  }

  createTutorial(data: any) {
    return this.http.post(`${environment.apiUrl}/tutorial`, data);
  }

  updateTutorial(id: number, data: any) {
    return this.http.put(`${environment.apiUrl}/tutorial/${id}`, data);
  }

  deleteTutorial(id: number) {
    return this.http.delete(`${environment.apiUrl}/tutorial/${id}`);
  }
}
