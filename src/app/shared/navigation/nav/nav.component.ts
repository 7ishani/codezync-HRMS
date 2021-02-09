import { Component, ChangeDetectionStrategy} from '@angular/core';
// import { Store, createSelector } from '@ngrx/store';
// import { selectNavigationItems, NavigationItem } from 'src/app/store/navigation';
// import { selectSettingsState } from 'src/app/store/settings';
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
  subMenus = [];

  constructor(public navService: NavService) {
    this.menus = navService.getMenuList();
    this.subMenus = navService.getSubMenuList();
    console.log(this.menus);
    console.log(this.subMenus);
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

  toggleSub(currentMenu) {
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

  getStateSub(currentMenu) {
    if (currentMenu.active) {
      return 'down';
    } else {
      return 'up';
    }
  }


}
