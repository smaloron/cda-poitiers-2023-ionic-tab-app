import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoFormPage } from './todo-form.page';

describe('TodoFormPage', () => {
  let component: TodoFormPage;
  let fixture: ComponentFixture<TodoFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TodoFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
