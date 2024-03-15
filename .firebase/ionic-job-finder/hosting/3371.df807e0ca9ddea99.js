"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3371],{3371:(q,O,y)=>{y.r(O),y.d(O,{startInputShims:()=>Z});var w=y(467),l=y(8476),T=y(2885),m=y(5638),R=y(4379);y(8438);const M=new WeakMap,P=(e,t,s,r=0,o=!1)=>{M.has(e)!==s&&(s?k(e,t,r,o):G(e,t))},k=(e,t,s,r=!1)=>{const o=t.parentNode,n=t.cloneNode(!1);n.classList.add("cloned-input"),n.tabIndex=-1,r&&(n.disabled=!0),o.appendChild(n),M.set(e,n);const a="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${a}px,${s}px,0) scale(0)`},G=(e,t)=>{const s=M.get(e);s&&(M.delete(e),s.remove()),e.style.pointerEvents="",t.style.transform=""},C="input, textarea, [no-blur], [contenteditable]",N="$ionPaddingTimer",p=(e,t,s)=>{const r=e[N];r&&clearTimeout(r),t>0?e.style.setProperty("--keyboard-offset",`${t}px`):e[N]=setTimeout(()=>{e.style.setProperty("--keyboard-offset","0px"),s&&s()},120)},U=(e,t,s)=>{e.addEventListener("focusout",()=>{t&&p(t,0,s)},{once:!0})};let g=0;const B="data-ionic-skip-scroll-assist",V=(e,t,s,r,o,n,i,a=!1)=>{const S=n&&(void 0===i||i.mode===R.a.None);let L=!1;const u=void 0!==l.w?l.w.innerHeight:0,f=_=>{!1!==L?F(e,t,s,r,_.detail.keyboardHeight,S,a,u,!1):L=!0},c=()=>{L=!1,null==l.w||l.w.removeEventListener("ionKeyboardDidShow",f),e.removeEventListener("focusout",c,!0)},h=function(){var _=(0,w.A)(function*(){t.hasAttribute(B)?t.removeAttribute(B):(F(e,t,s,r,o,S,a,u),null==l.w||l.w.addEventListener("ionKeyboardDidShow",f),e.addEventListener("focusout",c,!0))});return function(){return _.apply(this,arguments)}}();return e.addEventListener("focusin",h,!0),()=>{e.removeEventListener("focusin",h,!0),null==l.w||l.w.removeEventListener("ionKeyboardDidShow",f),e.removeEventListener("focusout",c,!0)}},x=e=>{document.activeElement!==e&&(e.setAttribute(B,"true"),e.focus())},F=function(){var e=(0,w.A)(function*(t,s,r,o,n,i,a=!1,S=0,L=!0){if(!r&&!o)return;const u=((e,t,s,r)=>{var o;return((e,t,s,r)=>{const o=e.top,n=e.bottom,i=t.top,S=i+15,u=Math.min(t.bottom,r-s)-50-n,f=S-o,c=Math.round(u<0?-u:f>0?-f:0),h=Math.min(c,o-i),b=Math.abs(h)/.3;return{scrollAmount:h,scrollDuration:Math.min(400,Math.max(150,b)),scrollPadding:s,inputSafeY:4-(o-S)}})((null!==(o=e.closest("ion-item,[ion-item]"))&&void 0!==o?o:e).getBoundingClientRect(),t.getBoundingClientRect(),s,r)})(t,r||o,n,S);if(r&&Math.abs(u.scrollAmount)<4)return x(s),void(i&&null!==r&&(p(r,g),U(s,r,()=>g=0)));if(P(t,s,!0,u.inputSafeY,a),x(s),(0,m.r)(()=>t.click()),i&&r&&(g=u.scrollPadding,p(r,g)),typeof window<"u"){let f;const c=function(){var _=(0,w.A)(function*(){void 0!==f&&clearTimeout(f),window.removeEventListener("ionKeyboardDidShow",h),window.removeEventListener("ionKeyboardDidShow",c),r&&(yield(0,T.c)(r,0,u.scrollAmount,u.scrollDuration)),P(t,s,!1,u.inputSafeY),x(s),i&&U(s,r,()=>g=0)});return function(){return _.apply(this,arguments)}}(),h=()=>{window.removeEventListener("ionKeyboardDidShow",h),window.addEventListener("ionKeyboardDidShow",c)};if(r){const _=yield(0,T.g)(r);if(L&&u.scrollAmount>_.scrollHeight-_.clientHeight-_.scrollTop)return"password"===s.type?(u.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",h)):window.addEventListener("ionKeyboardDidShow",c),void(f=setTimeout(c,1e3))}c()}});return function(s,r,o,n,i,a){return e.apply(this,arguments)}}(),Z=function(){var e=(0,w.A)(function*(t,s){if(void 0===l.d)return;const r="ios"===s,o="android"===s,n=t.getNumber("keyboardHeight",290),i=t.getBoolean("scrollAssist",!0),a=t.getBoolean("hideCaretOnScroll",r),S=t.getBoolean("inputBlurring",r),L=t.getBoolean("scrollPadding",!0),u=Array.from(l.d.querySelectorAll("ion-input, ion-textarea")),f=new WeakMap,c=new WeakMap,h=yield R.K.getResizeMode(),_=function(){var v=(0,w.A)(function*(d){yield new Promise(I=>(0,m.c)(d,I));const K=d.shadowRoot||d,A=K.querySelector("input")||K.querySelector("textarea"),D=(0,T.f)(d),W=D?null:d.closest("ion-footer");if(A){if(D&&a&&!f.has(d)){const I=((e,t,s)=>{if(!s||!t)return()=>{};const r=a=>{(e=>e===e.getRootNode().activeElement)(t)&&P(e,t,a)},o=()=>P(e,t,!1),n=()=>r(!0),i=()=>r(!1);return(0,m.a)(s,"ionScrollStart",n),(0,m.a)(s,"ionScrollEnd",i),t.addEventListener("blur",o),()=>{(0,m.b)(s,"ionScrollStart",n),(0,m.b)(s,"ionScrollEnd",i),t.removeEventListener("blur",o)}})(d,A,D);f.set(d,I)}if("date"!==A.type&&"datetime-local"!==A.type&&(D||W)&&i&&!c.has(d)){const I=V(d,A,D,W,n,L,h,o);c.set(d,I)}}});return function(K){return v.apply(this,arguments)}}();S&&(()=>{let e=!0,t=!1;const s=document;(0,m.a)(s,"ionScrollStart",()=>{t=!0}),s.addEventListener("focusin",()=>{e=!0},!0),s.addEventListener("touchend",i=>{if(t)return void(t=!1);const a=s.activeElement;if(!a||a.matches(C))return;const S=i.target;S!==a&&(S.matches(C)||S.closest(C)||(e=!1,setTimeout(()=>{e||a.blur()},50)))},!1)})();for(const v of u)_(v);l.d.addEventListener("ionInputDidLoad",v=>{_(v.detail)}),l.d.addEventListener("ionInputDidUnload",v=>{(v=>{if(a){const d=f.get(v);d&&d(),f.delete(v)}if(i){const d=c.get(v);d&&d(),c.delete(v)}})(v.detail)})});return function(s,r){return e.apply(this,arguments)}}()}}]);