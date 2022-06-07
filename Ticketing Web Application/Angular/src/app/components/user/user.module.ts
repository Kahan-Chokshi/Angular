import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { TrackComponent } from './track/track.component';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [UserComponent, SearchComponent, TrackComponent],
  imports: [CommonModule, FormsModule, UserRoutingModule],
})
export class UserModule {}
