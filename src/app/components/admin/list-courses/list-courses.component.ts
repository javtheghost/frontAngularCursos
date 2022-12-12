import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CourseService } from 'src/app/services/course.service';
import { Course } from '../../../interfaces/course';
import { AddEditCoursesComponent } from '../add-edit-courses/add-edit-courses.component';



@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {


  //columnas de la tabla
  displayedColumns: string[] =  ['imagen','nombre', 'descripcion', 'precio', 'idioma', 'acciones'];
  dataSource: MatTableDataSource<Course>;
  loading: boolean = false;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  //asignando la data a la lista
  constructor(public dialog: MatDialog, private _courseService: CourseService,
    private _snackBar: MatSnackBar) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.getCourses();
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getCourses() {
    this.loading = true;

    this._courseService.getCourses().subscribe(data => {
      this.loading = false;
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  addEditCourse(_id?: string) {
    const dialogRef = this.dialog.open(AddEditCoursesComponent, {
      width: '550px',
      disableClose: true,
      data: { _id: _id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.getCourses();
      }
    });
  }

  deleteCourse(_id: string) {
    this.loading = true;

    setTimeout(() => {
      this._courseService.deleteCourse(_id).subscribe(() => {
        this.getCourses();
        this.mensajeExito();

      })
    }, 1000);
  }

  mensajeExito() {
    this._snackBar.open('El curso fue eliminado con exito', '', {
      duration: 2000
    });
  }
}
