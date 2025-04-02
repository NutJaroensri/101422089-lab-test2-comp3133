import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpacexapiService } from '../network/spacexapi.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-missiondetails',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './missiondetails.component.html',
})
export class MissiondetailsComponent implements OnInit {
  mission: any;
  constructor(
    private route: ActivatedRoute,
    private spacexService: SpacexapiService
  ) {}

  
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.spacexService.getMissionByFlightNumber(id).subscribe((data) => {
      this.mission = data;
    });
  }
}
