webpackJsonp([9],{"/7Ci":function(t,s,a){"use strict";var n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"my-node-page"},[a("main",[a("back-nav",{attrs:{title:"Understanding Global"}}),a("section",{staticClass:"section"},[a("div",{staticClass:"container"},[a("div",{staticClass:"content"},[t._v("Before advancing on in this tutorial, it's important to understand the different ways\nwe can use code globally in Webpack 2 or 3...")]),a("div",{staticClass:"title is-4"},[t._v("Webpack Evaluates Modules Only Once")]),a("div",{staticClass:"content"},[t._v("Webpack evaluates modules only once, so your instance remains global and carries changes\nthrough from module to module. So if you create something like a `globals.js` and export\nan object of all your globals then you can `import './globals'` and read/write to these\nglobals. You can import into one module, make changes to the object from a function and\nimport into another module and read those changes in a function. Also remember the order\nthings happen. Webpack will first take all the imports and load them up in order starting \nin your entry point `main.js`. Then it will execute `main.js`. So where you read/write to\nglobals is important. Is it from the root scope of a module or in a function called later?")]),a("div",{staticClass:"title is-4"},[t._v("DefinePlugin")]),t._m(0),t._m(1),a("div",{staticClass:"content"},[t._v("Use it like:")]),t._m(2),a("div",{staticClass:"title is-4"},[t._v("ProvidePlugin")]),t._m(3),a("div",{staticClass:"content"},[t._v("Create any module (for example, a global set of utilities would be handy):")]),a("strong",{staticClass:"my-italic"},[t._v("utils.js")]),t._m(4),a("div",{staticClass:"content"},[t._v("Then alias the module and add to ProvidePlugin:")]),a("strong",{staticClass:"my-italic"},[t._v("webpack.config.js")]),t._m(5),t._m(6),a("b-message",{attrs:{type:"is-warning"}},[t._v("Note: Don't forget to tell your linter about the global, so it won't complain. \nSee section on ESLint.")]),a("div",{staticClass:"title is-4"},[t._v("The Global Window Object")]),t._m(7)],1)])],1),a("main-footer")],1)},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._v("If you just want to use const with string values for your globals, \nthen you can use Webpack's "),a("a",{attrs:{href:"https://webpack.js.org/plugins/define-plugin/"}},[t._v("DefinePlugin")]),t._v(" . Add this plugin to your list of Webpack plugins:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{staticClass:"block"},[a("code",{staticClass:"hljs javascript"},[a("span",{staticClass:"hljs-keyword"},[t._v("new")]),t._v(" webpack.DefinePlugin({\n  PRODUCTION: "),a("span",{staticClass:"hljs-built_in"},[t._v("JSON")]),t._v(".stringify("),a("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v("),\n  VERSION: "),a("span",{staticClass:"hljs-built_in"},[t._v("JSON")]),t._v(".stringify("),a("span",{staticClass:"hljs-string"},[t._v('"5fa3b9"')]),t._v("),\n  BROWSER_SUPPORTS_HTML5: "),a("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v(",\n  TWO: "),a("span",{staticClass:"hljs-string"},[t._v('"1+1"')]),t._v(",\n  "),a("span",{staticClass:"hljs-string"},[t._v('"typeof window"')]),t._v(": "),a("span",{staticClass:"hljs-built_in"},[t._v("JSON")]),t._v(".stringify("),a("span",{staticClass:"hljs-string"},[t._v('"object"')]),t._v(")\n})\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{staticClass:"block"},[a("code",{staticClass:"hljs javascript"},[a("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log("),a("span",{staticClass:"hljs-string"},[t._v('"Running App version "')]),t._v(" + VERSION);\n"),a("span",{staticClass:"hljs-keyword"},[t._v("if")]),t._v("(!BROWSER_SUPPORTS_HTML5) "),a("span",{staticClass:"hljs-built_in"},[t._v("require")]),t._v("("),a("span",{staticClass:"hljs-string"},[t._v('"html5shiv"')]),t._v(");\n\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._v("Here's how you can do it using "),a("a",{attrs:{href:"https://webpack.github.io/docs/shimming-modules.html#plugin-provideplugin"}},[t._v("Webpack's ProvidePlugin")]),t._v("( which makes a module available as a variable in every module and only those modules\nwhere you actually use it). This is useful when you don't want to keep typing"),a("code",[t._v("import Bar from 'foo'")]),t._v(" again and again. Or you can bring in a package like "),a("code",[t._v("jQuery")]),t._v(" or "),a("code",[t._v("lodash")]),t._v(" as global here. ")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{staticClass:"block"},[a("code",{staticClass:"hljs javascript"},[a("span",{staticClass:"hljs-built_in"},[t._v("module")]),t._v(".exports = {\n\n  sayHello () {\n    alert("),a("span",{staticClass:"hljs-string"},[t._v('"hello"')]),t._v(")\n  }\n}\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{staticClass:"block"},[a("code",{staticClass:"hljs javascript"},[a("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" webpack = "),a("span",{staticClass:"hljs-built_in"},[t._v("require")]),t._v("("),a("span",{staticClass:"hljs-string"},[t._v('"webpack"')]),t._v(");\n"),a("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" path = "),a("span",{staticClass:"hljs-built_in"},[t._v("require")]),t._v("("),a("span",{staticClass:"hljs-string"},[t._v('"path"')]),t._v(");\n\n"),a("span",{staticClass:"hljs-comment"},[t._v("// ...")]),t._v("\n\n"),a("span",{staticClass:"hljs-built_in"},[t._v("module")]),t._v(".exports = {\n\n  "),a("span",{staticClass:"hljs-comment"},[t._v("// ...")]),t._v("\n\n  resolve: {\n    extensions: ["),a("span",{staticClass:"hljs-string"},[t._v("''")]),t._v(", "),a("span",{staticClass:"hljs-string"},[t._v("'.js'")]),t._v("],\n    alias: {\n      "),a("span",{staticClass:"hljs-string"},[t._v("'utils'")]),t._v(": path.resolve(__dirname, "),a("span",{staticClass:"hljs-string"},[t._v("'./utils'")]),t._v(")  "),a("span",{staticClass:"hljs-comment"},[t._v("// <-- When you build or restart dev-server, you'll get an error if path is incorrect.")]),t._v("\n    }\n  },\n\n  plugins: [\n\n    "),a("span",{staticClass:"hljs-comment"},[t._v("// ...")]),t._v("\n\n    "),a("span",{staticClass:"hljs-keyword"},[t._v("new")]),t._v(" webpack.ProvidePlugin({\n      "),a("span",{staticClass:"hljs-string"},[t._v("'utils'")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("'utils'")]),t._v("\n    })\n  ]  \n\n}\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._v("Now just call "),a("code",[t._v("utils.sayHello()")]),t._v(" in any js file and it should work. Make sure you restart your dev-server if you are using that with Webpack.  ")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("code",[t._v("window.foo = 'bar'")])])}],i={render:n,staticRenderFns:e};s.a=i},"5zde":function(t,s,a){a("zQR9"),a("qyJz"),t.exports=a("FeBl").Array.from},"8bnN":function(t,s,a){"use strict";s.a={props:{title:{type:String,default:""}},data:function(){return{}},methods:{}}},Crdz:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=a("aIVQ"),e=a("/7Ci"),i=a("VU/8"),l=i(n.a,e.a,null,null,null);s.default=l.exports},"Mn9/":function(t,s,a){"use strict";function n(t){a("Sq6U")}var e=a("8bnN"),i=a("VL4h"),l=a("VU/8"),o=n,r=l(e.a,i.a,o,null,null);s.a=r.exports},Sq6U:function(t,s,a){var n=a("fcGQ");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("7ecc9016",n,!0)},VL4h:function(t,s,a){"use strict";var n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"my-back-nav"},[a("div",{staticClass:"container"},[a("nav",{staticClass:"navbar"},[a("div",{staticClass:"navbar-brand"},[a("router-link",{staticClass:"navbar-item my-brand",attrs:{to:{name:"overview"}}},[a("b-icon",{attrs:{icon:"arrow_back",type:"is-white"}})],1),a("div",{staticClass:"navbar-item subtitle has-text-white"},[t._v(t._s(t.title))])],1)])])])},e=[],i={render:n,staticRenderFns:e};s.a=i},aIVQ:function(t,s,a){"use strict";var n=a("c/Tr"),e=a.n(n),i=a("Mn9/");s.a={name:"global",components:{BackNav:i.a},mounted:function(){var t=this,s=e()(document.getElementsByClassName("title")),a=s.filter(function(s){return s.innerHTML===t.$route.query.title})[0];a?a.scrollIntoView():scroll(0,0)},data:function(){return{}},methods:{}}},"c/Tr":function(t,s,a){t.exports={default:a("5zde"),__esModule:!0}},fBQ2:function(t,s,a){"use strict";var n=a("evD5"),e=a("X8DO");t.exports=function(t,s,a){s in t?n.f(t,s,e(0,a)):t[s]=a}},fcGQ:function(t,s,a){s=t.exports=a("FZ+f")(!0),s.push([t.i,"#app .my-back-nav{border-bottom:1px solid hsla(0,0%,100%,.5)}#app .my-back-nav,#app .my-back-nav .navbar{background-color:#00bda0}#app .my-back-nav .navbar-item:hover .icon>i,#app .my-back-nav .navbar-item:hover>.navbar-link,#app .my-back-nav .navbar-item:hover>a{color:#0a0a0a}","",{version:3,sources:["/home/david/projects/code/vue-example-project/src/features/common/back-nav.vue"],names:[],mappings:"AACA,kBAEE,0CAA+C,CAChD,AACD,4CAHE,wBAA0B,CAK3B,AACD,sIAGE,aAAe,CAChB",file:"back-nav.vue",sourcesContent:["\n#app .my-back-nav {\n  background-color: #00bda0;\n  border-bottom: 1px solid rgba(255,255,255,0.5);\n}\n#app .my-back-nav .navbar {\n  background-color: #00bda0;\n}\n#app .my-back-nav .navbar-item:hover > a,\n#app .my-back-nav .navbar-item:hover > .navbar-link,\n#app .my-back-nav .navbar-item:hover .icon > i {\n  color: #0a0a0a;\n}"],sourceRoot:""}])},qyJz:function(t,s,a){"use strict";var n=a("+ZMJ"),e=a("kM2E"),i=a("sB3e"),l=a("msXi"),o=a("Mhyx"),r=a("QRG4"),c=a("fBQ2"),v=a("3fs2");e(e.S+e.F*!a("dY0y")(function(t){Array.from(t)}),"Array",{from:function(t){var s,a,e,u,_=i(t),p="function"==typeof this?this:Array,d=arguments.length,h=d>1?arguments[1]:void 0,m=void 0!==h,b=0,f=v(_);if(m&&(h=n(h,d>2?arguments[2]:void 0,2)),void 0==f||p==Array&&o(f))for(s=r(_.length),a=new p(s);s>b;b++)c(a,b,m?h(_[b],b):_[b]);else for(u=f.call(_),a=new p;!(e=u.next()).done;b++)c(a,b,m?l(u,h,[e.value,b],!0):e.value);return a.length=b,a}})}});
//# sourceMappingURL=global.0c18d3864a0d44321e8e.js.map