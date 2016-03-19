import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector:'favorite',
    templateUrl:'app/favorite.template.html',
    styles:[`
        .glyphicon{
            color:green
        }
        .glyphicon-heart.hover{
            color: deeppink
        }
        .glyphicon-heart{
            color:#ccc
        }
    `]
})

export class FavoriteComponent{
    // Now this property becames in input property instead of normal property
    // Now is reachable from outside and is part of the public API
    // The name that is in the parenthesis, is the name for outside and the other for that specific component
    @Input('is-favorite') isFavorite;
    @Input()likes;
    @Output('change-event') change = new EventEmitter();
    
    starEvent(){
        this.change.emit({newValue:this.isFavorite})
        this.isFavorite = !this.isFavorite;
    }
    
    likeEvent(){
        this.isFavorite? this.likes++ : this.likes--;
    }
}