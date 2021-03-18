import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should have the correct title', () =>{
    expect(component.title).toBe('hello users');
  });

  it('should render the correct title', () =>{
    const h1 = de.query(By.css('h1'));
    expect(h1.nativeElement.innerText).toBe('hello users');
    component.title = 'Hey there';
    fixture.detectChanges();
    expect(h1.nativeElement.innerText).toBe('Hey there');
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
