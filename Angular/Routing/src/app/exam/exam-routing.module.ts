import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamComponent } from './exam.component';
import { ExamdetailComponent } from './examdetail/examdetail.component';
import { ExamlistComponent } from './examlist/examlist.component';

const routes: Routes = [
  {
    path: 'exam',
    component: ExamComponent,
    children: [
      {
        path: '',
        component: ExamlistComponent,
        pathMatch: 'full'
      },
      {
        path: 'detail',
        component: ExamdetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ExamRoutingModule { }
