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
    var StackOverFlow;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            StackOverFlow = (function () {
                function StackOverFlow() {
                    this.vote = new core_1.EventEmitter();
                }
                // This interface to execute custom initialization logic after your directive's data-bound properties have been initialized
                StackOverFlow.prototype.ngOnInit = function () {
                    this.voteAmount = this.topicLikes;
                };
                StackOverFlow.prototype.upVote = function () {
                    if (this.myVote == 1) {
                        return;
                    }
                    this.myVote++;
                    this.myVote == 0 ? this.vote.emit({ myVote: "doesn't have any opinion about" }) : this.vote.emit({ myVote: "like" });
                };
                StackOverFlow.prototype.downVote = function () {
                    if (this.myVote == -1) {
                        return;
                    }
                    this.myVote--;
                    this.myVote == 0 ? this.vote.emit({ myVote: "doesn't have any opinion about" }) : this.vote.emit({ myVote: "doesn't like" });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], StackOverFlow.prototype, "topicLikes", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], StackOverFlow.prototype, "myVote", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], StackOverFlow.prototype, "vote", void 0);
                StackOverFlow = __decorate([
                    core_1.Component({
                        selector: 'stackoverflow',
                        template: "\n    <h3>StackOverFlow rating system</h3>\n    <div id=\"stack-over-flow-wrapper\">\n        <div class=\"stack\"><i class=\"glyphicon glyphicon-menu-up\" [class.up]=\"myVote==1\" (click)=\"upVote()\"></i></div>\n        <div class=\"stack\"><span>{{ topicLikes }}</span></div>\n        <div class=\"stack\"><i class=\"glyphicon glyphicon-menu-down\" [class.down]=\"myVote==-1\" (click)=\"downVote()\"></i></div>\n    </div>\n    ",
                        styles: ["\n        #stack-over-flow-wrapper{\n            padding:30px\n        }\n        .stack{\n            width: 20px\n        }\n        .stack span{\n            font-size:2em\n        }\n        .glyphicon{\n            font-size:2em;\n        }\n        .glyphicon.up{\n            color: orange\n        }\n        .glyphicon.down{\n            color: red\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], StackOverFlow);
                return StackOverFlow;
            }());
            exports_1("StackOverFlow", StackOverFlow);
        }
    }
});
//# sourceMappingURL=stackoverflow.component.js.map