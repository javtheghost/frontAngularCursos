import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategoryService } from '../../../../services/category.service';
import { Category } from '../../../../interfaces/category';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-categories',
  templateUrl: './add-edit-categories.component.html',
  styleUrls: ['./add-edit-categories.component.css']
})
export class AddEditCategoriesComponent implements OnInit {
  formCategory: FormGroup;
  loading: boolean = false;
  operacion: string = 'Agregar ';
  _id: string | undefined;
  constructor(public dialogRef: MatDialogRef<AddEditCategoriesComponent>
    ,private fb: FormBuilder,
    private _categoryService:CategoryService,private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.formCategory = this.fb.group({
        name: ['', [Validators.required, Validators.maxLength(40)]]
      })
      this._id = data._id;
    }

  ngOnInit(): void {
    this.esEditar(this._id);
  }
  esEditar(_id: string | undefined) {
    if (_id !== undefined) {
      this.operacion = 'Editar ';
      this.getCategory(_id);
    }
  }

  getCategory(_id: string) {
    this._categoryService.getCategory(_id).subscribe(data => {
      this.formCategory.setValue({
        name: data.name
      })
    })
  }
  //para cerrar el modal solo seleccionando cancelar

  cancelar(){
    this.dialogRef.close(false)
  }
  addEditCategory() {
    if (this.formCategory.invalid) {
      return;
    }
    //creacion de objeto
      //creacion de objeto
    const category: Category = {
      name: this.formCategory.value.name
    }
    this.loading = true;

    if (this._id == undefined) {

      // Es agregar
      this._categoryService.addCategory(category).subscribe(() => {
        this.mensajeExito('agregada');

        this.dialogRef.close();

      })
    } else {

      // Es editar
      this._categoryService.updateCategory(this._id, category).subscribe(data => {
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
