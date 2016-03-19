import {Component} from 'angular2/core';
import {PeopleService} from './people.service';
import {PeopleComponent} from './people.component';

@Component({
    selector:'my-app',
    template:`
    <div class="row">
        <people *ngFor="#person of people" [person]="person"></people>
    </div>
    `,
    providers:[PeopleService],
    directives:[PeopleComponent]
})
export class AppComponent{
    people;
    constructor(peopleService:PeopleService){
        this.people = peopleService.getPeople();
    }
}

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