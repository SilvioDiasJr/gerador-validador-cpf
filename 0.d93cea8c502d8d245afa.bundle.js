(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"initialize",(function(){return te})),n.d(t,"ga",(function(){return ne})),n.d(t,"set",(function(){return re})),n.d(t,"send",(function(){return oe})),n.d(t,"pageview",(function(){return ie})),n.d(t,"modalview",(function(){return ae})),n.d(t,"timing",(function(){return ce})),n.d(t,"event",(function(){return ue})),n.d(t,"exception",(function(){return le})),n.d(t,"plugin",(function(){return fe})),n.d(t,"outboundLink",(function(){return se})),n.d(t,"testModeAPI",(function(){return pe})),n.d(t,"OutboundLink",(function(){return ge}));var r={};n.r(r),n.d(r,"initialize",(function(){return M})),n.d(r,"ga",(function(){return R})),n.d(r,"set",(function(){return F})),n.d(r,"send",(function(){return K})),n.d(r,"pageview",(function(){return V})),n.d(r,"modalview",(function(){return B})),n.d(r,"timing",(function(){return Z})),n.d(r,"event",(function(){return $})),n.d(r,"exception",(function(){return U})),n.d(r,"plugin",(function(){return H})),n.d(r,"outboundLink",(function(){return Q})),n.d(r,"testModeAPI",(function(){return W})),n.d(r,"default",(function(){return X}));var o=n(0),i=n.n(o),a=n(1),c=n.n(a);function u(e){console.warn("[react-ga]",e)}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?y(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){function t(){var e,n;p(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return m(y(n=b(this,(e=d(t)).call.apply(e,[this].concat(o)))),"handleClick",(function(e){var r=n.props,o=r.target,i=r.eventLabel,a=r.to,c=r.onClick,u=r.trackerNames,l={label:i},f="_blank"!==o,s=!(e.ctrlKey||e.shiftKey||e.metaKey||1===e.button);f&&s?(e.preventDefault(),t.trackLink(l,(function(){window.location.href=a}),u)):t.trackLink(l,(function(){}),u),c&&c(e)})),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.to,n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(n,!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},s(e,["to"]),{href:t,onClick:this.handleClick});return"_blank"===this.props.target&&(n.rel="noopener noreferrer"),delete n.eventLabel,delete n.trackerNames,i.a.createElement("a",n)}}])&&g(n.prototype,r),o&&g(n,o),t}(o.Component);function O(e){return e.replace(/^\s+|\s+$/g,"")}m(h,"trackLink",(function(){u("ga tracking not enabled")})),m(h,"propTypes",{eventLabel:c.a.string.isRequired,target:c.a.string,to:c.a.string,onClick:c.a.func,trackerNames:c.a.arrayOf(c.a.string)}),m(h,"defaultProps",{target:null,to:null,onClick:null,trackerNames:null});var w=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function j(e,t){return function(e){return"string"==typeof e&&-1!==e.indexOf("@")}(e)?(u("This arg looks like an email address, redacting."),"REDACTED (Potential Email Address)"):t?O(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,(function(e,t,n){return t>0&&t+e.length!==n.length&&e.search(w)>-1&&":"!==n.charAt(t-2)&&("-"!==n.charAt(t+e.length)||"-"===n.charAt(t-1))&&n.charAt(t-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)})):e}function k(e){console.info("[react-ga]",e)}var P=[],A={calls:P,ga:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];P.push([].concat(t))},resetCalls:function(){P.length=0}};function S(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var T="undefined"==typeof window||"undefined"==typeof document,q=!1,C=!0,L=!1,I=!0,_=function(){var e;return L?A.ga.apply(A,arguments):!T&&(window.ga?(e=window).ga.apply(e,arguments):u("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually"))};function J(e){return j(e,C)}function z(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=n[0];"string"==typeof o?(!I&&Array.isArray(e)||_.apply(void 0,n),Array.isArray(e)&&e.forEach((function(e){_.apply(void 0,N(["".concat(e,".").concat(o)].concat(n.slice(1))))}))):u("ga command must be a string")}function G(e,t){e?t&&(t.debug&&!0===t.debug&&(q=!0),!1===t.titleCase&&(C=!1),t.useExistingGa)||(t&&t.gaOptions?_("create",e,t.gaOptions):_("create",e,"auto")):u("gaTrackingID is required in initialize()")}function M(e,t){if(t&&!0===t.testMode)L=!0;else{if(T)return!1;t&&!0===t.standardImplementation||function(e){var t,n,r,o,i,a,c,u="https://www.google-analytics.com/analytics.js";e&&e.gaAddress?u=e.gaAddress:e&&e.debug&&(u="https://www.google-analytics.com/analytics_debug.js"),t=window,n=document,r="script",o=u,i="ga",t.GoogleAnalyticsObject=i,t.ga=t.ga||function(){(t.ga.q=t.ga.q||[]).push(arguments)},t.ga.l=1*new Date,a=n.createElement(r),c=n.getElementsByTagName(r)[0],a.async=1,a.src=o,c.parentNode.insertBefore(a,c)}(t)}return I=!t||"boolean"!=typeof t.alwaysSendToDefaultTracker||t.alwaysSendToDefaultTracker,Array.isArray(e)?e.forEach((function(e){"object"===x(e)?G(e.trackingId,e):u("All configs must be an object")})):G(e,t),!0}function R(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length>0&&(_.apply(void 0,t),q&&(k("called ga('arguments');"),k("with arguments: ".concat(JSON.stringify(t))))),window.ga}function F(e,t){e?"object"===x(e)?(0===Object.keys(e).length&&u("empty `fieldsObject` given to .set()"),z(t,"set",e),q&&(k("called ga('set', fieldsObject);"),k("with fieldsObject: ".concat(JSON.stringify(e))))):u("Expected `fieldsObject` arg to be an Object"):u("`fieldsObject` is required in .set()")}function K(e,t){z(t,"send",e),q&&(k("called ga('send', fieldObject);"),k("with fieldObject: ".concat(JSON.stringify(e))),k("with trackers: ".concat(JSON.stringify(t))))}function V(e,t,n){if(e){var r=O(e);if(""!==r){var o={};if(n&&(o.title=n),z(t,"send",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(n,!0).forEach((function(t){D(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({hitType:"pageview",page:r},o)),q){k("called ga('send', 'pageview', path);");var i="";n&&(i=" and title: ".concat(n)),k("with path: ".concat(r).concat(i))}}else u("path cannot be an empty string in .pageview()")}else u("path is required in .pageview()")}function B(e,t){if(e){var n,r="/"===(n=O(e)).substring(0,1)?n.substring(1):n;if(""!==r){var o="/modal/".concat(r);z(t,"send","pageview",o),q&&(k("called ga('send', 'pageview', path);"),k("with path: ".concat(o)))}else u("modalName cannot be an empty string or a single / in .modalview()")}else u("modalName is required in .modalview(modalName)")}function Z(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.variable,r=e.value,o=e.label,i=arguments.length>1?arguments[1]:void 0;if(t&&n&&r&&"number"==typeof r){var a={hitType:"timing",timingCategory:J(t),timingVar:J(n),timingValue:r};o&&(a.timingLabel=J(o)),K(a,i)}else u("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number")}function $(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.action,r=e.label,o=e.value,i=e.nonInteraction,a=e.transport,c=S(e,["category","action","label","value","nonInteraction","transport"]),l=arguments.length>1?arguments[1]:void 0;if(t&&n){var f={hitType:"event",eventCategory:J(t),eventAction:J(n)};r&&(f.eventLabel=J(r)),void 0!==o&&("number"!=typeof o?u("Expected `args.value` arg to be a Number."):f.eventValue=o),void 0!==i&&("boolean"!=typeof i?u("`args.nonInteraction` must be a boolean."):f.nonInteraction=i),void 0!==a&&("string"!=typeof a?u("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(a)&&u("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),f.transport=a)),Object.keys(c).filter((function(e){return"dimension"===e.substr(0,"dimension".length)})).forEach((function(e){f[e]=c[e]})),Object.keys(c).filter((function(e){return"metric"===e.substr(0,"metric".length)})).forEach((function(e){f[e]=c[e]})),K(f,l)}else u("args.category AND args.action are required in event()")}function U(e,t){var n=e.description,r=e.fatal,o={hitType:"exception"};n&&(o.exDescription=J(n)),void 0!==r&&("boolean"!=typeof r?u("`args.fatal` must be a boolean."):o.exFatal=r),K(o,t)}var H={require:function(e,t,n){if(e){var r=O(e);if(""!==r){var o=n?"".concat(n,".require"):"require";if(t){if("object"!==x(t))return void u("Expected `options` arg to be an Object");0===Object.keys(t).length&&u("Empty `options` given to .require()"),R(o,r,t),q&&k("called ga('require', '".concat(r,"', ").concat(JSON.stringify(t)))}else R(o,r),q&&k("called ga('require', '".concat(r,"');"))}else u("`name` cannot be an empty string in .require()")}else u("`name` is required in .require()")},execute:function(e,t){var n,r;if(1==(arguments.length<=2?0:arguments.length-2)?n=arguments.length<=2?void 0:arguments[2]:(r=arguments.length<=2?void 0:arguments[2],n=arguments.length<=3?void 0:arguments[3]),"string"!=typeof e)u("Expected `pluginName` arg to be a String.");else if("string"!=typeof t)u("Expected `action` arg to be a String.");else{var o="".concat(e,":").concat(t);n=n||null,r&&n?(R(o,r,n),q&&(k("called ga('".concat(o,"');")),k('actionType: "'.concat(r,'" with payload: ').concat(JSON.stringify(n))))):n?(R(o,n),q&&(k("called ga('".concat(o,"');")),k("with payload: ".concat(JSON.stringify(n))))):(R(o),q&&k("called ga('".concat(o,"');")))}}};function Q(e,t,n){if("function"==typeof t)if(e&&e.label){var r={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:J(e.label)},o=!1,i=setTimeout((function(){o=!0,t()}),250);r.hitCallback=function(){clearTimeout(i),o||t()},K(r,n)}else u("args.label is required in outboundLink()");else u("hitCallback function is required")}var W=A,X={initialize:M,ga:R,set:F,send:K,pageview:V,modalview:B,timing:Z,event:$,exception:U,plugin:H,outboundLink:Q,testModeAPI:A};function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var te=M,ne=R,re=F,oe=K,ie=V,ae=B,ce=Z,ue=$,le=U,fe=H,se=Q,pe=W;h.origTrackLink=h.trackLink,h.trackLink=Q;var ge=h;t.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(n,!0).forEach((function(t){ee(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},r,{OutboundLink:ge})}}]);