import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'ps-details',
  templateUrl: './ps-details.component.html',
  styleUrls: ['./ps-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PsDetailsComponent implements OnInit {
  mode: ProgressSpinnerMode = 'determinate';
  PROGRESS_SPINNER_VALUE: number = 70;
  color: ThemePalette = 'primary';
  public abc: string[] = ["1", "1", "1", "1", "1"]
  constructor() { }

  ngOnInit(): void {
  }

}
