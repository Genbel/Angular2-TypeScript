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
    var AutoGrowDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // Decorate the class with directive decorator
            AutoGrowDirective = (function () {
                function AutoGrowDirective(_elem, _renderer) {
                    this._elem = _elem;
                    this._renderer = _renderer;
                }
                AutoGrowDirective.prototype.onFocus = function () {
                    // nativeElement gives the actual DOM element
                    // Better way to do it to calculate the size of the element and after maximaze
                    this._renderer.setElementStyle(this._elem.nativeElement, 'width', '200');
                };
                AutoGrowDirective.prototype.onBlur = function () {
                    this._renderer.setElementStyle(this._elem.nativeElement, 'width', '120');
                };
                AutoGrowDirective = __decorate([
                    core_1.Directive({
                        selector: '[autoGrow]',
                        host: {
                            '(focus)': 'onFocus()',
                            '(blur)': 'onBlur()'
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], AutoGrowDirective);
                return AutoGrowDirective;
            }());
            exports_1("AutoGrowDirective", AutoGrowDirective);
        }
    }
});
//# sourceMappingURL=auto-grow.directive.js.map