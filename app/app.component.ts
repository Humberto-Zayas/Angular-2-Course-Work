import {Component} from 'angular2/core';
import {FavoriteComponent} from './favorite.component';
import {CoursesComponent} from './courses.component';
import {LikeComponent} from './like.component';
import {VoterComponent} from './voter.component';
import {TweetComponent} from './tweet.component';
import {TweetService} from './tweet.service'


@Component({
    selector: 'my-app',
    template: `
    <button (click)="onClick($event)">Submit</button>
    <input type="text" [(ngModel)]="title" />
    <input type="button" (click)="title = ''" value="Clear" />
    Preview: {{title}}
    <h1>My First Angular 2 App</h1>
    <courses></courses>
    <hr>
    <favorite [isFavorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorite>
    <hr>
    <like [totalLikes]="tweet.totalLikes" [iLike]="tweet.iLike"></like>
    <hr>
    <vote></vote>
    <hr>
    <tweet></tweet>
     <div *ngFor="#tweet of tweets">
            <tweet [data]="tweet"></tweet>
        </div>
    `,
    
    //<input type="text" [value]="title" (input)="title = $event.target.value"/>


    directives: [CoursesComponent, FavoriteComponent, LikeComponent, VoterComponent, TweetComponent] 
    providers: [TweetService]

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

	tweet = {
		totalLikes:10,
		iLike: false
	}

     tweets: any[];
    
    constructor(tweetService: TweetService){
        this.tweets = tweetService.getTweets();
    }
}