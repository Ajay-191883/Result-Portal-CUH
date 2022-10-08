import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpApiService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa('nilabh:nilabh'),
    }),
  };

  LOGIN_URL = 'https://eventapi.pythonanywhere.com/api/login';

  login(data: any) {
    return this.http.post(this.LOGIN_URL, data, this.httpOptions);
  }
}
