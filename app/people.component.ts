import {Component, Input} from 'angular2/core'
import {LikeComponent} from './like.component'
@Component({
    selector:'people',
    template:`
    <div class="col-md-12">
        <div class="col-md-2">
            <img [attr.src]="person.picture"/>
        </div>
        <div class="col-md-10">
            <div class="col-md-12">
                <span>{{person.name}}</span><span>{{person.twitter}}</span>
            </div>
            <div class="col-md-12">
                <p>{{person.text }}</p>
            </div>
            <div class="col-md-12">
               <like [likes]="person.likes" [userLike]="person.userLike"></like>
            </div>
        </div>
    </div>`,
    directives:[LikeComponent]
})
export class PeopleComponent{
    @Input() person;
}

/*
picture: 'http://lorempixel.com/100/100/people/2/',
                name: 'Angular2',
                twitter: '@angularnetwork',
                text: 'Would you like to know about the future web developing? Go ahead',
                likes: 4*/