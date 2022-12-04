import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/interfaces/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {

  courses: Course[] = []
  constructor(private _courseService: CourseService) { }

  ngOnInit(): void {
    this.onDataCoursesTable()
  }

  onDataCoursesTable(){
    this._courseService.getCourses().subscribe(res =>{
      this.courses = res
    })
  }

}
