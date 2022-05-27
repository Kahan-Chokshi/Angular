import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { BusesComponent } from './buses/buses.component';
import { StaffsComponent } from './staffs/staffs.component';
import { StopsComponent } from './stops/stops.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'buses',
        component: BusesComponent,
        pathMatch: 'full'
      },
      {
        path: 'stops',
        component: StopsComponent
      },
      {
        path: 'staffs',
        component: StaffsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AdminRoutingModule {}
