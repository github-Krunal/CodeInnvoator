import { AfterViewInit, Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[NgTableDirective]'
})
export class NgTableDirectiveDirective implements OnInit, AfterViewInit {
  private columnLength: number | undefined;
  private SELECT_COLUMN_WIDTH: number = 80;
  constructor(private matTableColumnRef: ElementRef) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.calculateTableWidth();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.calculateTableWidth();
  }

  private calculateTableWidth() {
    let matTable = document.querySelector('.ng-material-table');
    let matTableSize: any | undefined = matTable?.getBoundingClientRect();
    var element: any | undefined = document.querySelector("[column-length]")?.attributes;
    this.columnLength = this.getColumnLength(element);
    this.setColumnWidth(matTableSize);
  }

  private setColumnWidth(matTableSize: { width: number; }) {
    switch (this.matTableColumnRef.nativeElement.id) {
      case 'select':
        (this.matTableColumnRef.nativeElement as HTMLElement).style.flex = `0 0 ${this.SELECT_COLUMN_WIDTH}px`;
        break;
      case 'ng-matheader-footer':
        (this.matTableColumnRef.nativeElement as HTMLElement).style.width = this.calculateTableSize(matTableSize);
        break;
      default: (this.matTableColumnRef.nativeElement as HTMLElement).style.flex = `0 0 ${this.calculateWidthSize(matTableSize)}`;
        break;
    }
  }
  private calculateTableSize(matTableSize: { width: number; }) {
    let width = (this.columnLength ? this.columnLength : 1) * 150;
    if (matTableSize && matTableSize.width < width) {
      return `${width + this.SELECT_COLUMN_WIDTH}px`
    }
    else {
      return '100%'
    }
  }

  private getColumnLength(element: any[]): number | undefined {
    let columnlength: number = 0;
    for (let i = 0; i < element.length; i++) {
      if ('column-length' === element[i].name) {
        columnlength = parseInt(element[i].nodeValue);
      }
    }
    return columnlength - 1;
  }

  private calculateWidthSize(matTableSize: { width: number; }) {
    let ngwidth: string;
    let width = (this.columnLength ? this.columnLength : 1) * 150;
    if (this.calculateTableSize(matTableSize) != '100%') {
      if (matTableSize && matTableSize.width < width) {
        ngwidth = '150'
      }
      else {
        ngwidth = ((matTableSize?.width / (this.columnLength ? this.columnLength : 1)) - this.SELECT_COLUMN_WIDTH).toString();
      }
    }
    else {
      ngwidth = "";
    }
    return `${ngwidth}px`
  }
}
