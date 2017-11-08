webpackJsonp([0],{

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(243);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(56)("aaaf160a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6634bca0\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/stylus-loader/index.js!./basic.styl", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6634bca0\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/stylus-loader/index.js!./basic.styl");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)(undefined);
// imports


// module
exports.push([module.i, "\n.user-layout-wrapper {\n  height: 100vh;\n  overflow: hidden;\n}\n.main {\n  height: 100%;\n  overflow-y: auto;\n  width: calc(100% - 60px);\n  -webkit-transition-property: all; /* Safari */\n  -webkit-transition-duration: 0.5s; /* Safari */\n  transition-property: all;\n  transition-duration: 0.5s;\n}\n.expanded .main {\n  width: calc(100% - (60px + calc(80% - 60px)));\n}\n.main-content {\n  margin-right: 15px;\n  margin-left: 15px;\n}\n.main-content hr {\n  margin: 30px 0;\n  display: block;\n}\n.main-content h1,\n.main-content h3 {\n  font-family: 'roboto', sans-serif, sans-serif;\n  margin-top: 0px;\n  font-weight: 300;\n}\n.main-content h1 {\n  font-size: 30px;\n}\n.main-content h3 {\n  font-size: 20px;\n}\n.main-content h1.pageTitle {\n  font-size: 30px;\n  color: #fff;\n  text-shadow: 0px 1px 2px #3e3e3e;\n  font-family: 'robotolight', sans-serif;\n  font-weight: normal;\n  text-transform: uppercase;\n  margin-top: 0px;\n}\n.main-content .notification,\n.main-content .notification-error,\n.main-content .el-alert--error {\n  border: 1px solid #fcb322;\n  color: #c48405;\n  border-radius: 5px;\n  padding: 10px;\n  font-size: 12px;\n  display: inline-block;\n  background: #ffe8bb;\n  margin-bottom: 15px;\n  width: 100%;\n}\n.main-content .notification a,\n.main-content .notification-error a,\n.main-content .el-alert--error a {\n  text-decoration: none;\n  font-weight: bold;\n  color: #88b643;\n}\n.main-content .notification-error,\n.main-content .el-alert--error {\n  background: #ffd2ce;\n  border: 1px solid #ff6c60;\n  color: #bd1f13;\n}\n@media (min-width: 768px) {\n.main {\n    width: calc(100% - 80px);\n}\n.expanded .main {\n    width: calc(100% - (80px + 270px));\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vuex = __webpack_require__(57);

var _headerGuest = __webpack_require__(93);

var _headerGuest2 = _interopRequireDefault(_headerGuest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ============
 * User Layout
 * ============
 *
 * This is the layout for the authenticated user.
 */

exports.default = {
  data: function data() {
    return {};
  },


  methods: {
    logout: function logout() {
      //  authService.logout();
    }
  },
  components: {
    headerv: _headerGuest2.default
  }
};

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "flex user-layout-wrapper" }, [
    _c(
      "main",
      { staticClass: "main" },
      [
        _c("headerv"),
        _vm._v(" "),
        _c("div", { staticClass: "main-content" }, [_vm._t("default")], 2),
        _vm._v(" "),
        _c("footer", [
          _c(
            "div",
            { staticClass: "footer-content" },
            [
              _c("center", [
                _c("div", { staticClass: "logo" }, [
                  _c("img", {
                    attrs: {
                      src: __webpack_require__(246),
                      width: "130px"
                    }
                  })
                ]),
                _vm._v(
                  "\n          © 2017 Test work for INZPIRE.ME.\n          "
                )
              ])
            ],
            1
          )
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6634bca0", module.exports)
  }
}

/***/ }),

/***/ 246:
/***/ (function(module, exports) {

module.exports = "/images/logo.png?250511dbe7e64107809d0e6d980ff135";

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(242)
}
var normalizeComponent = __webpack_require__(55)
/* script */
var __vue_script__ = __webpack_require__(244)
/* template */
var __vue_template__ = __webpack_require__(245)
/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/app/layouts/basic/basic.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6634bca0", Component.options)
  } else {
    hotAPI.reload("data-v-6634bca0", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});