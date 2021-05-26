import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  NavigationEnd,
  ActivationStart,
  RoutesRecognized,
  NavigationStart,
} from '@angular/router';
import { Breadcum } from './breadcum';
@Component({
  selector: 'app-breadcum',
  templateUrl: './breadcum.component.html',
  styleUrls: ['./breadcum.component.scss'],
})
export class BreadcumComponent implements OnInit {
  public breadcumList: Breadcum[] = [];
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.onFirstLoadBreadcum();
  }
  ngOnInit() {}
  private onFirstLoadBreadcum() {
    let url: string = '';
    let label: string = '';
    this.getBreadcumLocalstoage();
    this.router.events.subscribe((event) => {
      if (event instanceof RoutesRecognized||event instanceof NavigationStart) {
        if(event.url==="/"){
        this.deleteBreadcumLocalStorage();
          this.breadcumList = [];
          }
      }
      if (event instanceof ActivationStart) {
        label = event.snapshot.data.breadcrumb;
      }
      if (event instanceof NavigationEnd) {
        this.breadcumList.push({ url: event.url, label: label });
        this.breadcumList = this.breadcumList.filter((v, i, a) => a.findIndex((p) => p.label === v.label) === i );
        this.setBreadcumLocalstoage();
      }
    });
   
  }

  public backToPreviousBreadcum(index: number) {
    let clickBreadcum: Breadcum;
    clickBreadcum = this.breadcumList.filter((_v, i, _a) => i === index)[0];
    this.formatToRouterLink(clickBreadcum);
    // login?id=2ddfd7fa-bef4-4682-9487-b88413ddda92&cs=krunal
    // this.router.navigate([value.url]);
    // this.router.navigate(['login'],
    //       {
    //         queryParams: {
    //           id: '2ddfd7fa-bef4-4682-9487-b88413ddda92',
    //           cs:'krunal'
    //         }
    //       });
  }

  private formatToRouterLink(clickBreadcum: Breadcum) {
    let a: any = clickBreadcum.url?.includes("?") ? clickBreadcum.url.split("?")[1] : clickBreadcum.url;
    var array = a.split(/[ \(&\)]+/);

    array=array.map( (x:any) => x.replace('=',':')) 
    debugger

// 1) convert array to object
    // 2)route the value from one link to other
    // 3)check use if url searchparams
//     var params = new URLSearchParams('a=aaa,bbb,ccc&b=aaa,bbb,ccc&c=aaa,bbb,ccc');
// var obj = Object.fromEntries(params.entries())
// console.log(obj);
//     {
//   "a": "aaa,bbb,ccc",
//   "b": "aaa,bbb,ccc",
//   "c": "aaa,bbb,ccc"
// }
  }

  private setBreadcumLocalstoage() {
    localStorage.setItem('breadcum', JSON.stringify(this.breadcumList));
  }
  private getBreadcumLocalstoage() {
    this.breadcumList= JSON.parse(localStorage.getItem('breadcum')|| '{}');
  }
  private deleteBreadcumLocalStorage() {
    localStorage.removeItem('breadcum')
  }
}
