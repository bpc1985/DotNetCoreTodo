import { Injectable } from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';
import 'rxjs/add/operator/toPromise';

import { CONFIG } from '../config';
import { Todo } from '../entity/todo';

let todoUrl = CONFIG.baseUrls.todos;

@Injectable()
export class TodoService {
    constructor(private _http: Http){}

    //get all todos
    getTodos(){
        return this._http.get(todoUrl)
            .map((response: Response) => <Todo[]>response.json());
    }

    //get a specific todo based on the id
    getTodo(id: number) {
        return this.getTodos()
            .map(todos => todos.find(todo => todo.todoId == id));
    }

    //add a new Todo Item
    //this function is marked private because we call the save function and let the code 
    //decide if this is a create or an update action based on the todo.todoId of the item
    private post(todoItem: Todo): Promise<Todo> {
        return this._http
                    .post(todoUrl, JSON.stringify(todoItem), {headers: this.getJsonHeaders()})
                    .toPromise()
                    .then(() => todoItem)
                    .catch(this.handleError);
    }

    //update and existing todo item
    private put(todo: Todo) {
        let url = `${todoUrl}/${todo.todoId}`;
        return this._http.put(url, JSON.stringify(todo), {headers: this.getJsonHeaders()})
                .toPromise()
                .then(()=> todo)
                .catch(this.handleError);
    }

    //delete an existing todo Item
    delete(todo: Todo) {
        let url = `${todoUrl}/${todo.todoId}`;
        return this._http
                    .delete(url, this.getJsonHeaders())
                    .toPromise()
                    .catch(this.handleError);
    }

    //this functio is called from the components rather than post and put
    save(todo: Todo): Promise<Todo> {
        if(todo.todoId) {
            return this.put(todo)
        }
        return this.post(todo);
    }

    //bad error handling
    handleError(){
        console.log('an error occurred');
    }

    //helper method for headers
    private getJsonHeaders(){
        return new Headers({'Content-Type': 'application/json'});
    }
}