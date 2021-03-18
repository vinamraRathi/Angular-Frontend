import { CoursesService } from './../shared/services/courses.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';
import { DebugElement } from '@angular/core';

const coursesServiceStub = {
  all: () => {
    return {
      subscribe: () => {}
    }
  },
  delete: () => {
    return {
      subscribe: () => {}
    }
  }
};

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;
  let de: DebugElement;
  let coursesSErvice: CoursesService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesComponent ],
      providers: [{provide: CoursesService, useValue: coursesServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    coursesSErvice = de.injector.get(coursesSErvice);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call courseService.delete on delete', () => {
    spyOn(coursesSErvice, 'delete').and.callThrough();
    component.deleteCourse(1);
    expect(coursesSErvice.delete).toHaveBeenCalledWith(1);
  });
});
