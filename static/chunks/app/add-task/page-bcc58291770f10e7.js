(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[505],{6815:function(e,t,s){Promise.resolve().then(s.bind(s,344))},344:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return a}});var r=s(7437),n=s(2265);function a(){let[e,t]=(0,n.useState)(""),[s,a]=(0,n.useState)([]),l=()=>{let e=localStorage.getItem("tasks");e&&a(JSON.parse(e))};(0,n.useEffect)(()=>{l()},[e]);let o=()=>{localStorage.setItem("tasks",JSON.stringify([...s,e])),l()};return(0,r.jsx)("div",{className:"w-screen h-screen flex items-center justify-center",children:(0,r.jsx)("div",{className:"shadow-md p-8 rounded-md",children:(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("h1",{className:"text-slate-800 font-bold text-xl",children:"Tasks"}),(0,r.jsx)("div",{className:"max-h-60 overflow-scroll",children:s.map((e,t)=>(0,r.jsx)("p",{className:"w-full p-2 my-2 shadow-sm",children:e},t))}),(0,r.jsx)("h1",{className:"text-slate-800 mt-8 text-sm",children:"Add Task"}),(0,r.jsx)("input",{type:"text",className:"border rounded mt-2 p-2",placeholder:"Add a new task",onChange:e=>t(e.target.value)}),(0,r.jsx)("button",{className:"bg-emerald-500 px-5 py-2 rounded-md mt-4",onClick:()=>o(),children:"Add task"})]})})})}},622:function(e,t,s){"use strict";var r=s(2265),n=Symbol.for("react.element"),a=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,s){var r,c={},d=null,i=null;for(r in void 0!==s&&(d=""+s),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(i=t.ref),t)a.call(t,r)&&!o.hasOwnProperty(r)&&(c[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===c[r]&&(c[r]=t[r]);return{$$typeof:n,type:e,key:d,ref:i,props:c,_owner:l.current}}t.jsx=c,t.jsxs=c},7437:function(e,t,s){"use strict";e.exports=s(622)}},function(e){e.O(0,[971,938,744],function(){return e(e.s=6815)}),_N_E=e.O()}]);