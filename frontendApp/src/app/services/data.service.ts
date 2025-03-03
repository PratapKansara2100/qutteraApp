import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private serverData: any; // To hold the data temporarily

  constructor(private http: HttpClient) {}

  getData(website: string): Observable<any> {
    const apiUrl = `http://localhost:3000/api/scan${encodeURIComponent(website)}`;
    console.log(apiUrl);
    return this.http.post(apiUrl, null);
  }

  getData2(website: string): Observable<any> {
    const apiUrl = `http://localhost:3000/api/report/${encodeURIComponent(website)}`;
    console.log(apiUrl);
    return this.http.get(apiUrl);
  }

  setServerData(data: any): void {
    this.serverData = data;
  }

  getServerData(): any {
    return this.serverData;
  }
}
