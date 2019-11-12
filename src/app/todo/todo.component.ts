import { Component } from "@angular/core";
import { Todo } from "../interfaces/todo";
import { NgForm } from "@angular/forms";

@Component({
  selector: "todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent {
  todos: Todo[] = [
    {
      task: "fold clothes",
      completed: false
    },
    {
      task: "put clothes in dresser",
      completed: false
    },
    {
      task: "relax",
      completed: false
    }
  ];
  newTodoText: string = "";
  filterText: string = "";

  addTodo() {
    this.todos = [
      ...this.todos,
      {
        task: this.newTodoText,
        completed: false
      }
    ];
    this.newTodoText = "";
  }
  completeTask(todo) {
    todo.completed = true;
  }
  deleteTask(todo): void {
    this.todos = this.todos.filter(x => x !== todo);
  }
  getFilteredTodos(): Todo[] {
    if (!this.filterText.trim()) {
      return this.todos;
    }
    const match = this.filterText.trim().toLowerCase();
    return this.todos.filter(todo => todo.task.toLowerCase().includes(match));
  }
}
