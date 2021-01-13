import { Component, OnInit } from '@angular/core';
import { toggleFilter } from 'src/app/store/navigation';
import { APP_CONFIG } from 'src/app/app.config';

@Component({
  selector: 'app-nav-info-card',
  templateUrl: './nav-info-card.component.html',
  styleUrls: ['./nav-info-card.component.css']
})
export class NavInfoCardComponent implements OnInit {
  user = APP_CONFIG.user;
  avatar = APP_CONFIG.avatar;

  constructor() { }

  ngOnInit(): void {
  }

  // toggleFilter($event: MouseEvent) {
  //   $event.preventDefault();
  //   this.store.dispatch(toggleFilter());

  // }

}
