import { Routes } from '@angular/router';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';
import { MissionfilterComponent } from './missionfilter/missionfilter.component';

export const routes: Routes = [
  { path: '', component: MissionlistComponent },
  { path: 'mission/:id', component: MissiondetailsComponent },
  { path: 'filter', component: MissionfilterComponent }
];
