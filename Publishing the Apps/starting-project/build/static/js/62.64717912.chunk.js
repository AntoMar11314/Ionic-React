(this["webpackJsonpionic-react"]=this["webpackJsonpionic-react"]||[]).push([[62],{97:function(t,n,e){"use strict";e.r(n),e.d(n,"pwa_camera_modal",(function(){return c}));var r=e(39),o=function(t,n,e,r){return new(e||(e=Promise))((function(o,i){function c(t){try{u(r.next(t))}catch(n){i(n)}}function a(t){try{u(r.throw(t))}catch(n){i(n)}}function u(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(c,a)}u((r=r.apply(t,n||[])).next())}))},i=function(t,n){var e,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;c;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(o=(o=c.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=n.call(t,c)}catch(a){i=[6,a],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},c=function(){function t(t){Object(r.h)(this,t),this.onPhoto=Object(r.d)(this,"onPhoto",7),this.noDeviceError=Object(r.d)(this,"noDeviceError",7)}return t.prototype.present=function(){return o(this,void 0,void 0,(function(){var t,n=this;return i(this,(function(e){return(t=document.createElement("pwa-camera-modal-instance")).addEventListener("onPhoto",(function(t){return o(n,void 0,void 0,(function(){var n;return i(this,(function(e){return this._modal?(n=t.detail,this.onPhoto.emit(n),[2]):[2]}))}))})),t.addEventListener("noDeviceError",(function(t){return o(n,void 0,void 0,(function(){return i(this,(function(n){return this.noDeviceError.emit(t),[2]}))}))})),document.body.append(t),this._modal=t,[2]}))}))},t.prototype.dismiss=function(){return o(this,void 0,void 0,(function(){return i(this,(function(t){return this._modal?(this._modal&&this._modal.parentNode.removeChild(this._modal),this._modal=null,[2]):[2]}))}))},t.prototype.render=function(){return Object(r.g)("div",null)},Object.defineProperty(t,"style",{get:function(){return":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;contain:strict}.wrapper,:host{display:-ms-flexbox;display:flex}.wrapper{-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0,0,0,.15)}.content{-webkit-box-shadow:0 0 5px rgba(0,0,0,.2);box-shadow:0 0 5px rgba(0,0,0,.2);width:600px;height:600px}"},enumerable:!0,configurable:!0}),t}()}}]);
//# sourceMappingURL=62.64717912.chunk.js.map