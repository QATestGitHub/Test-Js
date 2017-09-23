webpackJsonp([2],{"5zde":function(s,t,a){a("zQR9"),a("qyJz"),s.exports=a("FeBl").Array.from},"8bnN":function(s,t,a){"use strict";t.a={props:{title:{type:String,default:""}},data:function(){return{}},methods:{}}},FvlO:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=a("wz1E"),n=a("yewt"),l=a("VU/8"),i=l(e.a,n.a,null,null,null);t.default=i.exports},"Mn9/":function(s,t,a){"use strict";function e(s){a("Sq6U")}var n=a("8bnN"),l=a("VL4h"),i=a("VU/8"),o=e,r=i(n.a,l.a,o,null,null);t.a=r.exports},Sq6U:function(s,t,a){var e=a("fcGQ");"string"==typeof e&&(e=[[s.i,e,""]]),e.locals&&(s.exports=e.locals);a("rjj0")("7ecc9016",e,!0)},VL4h:function(s,t,a){"use strict";var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"my-back-nav"},[a("div",{staticClass:"container"},[a("nav",{staticClass:"navbar"},[a("div",{staticClass:"navbar-brand"},[a("router-link",{staticClass:"navbar-item my-brand",attrs:{to:{name:"overview"}}},[a("b-icon",{attrs:{icon:"arrow_back",type:"is-white"}})],1),a("div",{staticClass:"navbar-item subtitle has-text-white"},[s._v(s._s(s.title))])],1)])])])},n=[],l={render:e,staticRenderFns:n};t.a=l},"c/Tr":function(s,t,a){s.exports={default:a("5zde"),__esModule:!0}},fBQ2:function(s,t,a){"use strict";var e=a("evD5"),n=a("X8DO");s.exports=function(s,t,a){t in s?e.f(s,t,n(0,a)):s[t]=a}},fcGQ:function(s,t,a){t=s.exports=a("FZ+f")(!0),t.push([s.i,"#app .my-back-nav{border-bottom:1px solid hsla(0,0%,100%,.5)}#app .my-back-nav,#app .my-back-nav .navbar{background-color:#00bda0}#app .my-back-nav .navbar-item:hover .icon>i,#app .my-back-nav .navbar-item:hover>.navbar-link,#app .my-back-nav .navbar-item:hover>a{color:#0a0a0a}","",{version:3,sources:["/home/david/projects/code/vue-example-project/src/features/common/back-nav.vue"],names:[],mappings:"AACA,kBAEE,0CAA+C,CAChD,AACD,4CAHE,wBAA0B,CAK3B,AACD,sIAGE,aAAe,CAChB",file:"back-nav.vue",sourcesContent:["\n#app .my-back-nav {\n  background-color: #00bda0;\n  border-bottom: 1px solid rgba(255,255,255,0.5);\n}\n#app .my-back-nav .navbar {\n  background-color: #00bda0;\n}\n#app .my-back-nav .navbar-item:hover > a,\n#app .my-back-nav .navbar-item:hover > .navbar-link,\n#app .my-back-nav .navbar-item:hover .icon > i {\n  color: #0a0a0a;\n}"],sourceRoot:""}])},qyJz:function(s,t,a){"use strict";var e=a("+ZMJ"),n=a("kM2E"),l=a("sB3e"),i=a("msXi"),o=a("Mhyx"),r=a("QRG4"),c=a("fBQ2"),v=a("3fs2");n(n.S+n.F*!a("dY0y")(function(s){Array.from(s)}),"Array",{from:function(s){var t,a,n,p,h=l(s),u="function"==typeof this?this:Array,_=arguments.length,d=_>1?arguments[1]:void 0,m=void 0!==d,C=0,y=v(h);if(m&&(d=e(d,_>2?arguments[2]:void 0,2)),void 0==y||u==Array&&o(y))for(t=r(h.length),a=new u(t);t>C;C++)c(a,C,m?d(h[C],C):h[C]);else for(p=y.call(h),a=new u;!(n=p.next()).done;C++)c(a,C,m?i(p,d,[n.value,C],!0):n.value);return a.length=C,a}})},wz1E:function(s,t,a){"use strict";var e=a("c/Tr"),n=a.n(e),l=a("Mn9/");t.a={name:"vuex",components:{BackNav:l.a},mounted:function(){var s=this,t=n()(document.getElementsByClassName("title")),a=t.filter(function(t){return t.innerHTML===s.$route.query.title})[0];a?a.scrollIntoView():scroll(0,0)},data:function(){return{}},methods:{}}},yewt:function(s,t,a){"use strict";var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"my-node-page"},[a("main",[a("back-nav",{attrs:{title:"Vuex"}}),s._m(0)],1),a("main-footer")],1)},n=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",{staticClass:"section"},[a("div",{staticClass:"container"},[a("div",{staticClass:"content"},[s._v("In this section of the tutorial we'll look at central state management with Vuex...")]),a("div",{staticClass:"title is-4"},[s._v("Install Vuex")]),a("div",{staticClass:"content"},[s._v(" Let's setup the state of our central data storage. We'll want some state to be available \nacross browser tabs (and when the app is closed/reopened) so let's sync this state with\nLocalStorage. When the app bootstraps, we want to first check in the browser's localStorage\nand retrieve all of our previously stored data. We'll also have other state we can use for\nto make component-to-component communication easier (for situations where you don't have\na simple parent-child communication, but more complex sibling-to-sibling or other component\nrelationships). Let's just add a property for storing the search text and button press on\nthe navbar for demonstration purposes. ")]),a("pre",{staticClass:"block"},[a("code",{staticClass:"hljs bash"},[s._v("npm install vuex --save-dev\n")])]),a("div",{staticClass:"title is-4"},[s._v("State")]),a("strong",{staticClass:"my-italic"},[s._v("src/vuex/state.js")]),a("pre",{staticClass:"block"},[a("code",{staticClass:"hljs javascript"},[a("span",{staticClass:"hljs-comment"},[s._v('/**\n* Key for local storage.\n*\n* Set the key to use in local storage to hold persistant data. If logged in,\n* you can see this key by going to Chrome > dev tools > application tab,\n* then choosing "Local Storage" and "http://localhost:8080".\n*\n* @type {string}\n*/')]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" STORAGE_KEY = "),a("span",{staticClass:"hljs-string"},[s._v("'vue-example-project'")]),s._v("\n\n"),a("span",{staticClass:"hljs-comment"},[s._v("/**\n* Initialize all the shared app state in Vuex.\n*\n* @return {Object}\n*/")]),s._v("\n"),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),a("span",{staticClass:"hljs-title"},[s._v("initializeState")]),s._v(" ("),a("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n  "),a("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" syncedState = {\n    auth: {\n      isLoggedIn: "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n      accessToken: "),a("span",{staticClass:"hljs-literal"},[s._v("null")]),s._v(",\n      refreshToken: "),a("span",{staticClass:"hljs-literal"},[s._v("null")]),s._v("\n    },\n    user: {\n      name: "),a("span",{staticClass:"hljs-literal"},[s._v("null")]),s._v("\n    }\n  }\n\n  "),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" notSyncedState = {\n    sidebar: "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n    currentView: "),a("span",{staticClass:"hljs-literal"},[s._v("null")]),s._v("\n  }\n\n  "),a("span",{staticClass:"hljs-comment"},[s._v("// Sync with local storage.")]),s._v("\n  "),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (localStorage.getItem(STORAGE_KEY)) {\n    syncedState = "),a("span",{staticClass:"hljs-built_in"},[s._v("JSON")]),s._v(".parse(localStorage.getItem(STORAGE_KEY))\n  }\n\n  "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),a("span",{staticClass:"hljs-built_in"},[s._v("Object")]),s._v(".assign(syncedState, notSyncedState)\n}\n\n"),a("span",{staticClass:"hljs-comment"},[s._v("/**\n* The shared app state in Vuex.\n*\n* @type {Object}\n*/")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" state = initializeState()\n\n")])]),a("div",{staticClass:"title is-4"},[s._v("Mutations, Getters, and Actions")]),a("div",{staticClass:"content"},[s._v("Now create a file to hold all the methods that will change the state in our Vuex store:")]),a("strong",{staticClass:"my-italic"},[s._v("src/vuex/mutations.js")]),a("pre",{staticClass:"block"},[a("code",{staticClass:"hljs javascript"},[a("span",{staticClass:"hljs-comment"},[s._v("/**\n* Update auth data in Vuex.\n*\n* @param  {state} state  The full existing data we have stored in Vuex.\n* @param  {auth}  auth   The new auth data.\n* @return {void}\n*/")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" UPDATE_AUTH = (state, auth) => {\n  state.auth = auth\n}\n\n"),a("span",{staticClass:"hljs-comment"},[s._v("/**\n* Update user data in Vuex.\n*\n* @param  {state} state The full existing data we have stored in Vuex.\n* @param  {user}  user  The new user data.\n* @return {void}\n*/")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" UPDATE_USER = (state, user) => {\n  state.user = user\n}\n\n"),a("span",{staticClass:"hljs-comment"},[s._v("/**\n* Open/Close the app sidebar.\n*\n* @param  {state}    state The full existing data we have stored in Vuex.\n* @param  {Boolean}  open  The open/close status.\n* @return {void}\n*/")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" UPDATE_SIDEBAR = (state, open) => {\n  state.sidebar = open\n}\n\n"),a("span",{staticClass:"hljs-comment"},[s._v("/**\n* Update the current view (used to navigate back/forth to child pages).\n*\n* @param  {state}    state The full existing data we have stored in Vuex.\n* @param  {Boolean}  open  The open/close status.\n* @return {void}\n*/")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" UPDATE_CURRENT_VIEW = (state, view) => {\n  state.currentView = view\n}\n\n"),a("span",{staticClass:"hljs-comment"},[s._v("/**\n* Clear each property, one by one, so reactivity still works.\n*\n* @param  {state} state  The full existing data we have stored in Vuex.\n* @return {void}\n*/")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" CLEAR_ALL_DATA = (state) => {\n  "),a("span",{staticClass:"hljs-comment"},[s._v("// Auth")]),s._v("\n  state.auth.isLoggedIn = "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v("\n  state.auth.accessToken = "),a("span",{staticClass:"hljs-literal"},[s._v("null")]),s._v("\n  state.auth.refreshToken = "),a("span",{staticClass:"hljs-literal"},[s._v("null")]),s._v("\n\n  "),a("span",{staticClass:"hljs-comment"},[s._v("// User")]),s._v("\n  state.user.name = "),a("span",{staticClass:"hljs-string"},[s._v("''")]),s._v("\n}\n")])]),a("div",{staticClass:"title is-4"},[s._v("Getters")]),a("div",{staticClass:"content"},[s._v("And some getters (although you can accesss the Vuex state directly as we'll see shortly):")]),a("strong",{staticClass:"my-italic"},[s._v("src/vuex/getters.js")]),a("pre",{staticClass:"block"},[a("code",{staticClass:"hljs javascript"},[a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" user = state => state.user\n")])]),a("div",{staticClass:"title is-4"},[s._v("Plugins")]),a("div",{staticClass:"content"},[s._v("And some getters (although you can accesss the Vuex state directly as we'll see shortly):")]),a("strong",{staticClass:"my-italic"},[s._v("src/vuex/plugins.js")]),a("pre",{staticClass:"block"},[a("code",{staticClass:"hljs javascript"},[a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" { STORAGE_KEY } "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'./state'")]),s._v("\n\n/**\n* @param  {Vuex}\n* @return {Function}\n*/\nconst localStoragePlugin = store => {\n  store.subscribe((mutation, state) => {\n    const syncedData = { auth: state.auth, user: state.user }\n\n    localStorage.setItem(STORAGE_KEY, JSON.stringify(syncedData))\n\n    if (mutation.type === "),a("span",{staticClass:"hljs-string"},[s._v("'CLEAR_ALL_DATA'")]),s._v(") {\n      localStorage.removeItem(STORAGE_KEY)\n    }\n  })\n}\n\n/**\n* Export an array of all the plugins.\n*\n* @type {array}\n*/\nexport default [localStoragePlugin]\n")])]),a("div",{staticClass:"title is-4"},[s._v("The Index")]),a("div",{staticClass:"content"},[s._v("And bring it all together in the index.js file:")]),a("strong",{staticClass:"my-italic"},[s._v("src/vuex/plugins.js")]),a("pre",{staticClass:"block"},[a("code",{staticClass:"hljs javascript"},[a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" Vue "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'vue'")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" Vuex "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'vuex'")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" { state } "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'./state'")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" * "),a("span",{staticClass:"hljs-keyword"},[s._v("as")]),s._v(" getters "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'./getters'")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" * "),a("span",{staticClass:"hljs-keyword"},[s._v("as")]),s._v(" actions "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'./actions'")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" * "),a("span",{staticClass:"hljs-keyword"},[s._v("as")]),s._v(" mutations "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'./mutations'")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" plugins "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'./plugins'")]),s._v("\n\nVue.use(Vuex)\n\n/**\n* All the parts we need to implement shared state across our app with Vuex.\n*\n* @type {Vuex}\n*/\nconst store = new Vuex.Store({\n  state,\n  getters,\n  actions,\n  mutations,\n  plugins\n})\n\n/**\n* Export the store object.\n*\n* @type {Vuex}\n*/\nexport default store\n")])])])])}],l={render:e,staticRenderFns:n};t.a=l}});
//# sourceMappingURL=vuex.562e55ab97a8c4c29d9b.js.map