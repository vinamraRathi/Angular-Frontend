import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  currentCourse = null;
  courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'JavaScript',
      description: 'Learn the fundamentals of Javascript',
      percentComplete: 45,
      favorite: true
    },
    {
      id: 3,
      title: 'Node.js',
      description: 'Learn the fundamentals of Node.js',
      percentComplete: 30,
      favorite: true
    },
    {
      id: 4,
      title: 'Python',
      description: 'Learn the fundamentals of Python',
      percentComplete: 75,
      favorite: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  resetSelectedCourse(){
    const emplyCourse = {
      id: null,
      title: '',
      description: '',
      percentage: 0,
      favorite: false,
    };
  }

  selectCourse(course){
    this.currentCourse = course;
  }

  deleteCourse(courseID){
    console.log('Course Deleted', courseID);
  }

}
