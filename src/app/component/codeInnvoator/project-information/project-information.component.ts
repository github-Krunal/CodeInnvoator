
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { RightSlideAnimation } from 'src/app/shared/animation/right-slide-animation';
@Component({
  selector: 'app-project-information',
  templateUrl: './project-information.component.html',
  styleUrls: ['./project-information.component.scss'],
  animations: [RightSlideAnimation],
  encapsulation:ViewEncapsulation.None
})

export class ProjectInformationComponent implements OnInit {
  public sectionName: string = "";
  public projectDetails: any[] = [{
    name: "section1",
    // images:'../../../../assets/images/tech (2).jpg'
  }]
  constructor() { }

  ngOnInit(): void {
    this.sectionName = this.projectDetails[0].name;
  }
  radioChange(event: MatRadioChange) {
    this.sectionName = event.value.name;
  }
}
  
