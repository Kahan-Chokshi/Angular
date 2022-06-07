import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { BusesComponent } from './buses/buses.component';
import { StopsComponent } from './stops/stops.component';
import { StaffsComponent } from './staffs/staffs.component';
import { AdminComponent } from './admin.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminComponent,
    BusesComponent,
    StopsComponent,
    StaffsComponent,
  ],
  imports: [CommonModule, NgbModule, FormsModule, AdminRoutingModule],
})
export class AdminModule {}
