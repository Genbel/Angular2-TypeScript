System.register(['angular2/core', './people.service', './people.component'], function(exports_1, context_1) {
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
    var core_1, people_service_1, people_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (people_service_1_1) {
                people_service_1 = people_service_1_1;
            },
            function (people_component_1_1) {
                people_component_1 = people_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(peopleService) {
                    this.people = peopleService.getPeople();
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <div class=\"row\">\n        <people *ngFor=\"#person of people\" [person]=\"person\"></people>\n    </div>\n    ",
                        providers: [people_service_1.PeopleService],
                        directives: [people_component_1.PeopleComponent]
                    }), 
                    __metadata('design:paramtypes', [people_service_1.PeopleService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
/*import {Component} from 'angular2/core'
import {FavoriteComponent} from './favorite.component';
import {StackOverFlow} from './stackoverflow.component'

// This it calls in Type Script decorator and is part of the class
@Component({
    selector: 'my-app',
    template: `
    <div class="row" style="padding:20px">
        <div class="col-md-12">
            <favorite [is-favorite]="post.favorite" [likes]="post.likes" (change-event)="onFavoriteChange($event)" (vote)="votePoint($event)"></favorite>
        </div>
        <div class="col-md-12">
            <stackoverflow [topicLikes]="stackOverFlow.likes" [myVote]="stackOverFlow.voted" (vote)="votePoint($event)"></stackoverflow>
            <h4>The user {{vote}} the answer</h4>
        </div>
    </div>`,
    directives:[FavoriteComponent, StackOverFlow]
})
export class AppComponent {
    
    vote = "doesn't have any opinion about";
    
    post = {
        title: 'Hello Angular2',
        favorite: false,
        likes: 10
    }
    
    stackOverFlow = {
        likes: 10,
        voted: 0
    }
    
    onFavoriteChange($event){
        console.log($event);
    }
    
    votePoint($event){
        this.vote = $event.myVote;
    }
}*/ 
//# sourceMappingURL=app.component.js.map