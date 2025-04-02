import { Component, OnInit } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';
import { Mission } from '../models/mission';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './missionlist.component.html',
})


export class MissionlistComponent implements OnInit {
  missions: Mission[] = [];
  constructor(private spacexService: SpacexapiService) {}

  ngOnInit(): void {
    this.spacexService.getAllMissions().subscribe((data) => {
      this.missions = data;
    });
  }
}
