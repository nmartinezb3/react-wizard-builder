(this["webpackJsonpreact-wizard-example"]=this["webpackJsonpreact-wizard-example"]||[]).push([[0],{21:function(e,t,n){e.exports=n(29)},22:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);n(22);var i=n(0),a=n.n(i),r=n(12),u=n.n(r),s=n(20),l=n(19),o=n(1),c=n(2);function m(){var e=Object(o.a)(["\n  flex: 1;\n"]);return m=function(){return e},e}function d(){var e=Object(o.a)(["\n  flex-direction: column;\n  height: 100%;\n  display: flex;\n"]);return d=function(){return e},e}function p(){var e=Object(o.a)(["\n      cursor: not-allowed;\n      opacity: 0.5;\n      background-color: #ffffff;\n      border: 1px solid #eeeeee;\n      color: #0080de;\n    "]);return p=function(){return e},e}function f(){var e=Object(o.a)(["\n  cursor: pointer;\n  outline: none;\n  color: white;\n  background: #0080de;\n  border: 1px solid #0080de;\n  border-radius: 4px;\n  font-family: 'Lato', sans-serif;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);\n  font-size: 14px;\n  height: 40px;\n  text-transform: uppercase;\n  width: 100%;\n  -webkit-transition: all 0.25s;\n  transition: all 0.25s;\n  font-weight: bold;\n  max-width: 110px;\n  ",";\n"]);return f=function(){return e},e}function v(){var e=Object(o.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin: 15px 0;\n"]);return v=function(){return e},e}function b(){var e=Object(o.a)(["\n  margin-bottom: 15px;\n  background-color: #efeef5;\n  border-radius: 10px;\n"]);return b=function(){return e},e}function g(){var e=Object(o.a)(["\n  height: 6px;\n  background-color: #4ca1ff;\n  transition: width 0.2s;\n  width: ","%;\n  border-radius: 10px;\n"]);return g=function(){return e},e}var S,h,x,E,q,N=c.b.div(S||(S=g()),(function(e){return 100/e.countSteps*(e.currentStep+1)})),w=c.b.div(h||(h=b())),O=c.b.div(x||(x=v())),L=c.b.button(E||(E=f()),(function(e){return e.disabled&&Object(c.a)(q||(q=p()))}));var j,C,B=c.b.div(j||(j=d())),F=c.b.div(C||(C=m()));function P(e){var t=Object(i.useState)(e.initialStep||0),n=Object(l.a)(t,2),r=n[0],u=n[1],s=function(){return{currentStep:r,countSteps:a.a.Children.count(e.children),next:d,previous:p,goToStep:m,lastStep:o(),firstStep:c()}},o=function(){return r===a.a.Children.count(e.children)-1},c=function(){return 0===r},m=function(e){u(e)},d=function(){o()?e.onFinish(s()):(e.onNextStep&&e.onNextStep(s()),u((function(e){return e+1})))},p=function(){c()||(e.onPreviousStep&&e.onPreviousStep(s()),u((function(e){return e-1})))},f=e.renderHeader,v=e.children;return a.a.createElement(B,{className:e.className},e.hideStatusBar?null:e.renderStatusBar?e.renderStatusBar(s()):a.a.createElement(P.StatusBar,{statusBarClassName:e.statusBarClassName,statusBarProgressClassName:e.statusBarProgressClassName,currentStep:r,countSteps:a.a.Children.count(e.children)}),f(s()),a.a.createElement(F,null,a.a.cloneElement(v[r],s())),e.hideFooter?null:e.renderFooter?e.renderFooter(s()):a.a.createElement(P.Footer,Object.assign({className:e.footerClassName},s(),{previousStepLabel:e.previousStepLabel,nextStepLabel:e.nextStepLabel,finishStepLabel:e.finishStepLabel})))}P.StatusBar=function(e){return a.a.createElement(w,{className:e.statusBarClassName},a.a.createElement(N,{className:e.statusBarProgressClassName,countSteps:e.countSteps,currentStep:e.currentStep}))},P.Footer=function(e){return a.a.createElement(O,{className:e.className},a.a.createElement(L,{onClick:e.previous,disabled:e.firstStep},e.previousStepLabel||"Previous"),a.a.createElement(L,{onClick:e.next},e.lastStep?e.finishStepLabel||"Finish":e.nextStepLabel||"Next"))},P.Step=function(e){var t=e.render,n=Object(s.a)(e,["render"]);return t?t(n):null};var k=n(6);function A(){var e=Object(o.a)(["\n  font-size: 14px;\n  line-height: 1.09;\n  padding: 0;\n  padding: 20px 0;\n"]);return A=function(){return e},e}function z(){var e=Object(o.a)(["\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 1.09;\n  padding: 0;\n"]);return z=function(){return e},e}var y=k.a.div(z()),T=k.a.div(A()),V=function(e){return a.a.createElement(i.Fragment,null,a.a.createElement(y,null,"Welcome to the wizard!"),a.a.createElement(T,null,"This is the step ",e.currentStep+1,"/",e.countSteps))},D=function(){return a.a.createElement("div",{className:"app-container"},a.a.createElement("div",{className:"white-card"},a.a.createElement(P,{initialStep:0,renderHeader:function(e){return a.a.createElement(V,e)},onNextStep:function(e){var t=e.currentStep;return console.log("On next step "+t)},onPreviousStep:function(e){var t=e.currentStep;return console.log("On previous step "+t)},onFinish:function(){return console.log("Wizard finished!")}},a.a.createElement(P.Step,{render:function(e){e.currentStep,e.next,e.previous,e.firstStep,e.lastStep;return a.a.createElement("div",null,a.a.createElement("div",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A erat nam at lectus urna duis convallis convallis. Turpis massa sed elementum tempus egestas sed. Sapien eget mi proin sed libero enim sed faucibus. Amet luctus venenatis lectus magna. Egestas dui id ornare arcu odio ut. Nisi vitae suscipit tellus mauris a. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Dui faucibus in ornare quam viverra orci sagittis. Fermentum dui faucibus in ornare quam viverra orci sagittis eu. Integer malesuada nunc vel risus. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet non. Aliquam etiam erat velit scelerisque. Lorem ipsum dolor sit amet consectetur. Scelerisque purus semper eget duis at tellus at urna condimentum."))}}),a.a.createElement(P.Step,{render:function(e){e.currentStep,e.next,e.previous,e.firstStep,e.lastStep;return a.a.createElement("div",null,a.a.createElement("div",null,"Quis vel eros donec ac odio tempor orci dapibus. Consectetur libero id faucibus nisl tincidunt eget nullam non. Ultricies leo integer malesuada nunc vel. Ridiculus mus mauris vitae ultricies leo. Lectus proin nibh nisl condimentum id venenatis a condimentum. Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Volutpat consequat mauris nunc congue nisi. Nullam eget felis eget nunc. Tincidunt vitae semper quis lectus nulla at. Velit scelerisque in dictum non. Amet luctus venenatis lectus magna fringilla. Amet risus nullam eget felis eget nunc lobortis mattis."))}}),a.a.createElement(P.Step,{render:function(e){e.currentStep,e.next,e.previous,e.firstStep,e.lastStep;return a.a.createElement("div",null,a.a.createElement("div",null,"Volutpat blandit aliquam etiam erat velit. Quis commodo odio aenean sed adipiscing diam donec. Diam phasellus vestibulum lorem sed. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Tellus mauris a diam maecenas sed enim ut sem viverra. Amet consectetur adipiscing elit ut aliquam purus sit. Massa tincidunt dui ut ornare lectus sit amet est. Mi proin sed libero enim. Varius morbi enim nunc faucibus. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit. Id leo in vitae turpis massa sed elementum tempus egestas. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Nullam eget felis eget nunc. Pharetra massa massa ultricies mi quis hendrerit dolor magna eget. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit."))}}),a.a.createElement(P.Step,{render:function(e){e.currentStep,e.next,e.previous,e.firstStep,e.lastStep;return a.a.createElement("div",null,a.a.createElement("div",null,"Nec ultrices dui sapien eget mi. Lorem dolor sed viverra ipsum nunc aliquet. Proin sagittis nisl rhoncus mattis. Duis at tellus at urna condimentum mattis. Diam donec adipiscing tristique risus nec feugiat in fermentum. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet non. Orci eu lobortis elementum nibh tellus. Sit amet nisl suscipit adipiscing bibendum est. Sit amet mattis vulputate enim. Dignissim diam quis enim lobortis. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Molestie nunc non blandit massa enim nec. Id interdum velit laoreet id donec ultrices."))}}),a.a.createElement(P.Step,{render:function(e){e.currentStep,e.next,e.previous,e.firstStep,e.lastStep;return a.a.createElement("div",null,a.a.createElement("div",null,"Amet mauris commodo quis imperdiet massa. Tincidunt vitae semper quis lectus nulla at volutpat diam ut. Porttitor leo a diam sollicitudin tempor id eu. Vitae ultricies leo integer malesuada. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Libero volutpat sed cras ornare arcu dui. Lectus mauris ultrices eros in cursus. Nec feugiat in fermentum posuere urna nec tincidunt praesent semper. Pellentesque eu tincidunt tortor aliquam. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae. Semper quis lectus nulla at."))}}))))};u.a.render(a.a.createElement(D,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.5fcda72b.chunk.js.map