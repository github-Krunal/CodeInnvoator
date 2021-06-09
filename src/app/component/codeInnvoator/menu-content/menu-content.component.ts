import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SideMenu } from 'src/app/shared/modal/sample-modal';

@Component({
  selector: 'codeInnvoator-menu-content',
  templateUrl: './menu-content.component.html',
  styleUrls: ['./menu-content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuContentComponent implements OnInit {
  public sideBarMenuList: SideMenu[] = [];
  constructor() { }

  ngOnInit(): void {
    this.getSubMenuList();
  }
  private getSubMenuList() {
    this.sideBarMenuList = [{
      IconName: 'home',
      SubmenuName: 'Dashboard'
    },
    {
      IconName: 'workspace_premium',
      SubmenuName: 'Project'
    }, {
      IconName: 'task',
      SubmenuName: 'My Task'
    }, {
      IconName: 'groups',
      SubmenuName: 'Member'
    }, {
      IconName: 'event',
      SubmenuName: 'Calender'
    }, {
      IconName: 'settings',
      SubmenuName: 'Setting'
    }]
  }
}
