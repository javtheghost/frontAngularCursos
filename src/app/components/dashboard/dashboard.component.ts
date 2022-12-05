import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { Course } from '../../interfaces/course';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  courses: Course[] = [];
  loader = true;
  constructor(private _courseService: CourseService) { }

  ngOnInit(): void {
    this.onDataCoursesTable();
  }
  onDataCoursesTable(){
    this._courseService.getCourses().subscribe(res =>{
      this.courses = res;
      this.loader = false;
    })
  }

}
