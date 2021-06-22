import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ps-activity',
  templateUrl: './ps-activity.component.html',
  styleUrls: ['./ps-activity.component.scss'],
})
export class PsActivityComponent implements OnInit {
  public abc: number[] = [1, 2, 3, 3]

  constructor() { }

  ngOnInit(): void {
  }

}
