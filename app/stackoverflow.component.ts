import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector:'stackoverflow',
    template:`
    <h3>StackOverFlow rating system</h3>
    <div id="stack-over-flow-wrapper">
        <div class="stack"><i class="glyphicon glyphicon-menu-up" [class.up]="myVote==1" (click)="upVote()"></i></div>
        <div class="stack"><span>{{ topicLikes }}</span></div>
        <div class="stack"><i class="glyphicon glyphicon-menu-down" [class.down]="myVote==-1" (click)="downVote()"></i></div>
    </div>
    `,
    styles:[`
        #stack-over-flow-wrapper{
            padding:30px
        }
        .stack{
            width: 20px
        }
        .stack span{
            font-size:2em
        }
        .glyphicon{
            font-size:2em;
        }
        .glyphicon.up{
            color: orange
        }
        .glyphicon.down{
            color: red
        }
    `]
})
export class StackOverFlow{
    
    voteAmount:Number;
    
    @Input() topicLikes;
    @Input() myVote;
    
    @Output() vote = new EventEmitter();
    
    // This interface to execute custom initialization logic after your directive's data-bound properties have been initialized
    ngOnInit(){
        this.voteAmount = this.topicLikes;
    }
    
    upVote(){
        if(this.myVote ==1){
            return;
        }
        this.myVote++;
        this.myVote == 0? this.vote.emit({myVote: "doesn't have any opinion about"}) : this.vote.emit({myVote: "like"});
    }
    
    downVote(){
        if(this.myVote ==-1){
            return;
        }
        this.myVote--;
        this.myVote == 0? this.vote.emit({myVote: "doesn't have any opinion about"}) : this.vote.emit({myVote: "doesn't like"});
    }
}