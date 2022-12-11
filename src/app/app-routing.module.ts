import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCategoryComponent } from './components/category/view-category/view-category.component';
import { ViewCourseComponent } from './components/course/view-course/view-course.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ViewUserComponent } from './components/user/view-user/view-user.component';
import { AddEditCoursesComponent } from './components/admin/add-edit-courses/add-edit-courses.component';
import { ListCoursesComponent } from './components/admin/list-courses/list-courses.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch:'full'},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'viewUser', component:ViewUserComponent},
  {path: 'sidebar', component:SidebarComponent},
  {path: 'viewCourse', component:ViewCourseComponent},
  {path: 'viewCategory', component:ViewCategoryComponent},


  {path: 'addCourse', component:AddEditCoursesComponent},
  {path: 'listCourses', component:ListCoursesComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
