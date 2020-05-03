import {Component, OnInit, ViewChild} from '@angular/core';
import {SpotDataSource} from './spot.data.source';
import {SpotService} from './spot.service';
import {SelectionModel} from '@angular/cdk/collections';
import {Spot} from '../api/spot';
import {MatTable} from '@angular/material/table';

@Component({
  selector: 'app-spot-table',
  templateUrl: './spot.component.html',
  styleUrls: ['./spot.component.css']
})
export class SpotComponent implements OnInit {
  dataSource: SpotDataSource;
  columns: string[];
  selection = new SelectionModel<Spot>(true, []);
  displayedColumns = ['select', 'name', 'description', 'coverPhoto', 'country', 'city', 'street', 'house', 'apartment', 'postalCode', 'category', 'subcategory'];
  @ViewChild(MatTable) table: MatTable<any>;

  constructor(private spotService: SpotService) { }

  ngOnInit() {
    this.dataSource = new SpotDataSource(this.spotService);
    this.dataSource.loadSpots();
  }

  format(col: string){
    return col.charAt(0).toUpperCase() + col.slice(1);
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  approveSelected() {
    this.spotService.approveSpots(this.selection.selected).subscribe(res => {
      this.dataSource.data = this.dataSource.loadSpots();
      this.table.renderRows();
    });
  }
}
