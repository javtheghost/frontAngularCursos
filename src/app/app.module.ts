import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreaterUserComponent } from './components/user/creater-user/creater-user.component';
import { ViewUserComponent } from './components/user/view-user/view-user.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ViewCourseComponent } from './components/course/view-course/view-course.component';
import { ViewCategoryComponent } from './components/category/view-category/view-category.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AddEditCoursesComponent } from './components/admin/add-edit-courses/add-edit-courses.component';
import { ListCoursesComponent } from './components/admin/list-courses/list-courses.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';



import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ListCategoriesComponent } from './components/admin/category/list-categories/list-categories.component';
import { AddEditCategoriesComponent } from './components/admin/category/add-edit-categories/add-edit-categories.component';
import { AddEditUsersComponent } from './components/admin/user/add-edit-users/add-edit-users.component';
import { ListUsersComponent } from './components/admin/user/list-users/list-users.component';

//ng material
@NgModule({
  declarations: [
    AppComponent,
    CreaterUserComponent,
    ViewUserComponent,
    EditUserComponent,
    DashboardComponent,
    SidebarComponent,
    ViewCourseComponent,
    ViewCategoryComponent,
    FooterComponent,
    CarouselComponent,
    AddEditCoursesComponent,
    ListCoursesComponent,
    ListCategoriesComponent,
    AddEditCategoriesComponent,
    AddEditUsersComponent,
    ListUsersComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSkeletonLoaderModule,
    BrowserAnimationsModule,

    MatDialogModule,
    SharedModule
  ],
  providers: [{
    provide: MatDialogRef,
    useValue: {}
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
