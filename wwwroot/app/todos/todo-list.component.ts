import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES, Router } from 'angular2/router';

import { TodoService } from './todo.service';
import { Todo } from '../entity/todo';
import { TodoComponent } from './todo.component';

@Component({
    selector: 'router-outlet',
    templateUrl: 'app/todos/todo-list.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class TodolistComponent {
    todos: Todo[];

    constructor(
        private _todoService: TodoService,
        private _router: Router){ }

    ngOnInit(){
        this.loadAllTodos();
    }

    private loadAllTodos() {
        this.todos = [];
        this._todoService.getTodos()
            .subscribe(todos => this.todos = todos);
    }

    deleteTodo(todo){
        this._todoService.delete(todo)
            .then(success => this.loadAllTodos());
    }
}