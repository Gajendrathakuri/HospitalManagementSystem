import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from "../shared/Components/table-component/table-component";
import { CardComponent } from "../shared/Components/card-component/card-component";

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, CardComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  patients = [
    { id: 1, name: 'Gajendra', age: 22, gender: 'Male' },
    { id: 2, name: 'Anita', age: 30, gender: 'Female' },
    { id: 3, name: 'Ravi', age: 28, gender: 'Male' }
  ];

  patientColumns = [
    { headerName: 'ID', field: 'id' },
    { headerName: 'Name', field: 'name' },
    { headerName: 'Age', field: 'age' },
    { headerName: 'Gender', field: 'gender' }
  ];

  onRowClick(row: any) {
    console.log('Clicked Row:', row);
  }
}
