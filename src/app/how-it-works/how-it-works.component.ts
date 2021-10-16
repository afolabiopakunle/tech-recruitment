import {Component, OnInit} from '@angular/core';
import {HowItCardModel} from "./shared/how-it-card.model";

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss']
})
export class HowItWorksComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  howItList: HowItCardModel[] = [
    {
      title: 'One',
      imageUrl: 'id',
      body: 'hello'
    },
    {
      title: 'One',
      imageUrl: 'id',
      body: 'hello'
    },
    {
      title: 'One',
      imageUrl: 'id',
      body: 'hello'
    }
  ];

}
