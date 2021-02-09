import { Component, ChangeDetectionStrategy} from '@angular/core';
import { selectFilter } from 'src/app/store/navigation';
import { Store } from '@ngrx/store';
import { LoginApiService } from 'src/app/features/pages/login-page/login-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SiderbarComponent {

  vm$ = this.store.select(selectFilter);

  constructor(private store: Store<any>,
              private loginService: LoginApiService) {

   }
   isLoggedIn$: Observable<boolean>;

// constructor(){}
  ngOnInit(): void {
    this.isLoggedIn$ = this.loginService.isLoggedIn; 
  }

}
