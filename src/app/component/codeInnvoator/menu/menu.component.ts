import { Component, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {
  public isHandset: boolean = true;
  public isToogle: boolean = true;
  constructor() { }

  ngOnInit(): void {
    this.configureSideNav();
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.configureSideNav()
  }
  configureSideNav() {
    this.isHandset = window.innerWidth < 1000 ? true : false;
  }
  public displaySideNav(event: boolean) {
    this.isToogle = event;
  }
}
