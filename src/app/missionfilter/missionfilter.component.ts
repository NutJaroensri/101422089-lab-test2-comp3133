import { Component } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';
import { Mission } from '../models/mission';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-missionfilter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './missionfilter.component.html',
})
export class MissionfilterComponent {
  launchYear!: number;
  launchSuccess?: boolean;
  landingSuccess?: boolean;
  filteredMissions: Mission[] = [];

  constructor(private spacexService: SpacexapiService) {}

  filter() {
    let url = `https://api.spacexdata.com/v3/launches?`;

    if (this.launchYear) url += `launch_year=${this.launchYear}&`;
    
    if (this.launchSuccess !== undefined) url += `launch_success=${this.launchSuccess}&`;
    if (this.landingSuccess !== undefined) url += `land_success=${this.landingSuccess}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.filteredMissions = data;
      });
  }

  reset() {
    this.launchYear = null!;
    this.launchSuccess = undefined;
    this.landingSuccess = undefined;
    this.filteredMissions = [];
  }
}
