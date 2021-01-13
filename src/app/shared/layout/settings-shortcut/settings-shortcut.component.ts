import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as settings from 'src/app/store/settings';

@Component({
  selector: 'app-settings-shortcut',
  templateUrl: './settings-shortcut.component.html',
  styleUrls: ['./settings-shortcut.component.css']
})
export class SettingsShortcutComponent {

  constructor(private store: Store<any>) { }

  toggleHideNavigation($event: MouseEvent) {
    $event.preventDefault();
    this.store.dispatch(settings.toggleHideNavigation());
  }

  toggleMinifyNavigation($event: MouseEvent) {
    $event.preventDefault();
    this.store.dispatch(settings.toggleMinifyNavigation());
  }

  toggleFixedNavigation($event: MouseEvent) {
    $event.preventDefault();
    this.store.dispatch(settings.toggleFixedNavigation());
  }

}
