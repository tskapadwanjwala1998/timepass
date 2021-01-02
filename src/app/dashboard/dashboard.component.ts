import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']

})
export class DashboardComponent{

  /*mapping = new Map<string, string>([
    ['/city-pune', 'Pune'],
    ['/city-nagpur', 'Nagpur']
  ]);

  breadcrumbs = '';

  constructor(private router: Router) {
    router.events
      .pipe(
        filter(e => e instanceof NavigationEnd),
        map((e: NavigationEnd) => e.url)
      )
      .subscribe(url => {
        console.log(url);
        this.breadcrumbs = this.mapping.get(url);
      })
  }*/

  title = 'ng7-dynamic-breadcrumb-lib';

  breadcrumbConfig: object = {
    bgColor: '#eee',
    fontSize: '18px',
    fontColor: '#0275d8',
    lastLinkColor: '#000',
    symbol: ' / ',
  };

}
