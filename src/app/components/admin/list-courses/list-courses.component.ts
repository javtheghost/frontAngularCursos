import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
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
  displayedColumns: string[] = ['nombre', 'descripcion', 'precio', 'imagen', 'acciones'];
  dataSource: MatTableDataSource<Course>;
  //asignando la data a la lista
  constructor(public dialog: MatDialog, private _courseService: CourseService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.getCourses();
  }
  //modal
  showModal = false;
  addEditCourse(): void {
    const dialogRef = this.dialog.open(AddEditCoursesComponent, {
      width: '40%',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  getCourses(){
    this._courseService.getCourses().subscribe(data=>
      this.dataSource.data=data
    )
  }
  deleteCourse(id: String){
    this._courseService.deleteCourse(id).subscribe(() => {
      console.log('se ha eliminado')
    })
  }

}
