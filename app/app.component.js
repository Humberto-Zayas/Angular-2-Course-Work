System.register(['angular2/core', './favorite.component', './courses.component', './like.component', './voter.component', './tweet.component', './tweet.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, favorite_component_1, courses_component_1, like_component_1, voter_component_1, tweet_component_1, tweet_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (voter_component_1_1) {
                voter_component_1 = voter_component_1_1;
            },
            function (tweet_component_1_1) {
                tweet_component_1 = tweet_component_1_1;
            },
            function (tweet_service_1_1) {
                tweet_service_1 = tweet_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(tweetService) {
                    this.title = "Angular App";
                    this.post = {
                        title: "Title",
                        isFavorite: true
                    };
                    this.tweet = {
                        totalLikes: 10,
                        iLike: false
                    };
                    this.tweets = tweetService.getTweets();
                }
                AppComponent.prototype.onClick = function ($event) {
                    console.log("clicked", $event);
                };
                AppComponent.prototype.onFavoriteChange = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <button (click)=\"onClick($event)\">Submit</button>\n    <input type=\"text\" [(ngModel)]=\"title\" />\n    <input type=\"button\" (click)=\"title = ''\" value=\"Clear\" />\n    Preview: {{title}}\n    <h1>My First Angular 2 App</h1>\n    <courses></courses>\n    <hr>\n    <favorite [isFavorite]=\"post.isFavorite\" (change)=\"onFavoriteChange($event)\"></favorite>\n    <hr>\n    <like [totalLikes]=\"tweet.totalLikes\" [iLike]=\"tweet.iLike\"></like>\n    <hr>\n    <vote></vote>\n    <hr>\n    <tweet></tweet>\n     <div *ngFor=\"#tweet of tweets\">\n            <tweet [data]=\"tweet\"></tweet>\n        </div>\n    ",
                        //<input type="text" [value]="title" (input)="title = $event.target.value"/>
                        directives: [courses_component_1.CoursesComponent, favorite_component_1.FavoriteComponent, like_component_1.LikeComponent, voter_component_1.VoterComponent, tweet_component_1.TweetComponent],
                        providers: [tweet_service_1.TweetService]
                    }), 
                    __metadata('design:paramtypes', [tweet_service_1.TweetService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map