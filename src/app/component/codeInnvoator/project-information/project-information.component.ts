import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-project-information',
  templateUrl: './project-information.component.html',
  styleUrls: ['./project-information.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class ProjectInformationComponent implements OnInit {
  public xyz: string = "";
  public abc: any[] = [{
    name: "section1",
    images:'../../../../assets/images/tech (2).jpg'
  },
  {
    name: "section2",
    images:'../../../../assets/images/tech (3).jpg'
  },
  {
    name: "section3",
    images:'../../../../assets/images/social1 (4).jpg'
  }]

  constructor() { }

  ngOnInit(): void {
    this.xyz = this.abc[0].name;
  }
  radioChange(event: MatRadioChange) {
    this.xyz = event.value.name;
  }
}
  
