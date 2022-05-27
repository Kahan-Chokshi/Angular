import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { BusesComponent } from './buses/buses.component';
import { StopsComponent } from './stops/stops.component';
import { StaffsComponent } from './staffs/staffs.component';
import { AdminComponent } from './admin.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AdminComponent,
    BusesComponent,
    StopsComponent,
    StaffsComponent,
  ],
  imports: [CommonModule, NgbModule, AdminRoutingModule],
})
export class AdminModule {}
