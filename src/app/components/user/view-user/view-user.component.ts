import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  users: User[] = []

  constructor(private _productService: UserService) { }

  ngOnInit(): void {
    this.onDataProvidersTable()
  }
  onDataProvidersTable(){
    this._productService.getProviders().subscribe(res => {
      this.users = res;
    });
  }
}
