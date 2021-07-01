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
    this.sideBarMenuList = [
      {
        IconName: 'group',
        SubmenuName: 'Group',
        ToolTip: 'Member Details',
        RouterLink: 'member-deails'
      },

      //   {
      //   IconName: 'home',
      //   SubmenuName: 'Dashboard',
      //   ToolTip: 'Dashboard',
      //   RouterLink: 'dashboard'
      // },
      // {
      //   IconName: 'workspace_premium',
      //   SubmenuName: 'Project Status',
      //   ToolTip: 'Project Status',
      //   RouterLink: 'project-status'
      // }
    ]
  }

}
