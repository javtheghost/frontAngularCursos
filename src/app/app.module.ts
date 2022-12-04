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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
