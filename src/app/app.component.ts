import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'codezync-HRMS';

  showHead: boolean = false;

  constructor(
    private router:Router,

  ){}

  ngOnInit(){
    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/') {
          this.showHead = false;
        } else {
          // console.log("NU")
          this.showHead = true;
        }
      }
    });
  }

}
