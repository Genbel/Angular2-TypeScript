import {Directive, ElementRef, Renderer} from 'angular2/core'
// Decorate the class with directive decorator
@Directive({
    selector: '[autoGrow]',
    host: {
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()'
    }
})
export class AutoGrowDirective {    
    
    constructor(private _elem: ElementRef, private _renderer: Renderer){ 
    }
    
    onFocus(){
        // nativeElement gives the actual DOM element
        // Better way to do it to calculate the size of the element and after maximaze
        this._renderer.setElementStyle(this._elem.nativeElement, 'width', '200' );
    }
    
    onBlur(){
        this._renderer.setElementStyle(this._elem.nativeElement, 'width', '120' );
    }
}