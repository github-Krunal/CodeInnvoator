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
    this.abc();
  }

  ngOnInit() {
  }
  abc() {
      let url: string = "";
    let label:string="";
    this.router.events.subscribe(event => {
        if (event instanceof ActivationStart) {
        label = event.snapshot.data.breadcrumb;
      }
        if (event instanceof NavigationEnd) {
        this.breadcumList.push({ url: event.url, label: label });
      }
      this.breadcumList = this.breadcumList.filter((v, i, a) => a.findIndex(p => p.label === v.label) === i);
    });
    // 1 store at localstorage
    // 2 get from at localstorage
    // display from get from at localstorage
  }

  }
