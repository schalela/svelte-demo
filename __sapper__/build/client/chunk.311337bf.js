import"./chunk.9efccc0b.js";function n(){}function t(n,t){return{subscribe:c(n,t).subscribe}}function c(t,c=n){let e;const o=[];function u(n){if(u=n,(c=t)!=c?u==u:c!==u||c&&"object"==typeof c||"function"==typeof c){if(t=n,!e)return;o.forEach(n=>n[1]()),o.forEach(n=>n[0](t))}var c,u}return{set:u,update:function(n){u(n(t))},subscribe:function(r,f=n){const i=[r,f];return o.push(i),1===o.length&&(e=c(u)||n),r(t),()=>{const n=o.indexOf(i);-1!==n&&o.splice(n,1),0===o.length&&e()}}}}export{c as a,t as b};
//# sourceMappingURL=chunk.311337bf.js.map
