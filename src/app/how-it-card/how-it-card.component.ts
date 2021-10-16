import {Component, Input, OnInit} from '@angular/core';
import {HowItCardModel} from "../how-it-works/shared/how-it-card.model";

@Component({
  selector: 'app-how-it-card',
  templateUrl: './how-it-card.component.html',
  styleUrls: ['./how-it-card.component.scss']
})
export class HowItCardComponent implements OnInit {

  @Input() card!: HowItCardModel;
  constructor() { }

  ngOnInit(): void {
  }

}
