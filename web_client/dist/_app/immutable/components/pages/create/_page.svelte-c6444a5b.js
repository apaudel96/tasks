import{S as oe,i as ie,s as ue,k as l,q as N,a as g,l as r,m as f,r as M,h as u,c as b,n as d,b as ce,F as t,M as L,N as fe,I as H,J as se,O as ne,P,K as de,o as _e}from"../../../chunks/index-4a37e229.js";import{f as le,a as re}from"../../../chunks/index-2f589274.js";import{d as pe}from"../../../chunks/database-4df4be65.js";let he=(s=21)=>crypto.getRandomValues(new Uint8Array(s)).reduce((a,e)=>(e&=63,e<36?a+=e.toString(36):e<62?a+=(e-26).toString(36).toUpperCase():e>62?a+="-":a+="_",a),"");function me(s){let a,e,n,_,w,O,A,p,y,V,q,c,z,T,I,F,G,k,j,J,K,h,D,x,Q,E,W,m,v,R,X,Y;return{c(){a=l("div"),e=l("form"),n=l("h1"),_=N("Add Task"),w=g(),O=l("hr"),A=g(),p=l("label"),y=l("strong"),V=N("Task"),q=g(),c=l("input"),z=g(),T=l("label"),I=l("strong"),F=N("Due"),G=g(),k=l("input"),j=g(),J=l("br"),K=g(),h=l("div"),D=l("button"),x=N("Cancel"),Q=g(),E=l("button"),W=N("Add"),this.h()},l(o){a=r(o,"DIV",{class:!0});var S=f(a);e=r(S,"FORM",{class:!0});var i=f(e);n=r(i,"H1",{});var Z=f(n);_=M(Z,"Add Task"),Z.forEach(u),w=b(i),O=r(i,"HR",{}),A=b(i),p=r(i,"LABEL",{});var U=f(p);y=r(U,"STRONG",{});var $=f(y);V=M($,"Task"),$.forEach(u),q=b(U),c=r(U,"INPUT",{type:!0,enterkeyhint:!0}),U.forEach(u),z=b(i),T=r(i,"LABEL",{});var B=f(T);I=r(B,"STRONG",{});var ee=f(I);F=M(ee,"Due"),ee.forEach(u),G=b(B),k=r(B,"INPUT",{type:!0}),B.forEach(u),j=b(i),J=r(i,"BR",{}),K=b(i),h=r(i,"DIV",{class:!0});var C=f(h);D=r(C,"BUTTON",{class:!0,type:!0});var te=f(D);x=M(te,"Cancel"),te.forEach(u),Q=b(C),E=r(C,"BUTTON",{class:!0,type:!0});var ae=f(E);W=M(ae,"Add"),ae.forEach(u),C.forEach(u),i.forEach(u),S.forEach(u),this.h()},h(){d(c,"type","text"),d(c,"enterkeyhint","next"),d(k,"type","datetime-local"),d(D,"class","col"),d(D,"type","reset"),d(E,"class","col"),d(E,"type","submit"),d(h,"class","row"),d(e,"class","card"),d(a,"class","background svelte-1l75hzj")},m(o,S){ce(o,a,S),t(a,e),t(e,n),t(n,_),t(e,w),t(e,O),t(e,A),t(e,p),t(p,y),t(y,V),t(p,q),t(p,c),L(c,s[0]),t(e,z),t(e,T),t(T,I),t(I,F),t(T,G),t(T,k),L(k,s[1]),t(e,j),t(e,J),t(e,K),t(e,h),t(h,D),t(D,x),t(h,Q),t(h,E),t(E,W),R=!0,X||(Y=[fe(be.call(null,c)),H(c,"input",s[3]),H(k,"input",s[4]),H(e,"reset",se(ge)),H(e,"submit",se(s[2]))],X=!0)},p(o,[S]){S&1&&c.value!==o[0]&&L(c,o[0]),S&2&&L(k,o[1])},i(o){R||(ne(()=>{m||(m=P(e,le,{y:-100},!0)),m.run(1)}),ne(()=>{v||(v=P(a,re,{},!0)),v.run(1)}),R=!0)},o(o){m||(m=P(e,le,{y:-100},!1)),m.run(0),v||(v=P(a,re,{},!1)),v.run(0),R=!1},d(o){o&&u(a),o&&m&&m.end(),o&&v&&v.end(),X=!1,de(Y)}}}function ve(){let s=new Date,a=s.getTimezoneOffset(),e=new Date(s.getTime()-a*60*1e3),n=new Date(e.getTime()+2*24*60*60*1e3);return n.setMinutes(Math.ceil(n.getMinutes()/5)*5),n.toISOString().slice(0,16)}function ge(){history.back()}function be(s){setTimeout(()=>{s.focus()},50)}function ye(s,a,e){let n="",_="";_e(()=>{e(1,_=ve())});async function w(){let p=new Date(_),y={id:he(),task:n,done:!1,synced:!1,due:p.toISOString()};await pe.tasks.add(y),history.back()}function O(){n=this.value,e(0,n)}function A(){_=this.value,e(1,_)}return[n,_,w,O,A]}class Ee extends oe{constructor(a){super(),ie(this,a,ye,me,ue,{})}}export{Ee as default};
