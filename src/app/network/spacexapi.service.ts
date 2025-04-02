import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpacexapiService {
  private baseUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) {}

  getAllMissions(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getMissionByFlightNumber(flight_number: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${flight_number}`);
  }

  getMissionsByYear(year: number): Observable<any> {
    return this.http.get(`${this.baseUrl}?launch_year=${year}`);
  }
}
