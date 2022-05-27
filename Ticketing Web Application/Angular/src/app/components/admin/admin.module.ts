import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { BusesComponent } from './buses/buses.component';
import { StopsComponent } from './stops/stops.component';
import { StaffsComponent } from './staffs/staffs.component';

@NgModule({
  declarations: [BusesComponent, StopsComponent, StaffsComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
