import { Component} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NavService } from './nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  animations: [
    trigger('slide', [
      state('up', style({ height: 0 })),
      state('down', style({ height: '*' })),
      transition('up <=> down', animate(200))
    ])
  ]
})
export class NavComponent{
  menus = [];

  constructor(public navService: NavService) {
    this.menus = navService.getMenuList();
    console.log(this.menus);
  }

  getSideBarState() {
    return this.navService.getSidebarState();
  }

  toggle(currentMenu) {
    if (currentMenu.type === 'dropdown') {
      this.menus.forEach(element => {
        if (element === currentMenu) {
          currentMenu.active = !currentMenu.active;
        } else {
          element.active = false;
        }
      });
    }
  }

  getState(currentMenu) {

    if (currentMenu.active) {
      return 'down';
    } else {
      return 'up';
    }
  }

  // hasBackgroundImage() {
  //   return this.navService.hasBackgroundImage;
  // }

}
