import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Course } from '../../../interfaces/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-add-edit-courses',
  templateUrl: './add-edit-courses.component.html',
  styleUrls: ['./add-edit-courses.component.css']
})
export class AddEditCoursesComponent implements OnInit {
  formCourse: FormGroup;
  loading: boolean = false;
  operacion: string = 'Agregar ';
  _id: string | undefined;
//validaciones
  constructor(public dialogRef: MatDialogRef<AddEditCoursesComponent>,private fb: FormBuilder, private _courseService:CourseService,private _snackBar: MatSnackBar, @Inject(MAT_DIALOG_DATA) public data: any){
      this.formCourse = this.fb.group({
        name: ['', [Validators.required, Validators.maxLength(40)]],
        description: ['', Validators.required],
        price: ['',[Validators.required], Validators.pattern("^[0-9]*$")],
        lenguage: ['', Validators.required],
        image: ['', Validators.required],
      })
      this._id = data._id;
    }

  ngOnInit(): void {
    this.esEditar(this._id);
  }
  esEditar(_id: string | undefined) {
    if (_id !== undefined) {
      this.operacion = 'Editar ';
      this.getCourse(_id);
    }
  }

  getCourse(_id: string) {
    this._courseService.getCourse(_id).subscribe(data => {
      this.formCourse.setValue({
        name: data.name,
        description: data.description,
        price: data.price,
        lenguage: data.lenguage,
        image:data.image,
      })
    })
  }
  //para cerrar el modal solo seleccionando cancelar

  cancelar(){
    this.dialogRef.close(false)
  }

  addEditPersona() {
    if (this.formCourse.invalid) {
      return;
    }
    //creacion de objeto
    const course: Course = {
      name: this.formCourse.value.name,
      description: this.formCourse.value.description,
      price: this.formCourse.value.price,
      lenguage: this.formCourse.value.lenguage,
      image: this.formCourse.value.image,
    }
    this.loading = true;

    if (this._id == undefined) {

      // Es agregar
      this._courseService.addCourse(course).subscribe(() => {
        this.mensajeExito('agregada');

        this.dialogRef.close();
      })
    } else {

      // Es editar
      this._courseService.updateCourse(this._id, course).subscribe(data => {
        this.mensajeExito('actualizada');
        this.dialogRef.close();
      })

    }
  }
  mensajeExito(operacion: string) {
    this._snackBar.open(`El curso fue ${operacion} con exito`, '', {
      duration: 2000
    });
  }
}
