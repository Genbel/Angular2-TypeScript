import {Component} from 'angular2/core'
import {CoursesComponent} from './courses.component'

// This it calls in Type Script decorator and is part of the class
@Component({
    selector: 'my-app',
    template: '<h1>Hello Angular 2</h1><courses></courses>',
    // We specify the components or directive that we've used inside of the template for this component
    directives: [CoursesComponent]
})
export class AppComponent {
}