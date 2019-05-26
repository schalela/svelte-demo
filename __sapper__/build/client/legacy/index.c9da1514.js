import{F as a,G as e,a as t,b as s,c as n,d as r,e as c,f as l,g as i,h as o,N as u,l as f,m,u as h,n as v,o as d,p as x,q as g,r as p,s as E,x as N,w as T,O as y,t as w,v as $,P as b,Q as _}from"./chunk.781b08bf.js";import{a as S,b as k,c as A,d as L}from"./chunk.5ac72e5a.js";function M(a,e,t){var s=Object.create(a);return s.fixture=e[t],s}function I(a){var e,t,s,n=a.error;return{c:function(){e=f("li"),t=m("Error loading games: "),s=m(n),this.h()},l:function(a){e=v(a,"LI",{class:!0},!1);var r=d(e);t=x(r,"Error loading games: "),s=x(r,n),r.forEach(g),this.h()},h:function(){e.className="svelte-xdd3ms"},m:function(a,n){p(a,e,n),E(e,t),E(e,s)},p:function(a,e){a.$live&&n!==(n=e.error)&&w(s,n)},d:function(a){a&&g(e)}}}function q(a){for(var e,t=[],s=new Map,n=a.result.data.fixtures.sort(D),r=function(a){return a.fixture.fixture_id},c=0;c<n.length;c+=1){var l=M(a,n,c),i=r(l);s.set(i,t[c]=O(i,l))}var o=null;return n.length||(o=j(a)).c(),{c:function(){for(c=0;c<t.length;c+=1)t[c].c();e=$()},l:function(a){for(c=0;c<t.length;c+=1)t[c].l(a);e=$()},m:function(a,s){for(c=0;c<t.length;c+=1)t[c].m(a,s);p(a,e,s),o&&o.m(a,null)},p:function(a,n){var c=n.result.data.fixtures.sort(D);t=b(t,a,r,1,n,c,s,e.parentNode,_,O,e,M),c.length?o&&(o.d(1),o=null):o||((o=j(n)).c(),o.m(e.parentNode,e))},d:function(a){for(c=0;c<t.length;c+=1)t[c].d(a);a&&g(e),o&&o.d(a)}}}function j(a){var e,t;return{c:function(){e=f("li"),t=m("No games live"),this.h()},l:function(a){e=v(a,"LI",{class:!0},!1);var s=d(e);t=x(s,"No games live"),s.forEach(g),this.h()},h:function(){e.className="svelte-xdd3ms"},m:function(a,s){p(a,e,s),E(e,t)},d:function(a){a&&g(e)}}}function O(a,e){var t,s,n,r,c,l,i,o,u,N,T,y,$,b,_,S,k,A,L,M,I,q,j,O,R,G,H=e.fixture.homeTeam.team_name,z=e.fixture.goalsHomeTeam,C=e.fixture.goalsAwayTeam,D=e.fixture.statusShort,U=e.fixture.awayTeam.team_name;return{key:a,first:null,c:function(){t=f("li"),s=f("team"),n=f("img"),l=h(),i=f("team-name"),o=m(H),u=h(),N=f("score"),T=f("goals"),y=m(z),$=m(" – "),b=m(C),_=h(),S=f("status"),k=m(D),A=h(),L=f("team"),M=f("img"),j=h(),O=f("team-name"),R=m(U),G=h(),this.h()},l:function(a){t=v(a,"LI",{class:!0},!1);var e=d(t);s=v(e,"TEAM",{class:!0},!1);var r=d(s);n=v(r,"IMG",{src:!0,alt:!0,class:!0},!1),d(n).forEach(g),l=x(r,"\n              "),i=v(r,"TEAM-NAME",{class:!0},!1);var c=d(i);o=x(c,H),c.forEach(g),r.forEach(g),u=x(e,"\n            "),N=v(e,"SCORE",{class:!0},!1);var f=d(N);T=v(f,"GOALS",{class:!0},!1);var m=d(T);y=x(m,z),$=x(m," – "),b=x(m,C),m.forEach(g),_=x(f,"\n              "),S=v(f,"STATUS",{class:!0},!1);var h=d(S);k=x(h,D),h.forEach(g),f.forEach(g),A=x(e,"\n            "),L=v(e,"TEAM",{class:!0},!1);var p=d(L);M=v(p,"IMG",{src:!0,alt:!0,class:!0},!1),d(M).forEach(g),j=x(p,"\n              "),O=v(p,"TEAM-NAME",{class:!0},!1);var E=d(O);R=x(E,U),E.forEach(g),p.forEach(g),G=x(e,"\n          "),e.forEach(g),this.h()},h:function(){n.src=r=e.fixture.homeTeam.logo,n.alt=c=e.fixture.homeTeam.team_name,n.className="svelte-xdd3ms",i.className="svelte-xdd3ms",s.className="svelte-xdd3ms",T.className="svelte-xdd3ms",S.className="svelte-xdd3ms",N.className="svelte-xdd3ms",M.src=I=e.fixture.awayTeam.logo,M.alt=q=e.fixture.awayTeam.team_name,M.className="svelte-xdd3ms",O.className="svelte-xdd3ms",L.className="svelte-xdd3ms",t.className="svelte-xdd3ms",this.first=t},m:function(a,e){p(a,t,e),E(t,s),E(s,n),E(s,l),E(s,i),E(i,o),E(t,u),E(t,N),E(N,T),E(T,y),E(T,$),E(T,b),E(N,_),E(N,S),E(S,k),E(t,A),E(t,L),E(L,M),E(L,j),E(L,O),E(O,R),E(t,G)},p:function(a,e){a.$live&&r!==(r=e.fixture.homeTeam.logo)&&(n.src=r),a.$live&&c!==(c=e.fixture.homeTeam.team_name)&&(n.alt=c),a.$live&&H!==(H=e.fixture.homeTeam.team_name)&&w(o,H),a.$live&&z!==(z=e.fixture.goalsHomeTeam)&&w(y,z),a.$live&&C!==(C=e.fixture.goalsAwayTeam)&&w(b,C),a.$live&&D!==(D=e.fixture.statusShort)&&w(k,D),a.$live&&I!==(I=e.fixture.awayTeam.logo)&&(M.src=I),a.$live&&q!==(q=e.fixture.awayTeam.team_name)&&(M.alt=q),a.$live&&U!==(U=e.fixture.awayTeam.team_name)&&w(R,U)},d:function(a){a&&g(t)}}}function R(a){var e,t;return{c:function(){e=f("li"),t=m("Loading..."),this.h()},l:function(a){e=v(a,"LI",{class:!0},!1);var s=d(e);t=x(s,"Loading..."),s.forEach(g),this.h()},h:function(){e.className="svelte-xdd3ms"},m:function(a,s){p(a,e,s),E(e,t)},p:T,d:function(a){a&&g(e)}}}function G(a){var e,t,s,n,r,c,l,i,o,y,w={ctx:a,current:null,pending:R,then:q,catch:I,value:"result",error:"error"};return u(y=a.$live,w),{c:function(){e=f("main"),t=f("title"),s=m("Svelte SSR Demo"),n=h(),r=f("content"),c=f("h1"),l=m("Live Results"),i=h(),o=f("ul"),w.block.c(),this.h()},l:function(a){e=v(a,"MAIN",{class:!0},!1);var u=d(e);t=v(u,"TITLE",{},!1);var f=d(t);s=x(f,"Svelte SSR Demo"),f.forEach(g),n=x(u,"\n  "),r=v(u,"CONTENT",{class:!0},!1);var m=d(r);c=v(m,"H1",{class:!0},!1);var h=d(c);l=x(h,"Live Results"),h.forEach(g),i=x(m,"\n    "),o=v(m,"UL",{class:!0},!1);var p=d(o);w.block.l(p),p.forEach(g),m.forEach(g),u.forEach(g),this.h()},h:function(){c.className="svelte-xdd3ms",o.className="svelte-xdd3ms",r.className="svelte-xdd3ms",e.className="svelte-xdd3ms"},m:function(a,u){p(a,e,u),E(e,t),E(t,s),E(e,n),E(e,r),E(r,c),E(c,l),E(r,i),E(r,o),w.block.m(o,w.anchor=null),w.mount=function(){return o},w.anchor=null},p:function(e,t){a=t,w.ctx=a,"$live"in e&&y!==(y=a.$live)&&u(y,w)||w.block.p(e,N(N({},a),w.resolved))},i:T,o:T,d:function(a){a&&g(e),w.block.d(),w=null}}}var H;function z(){return C.apply(this,arguments)}function C(){return(C=a(e.mark(function a(){return e.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return H=new S({uri:"https://emjxn6xptvbvlhcocrhq7gwhoy.appsync-api.ap-southeast-2.amazonaws.com/graphql",headers:{"x-api-key":"da2-htijskntwzehlai3cbhmt7c24e"},fetch:this.fetch}),a.next=3,H.query({query:k});case 3:return a.t0=a.sent,a.abrupt("return",{cache:a.t0});case 5:case"end":return a.stop()}},a,this)}))).apply(this,arguments)}function D(a,e){return a.league_id-e.league_id||a.fixture_id-e.fixture_id}function U(a,e,t){var s,n=e.cache;A(H,k,n.data);var r=L(H,{query:k});return y(a,r,function(a){t("$live",s=a)}),a.$set=function(a){"cache"in a&&t("cache",n=a.cache)},{cache:n,live:r,$live:s}}export default(function(a){function e(a){var t;return s(this,e),t=n(this,r(e).call(this)),c(l(t),a,U,G,i,["cache"]),t}return t(e,o),e}());export{z as preload};
//# sourceMappingURL=index.c9da1514.js.map
