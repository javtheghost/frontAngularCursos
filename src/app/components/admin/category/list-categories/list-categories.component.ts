import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';
import { AddEditCategoriesComponent } from '../add-edit-categories/add-edit-categories.component';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css'],
})
export class ListCategoriesComponent implements OnInit {
  //columnas de la tabla
  displayedColumns: string[] = ['nombre', 'acciones'];
  dataSource: MatTableDataSource<Category>;
  loading: boolean = false;
  loader = true;
  //paginator
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    public dialog: MatDialog,
    private _categoryService: CategoryService,
    private _snackBar: MatSnackBar
  ) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.getCategories();
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getCategories() {
    this.loading = true;

    this._categoryService.getCategories().subscribe(data => {
      this.loading = false;
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.loader = false;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  addEditCategory(_id?: string) {
    const dialogRef = this.dialog.open(AddEditCategoriesComponent, {
      width: '550px',
      disableClose: true,
      data: { _id: _id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.getCategories();
      }
    });
  }

  deleteCourse(_id: string) {
    this.loading = true;

    setTimeout(() => {
      this._categoryService.deleteCategory(_id).subscribe(() => {
        this.getCategories();
        this.mensajeExito();

      })
    }, 1000);
  }

  mensajeExito() {
    this._snackBar.open('¡La categoria fue eliminada con exito!', '', {
      duration: 2000,
      panelClass: ['color-snackbar']
    });
  }
}
