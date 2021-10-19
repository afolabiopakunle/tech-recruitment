import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  show: boolean = true;

  ngOnInit(): void {
  }

  hideIcon() {
    this.show = !this.show;
  }

}
