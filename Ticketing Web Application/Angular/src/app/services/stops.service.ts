import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stops } from '../models/stops.model';

@Injectable({
  providedIn: 'root'
})
export class StopsService {
    selectedStop: Stop;
    Stops: Stop[];
  
    baseURL = 'http://localhost:8080/Stops';
  
    constructor(private http:HttpClient) {}
    postMember(M: Stops) {
      return this.http.post(this.baseURL, M);
    }
  
    getMemberList() {
      return this.http.get(this.baseURL);
    }
  }
  