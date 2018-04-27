!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("prop-types")):"function"==typeof define&&define.amd?define(["react","prop-types"],t):"object"==typeof exports?exports.ReactRayrPagination=t(require("react"),require("prop-types")):e.ReactRayrPagination=t(e.React,e.PropTypes)}("undefined"!=typeof self?self:this,function(e,t){return function(e){function t(n){if(a[n])return a[n].exports;var r=a[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var a={};return t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RayrPagination=void 0;var n=a(1),r=function(e){return e&&e.__esModule?e:{default:e}}(n);t.RayrPagination=r.default},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=a(2),c=n(s),f=a(3),p=n(f),g=a(4),h=(n(g),function(e){function t(e){o(this,t);var a=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={count:e.count,currentPage:e.currentPage,perPage:e.perPage,showPages:5,arr:[],goPage:""},a}return i(t,e),l(t,[{key:"componentWillMount",value:function(){this.changePage(1)}},{key:"componentWillReceiveProps",value:function(e){parseInt(e.currentPage);null!=e.count&&0!=e.count&&this.setState({count:e.count,currentPage:parseInt(e.currentPage),perPage:e.perPage},this.changePage(this.state.currentPage))}},{key:"changePage",value:function(e){e=parseInt(e),this.state.arr=[];var t=void 0,a=0,n=Math.ceil(this.state.count/this.state.perPage);if(n<this.state.showPages){t=n;for(var r=0;r<t;r++)this.state.arr.push(r+1)}else{t=this.state.showPages,e-2>=1&&e+2<=n?a=-2:e-2<1?a=-(e-1):e+2>n&&(a=-e+n-t+1);for(var o=0;o<t;o++)this.state.arr.push(e+a+o)}}},{key:"toPage",value:function(e,t){var a=this;0===e||1===e&&1===t||e>Math.ceil(this.state.count/this.state.perPage)||e===Math.ceil(this.state.count/this.state.perPage)&&t===Math.ceil(this.state.count/this.state.perPage)||e===this.state.currentPage||this.setState({currentPage:e},function(){a.changePage(e),a.props.onChange(e,t)})}},{key:"isShow",value:function(e){var t=this,a=parseInt(this.state.currentPage),n=Math.ceil(this.state.count/this.state.perPage);return this.changePage(a),0===e||null===e?null:c.default.createElement("div",{className:"rayr-page-div"},c.default.createElement("ul",{className:"rayr-page"},c.default.createElement("li",{className:1===a?"click-disable":"",onClick:function(){t.toPage(1,a)}},c.default.createElement("span",null,"‹‹")),c.default.createElement("li",{className:1===a?"click-disable":"",onClick:function(){t.toPage(a-1)}},c.default.createElement("span",null,"‹")),this.state.arr.map(function(e,n){var o;return c.default.createElement("li",(o={key:n,className:a===e?"value-blue":""},r(o,"key",e.toString()),r(o,"onClick",function(){t.toPage(e)}),o),c.default.createElement("span",null,e))}),c.default.createElement("li",{className:a===n?"click-disable":"",onClick:function(){t.toPage(a+1)}},c.default.createElement("span",null,"›")),c.default.createElement("li",{className:a===n?"click-disable":"",onClick:function(){t.toPage(n,a)}},c.default.createElement("span",null,"››")),n>5&&[c.default.createElement("li",{className:"li-go-width",key:"go"},c.default.createElement("span",null,"前往")),c.default.createElement("input",{key:"input",className:"input-go",value:this.state.goPage,placeholder:Math.ceil(this.state.count/this.state.perPage),onChange:function(e){t.setState({goPage:e.target.value})},onKeyDown:function(e){13===e.keyCode&&t.state.goPage>=1&&t.state.goPage<=n&&parseInt(t.state.goPage)!==a&&(t.toPage(t.state.goPage),e.target.blur())}}),c.default.createElement("li",{key:"page",className:"li-page-width"},c.default.createElement("span",null,"页"))]))}},{key:"render",value:function(){return this.isShow(this.state.count)}}]),t}(c.default.Component));h.propTypes={count:p.default.number.isRequired},h.defaultProps={count:null,currentPage:1,perPage:10},t.default=h,e.exports=t.default},function(t,a){t.exports=e},function(e,a){e.exports=t},function(e,t,a){var n,r;!function(){"use strict";function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n))e.push(a.apply(null,n));else if("object"===r)for(var u in n)o.call(n,u)&&n[u]&&e.push(u)}}return e.join(" ")}var o={}.hasOwnProperty;void 0!==e&&e.exports?e.exports=a:(n=[],void 0!==(r=function(){return a}.apply(t,n))&&(e.exports=r))}()}])});