import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCategoryComponent } from './components/category/view-category/view-category.component';
import { ViewCourseComponent } from './components/course/view-course/view-course.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ViewUserComponent } from './components/user/view-user/view-user.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch:'full'},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'viewUser', component:ViewUserComponent},
  {path: 'sidebar', component:SidebarComponent},
  {path: 'viewCourse', component:ViewCourseComponent},
  {path: 'viewCategory', component:ViewCategoryComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
