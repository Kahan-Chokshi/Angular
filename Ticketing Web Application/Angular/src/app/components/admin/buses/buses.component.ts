import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BusesService } from '../../../services/buses.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Buses } from '../../../models/buses.model';

@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.css'],
  providers: [BusesService],
})
export class BusesComponent implements OnInit {
  closeResult: string = '';

  constructor(
    private modalService: NgbModal,
    readonly busService: BusesService,
  ) {}

  ngOnInit(): void {}

  getBusesListData(form:NgForm) {
    this.busService.getBusesList(form.value).subscribe((res) => {   
      this.busService.Buses = res as Buses[];
    });
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "" || form.value._id == null) {
      this.busService.postBus(form.value).subscribe(() => {
      });
    }
  }

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onEdit(B: Buses) {
    this.busService.selectedBus = B;
  }

  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.busService.deleteBuses(_id).subscribe(() => {
      });
    }
  }
}
