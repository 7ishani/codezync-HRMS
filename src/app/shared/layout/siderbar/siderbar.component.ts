import { Component, ChangeDetectionStrategy} from '@angular/core';
import { selectFilter } from 'src/app/store/navigation';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SiderbarComponent {

  vm$ = this.store.select(selectFilter);

  constructor(private store: Store<any>) {
  
   }

// constructor(){}
  ngOnInit(): void {
  }

}
