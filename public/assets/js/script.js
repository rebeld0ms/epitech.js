!function(e,t){"use strict";var r={render:()=>e.createVNode(e.resolveComponent("router-view"),null,null)};var o={data:()=>({user:null,modules:[]}),methods:{renderModule(t){let r,o=Object.entries(t.results.skills),d=0,a=0;for(let[e,t]of o)d+=t.passed,a+=t.count;r=d/a*100,r=Math.round(10*r)/10;let s=new Date(t.date).toLocaleString();return e.createVNode("div",{class:"module"},[e.createVNode("div",{class:"module-title"},[t.project.name]),e.createVNode("div",{class:"module-date"},(l=s,"function"==typeof l||"[object Object]"===Object.prototype.toString.call(l)&&!e.isVNode(l)?s:{default:()=>[s]})),e.createVNode("div",{class:{"module-percent":1,success:r>=80,warning:r<80&&r>=50,danger:r<50}},[r,e.createTextVNode(" %")])]);var l}},render(){return this.user?e.createVNode("div",null,[e.createVNode("div",{class:"welcome"},[e.createVNode("div",null,[e.createTextVNode("Hello "),this.user.firstname,e.createTextVNode(",")]),e.createVNode("div",null,[e.createTextVNode("You got "),e.createVNode("b",null,[this.user.credits]),e.createTextVNode(" credits and "),e.createVNode("b",null,[this.user.gpa[0].gpa]),e.createTextVNode(" of GPA !")])]),e.createVNode("div",{class:"modules"},[this.modules.map(this.renderModule)])]):e.createVNode("div",null,[e.createTextVNode("Hello World !")])},created(){fetch("/api/me").then((e=>e.json())).then((({user:e})=>{fetch("/api/marvin").then((e=>e.json())).then((t=>{this.user=e,this.modules=t.reverse()}))}))}};window.addEventListener("beforeinstallprompt",(e=>{e.preventDefault(),setTimeout((()=>e.prompt()),15e3)})),window.addEventListener("error",(e=>{alert(e.message)}));const d=t.createRouter({history:t.createWebHistory(),routes:[{path:"/",component:o},{path:"/:pathMatch(.*)*",redirect:"/"}]}),a=e.createApp(r).use(d);d.isReady().then((()=>{a.mount("body")}))}(Vue,VueRouter);
