import {Component, Input} from 'angular2/core';

@Component({
    selector:'like',
    template:`
    <i class="glyphicon glyphicon-heart" [class.like]="userLike" (click)="likeEvent()">{{likes}}</i>
    `,
    styles:[`
        .glyphicon.like{
            color:deeppink;
        }
    `]
})
export class LikeComponent{
    @Input() likes;
    @Input() userLike;
    
    likeEvent(){
        if(this.userLike){
            this.userLike = false;
            this.likes--;
        } else {
            this.userLike = true;
            this.likes++;    
        }
    }
}