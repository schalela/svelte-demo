import{F as a,G as e,a as t,b as s,c as n,d as c,e as r,f as i,g as l,h as o,N as u,l as f,m as h,u as m,n as v,o as p,p as x,q as d,r as g,s as E,x as N,w as T,O as y,t as w,v as $,P as b,Q as _}from"./chunk.781b08bf.js";import{a as S,b as k,c as A,d as L}from"./chunk.5ac72e5a.js";function M(a,e,t){var s=Object.create(a);return s.fixture=e[t],s}function I(a){var e,t,s,n=a.error;return{c:function(){e=f("li"),t=h("Error loading games: "),s=h(n),this.h()},l:function(a){e=v(a,"LI",{class:!0},!1);var c=p(e);t=x(c,"Error loading games: "),s=x(c,n),c.forEach(d),this.h()},h:function(){e.className="svelte-1scpi0a"},m:function(a,n){g(a,e,n),E(e,t),E(e,s)},p:function(a,e){a.$live&&n!==(n=e.error)&&w(s,n)},d:function(a){a&&d(e)}}}function q(a){for(var e,t=[],s=new Map,n=a.result.data.fixtures.sort(D),c=function(a){return a.fixture.fixture_id},r=0;r<n.length;r+=1){var i=M(a,n,r),l=c(i);s.set(l,t[r]=O(l,i))}var o=null;return n.length||(o=j(a)).c(),{c:function(){for(r=0;r<t.length;r+=1)t[r].c();e=$()},l:function(a){for(r=0;r<t.length;r+=1)t[r].l(a);e=$()},m:function(a,s){for(r=0;r<t.length;r+=1)t[r].m(a,s);g(a,e,s),o&&o.m(a,null)},p:function(a,n){var r=n.result.data.fixtures.sort(D);t=b(t,a,c,1,n,r,s,e.parentNode,_,O,e,M),r.length?o&&(o.d(1),o=null):o||((o=j(n)).c(),o.m(e.parentNode,e))},d:function(a){for(r=0;r<t.length;r+=1)t[r].d(a);a&&d(e),o&&o.d(a)}}}function j(a){var e,t;return{c:function(){e=f("li"),t=h("No games live"),this.h()},l:function(a){e=v(a,"LI",{class:!0},!1);var s=p(e);t=x(s,"No games live"),s.forEach(d),this.h()},h:function(){e.className="svelte-1scpi0a"},m:function(a,s){g(a,e,s),E(e,t)},d:function(a){a&&d(e)}}}function O(a,e){var t,s,n,c,r,i,l,o,u,N,T,y,$,b,_,S,k,A,L,M,I,q,j,O,R,G,H=e.fixture.homeTeam.team_name,z=e.fixture.goalsHomeTeam,C=e.fixture.goalsAwayTeam,D=e.fixture.statusShort,U=e.fixture.awayTeam.team_name;return{key:a,first:null,c:function(){t=f("li"),s=f("team"),n=f("img"),i=m(),l=f("team-name"),o=h(H),u=m(),N=f("score"),T=f("goals"),y=h(z),$=h(" – "),b=h(C),_=m(),S=f("status"),k=h(D),A=m(),L=f("team"),M=f("img"),j=m(),O=f("team-name"),R=h(U),G=m(),this.h()},l:function(a){t=v(a,"LI",{class:!0},!1);var e=p(t);s=v(e,"TEAM",{class:!0},!1);var c=p(s);n=v(c,"IMG",{src:!0,alt:!0,class:!0},!1),p(n).forEach(d),i=x(c,"\n              "),l=v(c,"TEAM-NAME",{class:!0},!1);var r=p(l);o=x(r,H),r.forEach(d),c.forEach(d),u=x(e,"\n            "),N=v(e,"SCORE",{class:!0},!1);var f=p(N);T=v(f,"GOALS",{class:!0},!1);var h=p(T);y=x(h,z),$=x(h," – "),b=x(h,C),h.forEach(d),_=x(f,"\n              "),S=v(f,"STATUS",{class:!0},!1);var m=p(S);k=x(m,D),m.forEach(d),f.forEach(d),A=x(e,"\n            "),L=v(e,"TEAM",{class:!0},!1);var g=p(L);M=v(g,"IMG",{src:!0,alt:!0,class:!0},!1),p(M).forEach(d),j=x(g,"\n              "),O=v(g,"TEAM-NAME",{class:!0},!1);var E=p(O);R=x(E,U),E.forEach(d),g.forEach(d),G=x(e,"\n          "),e.forEach(d),this.h()},h:function(){n.src=c=e.fixture.homeTeam.logo,n.alt=r=e.fixture.homeTeam.team_name,n.className="svelte-1scpi0a",l.className="svelte-1scpi0a",s.className="svelte-1scpi0a",T.className="svelte-1scpi0a",S.className="svelte-1scpi0a",N.className="svelte-1scpi0a",M.src=I=e.fixture.awayTeam.logo,M.alt=q=e.fixture.awayTeam.team_name,M.className="svelte-1scpi0a",O.className="svelte-1scpi0a",L.className="svelte-1scpi0a",t.className="svelte-1scpi0a",this.first=t},m:function(a,e){g(a,t,e),E(t,s),E(s,n),E(s,i),E(s,l),E(l,o),E(t,u),E(t,N),E(N,T),E(T,y),E(T,$),E(T,b),E(N,_),E(N,S),E(S,k),E(t,A),E(t,L),E(L,M),E(L,j),E(L,O),E(O,R),E(t,G)},p:function(a,e){a.$live&&c!==(c=e.fixture.homeTeam.logo)&&(n.src=c),a.$live&&r!==(r=e.fixture.homeTeam.team_name)&&(n.alt=r),a.$live&&H!==(H=e.fixture.homeTeam.team_name)&&w(o,H),a.$live&&z!==(z=e.fixture.goalsHomeTeam)&&w(y,z),a.$live&&C!==(C=e.fixture.goalsAwayTeam)&&w(b,C),a.$live&&D!==(D=e.fixture.statusShort)&&w(k,D),a.$live&&I!==(I=e.fixture.awayTeam.logo)&&(M.src=I),a.$live&&q!==(q=e.fixture.awayTeam.team_name)&&(M.alt=q),a.$live&&U!==(U=e.fixture.awayTeam.team_name)&&w(R,U)},d:function(a){a&&d(t)}}}function R(a){var e,t;return{c:function(){e=f("li"),t=h("Loading..."),this.h()},l:function(a){e=v(a,"LI",{class:!0},!1);var s=p(e);t=x(s,"Loading..."),s.forEach(d),this.h()},h:function(){e.className="svelte-1scpi0a"},m:function(a,s){g(a,e,s),E(e,t)},p:T,d:function(a){a&&d(e)}}}function G(a){var e,t,s,n,c,r,i,l,o,y,w={ctx:a,current:null,pending:R,then:q,catch:I,value:"result",error:"error"};return u(y=a.$live,w),{c:function(){e=f("main"),t=f("title"),s=h("Svelte SSR Demo"),n=m(),c=f("content"),r=f("h1"),i=h("Live Results"),l=m(),o=f("ul"),w.block.c(),this.h()},l:function(a){e=v(a,"MAIN",{class:!0},!1);var u=p(e);t=v(u,"TITLE",{},!1);var f=p(t);s=x(f,"Svelte SSR Demo"),f.forEach(d),n=x(u,"\n  "),c=v(u,"CONTENT",{class:!0},!1);var h=p(c);r=v(h,"H1",{class:!0},!1);var m=p(r);i=x(m,"Live Results"),m.forEach(d),l=x(h,"\n    "),o=v(h,"UL",{class:!0},!1);var g=p(o);w.block.l(g),g.forEach(d),h.forEach(d),u.forEach(d),this.h()},h:function(){r.className="svelte-1scpi0a",o.className="svelte-1scpi0a",c.className="svelte-1scpi0a",e.className="svelte-1scpi0a"},m:function(a,u){g(a,e,u),E(e,t),E(t,s),E(e,n),E(e,c),E(c,r),E(r,i),E(c,l),E(c,o),w.block.m(o,w.anchor=null),w.mount=function(){return o},w.anchor=null},p:function(e,t){a=t,w.ctx=a,"$live"in e&&y!==(y=a.$live)&&u(y,w)||w.block.p(e,N(N({},a),w.resolved))},i:T,o:T,d:function(a){a&&d(e),w.block.d(),w=null}}}var H;function z(){return C.apply(this,arguments)}function C(){return(C=a(e.mark(function a(){return e.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return H=new S({uri:"https://emjxn6xptvbvlhcocrhq7gwhoy.appsync-api.ap-southeast-2.amazonaws.com/graphql",headers:{"x-api-key":"da2-htijskntwzehlai3cbhmt7c24e"},fetch:this.fetch}),a.next=3,H.query({query:k});case 3:return a.t0=a.sent,a.abrupt("return",{cache:a.t0});case 5:case"end":return a.stop()}},a,this)}))).apply(this,arguments)}function D(a,e){return a.league_id-e.league_id||a.fixture_id-e.fixture_id}function U(a,e,t){var s,n=e.cache;A(H,k,n.data);var c=L(H,{query:k});return y(a,c,function(a){t("$live",s=a)}),a.$set=function(a){"cache"in a&&t("cache",n=a.cache)},{cache:n,live:c,$live:s}}export default(function(a){function e(a){var t;return s(this,e),t=n(this,c(e).call(this)),r(i(t),a,U,G,l,["cache"]),t}return t(e,o),e}());export{z as preload};
//# sourceMappingURL=index.271c4bd4.js.map
