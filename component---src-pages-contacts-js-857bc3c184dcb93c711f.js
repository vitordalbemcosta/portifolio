"use strict";(self.webpackChunkportifolio_vitor=self.webpackChunkportifolio_vitor||[]).push([[98],{7274:function(e,t,a){var i=a(3133),r=a(2679);const o=i.default.div.withConfig({displayName:"Box",componentId:"sc-bdq65g-0"})(["max-width:1200px;margin:0 auto;padding:20px;@media screen and (max-width:","){padding:15px;}@media screen and (max-width:","){padding:10px;}@media screen and (max-width:","){padding:5px;}"],r.Z.desktop,r.Z.laptop,r.Z.tablet);t.Z=o},6121:function(e,t,a){a.r(t),a.d(t,{Head:function(){return S},default:function(){return C}});var i=a(7294),r=a(3133);const o={origin:"https://api.emailjs.com",blockHeadless:!1},n=e=>e?"string"==typeof e?{publicKey:e}:"[object Object]"===e.toString()?e:{}:{};class s{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}const l=async(e,t,a={})=>{const i=await fetch(o.origin+e,{method:"POST",headers:a,body:t}),r=await i.text(),n=new s(i.status,r);if(i.ok)return n;throw n},d=(e,t,a)=>{if(!e||"string"!=typeof e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||"string"!=typeof t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a||"string"!=typeof a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},m=e=>e.webdriver||!e.languages||0===e.languages.length,c=()=>new s(451,"Unavailable For Headless Browser"),p=(e,t)=>{if((e=>!e.list?.length||!e.watchVariable)(e))return!1;((e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if("string"!=typeof t)throw"The BlockList watchVariable has to be a string"})(e.list,e.watchVariable);const a=(i=t,r=e.watchVariable,i instanceof FormData?i.get(r):i[r]);var i,r;return"string"==typeof a&&e.list.includes(a)},h=()=>new s(403,"Forbidden"),u=(e,t,a)=>{setTimeout((()=>{a.removeItem(e)}),t)},f=(e,t,a)=>{if(!a.throttle)return!1;((e,t)=>{if("number"!=typeof e||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&"string"!=typeof t)throw"The LimitRate ID has to be a string"})(a.throttle,a.id);const i=a.id||t,r=((e,t,a)=>{const i=Number(a.getItem(e)||0);return t-Date.now()+i})(i,a.throttle,e);return r>0?(u(i,r,e),!0):(e.setItem(i,Date.now().toString()),u(i,a.throttle,e),!1)},g=()=>new s(429,"Too Many Requests");var b=(e,t,a,i)=>{const r=n(i),s=r.publicKey||o.publicKey,u=r.blockHeadless||o.blockHeadless,b={...o.blockList,...r.blockList},w={...o.limitRate,...r.limitRate};if(u&&m(navigator))return Promise.reject(c());const x=(e=>"string"==typeof e?document.querySelector(e):e)(a);d(s,e,t),(e=>{if(!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"})(x);const y=new FormData(x);return p(b,y)?Promise.reject(h()):f(localStorage,location.pathname,w)?Promise.reject(g()):(y.append("lib_version","4.1.0"),y.append("service_id",e),y.append("template_id",t),y.append("user_id",s),l("/api/v1.0/email/send-form",y))},w=a(7274),x=a(2679);const y=r.default.h1.withConfig({displayName:"GetInTouch__Heading",componentId:"sc-b771hz-0"})(["margin-top:10rem;color:white;text-shadow:1px 1px 2px black;font-size:3.1rem;padding:20px;@media screen and (max-width:","){font-size:2.5rem;margin-top:1rem;}"],x.Z.tablet),v=r.default.h3.withConfig({displayName:"GetInTouch__Subheading",componentId:"sc-b771hz-1"})(["margin-top:2rem;color:white;text-shadow:1px 1px 2px black;font-size:1.4rem;padding:20px;@media screen and (max-width:","){font-size:1.6rem;margin-top:1rem;}"],x.Z.tablet),I=r.default.div.withConfig({displayName:"GetInTouch__Wrapper",componentId:"sc-b771hz-2"})(["min-height:68vh;display:flex;align-items:center;@media screen and (max-width:","){min-height:40vh;display:flex;align-items:flex-start;}input[type='submit']{margin-top:2rem;width:50%;height:2rem;cursor:pointer;background:rgb(249,105,14);color:white;border:none;border-radius:20px;font-weight:600;font-size:1rem;}"],x.Z.tablet),_=r.default.form.withConfig({displayName:"GetInTouch__Form",componentId:"sc-b771hz-3"})(["display:flex;flex-direction:column;flex-wrap:nowrap;align-items:center;width:100%;font-size:16px;"]),k=r.default.input.withConfig({displayName:"GetInTouch__Input",componentId:"sc-b771hz-4"})(["width:50%;height:35px;padding:7px;outline:none;border-radius:5px;border:1px solid rgb(220,220,220);&:focus{border:2px solid rgba(0,206,158,1);}"]),T=r.default.label.withConfig({displayName:"GetInTouch__Label",componentId:"sc-b771hz-5"})(["margin-top:2rem;font-size:1.6rem;color:white;font-weight:500;text-shadow:1px 1px 2px pink;"]),E=r.default.textarea.withConfig({displayName:"GetInTouch__Textarea",componentId:"sc-b771hz-6"})(["width:50%;height:16rem;"]),z=r.default.span.withConfig({displayName:"GetInTouch__ErrorMessage",componentId:"sc-b771hz-7"})(["color:red;font-size:1.5rem;margin-top:14px;text-shadow:1px 1px 2px black;"]);var N=()=>{const{0:e,1:t}=(0,i.useState)(!0),a=(0,i.useRef)();return i.createElement(i.Fragment,null,i.createElement(w.Z,null,i.createElement(y,null,"Say hello! It will be a pleasure to talk more about my professional path. I'll get back to you shortly."),i.createElement(v,null,"Also, I'm always down for a chat about food, travels, and baseball!")),i.createElement(I,null,i.createElement(_,{ref:a,onSubmit:e=>{e.preventDefault(),b("service_1x7o7ti","template_bdmn4hi",a.current,{publicKey:"NoJd2qYuePKY6rp-b"}).then((()=>{console.log("Success, looking forward to chatting to you soon!"),a.current.reset()}),(e=>{console.log("FAILED...",e.text)}))}},i.createElement(T,null,"Name"),i.createElement(k,{type:"text",name:"user_name",required:!0}),i.createElement(T,null,"Email"),i.createElement(k,{type:"email",name:"user_email",onChange:e=>{var a;t((a=e.target.value,/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a)))},required:!0}),!e&&i.createElement(z,null,"Please enter a valid email address."),i.createElement(T,null,"Message"),i.createElement(E,{name:"message",required:!0}),i.createElement("input",{type:"submit",value:"Send"}))))};var C=()=>i.createElement(N,null);const S=()=>i.createElement("title",null,"Get in touch - Vitor Dalbem Costa")}}]);
//# sourceMappingURL=component---src-pages-contacts-js-857bc3c184dcb93c711f.js.map