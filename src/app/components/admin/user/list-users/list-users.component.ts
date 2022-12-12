import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../../../interfaces/user';
import { UserService } from '../../../../services/user.service';
import { AddEditUsersComponent } from '../add-edit-users/add-edit-users.component';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  //columnas de la tabla
  displayedColumns: string[] = ['nombre', 'correo', 'acciones'];
  dataSource: MatTableDataSource<User>;
  loading: boolean = false;
  loader = true;
  //paginator
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    public dialog: MatDialog,
    private _userService: UserService,
    private _snackBar: MatSnackBar) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.getUsers();
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getUsers() {
    this.loading = true;

    this._userService.getUsers().subscribe(data => {
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
  addEditUser(_id?: string) {
    const dialogRef = this.dialog.open(AddEditUsersComponent, {
      width: '550px',
      disableClose: true,
      data: { _id: _id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.getUsers();
      }
    });
  }

  deleteUser(_id: string) {
    this.loading = true;

    setTimeout(() => {
      this._userService.deleteUser(_id).subscribe(() => {
        this.getUsers();
        this.mensajeExito();

      })
    }, 1000);
  }

  mensajeExito() {
    this._snackBar.open('¡El usuario fue eliminado con exito!', '', {
      duration: 2000,
      panelClass: ['color-snackbar']
    });
  }

}
