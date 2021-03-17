import { CoursesService } from './../shared/services/courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  selectedCourse = null;
  courses = null;

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.resetSelectedCourse();
    this.loadCourses();
  }

  resetSelectedCourse(){
    const emptyCourse = {
      id: null,
      title: '',
      description: '',
      percentage: 0,
      favorite: false,
    };

    this.selectedCourse = emptyCourse;
  }

  selectCourse(course){
    this.selectedCourse = course;
  }

  refereshCourses(){
    this.resetSelectedCourse();
    this.loadCourses();
  }

  loadCourses(){
    this.coursesService.all().subscribe(courses => this.courses = courses);
  }

  saveCourse(course){
    if (course.id){
      this.coursesService.update(course).subscribe(result => this.refereshCourses());
    }
    else {
      this.coursesService.create(course).subscribe(result => this.refereshCourses());
    }
  }

  deleteCourse(courseID){
    this.coursesService.delete(courseID).subscribe(result => this.refereshCourses());
  }

  cancel(){
    this.resetSelectedCourse();
  }

}
