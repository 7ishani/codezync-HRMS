import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { mobileNavigation } from 'src/app/store/navigation';
import { APP_CONFIG } from 'src/app/app.config';


@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageHeaderComponent{

  avatar = APP_CONFIG.avatar;
  email = APP_CONFIG.email;
  user = APP_CONFIG.user;

  constructor(private store: Store<any>) { }
  // constructor() { }

  ngOnInit(): void {
  }
  openMobileNav($event: MouseEvent) {
    $event.preventDefault();
    this.store.dispatch(mobileNavigation({open: true}));
  }

}
