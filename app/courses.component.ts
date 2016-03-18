import {Component} from 'angular2/core'
import {ComponentService} from './component.service'

// To know angular that class is a component class, add decorator
@Component({
    // Set the tag in html or css selector
    selector: 'courses',
    // The HTML file that it will add when we insert the component
    template: `
        <h2>Courses</h2>
        {{ title }}
        <ul>
            <li *ngFor = "#course of courses">{{ course }}</li>
        </ul>
        `
})
export class CoursesComponent{
    
    constructor(){
        new ComponentService(); 
    }
    // We don't need to set the type because setting that string type script already knows
    title = "IT";
    courses = ['Networking', 'Software architecture', 'Design'];
}