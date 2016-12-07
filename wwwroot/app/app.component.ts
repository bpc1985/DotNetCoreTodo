import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import 'rxjs/Rx';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TodosComponent } from './todos/index';
import { TodoService } from './todos/todo.service';
import { HeaderComponent } from './common/header.component';


@Component({
    selector: 'todo-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES, HeaderComponent],
    providers: [
        HTTP_PROVIDERS,
        ROUTER_PROVIDERS,
        TodoService
    ]
})

@RouteConfig([
    { path: '/', name: 'Dashboard', component: DashboardComponent},
    { path: '/todos/...', name: 'Todos', component: TodosComponent }
])

export class AppComponent {}