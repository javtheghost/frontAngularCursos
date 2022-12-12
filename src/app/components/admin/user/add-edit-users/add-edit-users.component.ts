import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../../../interfaces/user';
import { ListUsersComponent } from '../list-users/list-users.component';
@Component({
  selector: 'app-add-edit-users',
  templateUrl: './add-edit-users.component.html',
  styleUrls: ['./add-edit-users.component.css']
})
export class AddEditUsersComponent implements OnInit {
  formUser: FormGroup;
  loading: boolean = false;
  operacion: string = 'Agregar ';
  _id: string | undefined;
  constructor(public dialogRef: MatDialogRef<AddEditUsersComponent>
    ,private fb: FormBuilder,
    private _userService:UserService,private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) {
      this.formUser = this.fb.group({
        name: ['', [Validators.required, Validators.maxLength(40)]],
        email: ['', [Validators.required]]

      })
      this._id = data._id;
    }

  ngOnInit(): void {
    this.esEditar(this._id);
  }
  esEditar(_id: string | undefined) {
    if (_id !== undefined) {
      this.operacion = 'Editar ';
      this.getUser(_id);
    }
  }

  getUser(_id: string) {
    this._userService.getUser(_id).subscribe(data => {
      this.formUser.setValue({
        name: data.name,
        email: data.email
      })
    })
  }
  //para cerrar el modal solo seleccionando cancelar

  cancelar(){
    this.dialogRef.close(false)
  }
  addEditUser() {
    if (this.formUser.invalid) {
      return;
    }
    //creacion de objeto
      //creacion de objeto
      const user: User = {
        name: this.formUser.value.name,
        email: this.formUser.value.email
      }
      this.loading = true;

      if (this._id == undefined) {

        // Es agregar
        this._userService.addUsers(user).subscribe(() => {
          this.mensajeExito('agregada');

          this.dialogRef.close();

        })
      }else{
         // Es editar
        this._userService.updateUser(this._id, user).subscribe(data => {
        this.mensajeExito('actualizada');

        this.dialogRef.close();
      })
      }
  }
  mensajeExito(operacion: string) {
    this._snackBar.open(`El usuario fue ${operacion} con exito`, '', {
      duration: 2000
    });
  }

}
