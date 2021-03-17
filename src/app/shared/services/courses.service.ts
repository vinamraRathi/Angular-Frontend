import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private model = 'courses';

  constructor(private http: HttpClient) { }

  all(){
    return this.http.get(this.getUrl());
  }

  find(courseID){
    return this.http.get(this.getUrlByID(courseID));
  }

  create(course){
    return this.http.post(this.getUrl(), course);
  }

  update(course){
    return this.http.post(this.getUrlByID(course.id), course);
  }

  delete(courseID){
    return this.http.delete(this.getUrlByID(courseID));
  }

  private getUrl(){
    return `${BASE_URL}${this.model}`;
  }

  private getUrlByID(id){
    return `${this.getUrl()}/${id}`;
  }
}
