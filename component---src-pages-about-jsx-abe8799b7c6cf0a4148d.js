webpackJsonp([0x83323ebd9d39f800],{"./src/components/About/About.jsx":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n("./node_modules/react/react.js"),u=o(l),s=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return u.default.createElement("div",{className:"about"},u.default.createElement("h1",null,"Edit About component or pages/about.jsx to include your information."))},t}(l.Component);t.default=s,e.exports=t.default},"./src/components/Layout/Header.jsx":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){return e.raw=t,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=r(["\n  background: ",";  \n  padding: ",";\n  text-align: center;\n"],["\n  background: ",";  \n  padding: ",";\n  text-align: center;\n"]),s=r(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: ",";\n  color: ",";\n  height: 100%;\n  padding:  25px;\n"],["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: ",";\n  color: ",";\n  height: 100%;\n  padding:  25px;\n"]),c=r(["\n  padding: 50px 0;\n  & > h1 {\n    font-weight: 600;  \n  }\n"],["\n  padding: 50px 0;\n  & > h1 {\n    font-weight: 600;  \n  }\n"]),d=n("./node_modules/react/react.js"),f=o(d),p=n("./node_modules/styled-components/lib/index.js"),b=o(p),m=n("./src/components/Layout/Navigation.jsx"),h=o(m),y=function(e){function t(){return a(this,t),i(this,e.apply(this,arguments))}return l(t,e),t.prototype.getHeader=function(){return this.props.location?"/"===this.props.location.pathname?f.default.createElement(g,null,f.default.createElement(_,null,f.default.createElement("img",{src:this.props.logo,style:{maxWidth:"80vw",maxHeight:"70vh"}}),f.default.createElement("p",null,"nact ⇒ node.js + actors"),f.default.createElement("p",{style:{fontStyle:"italic"}}," your services have never been so µ")),f.default.createElement(h.default,null)):f.default.createElement(j,null,f.default.createElement(h.default,{isSubpage:!0})):f.default.createElement("div",null)},t.prototype.render=function(){return this.getHeader()},t}(f.default.Component),g=b.default.div(u,function(e){return e.theme.accent},function(e){return e.theme.sitePadding}),j=b.default.div(s,function(e){return e.theme.brand},function(e){return e.theme.accent}),_=b.default.div(c);t.default=y,e.exports=t.default},"./src/components/Layout/Navigation.jsx":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){return e.raw=t,e}t.__esModule=!0;var u=l(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  background: ",";        \n  margin: ",";        \n  .nav-link {\n    font-size: 1.6rem;\n    margin-right: 10px;\n    font-weight: 200;           \n    color: ",";      \n  }  \n  .nav-link:hover {\n    border-color:  ",";\n  }\n"],["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  background: ",";        \n  margin: ",";        \n  .nav-link {\n    font-size: 1.6rem;\n    margin-right: 10px;\n    font-weight: 200;           \n    color: ",";      \n  }  \n  .nav-link:hover {\n    border-color:  ",";\n  }\n"]),s=n("./node_modules/react/react.js"),c=o(s),d=n("./node_modules/gatsby-link/index.js"),f=o(d),p=n("./node_modules/styled-components/lib/index.js"),b=o(p),m=b.default.div(u,function(e){return e.isSubpage?e.theme.brand:e.theme.accent},function(e){return e.isSubpage?"inherit":"0 auto"},function(e){return e.isSubpage?e.theme.accent:e.theme.brand},function(e){return e.isSubpage?e.theme.accent:e.theme.brand}),h=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return c.default.createElement(m,{isSubpage:this.props.isSubpage},c.default.createElement("section",null,c.default.createElement(f.default,{className:"nav-link",to:"/"}," HOME "),c.default.createElement(f.default,{className:"nav-link",to:"/docs/reasonml/introduction"}," DOCS "),c.default.createElement(f.default,{className:"nav-link",to:"/contact"}," CONTACT ")))},t}(c.default.Component);t.default=h,e.exports=t.default},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/ncthbrt/nact.io/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/ncthbrt/nact.io/node_modules/babel-plugin-lodash/lib/index.js","/Users/ncthbrt/nact.io/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/ncthbrt/nact.io/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/ncthbrt/nact.io/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/ncthbrt/nact.io/node_modules/babel-preset-stage-0/lib/index.js","/Users/ncthbrt/nact.io/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/about.jsx':function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){return e.raw=t,e}t.__esModule=!0;var u=l(["\n  padding: ",";\n"],["\n  padding: ",";\n"]),s=n("./node_modules/react/react.js"),c=o(s),d=n("./node_modules/gatsby-link/index.js"),f=(o(d),n("./node_modules/react-helmet/lib/Helmet.js")),p=o(f),b=n("./node_modules/styled-components/lib/index.js"),m=o(b),h=n("./src/components/SEO/SEO.jsx"),y=(o(h),n("./data/SiteConfig.js")),g=o(y),j=n("./src/components/Layout/Header.jsx"),_=o(j),x=n("./src/components/About/About.jsx"),w=o(x),E=m.default.div(u,function(e){return e.theme.sitePadding}),v=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return c.default.createElement("div",{className:"index-container"},c.default.createElement(p.default,{title:g.default.siteTitle}),c.default.createElement("main",null,c.default.createElement(_.default,{siteTitle:g.default.siteTitle,siteDescription:g.default.siteDescription,location:this.props.location,logo:g.default.siteLogo}),c.default.createElement(E,null,c.default.createElement(w.default,null))))},t}(c.default.Component);t.default=v,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-about-jsx-abe8799b7c6cf0a4148d.js.map