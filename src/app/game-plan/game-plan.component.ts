import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-plan',
  templateUrl: './game-plan.component.html',
  styleUrls: ['./game-plan.component.sass'],
})
export class GamePlanComponent implements OnInit {

  cards = [
    { status: 'ACTIVE', classCol: 'a-status', circle: 'a-circle' },
    { status: 'INACTIVE', classCol: 'i-status', circle: 'i-circle' },
    { status: 'ACTIVE', classCol: 'a-status', circle: 'a-circle' },
    { status: 'ACTIVE', classCol: 'a-status', circle: 'a-circle' },
    { status: 'ACTIVE', classCol: 'a-status', circle: 'a-circle' },
    { status: 'INACTIVE', classCol: 'i-status', circle: 'i-circle' },
  ];

  ngOnInit(): void {}
}
