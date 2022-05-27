import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusesComponent } from './buses/buses.component';
import { StaffsComponent } from './staffs/staffs.component';
import { StopsComponent } from './stops/stops.component';

const routes: Routes = [
  {path:'', redirectTo:'buses',pathMatch:'full'},
  {path:'buses', component: BusesComponent},
  {path:'stops', component: StopsComponent},
  {path:'staffs', component: StaffsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
