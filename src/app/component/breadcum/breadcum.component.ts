import { Component, OnInit } from '@angular/core';
import {
  Router,
  NavigationEnd,
  ActivationStart,
  NavigationStart,
  Scroll,
} from '@angular/router';
import { Breadcum } from './breadcum';
@Component({
  selector: 'app-breadcum',
  templateUrl: './breadcum.component.html',
  styleUrls: ['./breadcum.component.scss'],
})
export class BreadcumComponent implements OnInit {
  public breadcumList: Breadcum[] = [];
  constructor(private router: Router) {
    this.onFirstLoadBreadcum();
  }
  ngOnInit() {
  }
  private onFirstLoadBreadcum() {
    let path: string = '';
    let label: string = '';
    let count: number = 0;
    let isPresentBreadum: boolean;
    this.getBreadcumLocalstoage();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (window.location.href.includes(event.url)) {
          isPresentBreadum = true;
        }
        if (event.url === "/") {
          this.deleteAllBreadcum();
        }
      }
      if (!isPresentBreadum) {
        if (event instanceof ActivationStart) {
          if (count < 1) {
            label = event.snapshot.data?.breadcrumb;
            path = event.snapshot.routeConfig?.path || '';
            if (label === "Home") {
              this.deleteAllBreadcum();
            }
            count++
          }
        }
        if (event instanceof NavigationEnd) {
          if (Array.isArray(this.breadcumList) && this.breadcumList.length > 0) {
            // check last url is same
            if (this.breadcumList && this.breadcumList[this.breadcumList.length - 1].url !== event.url) {
              this.breadcumList.push({ path: path, url: event.url, label: label });
            }
          }
          else {
            this.breadcumList.push({ path: path, url: event.url, label: label });
          }
        }
      }
      if (event instanceof Scroll) {
        path = '';
        label = '';
        count = 0;
        this.setBreadcumLocalstoage();
        isPresentBreadum = false;
      }
    });
  }
  public deleteAllBreadcum() {
    this.deleteAllBreadcumLocalStorage();
    this.breadcumList = [];
  }
  public backToPreviousBreadcum(index: number) {
    if (index === 9999) {
      this.deleteAllBreadcum();
      this.router.navigate(["/"]);
    }
    else {
      // filter router from breadcum list
      let clickBreadcum: Breadcum = this.breadcumList.filter((_v, i, _a) => i === index)[0];
      this.formatToRouterLink(clickBreadcum, index);
    }
  }
  private formatToRouterLink(clickBreadcum: Breadcum, index: number) {
    // format router link to object
    var queryStringParams: any = {};
    let queryParamString: any = clickBreadcum.url?.includes("?") ? clickBreadcum.url.split("?")[1] : clickBreadcum.url;
    // replace "=" to ":"
    let QueryStringArray = (queryParamString.split(/[ \(&\)]+/)).map((x: any) => x.replace('=', ':'));

    // create object in queryparamas
    QueryStringArray.forEach((val: any) => {
      let key = val.split(":")[0];
      let value = val.split(":")[1];
      queryStringParams[key] = value;
    })
    this.redirectToLink(clickBreadcum, queryStringParams, index)
  }

  private redirectToLink(clickBreadcum: Breadcum, queryStringParams: any, index: number) {
    this.router.navigate([clickBreadcum.path],
      {
        queryParams: queryStringParams
      });
    this.deleteSingleBreadcumLocalstoage(index);
  }
  private deleteSingleBreadcumLocalstoage(index: number) {
    // also test it in HRZ
    this.breadcumList.splice(index + 1, this.breadcumList.length);
    this.setBreadcumLocalstoage();
  }
  private setBreadcumLocalstoage() {
    localStorage.setItem('breadcum', JSON.stringify(this.breadcumList));
  }
  private getBreadcumLocalstoage() {
    this.breadcumList = JSON.parse(localStorage.getItem('breadcum') || '{}');
  }
  private deleteAllBreadcumLocalStorage() {
    localStorage.removeItem('breadcum')
  }
}