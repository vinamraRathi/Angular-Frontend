import { LessonsService } from './../shared/services/lessons.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentLesson = null;
  courseLessons = null;

  constructor(private lessonService: LessonsService) { }

  ngOnInit(): void {
    this.courseLessons = this.lessonService.all();
  }

  selectLesson(lesson) {
    console.log('Select lesson fired:', lesson);
    this.currentLesson = lesson;
  }
}
