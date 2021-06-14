import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class KanbanBoardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
