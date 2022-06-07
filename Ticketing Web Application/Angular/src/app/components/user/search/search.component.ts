import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Buses } from '../../../models/buses.model';
import { BusesService } from '../../../services/buses.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(readonly busService: BusesService) { }

  ngOnInit(): void {
  }
  
  getUserBusesListData(form:NgForm) {
    this.busService.getBusesListUser(form.value).subscribe((res) => {
      this.busService.Buses = res as Buses[];
      console.log(this.busService.Buses);
    });
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "" || form.value._id == null) {
      this.busService.postBus(form.value).subscribe(() => {
      });
    }
  }

}
