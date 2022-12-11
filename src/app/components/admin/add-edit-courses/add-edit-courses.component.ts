import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatDialogModule, MatDialog } from '@angular/material/dialog';
import { Course } from '../../../interfaces/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-add-edit-courses',
  templateUrl: './add-edit-courses.component.html',
  styleUrls: ['./add-edit-courses.component.css']
})
export class AddEditCoursesComponent implements OnInit {

  formCourse: FormGroup;
//validaciones
  constructor(public dialogRef: MatDialogRef<AddEditCoursesComponent>,private fb: FormBuilder, private _courseService:CourseService){
      this.formCourse = this.fb.group({
        name: ['', [Validators.required, Validators.maxLength(30)]],
        description: ['', Validators.required],
        price: ['',[Validators.required], Validators.pattern("^[0-9]*$")],
        lenguage: ['',Validators.required],
        image: ['',Validators.required],
      })
    }

  ngOnInit(): void {
  }

  //para cerrar el modal solo seleccionando cancelar

  cancelar(){
    this.dialogRef.close()
  }
  //obtener los valores de los forms
  addEditCourse(){
    if(this.formCourse.invalid){
      return;
    }

    const course: Course = {
      name: this.formCourse.value.name,
      description: this.formCourse.value.description,
      price: this.formCourse.value.price,
      image: this.formCourse.value.image,
      lenguage: this.formCourse.value.lenguage
    }
    this._courseService.addPersona(course).subscribe(() => {
      console.log('persona agregada')
    });
    console.log(course)
  }
}
