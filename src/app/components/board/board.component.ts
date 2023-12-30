import {Component, OnInit} from '@angular/core';
// import {AgGridModule} from "ag-grid-angular";
import {ColDef} from 'ag-grid-community';
// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-quartz.css';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent implements OnInit{

  rowData: any;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    // this.dataService.getData();
    // this.dataService.sbj.subscribe((data) => {
    //   console.log(data)
    // })
  }
  columnDefs: ColDef[] = [
    {field: 'name'},
    {field: 'cp'},
    {field: 'memory'},
    {field: 'disk'},
    {field: 'network'},
  ]
}
