import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public isHandset: boolean = true;
  public isSideBarRouting: boolean = false;
  constructor(private router: Router) {
    this.checkIsSideBarRouting();
  }
  ngOnInit(): void {
    this.configureSideNav();
  }
  private checkIsSideBarRouting() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isSideBarRouting = this.isUrlPresent(event.urlAfterRedirects)
      }
    })
  }
  // check url present
  private isUrlPresent(url: string) {
    let noSideBarUrl = ["/login", "/sign-up", "/home"];
    return noSideBarUrl.indexOf(url) > -1 ? false : true;
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.configureSideNav()
  }
  configureSideNav() {
    this.isHandset = window.innerWidth < 1000 ? true : false;
  }

}