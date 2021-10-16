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
      title: 'Become a member',
      imageUrl: '../../assets/images/how-it-works/become_member.svg',
      body: 'Sign up to sell on SellersHub and reach millions of potential customers.'
    },
    {
      title: 'Upload a product',
      imageUrl: '../../assets/images/how-it-works/upload_a_product.svg',
      body: 'Click on the verification link sent to you to confirm your registration'
    },
    {
      title: 'Start selling',
      imageUrl: '../../assets/images/how-it-works/start_selling.svg',
      body: 'Upload your products and start selling!'
    }
  ];

}
