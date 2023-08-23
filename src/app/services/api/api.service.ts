import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getAnnonces(): Observable<any> {
    const apiUrl = '/api/api/WSAnnonce/GetAnnonces';
    return this.http.get(apiUrl);
  }
}
