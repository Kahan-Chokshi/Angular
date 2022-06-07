import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Stops } from '../../../models/stops.model';
import { StopsService } from '../../../services/stops.service';

@Component({
  selector: 'app-stops',
  templateUrl: './stops.component.html',
  styleUrls: ['./stops.component.css'],
  providers: [StopsService],
})
export class StopsComponent implements OnInit {
  closeResult: string = '';

  constructor(readonly stopService: StopsService) {}

  ngOnInit(): void {}

  getStopsListData(form: NgForm) {
    this.stopService.getStopList(form.value).subscribe((res) => {
      this.stopService.Stops = res as Stops[];
    });
  }

  onSubmit(form: NgForm) {
    if (form.value._id == '' || form.value._id == null) {
      this.stopService.postStop(form.value).subscribe(() => {});
    }
  }

  onEdit(S: Stops) {
    this.stopService.selectedStop = S;
  }

  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.stopService.deleteStops(_id).subscribe(() => {});
    }
  }
}
