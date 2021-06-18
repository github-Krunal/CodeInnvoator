import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-project-status',
  templateUrl: './project-status.component.html',
  styleUrls: ['./project-status.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectStatusComponent implements OnInit {
  mode: ProgressSpinnerMode = 'determinate';
  PROGRESS_SPINNER_VALUE: number = 70;
  color: ThemePalette = 'primary';
  constructor() { }
  ngOnInit(): void {
  }
}
