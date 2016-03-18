import {Component} from 'angular2/core'

// This it calls in Type Script decorator and is part of the class
@Component({
    selector: 'my-app',
    template: `
                <button class="btn btn-primary" [class.hello]="isActive" [class.active]="isActive" [attr.data-id]="token" [id]="token" (click)="clickEvent($event)">Class binding</button>
                <button class="btn btn-warning" [style.color]="'black'" [style.border-color]="isActive ? 'Black' : 'White'" (mouseover)="hoverEvent()">Style binding</button>
                <input type="text" [value]="oneWay"/><input type="text" (input)="showTypeText($event.target.value)" />
                <input type="text" [(ngModel)]="twoWayDataBinding" />
                <h1>{{title}}</h1>
                <div><i class="glyphicon" [class.glyphicon-star]="isActive" [class.glyphicon-star-empty]="!isActive" (click)="isActive= !isActive"></i></div> 
         
    `
})
export class AppComponent {
    isActive = true;
    token = "Lina";
    // what we get on the above line this simplify that action with ngmodel
    twoWayDataBinding = "Hi Linute!";
    oneWay = "Hi Oier!"; 
    
    clickEvent($event){
        console.log('Click');
    }
    
    hoverEvent(){
        console.log('Hover')
    }
    
    showTypeText(text){
        console.log("Typed text: " + text);
        console.log("Two way data binding text: " + this.twoWayDataBinding);
    }
    
}

/* ANGULAR JUMP START LESSON

import {Component} from 'angular2/core'
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'

// This it calls in Type Script decorator and is part of the class
@Component({
    selector: 'my-app',
    template: `<h1>Hello Angular 2</h1>
                <courses></courses>
                <authors></authors>`,
    // We specify the components or directive that we've used inside of the template for this component
    directives: [CoursesComponent, AuthorsComponent]
})
export class AppComponent {
}*/