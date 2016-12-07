import { Component, OnInit } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { TodolistComponent } from './todo-list.component';
import { TodoComponent } from './todo.component';
import { Todo } from '../entity/todo';
import { TodoService } from './todo.service';

@Component({
    selector: 'todo-root',
    template: `
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [TodoService]
})

@RouteConfig([
    { path: '/', name: 'Todos', component: TodolistComponent, useAsDefault: true },
    { path: '/:id', name: 'Todo', component: TodoComponent }
])

export class TodosComponent {}