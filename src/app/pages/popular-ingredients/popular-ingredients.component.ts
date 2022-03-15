import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-popular-ingredients',
  templateUrl: './popular-ingredients.component.html',
  styleUrls: ['./popular-ingredients.component.scss']
})
export class PopularIngredientsComponent implements OnInit {

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  public displayedColumns: string[] = ['id', 'name', 'description', 'action'];
  public dataSource!: MatTableDataSource<any>;
  public searching: boolean = true;
  constructor(private apiService: ApiService) { }

  async ngOnInit(): Promise<void> {

    await this.getSpecialIngredients();

  }

  async getSpecialIngredients() {
    this.searching = true;
    try {
      var res = await this.apiService.getSpecialIngredients();
      this.dataSource = new MatTableDataSource(res);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
      this.searching = false;
    } catch (error: any) {
      console.log(error.message);
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
