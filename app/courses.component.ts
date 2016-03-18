import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'

// To know angular that class is a component class, add decorator
@Component({
    // Set the tag in html or css selector
    selector: 'courses',
    // The HTML file that it will add when we insert the component
    template: `
        <h2>Courses</h2>
        {{ title }}
        <input type="text" autoGrow />
        <ul>
            <li *ngFor = "#course of courses">{{ course }}</li>
        </ul>
        `,
    providers: [CourseService],
    directives: [AutoGrowDirective]
})
export class CoursesComponent{
    
    title = "IT";
    courses: string[];
    
    constructor(courseService: CourseService){
        this.courses = courseService.getCourses();
    }
    
}