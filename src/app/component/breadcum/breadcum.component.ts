import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  NavigationEnd,
  ActivationStart,
  RoutesRecognized,
  NavigationStart,
  RouteConfigLoadEnd,
} from '@angular/router';
import { Breadcum } from './breadcum';
@Component({
  selector: 'app-breadcum',
  templateUrl: './breadcum.component.html',
  styleUrls: ['./breadcum.component.scss'],
})
export class BreadcumComponent implements OnInit {
  public breadcumList: Breadcum[] = [];
  constructor( private router: Router) {
    this.onFirstLoadBreadcum();
  }
  ngOnInit() {
  }
  private onFirstLoadBreadcum() {
    let path: string = '';
    let label: string = '';
    this.getBreadcumLocalstoage();
    this.router.events.subscribe((event) => {
      if (event instanceof RoutesRecognized||event instanceof NavigationStart) {
        if(event.url==="/"){
        this.deleteAllBreadcumLocalStorage();
          this.breadcumList = [];
          }
      }
      if (event instanceof RouteConfigLoadEnd) {
        label = event.route.data?.breadcrumb;
        path = event.route.path || '';
      }
      if (event instanceof NavigationEnd) {
        this.breadcumList.push({path:path, url: event.url, label: label });
        this.breadcumList = this.breadcumList.filter((v, i, a) => a.findIndex((p) => p.label === v.label) === i );
        this.setBreadcumLocalstoage();
      }
    });
   
  }

  public backToPreviousBreadcum(index: number) {
    // filter router from breadcum list
    let clickBreadcum: Breadcum = this.breadcumList.filter((_v, i, _a) => i === index)[0];
    this.deleteSingleBreadcumLocalstoage(index);
    this.formatToRouterLink(clickBreadcum);
  }

  private formatToRouterLink(clickBreadcum: Breadcum) {
    // format router link to object
    var queryStringParams:any = {};
    let queryParamString: any = clickBreadcum.url?.includes("?") ? clickBreadcum.url.split("?")[1] : clickBreadcum.url;
    let  QueryStringArray = (queryParamString.split(/[ \(&\)]+/)).map((x: any) => x.replace('=', ':'));
   
    QueryStringArray.forEach((val: any) => {
      let key = val.split(":")[0];
      let value = val.split(":")[1];
      queryStringParams[key] = value;
    })
    this.redirectToLink(clickBreadcum,queryStringParams)
  }

  private redirectToLink(clickBreadcum: Breadcum,queryStringParams:any) {
     this.router.navigate([clickBreadcum.path],
    {
      queryParams: queryStringParams
    });
  }

  private deleteSingleBreadcumLocalstoage(index: number) {
    debugger
    this.breadcumList = this.breadcumList.splice(index);
    debugger
    this.setBreadcumLocalstoage();
  }

  private setBreadcumLocalstoage() {
    localStorage.setItem('breadcum', JSON.stringify(this.breadcumList));
  }
  private getBreadcumLocalstoage() {
    this.breadcumList= JSON.parse(localStorage.getItem('breadcum')|| '{}');
  }
  private deleteAllBreadcumLocalStorage() {
    localStorage.removeItem('breadcum')
  }
}
