import{ad as s,r as a,ae as f}from"./index.3ecfb908.js";var i=Math.pow(2,31)-1;function c(u,e,t){var n=t-Date.now();u.current=n<=i?setTimeout(e,n):setTimeout(function(){return c(u,e,t)},i)}function T(){var u=s(),e=a.exports.useRef();return f(function(){return clearTimeout(e.current)}),a.exports.useMemo(function(){var t=function(){return clearTimeout(e.current)};function n(o,r){r===void 0&&(r=0),u()&&(t(),r<=i?e.current=setTimeout(o,r):c(e,o,Date.now()+r))}return{set:n,clear:t}},[])}export{T as u};
