"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var l=c(function(G,m){
var j=require('@stdlib/complex-float64-ctor/dist'),q=require('@stdlib/complex-float64-real/dist'),p=require('@stdlib/complex-float64-imag/dist');function k(e,r,i){var a=q(e)+q(r)+q(i),n=p(e)+p(r)+p(i);return new j(a,n)}m.exports=k
});var y=c(function(H,w){
function A(e,r,i,a,n,u,s,d,t){return s[t]=e+i+n,s[t+d]=r+a+u,s}w.exports=A
});var R=c(function(I,C){
function B(e,r,i,a,n,u,s,d,t,v,h,g){return v[g]=e[i]+a[u]+s[t],v[g+h]=e[i+r]+a[u+n]+s[t+d],v}C.exports=B
});var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=l(),D=y(),E=R();b(x,"assign",D);b(x,"strided",E);module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
