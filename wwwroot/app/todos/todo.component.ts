import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams, Router, ROUTER_DIRECTIVES } from 'angular2/router';

import { TodoService } from './todo.service';
import { Todo } from '../entity/todo';

@Component({
    selector: 'router-link',
    templateUrl: 'app/todos/todo.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class TodoComponent implements OnInit {
    todo: Todo;

    constructor(
        private _routeParams: RouteParams,
        private _router: Router,
        private _todoService: TodoService){}

    ngOnInit(){
        if(!this.todo){
            let id = +this._routeParams.get('id');
            if(id !== 0){
                this._todoService.getTodo(id)
                    .subscribe((todo: Todo) => this.todo = todo);
            } else {
                this.todo = new Todo();
            }
        }
    }

    saveTodo(){
        this._todoService.save(this.todo)
            .then(success => {
                this._router.navigate(['Todos']);
            });
    }

    cancel(){
        let link = ['Todos'];
        this._router.navigate(link);
    }
}