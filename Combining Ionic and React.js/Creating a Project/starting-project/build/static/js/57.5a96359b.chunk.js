(this["webpackJsonpionic-react"]=this["webpackJsonpionic-react"]||[]).push([[57],{105:function(o,i,t){"use strict";t.r(i),t.d(i,"ion_icon",(function(){return u}));var e=t(14),n=t(5),r=t(6),s=t(37),c=t(47),a=function o(i){if(1===i.nodeType){if("script"===i.nodeName.toLowerCase())return!1;for(var t=0;t<i.attributes.length;t++){var e=i.attributes[t].value;if(Object(c.d)(e)&&0===e.toLowerCase().indexOf("on"))return!1}for(var n=0;n<i.childNodes.length;n++)if(!o(i.childNodes[n]))return!1}return!0},l=new Map,h=new Map,d=function(o,i){var t=h.get(o);if(!t){if("undefined"===typeof fetch||"undefined"===typeof document)return l.set(o,""),Promise.resolve();t=fetch(o).then((function(t){if(t.ok)return t.text().then((function(t){t&&!1!==i&&(t=function(o){var i=document.createElement("div");i.innerHTML=o;for(var t=i.childNodes.length-1;t>=0;t--)"svg"!==i.childNodes[t].nodeName.toLowerCase()&&i.removeChild(i.childNodes[t]);var e=i.firstElementChild;if(e&&"svg"===e.nodeName.toLowerCase()){var n=e.getAttribute("class")||"";if(e.setAttribute("class",(n+" s-ion-icon").trim()),a(e))return i.innerHTML}return""}(t)),l.set(o,t||"")}));l.set(o,"")})),h.set(o,t)}return t},u=function(){function o(i){Object(n.a)(this,o),Object(s.e)(this,i),this.iconName=null,this.isVisible=!1,this.mode=f(),this.lazy=!1,this.sanitize=!0}return Object(r.a)(o,[{key:"connectedCallback",value:function(){var o=this;this.waitUntilVisible(this.el,"50px",(function(){o.isVisible=!0,o.loadIcon()}))}},{key:"disconnectedCallback",value:function(){this.io&&(this.io.disconnect(),this.io=void 0)}},{key:"waitUntilVisible",value:function(o,i,t){var e=this;if(this.lazy&&"undefined"!==typeof window&&window.IntersectionObserver){var n=this.io=new window.IntersectionObserver((function(o){o[0].isIntersecting&&(n.disconnect(),e.io=void 0,t())}),{rootMargin:i});n.observe(o)}else t()}},{key:"loadIcon",value:function(){var o=this;if(this.isVisible){var i=Object(c.c)(this);i&&(l.has(i)?this.svgContent=l.get(i):d(i,this.sanitize).then((function(){return o.svgContent=l.get(i)})))}var t=this.iconName=Object(c.b)(this.name,this.icon,this.mode,this.ios,this.md);this.ariaLabel||"true"===this.ariaHidden||t&&(this.ariaLabel=t.replace(/\-/g," "))}},{key:"render",value:function(){var o,i=this.iconName,t=this.mode||"md",n=this.flipRtl||i&&(i.indexOf("arrow")>-1||i.indexOf("chevron")>-1)&&!1!==this.flipRtl;return Object(s.d)(s.a,{role:"img",class:Object.assign(Object.assign(Object(e.a)({},t,!0),v(this.color)),(o={},Object(e.a)(o,"icon-".concat(this.size),!!this.size),Object(e.a)(o,"flip-rtl",!!n&&"rtl"===this.el.ownerDocument.dir),o))},this.svgContent?Object(s.d)("div",{class:"icon-inner",innerHTML:this.svgContent}):Object(s.d)("div",{class:"icon-inner"}))}},{key:"el",get:function(){return Object(s.b)(this)}}],[{key:"assetsDirs",get:function(){return["svg"]}},{key:"watchers",get:function(){return{name:["loadIcon"],src:["loadIcon"],icon:["loadIcon"]}}}]),o}(),f=function(){return"undefined"!==typeof document&&document.documentElement.getAttribute("mode")||"md"},v=function(o){return o?Object(e.a)({"ion-color":!0},"ion-color-".concat(o),!0):null};u.style=":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}:host(.flip-rtl) .icon-inner{transform:scaleX(-1)}:host(.icon-small){font-size:18px !important}:host(.icon-large){font-size:32px !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}"}}]);
//# sourceMappingURL=57.5a96359b.chunk.js.map