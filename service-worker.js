if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return c[e]||(i=new Promise(async i=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=i}else importScripts(e),i()})),i.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},i=(i,c)=>{Promise.all(i.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(i)};self.define=(i,f,d)=>{c[i]||(c[i]=Promise.resolve().then(()=>{let c={};const r={uri:location.origin+i.slice(1)};return Promise.all(f.map(i=>{switch(i){case"exports":return c;case"module":return r;default:return e(i)}})).then(e=>{const i=d(...e);return c.default||(c.default=i),c})}))}}define("./service-worker.js",["./workbox-468c4d03"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"0.3265e8f083cb77e7235d.bundle.js",revision:"643bc35d4e6cda0ee9fee80d299ff1af"},{url:"5.8231d6c1023841cd92d7.bundle.js",revision:"0ce05e2986ff0fb8212523b814ca2337"},{url:"apple-touch-icon.png",revision:"4b5a4f3a4ce0968ef98b48ceb21828f9"},{url:"browserconfig.xml",revision:"f422643f69978430a467930f63d7a941"},{url:"favicon.ico",revision:"b8499a3d28c9b11a7b5aaaf70003adf1"},{url:"img/47d5e02832a083558ddd7c5ef8baae02.svg",revision:"1364c01051f21b1d83b7d018d8c44ccb"},{url:"img/96860fdd2f001e8edad5e0bdc5f71b7c.png",revision:"386a62f05bc173ef503483ec29bfdca8"},{url:"img/9e589c8265f399fca2e50b0220cb8c21.svg",revision:"786d89b5e65cca29ceefa320c415aa16"},{url:"img/b82e870a12a8cbabd701bc6ef708cce5.svg",revision:"d8df5272dd47d8ecf390a6ef1a5a8aa7"},{url:"img/fa8f33d6d6e3997f9256f58e31a3b85b.svg",revision:"1a28f2a529887ea4b254be5f1e90b510"},{url:"img/github.svg",revision:"23fc8f81f92bb2981d8f9e089d7df14a"},{url:"img/like.svg",revision:"335eff6a0aefd9ce25d8624c9cae2f54"},{url:"img/logo.svg",revision:"1c62d5e1a9782ca0891117e1b46be44f"},{url:"img/tiles/large.png",revision:"4fa9884a84f347a1e4d7ef94d81fbb8c"},{url:"img/tiles/medium.png",revision:"89b898e90d8b3976ff5c3028d5626f4a"},{url:"img/tiles/small.png",revision:"3527bfe7a2ec1464e2fa83ccbc17a73f"},{url:"img/tiles/wide.png",revision:"3f8e3b9c4099f3a030e79eac741c9818"},{url:"img/touch/chrome-touch-icon-192x192.png",revision:"09e2bcdec5002f356327361c55bee4c3"},{url:"img/touch/icon-128x128 2.png",revision:"8d79e83d57ab1745548eb2df1dfca230"},{url:"img/touch/icon-128x128.png",revision:"0a0256a8009590c91c60fd628aafd2cf"},{url:"img/touch/icon-144x144.png",revision:"a5f0a9b4f16edf84dc3e66c06a7d7f22"},{url:"img/touch/icon-512x512.png",revision:"52090f8f62b770165f1bdc431b2adc5b"},{url:"index.597ad370e5518e51698f.js",revision:"b239bd4deffdd56c8ff34a31ad3b1565"},{url:"index.df222006c285bc137b53.css",revision:"e4b3110f6f49fdc0d47962d96f8fadbc"},{url:"index.html",revision:"b87a2c9374dd8258aa0882f2cfa5cbd2"},{url:"shared.6b495fa3c0867ba654c7.js",revision:"f0529449bdced778dd2ae1673f5a40bf"},{url:"site.webmanifest",revision:"fb46bfc75f7cf370ad417ef77d758da7"},{url:"vendors~index.9cd8424fc298dd8c11a6.css",revision:"ef42e471807d9a7208be654d7bc151bd"},{url:"vendors~index.e5776a44a4255ab3a8c2.bundle.js",revision:"3f55495e6f9cb3edee0a7b915d3ef8f6"},{url:"vendors~index~shared.334fb807523e7e6673f3.bundle.js",revision:"61d24dcb7476a3daf3a40ac7f6f73810"}],{})}));
