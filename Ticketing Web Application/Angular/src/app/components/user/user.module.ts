import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { TrackComponent } from './track/track.component';

@NgModule({
  declarations: [SearchComponent, TrackComponent],
  imports: [CommonModule],
})
export class UserModule {}
