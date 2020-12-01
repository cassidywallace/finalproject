import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataUrl: string = 'http://localhost:3001/';
  newUrl: string = 'http://localhost:2001/add'
  constructor(private http: HttpClient) {}

  getChartData(): Observable<any[]> {
    return this.http.get<any[]>(this.dataUrl);
    }

  sendNewData(data: any): Observable<any>{
    const headers = { 'content-type': 'application/json'};
    const body = JSON.stringify(data);
    return this.http.post<any>(this.newUrl, data);
  }
  }
