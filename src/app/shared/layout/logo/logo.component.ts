import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ShortcutModelService} from '../shortcut-model/shortcut-model.service';
import { APP_CONFIG } from 'src/app/app.config';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoComponent {
  logo = APP_CONFIG.logo;
  appName = APP_CONFIG.appName;

  constructor(public shortcut: ShortcutModelService) { }

  openShortcut($event: MouseEvent) {
    $event.preventDefault();
    this.shortcut.openModal();
  }
}
