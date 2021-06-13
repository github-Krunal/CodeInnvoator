import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'codeInnvoator-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideNav = new EventEmitter<boolean>();
  public isToggle: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  public toggleSideBar() {
    this.isToggle = !this.isToggle;
    this.toggleSideNav.emit(this.isToggle);
  }

}
