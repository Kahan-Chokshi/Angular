import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stops } from '../models/stops.model';

@Injectable({
  providedIn: 'root'
})
export class StopsService {
    selectedStop: Stops;
    Stops: Stops[];
  
    baseURL = 'http://localhost:8080/admin';
  
    constructor(private http:HttpClient) {}
    postStop(S: Stops) {
      return this.http.post(this.baseURL + '/addNewStop', S);
    }
  
    getStopList(S: Stops) {
      return this.http.post(this.baseURL + '/searchStops', S);
    }

    putStops(S: Stops) {
      return this.http.put(this.baseURL + `/editStop`, S);
    }
    
    deleteStops(_id: string) {
      return this.http.delete(this.baseURL + `/deleteStop/${_id}`);
    }
  }
  