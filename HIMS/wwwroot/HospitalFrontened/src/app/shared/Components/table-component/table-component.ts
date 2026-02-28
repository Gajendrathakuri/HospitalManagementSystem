import { NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter, ViewChild, SimpleChanges, OnChanges } from '@angular/core';
import { AgGridAngular } from "ag-grid-angular";
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-tablecomponent',
  templateUrl: './table-component.html',
  imports: [AgGridAngular],
})
export class TableComponent {
  @Input() data: any[] = [];
  @Input() columns: any[]=[];
  @Input() defaultColDef: any = {
    sortable: true,
    filter: true,
    resizable: true,
    flex:1,
    minWidth:80,
  };
  @Output() rowClicked = new EventEmitter<any>();
  selectedRow: any = null; 

  onRowClick(event: any) {
    this.rowClicked.emit(event);
  }
}
