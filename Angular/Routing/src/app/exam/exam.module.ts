import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamRoutingModule } from './exam-routing.module';
import { ExamComponent } from './exam.component';
import { ExamdetailComponent } from './examdetail/examdetail.component';
import { ExamlistComponent } from './examlist/examlist.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ExamRoutingModule
  ],
  declarations: [ExamComponent, ExamdetailComponent, ExamlistComponent]
})
export class ExamModule { }
