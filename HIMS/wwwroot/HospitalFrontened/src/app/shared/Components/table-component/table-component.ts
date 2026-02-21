


import { Component, Input, Output, EventEmitter } from '@angular/core';

import { AgGridAngular } from "ag-grid-angular";

@Component({
  selector: 'app-tablecomponent',
  templateUrl: './table-component.html',
  imports: [AgGridAngular],
})
export class TableComponent {

  @Input() data: any[] = [];
  @Input() columns: any[] = [];
  @Input() defaultColDef: any = {
    sortable: true,
    filter: true,
    resizable: true,
    flex:1,
    minWidth:120,
  };

  @Output() rowClicked = new EventEmitter<any>();

  selectedRow: any = null; // Store clicked row

  onRowClick(event: any) {
     this.rowClicked.emit(event.data); 

  }
}
