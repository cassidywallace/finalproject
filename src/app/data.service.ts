import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataUrl: string = 'http://157.245.127.34:3001/budget';
  constructor(private http: HttpClient) {}

  getChartData(): Observable<any[]> {
    return this.http.get<any[]>(this.dataUrl);
    }

  sendNewData(data: any): Observable<any>{
    const headers = { 'content-type': 'application/json'};
    const body = JSON.stringify(data);
    return this.http.post<any>(this.dataUrl, body);
  }
  }
