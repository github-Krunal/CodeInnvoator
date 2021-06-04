import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppIcon } from 'src/app/shared/modal/sample-modal';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePageComponent implements OnInit {
  public abc: number[] = [];
  public appIcon: AppIcon[] = [];

  constructor() { }

  ngOnInit(): void {
    // this.abc = Array.from({ length: 8 }, (x, i) => i);
    this.appIcon = [
      {
        Id: 1021,
        ImageUrl: '../../../../assets/images/pg (1).jpg',
        Name: 'Task Management',
        Time: '2 Days To Go',
      }, {
        Id: 1022,
        ImageUrl: '../../../../assets/images/pg (2).jpg',
        Name: 'Project Management',
        Time: '1 Days To Go',
      },
      {
        Id: 1023,
        ImageUrl: '../../../../assets/images/pg (3).jpg',
        Name: 'Calculator',
        Time: '6 Days To Go',
      },
      {
        Id: 1024,
        ImageUrl: '../../../../assets/images/image-coming-soon.jpg',
        Name: 'Angular',
        Time: '1 Year To Go',
      },
      {
        Id: undefined,
        ImageUrl: '',
        Name: 'Project',
        Time: '',
      },
      {
        CommingSoon: true
      },
      {
        CommingSoon: true
      },
      {
        CommingSoon: true
      },
      {
        CommingSoon: true
      }]
  }

}
