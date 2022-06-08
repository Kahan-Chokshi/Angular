import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Buses } from '../models/buses.model';

@Injectable({
  providedIn: 'root',
})
export class BusesService {
  selectedBus: Buses;
  Buses: Buses[];

  baseURL = 'http://localhost:8080/admin1';

  constructor(private http: HttpClient) {}
  postBus(B: Buses) {
    return this.http.post(this.baseURL + '/addNewBus', B);
  }

  getBusesList(B: Buses) {
    return this.http.post(this.baseURL + '/searchBuses',B);
  }

  putBuses(B: Buses) {
    return this.http.put(this.baseURL + `/editBus`, B);
  }
  
  deleteBuses(_id: string) {
    return this.http.delete(this.baseURL + `/deleteBus/${_id}`);
  }
  
  getBusesListUser(B: Buses) {
    return this.http.post('http://localhost:8080/user/searchBuses',B);
  }
}
