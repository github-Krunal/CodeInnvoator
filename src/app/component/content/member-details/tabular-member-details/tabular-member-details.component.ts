import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  City: string;
  Country: string;
  state: string;
  department: string;
  location: string;
  level: string;
  street: string;
  religon: string;
  gender: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', City: 'krunal', Country: 'vaibhav', state: 'James', department: 'Sales and order', location: 'Nagpur', gender: 'Male', level: 'Manager', religon: 'Hindu', street: 'Besa road' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', City: 'krunal', Country: 'vaibhav', state: 'James', department: 'Sales and order', location: 'Nagpur', gender: 'Male', level: 'Manager', religon: 'Hindu', street: 'Besa road' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', City: 'krunal', Country: 'vaibhav', state: 'James', department: 'Sales and order', location: 'Nagpur', gender: 'Male', level: 'Manager', religon: 'Hindu', street: 'Besa road' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', City: 'krunal', Country: 'vaibhav', state: 'James', department: 'Sales and order', location: 'Nagpur', gender: 'Male', level: 'Manager', religon: 'Hindu', street: 'Besa road' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', City: 'krunal', Country: 'vaibhav', state: 'James', department: 'Sales and order', location: 'Nagpur', gender: 'Male', level: 'Manager', religon: 'Hindu', street: 'Besa road' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', City: 'krunal', Country: 'vaibhav', state: 'James', department: 'Sales and order', location: 'Nagpur', gender: 'Male', level: 'Manager', religon: 'Hindu', street: 'Besa road' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', City: 'krunal', Country: 'vaibhav', state: 'James', department: 'Sales and order', location: 'Nagpur', gender: 'Male', level: 'Manager', religon: 'Hindu', street: 'Besa road' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', City: 'krunal', Country: 'vaibhav', state: 'James', department: 'Sales and order', location: 'Nagpur', gender: 'Male', level: 'Manager', religon: 'Hindu', street: 'Besa road' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', City: 'krunal', Country: 'vaibhav', state: 'James', department: 'Sales and order', location: 'Nagpur', gender: 'Male', level: 'Manager', religon: 'Hindu', street: 'Besa road' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', City: 'krunal', Country: 'vaibhav', state: 'James', department: 'Sales and order', location: 'Nagpur', gender: 'Male', level: 'Manager', religon: 'Hindu', street: 'Besa road' },
];
@Component({
  selector: 'tabular-member-details',
  templateUrl: './tabular-member-details.component.html',
  styleUrls: ['./tabular-member-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TabularMemberDetailsComponent implements OnInit {
  displayedColumns: { name: string, displayname: string }[] = [
    {
      name: 'position',
      displayname: 'Position Name'
    },
    {
      name: 'name',
      displayname: 'Name value'
    },
    {
      name: 'select',
      displayname: 'Select'
    }
  ];

  displayedvalue: string[] = ['select', 'position', 'name'];
  // displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol', 'City', 'Country', 'state', 'department', 'location', 'gender', 'level', 'religon', 'street'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
