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
      SubmenuName: 'Dashboard',
      ToolTip: 'Dashboard',
      RouterLink: 'home'
    },
    {
      IconName: 'workspace_premium',
      SubmenuName: 'Project',
      ToolTip: 'Project',
      RouterLink: 'dashboard'
    }, {
      IconName: 'task',
      SubmenuName: 'My Task',
      ToolTip: 'My Task',
      RouterLink: 'dashboard'
    }, {
      IconName: 'groups',
      SubmenuName: 'Member',
      ToolTip: 'Member List',
      RouterLink: 'dashboard'
    }, {
      IconName: 'event',
      SubmenuName: 'Calender',
      ToolTip: 'Calender',
      RouterLink: 'dashboard'
    }, {
      IconName: 'settings',
      SubmenuName: 'Setting',
      ToolTip: 'Setting',
      RouterLink: 'home'
    }]
  }

}
