import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  NavigationEnd,
  Params,
  PRIMARY_OUTLET,
  RouterLinkActive,
  RouteConfigLoadEnd,
  ActivatedRouteSnapshot,
  ActivationStart,
  NavigationStart,
} from '@angular/router';



@Component({
  selector: 'app-breadcum',
  templateUrl: './breadcum.component.html',
  styleUrls: ['./breadcum.component.scss']
})
export class BreadcumComponent implements OnInit {

  public breadcumList: { url?: string, label?: string }[] = [];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    let url: string = "";
    let label:string="";
    this.router.events.subscribe(event => {
      debugger
      if (event instanceof ActivationStart) {
        label = event.snapshot.data.breadcrumb;
        // this.breadcumList.push({url:event.snapshot.routeConfig?.path+'?',label: event.snapshot.data.breadcrumb });
        this.breadcumList.push({ url: url, label: label });

      }
      if (event instanceof NavigationStart) {
        url = event.url;
      }
      if (event instanceof NavigationEnd) {
        this.breadcumList.push({ url: url, label: label });
      }
    });

  
    
  }

  }
