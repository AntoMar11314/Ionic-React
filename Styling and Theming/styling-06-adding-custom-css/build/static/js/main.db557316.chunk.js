(this["webpackJsonpionic-react"]=this["webpackJsonpionic-react"]||[]).push([[1],{40:function(e,n,t){e.exports=t(62)},47:function(e,n,t){var r={"./ion-action-sheet.entry.js":[64,5],"./ion-alert.entry.js":[65,6],"./ion-app_8.entry.js":[66,7],"./ion-avatar_3.entry.js":[67,17],"./ion-back-button.entry.js":[68,18],"./ion-backdrop.entry.js":[69,44],"./ion-button_2.entry.js":[70,19],"./ion-card_5.entry.js":[71,20],"./ion-checkbox.entry.js":[72,21],"./ion-chip.entry.js":[73,22],"./ion-col_3.entry.js":[74,45],"./ion-datetime_3.entry.js":[75,10],"./ion-fab_3.entry.js":[76,23],"./ion-img.entry.js":[77,46],"./ion-infinite-scroll_2.entry.js":[78,47],"./ion-input.entry.js":[79,24],"./ion-item-option_3.entry.js":[80,25],"./ion-item_8.entry.js":[81,26],"./ion-loading.entry.js":[82,27],"./ion-menu_3.entry.js":[83,28],"./ion-modal.entry.js":[84,8],"./ion-nav_2.entry.js":[85,14],"./ion-popover.entry.js":[86,9],"./ion-progress-bar.entry.js":[87,29],"./ion-radio_2.entry.js":[88,30],"./ion-range.entry.js":[89,31],"./ion-refresher_2.entry.js":[90,11],"./ion-reorder_2.entry.js":[91,16],"./ion-ripple-effect.entry.js":[92,48],"./ion-route_4.entry.js":[93,32],"./ion-searchbar.entry.js":[94,33],"./ion-segment_2.entry.js":[95,34],"./ion-select_3.entry.js":[96,35],"./ion-slide_2.entry.js":[97,49],"./ion-spinner.entry.js":[98,13],"./ion-split-pane.entry.js":[99,50],"./ion-tab-bar_2.entry.js":[100,36],"./ion-tab_2.entry.js":[101,15],"./ion-text.entry.js":[102,37],"./ion-textarea.entry.js":[103,38],"./ion-toast.entry.js":[104,39],"./ion-toggle.entry.js":[105,12],"./ion-virtual-scroll.entry.js":[106,51]};function a(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],a=n[0];return t.e(n[1]).then((function(){return t(a)}))}a.keys=function(){return Object.keys(r)},a.id=47,e.exports=a},49:function(e,n,t){var r={"./ion-icon.entry.js":[107,57]};function a(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],a=n[0];return t.e(n[1]).then((function(){return t(a)}))}a.keys=function(){return Object.keys(r)},a.id=49,e.exports=a},50:function(e,n,t){},61:function(e,n,t){},62:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),l=t(22),o=t.n(l),i=t(16),c=t(2),s=t(15),u=function(e){return a.a.createElement(c.n,{className:"ion-margin-top"},a.a.createElement(c.f,{size:"12","size-md":"6",className:"ion-text-center"},a.a.createElement(c.c,{size:"large",expand:"block",color:"secondary",onClick:e.onCalculate},a.a.createElement(c.j,{slot:"start",icon:s.b}),"Calculate")),a.a.createElement(c.f,{size:"12","size-md":"6",className:"ion-text-center"},a.a.createElement(c.c,{color:"medium",onClick:e.onReset,fill:"clear"},a.a.createElement(c.j,{slot:"start",icon:s.k}),"Reset")))},m=(t(50),function(e){return a.a.createElement(c.d,{id:"result"},a.a.createElement(c.e,{className:"ion-text-center"},a.a.createElement("h2",null,"Your Body-Mass-Index"),a.a.createElement("h3",null,e.result.toFixed(2))))}),f=function(e){return a.a.createElement(c.o,{value:e.selectedValue,onIonChange:function(n){e.onSelectValue(n.detail.value)}},a.a.createElement(c.p,{value:"mkg"},a.a.createElement(c.m,null,"m/kg")),a.a.createElement(c.p,{value:"ftlbs"},a.a.createElement(c.m,null,"ft/lbs")))},j=(t(51),t(52),t(53),t(54),t(55),t(56),t(57),t(58),t(59),t(60),t(61),function(){var e=Object(r.useState)(),n=Object(i.a)(e,2),t=n[0],l=n[1],o=Object(r.useState)(),s=Object(i.a)(o,2),j=s[0],y=s[1],E=Object(r.useState)("mkg"),d=Object(i.a)(E,2),p=d[0],b=d[1],g=Object(r.useRef)(null),v=Object(r.useRef)(null);return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,{isOpen:!!j,message:j,buttons:[{text:"Okay",handler:function(){y("")}}]}),a.a.createElement(c.b,null,a.a.createElement(c.i,null,a.a.createElement(c.r,{color:"primary"},a.a.createElement(c.q,null,"BMI Calculator"))),a.a.createElement(c.g,{className:"ion-padding"},a.a.createElement(c.h,null,a.a.createElement(c.n,null,a.a.createElement(c.f,{"size-sm":"8","offset-sm":"2","size-md":"6","offset-md":"3",className:"ion-no-padding"},a.a.createElement(c.d,{className:"ion-no-margin"},a.a.createElement(c.e,null,a.a.createElement(c.h,{className:"ion-no-padding"},a.a.createElement(c.n,null,a.a.createElement(c.f,null,a.a.createElement(f,{selectedValue:p,onSelectValue:function(e){b(e)}}))),a.a.createElement(c.n,null,a.a.createElement(c.f,null,a.a.createElement(c.l,null,a.a.createElement(c.m,{position:"floating"},"Your Height (","mkg"===p?"meters":"feet",")"),a.a.createElement(c.k,{type:"number",ref:v})))),a.a.createElement(c.n,null,a.a.createElement(c.f,null,a.a.createElement(c.l,null,a.a.createElement(c.m,{position:"floating"},"Your Weight (","mkg"===p?"kg":"lbs",")"),a.a.createElement(c.k,{type:"number",ref:g})))),a.a.createElement(u,{onCalculate:function(){var e=g.current.value,n=v.current.value;if(!n||!e||+e<=0||+n<=0)y("Please enter a valid (non-negative) input number.");else{var t=+n/("ftlbs"===p?3.28:1);l(+e/("ftlbs"===p?2.2:1)/(t*t))}},onReset:function(){g.current.value="",v.current.value=""}})))))),a.a.createElement(c.n,null,a.a.createElement(c.f,null,t&&a.a.createElement(m,{result:t})))))))});o.a.render(a.a.createElement(j,null),document.getElementById("root"))}},[[40,3,4]]]);
//# sourceMappingURL=main.db557316.chunk.js.map