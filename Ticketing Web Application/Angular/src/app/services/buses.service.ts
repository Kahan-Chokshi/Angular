import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Buses } from '../models/buses.model';

@Injectable({
  providedIn: 'root',
})
export class BusesService {
  selectedBus: Buses;
  Buses: Buses[];

  baseURL = 'http://localhost:8080/Buses';

  constructor(private http: HttpClient) {}
  postMember(M: Buses) {
    return this.http.post(this.baseURL, M);
  }

  getMemberList() {
    return this.http.get(this.baseURL);
  }
}
