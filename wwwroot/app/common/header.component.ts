import { Component } from 'angular2/core';

@Component({
    selector: 'header-content',
    templateUrl: 'app/common/header.component.html'
})

export class HeaderComponent {
    pageTitle = 'My Todo App'
}