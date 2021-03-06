import {Component, OnInit} from '@angular/core';

// import Swiper core and required components
import SwiperCore, {
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
} from 'swiper';
import {StoryModel} from "./story.model";

// install Swiper components
SwiperCore.use([
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller
]);

@Component({
  selector: 'app-success-stories',
  templateUrl: './success-stories.component.html',
  styleUrls: ['./success-stories.component.scss']
})
export class SuccessStoriesComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }


  stories: StoryModel[] = [
    {
      story: 'Ever since I joined kaiglo, I have experienced improved sales due to their market insight data.',
      owner: 'Afolabi',
      imageUrl: '../../assets/images/success-stories/baby-boss-1.png',
      role: 'CEO Errands Hub'
    },
    {
      story: 'Software has been employed by our firm for a couple of years now. The workings around it are pates',
      owner: 'Esther',
      imageUrl: '../../assets/images/success-stories/baby-boss-2.png',
      role: 'GMD Sterling Bank'
    },
    {
      story: 'HumanManager has made our payroll processing very seamless and efficient. It is easy to understand and use.',
      owner: 'Nelson',
      imageUrl: '../../assets/images/success-stories/image.png',
      role: 'Customer Experience'
    },
  ]

}
