import {Component} from 'angular2/core';
import {FavoriteComponent} from './favorite.component';
import {CoursesComponent} from './courses.component';


@Component({
    selector: 'my-app',
    template: `
    <button (click)="onClick($event)">Submit</button>
    <input type="text" [(ngModel)]="title" />
    <input type="button" (click)="title = ''" value="Clear" />
    Preview: {{title}}
    <h1>My First Angular 2 App</h1>
    <courses></courses>
    <favorite [isFavorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorite>
    `,
    
    //<input type="text" [value]="title" (input)="title = $event.target.value"/>


    directives: [CoursesComponent, FavoriteComponent] 
})
export class AppComponent { 
	onClick($event){
		console.log("clicked", $event);
	}

	title = "Angular App";

	post = {
		title: "Title",
		isFavorite: true
	}

	onFavoriteChange($event){
		console.log($event);
	}
}