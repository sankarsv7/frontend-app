import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

    private apiUrl = environment.apiUrl + '/tutorial';
  //private apiUrl = 'http://a1979094e7f154563adf67fb84dbc889-326000318.us-east-1.elb.amazonaws.com/tutorial';  // backend URL

  constructor(private http: HttpClient) { }

  getTutorials(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
