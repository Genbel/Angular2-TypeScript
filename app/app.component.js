System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // This it calls in Type Script decorator and is part of the class
            AppComponent = (function () {
                function AppComponent() {
                    this.isActive = true;
                    this.token = "Lina";
                    // what we get on the above line this simplify that action with ngmodel
                    this.twoWayDataBinding = "Hi Linute!";
                    this.oneWay = "Hi Oier!";
                }
                AppComponent.prototype.clickEvent = function ($event) {
                    console.log('Click');
                };
                AppComponent.prototype.hoverEvent = function () {
                    console.log('Hover');
                };
                AppComponent.prototype.showTypeText = function (text) {
                    console.log("Typed text: " + text);
                    console.log("Two way data binding text: " + this.twoWayDataBinding);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n                <button class=\"btn btn-primary\" [class.hello]=\"isActive\" [class.active]=\"isActive\" [attr.data-id]=\"token\" [id]=\"token\" (click)=\"clickEvent($event)\">Class binding</button>\n                <button class=\"btn btn-warning\" [style.color]=\"'black'\" [style.border-color]=\"isActive ? 'Black' : 'White'\" (mouseover)=\"hoverEvent()\">Style binding</button>\n                <input type=\"text\" [value]=\"oneWay\"/><input type=\"text\" (input)=\"showTypeText($event.target.value)\" />\n                <input type=\"text\" [(ngModel)]=\"twoWayDataBinding\" />\n                <h1>{{title}}</h1>\n                <div><i class=\"glyphicon\" [class.glyphicon-star]=\"isActive\" [class.glyphicon-star-empty]=\"!isActive\" (click)=\"isActive= !isActive\"></i></div> \n         \n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
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
//# sourceMappingURL=app.component.js.map