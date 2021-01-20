import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
// import { Store } from '@ngrx/store';

// import { StoreModule } from '@ngrx/store';
import { toggleFilter, selectFilter, navigationFilter } from 'src/app/store/navigation';
import { SubSink } from 'subsink';
import { Subject } from 'rxjs';
import { tap, throttleTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-nav-filter',
  templateUrl: './nav-filter.component.html',
  styleUrls: ['./nav-filter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavFilterComponent implements OnDestroy {

  // vm$ = this.store.select(selectFilter);

  private sub = new SubSink();
  private textThrhottle$ = new Subject<string>();

  constructor(){}
  // constructor(private store: Store<any>) {
  //   this.sub.sink = this.textThrhottle$.pipe(
  //     throttleTime(300),
  //     distinctUntilChanged(),
  //     tap(text => {
  //       this.store.dispatch(navigationFilter({text}));
  //     })
  //   ).subscribe();
  //  }

  // toggleFilter($event: MouseEvent) {
  //   $event.preventDefault();
  //   this.store.dispatch(toggleFilter());
  // }

  handleKeyup($event: KeyboardEvent, value: string) {
    this.textThrhottle$.next(value.trim());
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
