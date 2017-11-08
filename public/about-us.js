webpackJsonp([0],{

/***/ 242:
/***/ (function(module, exports) {

module.exports = "/images/iphone-video.png?d987852ad8f470c7e6406615e890f530";

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(248);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(55)("7295a3e2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-bac70436\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/stylus-loader/index.js!./AboutUs.styl", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-bac70436\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/stylus-loader/index.js!./AboutUs.styl");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)(undefined);
// imports


// module
exports.push([module.i, "\n.main {\n  padding-top: 27%;\n}\n.top-div {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  text-align: center;\n}\n.top-div img {\n  width: 100%;\n}\n.top-div .title {\n  letter-spacing: 2px;\n  font-weight: 400;\n  position: relative;\n  bottom: 220px;\n  color: #fff;\n}\n.top-div h1 {\n  font-size: 42px;\n}\n.titlePost {\n  font-family: \"Montserrat Alternates\", sans-serif;\n  color: #33b2c1;\n  margin-bottom: 0.5em;\n}\n.subTitlePost {\n  color: #d8315b;\n}\n.iphoneWithImage {\n  float: right;\n  background-image: url(" + __webpack_require__(249) + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n}\n.iphoneWithImage img {\n  width: 90%;\n}\n.play_video {\n  background-image: url(" + __webpack_require__(257) + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n  width: 6%;\n  height: 23%;\n  border-radius: 50%;\n  position: absolute;\n  top: 38%;\n  right: 14%;\n}\n.play_video:hover {\n  opacity: 0.9;\n}\n.imageInThePhone {\n  height: 300px;\n  background-image: url(" + __webpack_require__(242) + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n}\n.background-primary-color .titlePost,\n.background-primary-color .subTitlePost {\n  color: #fff;\n}\n.first_flag {\n  -webkit-transform: scaleX(-1);\n  transform: scaleX(-1);\n  -webkit-filter: FlipH;\n          filter: FlipH;\n  -ms-filter: \"FlipH\";\n}\n.first_flag img {\n  width: 40%;\n  margin-left: calc((100% + 20%) / 2);\n  margin-top: 6%;\n  -webkit-transform: rotate(20deg);\n  transform: rotate(20deg);\n}\n.second_flag {\n  -webkit-transform: scaleX(1);\n  transform: scaleX(1);\n  -webkit-filter: FlipH;\n          filter: FlipH;\n  -ms-filter: \"FlipH\";\n}\n.second_flag img {\n  width: 40%;\n  float: right;\n  margin-top: 6%;\n  -webkit-transform: rotate(20deg);\n  transform: rotate(20deg);\n}\n.rocking-the-world div {\n  height: 255px;\n  background-repeat: no-repeat;\n  background-size: calc(100% - 13px);\n  background-position: center center;\n}\n.rocking-the-world div:first-child {\n  margin-left: -7px;\n}\n.rocking-the-world div:last-child {\n  background-size: cover;\n  margin-left: 7px;\n}\n.rocking-the-world .rocking-the-world1 {\n  background-image: url(" + __webpack_require__(281) + ");\n}\n.rocking-the-world .rocking-the-world2 {\n  background-image: url(" + __webpack_require__(283) + ");\n}\n.rocking-the-world .rocking-the-world3 {\n  background-image: url(" + __webpack_require__(282) + ");\n}\n.facts-titles {\n  margin-top: 7%;\n}\n.facts-titles .titlePost,\n.facts-titles .subTitlePost {\n  margin-left: 7%;\n}\n.facts img {\n  width: 43px;\n}\n.facts .icon-facts {\n  background-repeat: no-repeat;\n  background-size: 38px;\n  background-position: center center;\n  width: 45px;\n  height: 45px;\n  display: inline-block;\n}\n.facts .icon-mario {\n  background-image: url(" + __webpack_require__(285) + ");\n}\n.facts .icon-building {\n  background-image: url(" + __webpack_require__(286) + ");\n}\n.facts .icon-cereal {\n  background-image: url(" + __webpack_require__(287) + ");\n}\n.facts .icon-users {\n  background-image: url(" + __webpack_require__(288) + ");\n}\n.facts .icon-airplane {\n  background-image: url(" + __webpack_require__(289) + ");\n}\n.facts .icon-waffle {\n  background-image: url(" + __webpack_require__(290) + ");\n}\n.facts .el-col-sm-8 {\n  margin-left: calc((100% - 80%) / 3);\n}\n.facts h1 {\n  display: inline-block;\n  margin-right: 20px;\n  font-size: 58px;\n  font-weight: bold;\n  color: #d8315b;\n  margin-bottom: 0px;\n}\n@media (max-width: 768px) {\n.play_video {\n    height: 15%;\n    width: 10%;\n    top: 58%;\n    right: 40%;\n}\n.iphoneWithImage {\n    float: none;\n    margin-left: calc((100% - 80%) / 2);\n}\n}\n@media only screen and (max-width: 992px) {\n.top-div .title {\n    bottom: 176px;\n}\n}\n@media only screen and (max-width: 600px) {\n.top-div .title {\n    display: none;\n}\n.play_video {\n    height: calc((100% - 82%) / 2);\n    width: calc((100% - 80%) / 2);\n    top: calc((100% + 52%) / 2);\n    right: calc((100% - 15%) / 2);\n}\n}\n@media only screen and (max-width: 400px) {\n.icon {\n    height: 1.7%;\n}\n.play_video {\n    top: calc((100% + 44%) / 2);\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 249:
/***/ (function(module, exports) {

module.exports = "/fonts/iphone-video.svg?cad6bda4ac355b998f8f01a1f70a2d43";

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _card = __webpack_require__(258);

var _card2 = _interopRequireDefault(_card);

var _list_steps = __webpack_require__(276);

var _list_steps2 = _interopRequireDefault(_list_steps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ============
 * Page AboutUs
 * ============
 *
 *
 */

exports.default = {
    data: function data() {
        return {
            users: [{
                name: 'Marie Mastad',
                img: __webpack_require__(265),
                icon: __webpack_require__(269),
                role: 'COO & founder'

            }, {
                name: 'Mats Lyngstad',
                img: __webpack_require__(266),
                icon: __webpack_require__(269),
                role: 'CEO & founder'
            }, {
                name: 'Chris Constandce',
                img: __webpack_require__(266),
                icon: __webpack_require__(269),
                role: 'Head of design'
            }, {
                name: 'Yuri Karapetyan',
                img: __webpack_require__(267),
                icon: __webpack_require__(269),
                role: 'Lead developer'
            }, {
                name: 'Angel Wang',
                img: __webpack_require__(268),
                icon: __webpack_require__(269),
                role: 'Head of Growth'
            }],
            history: [{
                title: 'Completing the team',
                subTitle: 'Chris joined us as Head of Design',
                description: 'By hiring a head of design we completed the core roles to kick ass!',
                img: __webpack_require__(271),
                date: '24th of july, 2017'
            }, {
                title: 'Finding a new office',
                subTitle: 'A beautiful penthouse in Oslo',
                description: 'With a beautiful skyline over Oslo, our new office is beauty!',
                img: __webpack_require__(272),
                date: '3rd of july, 2017'
            }, {
                title: 'Signing Universal Music',
                subTitle: 'Our biggest client so far',
                description: 'Signing our biggest brand! Great coverage ang more to come.',
                img: __webpack_require__(273),
                date: '17th of june, 2017'
            }, {
                title: 'Expanding the team',
                subTitle: 'Paul joined us as Head of Sales',
                description: 'With the addition of Paul, the head of sales team is completed!',
                img: __webpack_require__(274),
                date: '12th of May, 2017'
            }, {
                title: 'Completing the team',
                subTitle: 'Chris joined us as Head of Design',
                description: 'By hiring a head of design we completed the core roles to kick ass!',
                img: __webpack_require__(271),
                date: '1th of May, 2017'
            }, {
                title: 'Finding a new office',
                subTitle: 'A beautiful penthouse in Oslo',
                description: 'With a beautiful skyline over Oslo, our new office is beauty!',
                img: __webpack_require__(272),
                date: '3rd of july, 2017'
            }]
        };
    },


    methods: {
        addHistory: function addHistory() {
            var _history;

            console.log('dgf');
            (_history = this.history).push.apply(_history, [{
                title: 'Expanding the team',
                subTitle: 'Paul joined us as Head of Sales',
                description: 'With the addition of Paul, the head of sales team is completed!',
                img: __webpack_require__(274),
                date: '12th of May, 2017'
            }, {
                title: 'Completing the team',
                subTitle: 'Chris joined us as Head of Design',
                description: 'By hiring a head of design we completed the core roles to kick ass!',
                img: __webpack_require__(271),
                date: '1th of May, 2017'
            }, {
                title: 'Finding a new office',
                subTitle: 'A beautiful penthouse in Oslo',
                description: 'With a beautiful skyline over Oslo, our new office is beauty!',
                img: __webpack_require__(272),
                date: '3rd of july, 2017'
            }]);
        }
    },
    created: function created() {},


    components: {
        cardv: _card2.default,
        listStepsv: _list_steps2.default
    }
};

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "el-row",
        { staticClass: "margin-block" },
        [
          _c("el-col", { attrs: { sm: 12, md: 12, lg: 12 } }, [
            _c("h2", { staticClass: "titlePost text-center" }, [
              _vm._v("Who we are")
            ]),
            _vm._v(" "),
            _c("h3", { staticClass: "subTitlePost text-center" }, [
              _vm._v(" Re-inverting influencer marketing")
            ]),
            _vm._v(" "),
            _c("h4", { staticClass: "text-grey text-center max-width-500px" }, [
              _vm._v(
                "\n                    We are inzpire.me! Passionate, alive and all with same goal in mind.\n                    Re-crealing the world of influencer marketing is our passion.\n                "
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "el-col",
            { attrs: { sm: 12, md: 12, lg: 12 } },
            [
              _c(
                "svg",
                {
                  staticClass: "iphoneWithImage",
                  attrs: {
                    width: "80%",
                    height: "auto",
                    viewBox: "-60 -6.3 480 288"
                  }
                },
                [
                  _c("defs", [
                    _c("clipPath", { attrs: { id: "rectView" } }, [
                      _c("rect", {
                        attrs: { width: "480", height: "278", fill: "#FFFFFF" }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("image", {
                    attrs: {
                      width: "480",
                      height: "278",
                      "xlink:href": __webpack_require__(242),
                      "clip-path": "url(#rectView)"
                    }
                  })
                ]
              ),
              _vm._v(" "),
              _c("router-link", { attrs: { to: { path: "about-us" } } }, [
                _c("div", { staticClass: "play_video" })
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "full-width background-gray" },
        [
          _c("el-row", { staticClass: "text-center " }, [
            _c("h2", { staticClass: "titlePost text-center" }, [
              _vm._v("Meeteing the team")
            ]),
            _vm._v(" "),
            _c("h3", { staticClass: "subTitlePost text-center" }, [
              _vm._v(
                "\n                    10 people from all over the world\n                "
              )
            ]),
            _vm._v(" "),
            _c("h4", { staticClass: "text-grey text-center max-width-500px" }, [
              _vm._v(
                "\n                   Our goal is to find people who fit our brand like no one\n                    else can. Believe in the power of working together and help\n                    redefine the influencer marketing world.\n                "
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "flex stretch wrap el-row" },
              [
                _vm._l(_vm.users, function(user, index) {
                  return _c("cardv", { key: index }, [
                    _c("div", { staticClass: "icon_div" }, [
                      _c("svg", { staticClass: "icon" })
                    ]),
                    _vm._v(" "),
                    user.img
                      ? _c("img", { attrs: { src: user.img } })
                      : _vm._e(),
                    _vm._v(" "),
                    _c("br"),
                    _c("br"),
                    _vm._v(" "),
                    _c("h3", { staticClass: "cardTitle" }, [
                      _vm._v(" " + _vm._s(user.name))
                    ]),
                    _vm._v(" "),
                    _c("label", { staticClass: "cardLabel" }),
                    _c("span", { staticClass: "cardContent" }, [
                      _vm._v(_vm._s(user.role))
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _c("br")
                  ])
                }),
                _vm._v(" "),
                _c("el-card", { staticClass: "box-card" }, [
                  _c("br"),
                  _c("br"),
                  _vm._v(" "),
                  _c("h3", { staticClass: "cardTitle" }, [
                    _vm._v("Paul Arnould")
                  ]),
                  _vm._v(" "),
                  _c("label", { staticClass: "cardLabel" }),
                  _c("span", { staticClass: "cardContent" }, [
                    _vm._v("Head of sales")
                  ]),
                  _vm._v(" "),
                  _c("hr", { staticClass: "short-hr" }),
                  _vm._v(" "),
                  _c("h4", { staticClass: "el-row line-height" }, [
                    _vm._v(
                      "\n                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been\n                            the industry's standard dummy text ever since the 1500s.\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("svg", { staticClass: " icon-music" }),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("br")
                ])
              ],
              2
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "background-primary-color" },
            [
              _c("h2", { staticClass: "titlePost text-center titleHistory" }, [
                _vm._v("History in the making")
              ]),
              _vm._v(" "),
              _c(
                "h3",
                { staticClass: "subTitlePost text-center subTitleHistory" },
                [
                  _vm._v(
                    "\n                    We're a young enthusiastic company who is about to write history.\n                    See how all it started.\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("listStepsv", {
                attrs: { history: _vm.history, addHistory: _vm.addHistory }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "full-width inline-block" },
        [
          _c("el-col", { staticClass: "first_flag", attrs: { sm: 8 } }, [
            _c("img", {
              attrs: { src: __webpack_require__(275) }
            })
          ]),
          _vm._v(" "),
          _c(
            "el-col",
            { staticClass: "margin-block text-center", attrs: { sm: 8 } },
            [
              _c(
                "h4",
                { staticClass: "text-grey text-center max-width-500px" },
                [
                  _vm._v(
                    "\n                We are inzpire.me! Passionate, alive and all with same\n                goal in mind. Re-creating the world of influencer marketing is our passion.\n            "
                  )
                ]
              ),
              _vm._v(" "),
              _c("el-button", { attrs: { type: "primary" } }, [
                _vm._v("Ready to join?")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("el-col", { staticClass: "second_flag", attrs: { sm: 8 } }, [
            _c("img", {
              attrs: { src: __webpack_require__(275) }
            })
          ]),
          _vm._v(" "),
          _c(
            "el-row",
            { staticClass: "rocking-the-world full-width inline-block " },
            [
              _c("el-col", {
                staticClass: "rocking-the-world1",
                attrs: { sm: 8 }
              }),
              _vm._v(" "),
              _c("el-col", {
                staticClass: "rocking-the-world2",
                attrs: { sm: 8 }
              }),
              _vm._v(" "),
              _c("el-col", {
                staticClass: "rocking-the-world3",
                attrs: { sm: 8 }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("el-row", { staticClass: "facts-titles" }, [
        _c("h2", { staticClass: "titlePost" }, [
          _vm._v("Awesome facts about us")
        ]),
        _vm._v(" "),
        _c("h3", { staticClass: "subTitlePost" }, [
          _vm._v("\n           Totally random but crazy awesome\n       ")
        ]),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("br")
      ]),
      _vm._v(" "),
      _c(
        "el-row",
        { staticClass: "facts flex justify-center", attrs: { lg: 6 } },
        [
          _c(
            "el-col",
            { attrs: { sm: 8 } },
            [
              _c("el-col", { attrs: { sm: 24 } }, [
                _c("div", { staticClass: "icon-facts icon-building" }),
                _c("h1", [_vm._v("86")])
              ]),
              _vm._v(" "),
              _c("el-col", { attrs: { sm: 24 } }, [
                _vm._v(
                  "\n                    Stairs to our Oslo penthouse office super view\n                "
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-col",
            { attrs: { sm: 8 } },
            [
              _c("el-col", { attrs: { sm: 24 } }, [
                _c("div", { staticClass: "icon-facts icon-mario" }),
                _c("h1", [_vm._v("5")])
              ]),
              _vm._v(" "),
              _c("el-col", { attrs: { sm: 24 } }, [
                _vm._v(
                  "\n                    Super Nintendo games (Super Mario World 4 the win!)\n                "
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-col",
            { attrs: { sm: 8 } },
            [
              _c("el-col", { attrs: { sm: 24 } }, [
                _c("div", { staticClass: "icon-facts icon-cereal" }),
                _c("h1", [_vm._v("3")])
              ]),
              _vm._v(" "),
              _c("el-col", { attrs: { sm: 24 } }, [
                _vm._v(
                  "\n                    Three magical cereal dispensors (you go Mats & Marie!)\n                "
                )
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c(
        "el-row",
        { staticClass: "facts flex justify-center", attrs: { lg: 6 } },
        [
          _c(
            "el-col",
            { attrs: { sm: 8 } },
            [
              _c("el-col", { attrs: { sm: 24 } }, [
                _c("div", { staticClass: "icon-facts icon-users" }),
                _c("h1", [_vm._v("379m")])
              ]),
              _vm._v(" "),
              _c("el-col", { attrs: { sm: 24 } }, [
                _vm._v(
                  "\n                    Followers to our cool and unique platform\n                "
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-col",
            { attrs: { sm: 8 } },
            [
              _c("el-col", { attrs: { sm: 24 } }, [
                _c("div", { staticClass: "icon-facts icon-airplane" }),
                _c("h1", [_vm._v("2")])
              ]),
              _vm._v(" "),
              _c("el-col", { attrs: { sm: 24 } }, [
                _vm._v(
                  "\n                    Team holidays a year traveling around the cool world\n                "
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-col",
            { attrs: { sm: 8 } },
            [
              _c("el-col", { attrs: { sm: 24 } }, [
                _c("div", { staticClass: "icon-facts icon-waffle" }),
                _c("h1", [_vm._v("52")])
              ]),
              _vm._v(" "),
              _c("el-col", { attrs: { sm: 24 } }, [
                _vm._v(
                  "\n                    Every week is waffle friday! Waffles with brown cheese!\n                 "
                )
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "background-primary-color el-row full-width margin-block flex justify-center"
        },
        [
          _c("el-col", { attrs: { sm: 15 } }, [
            _c("div", [
              _c("h2", { staticClass: "titlePost text-center" }, [
                _vm._v("History in the making")
              ]),
              _vm._v(" "),
              _c(
                "h3",
                { staticClass: "subTitlePost text-center max-width-500px" },
                [
                  _vm._v(
                    "\n                    We're a young enthusiastic company who is about to write history.\n                    See how all it started.\n                "
                  )
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("el-col", { attrs: { sm: 1 } }, [_vm._v(" ")]),
          _vm._v(" "),
          _c(
            "el-col",
            { attrs: { sm: 8 } },
            [
              _c("el-button", [
                _vm._v("SIGN UP NOW    "),
                _c("i", { staticClass: "el-icon-check el-icon-right" })
              ])
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "top-div" }, [
      _c("img", {
        attrs: { src: __webpack_require__(252) }
      }),
      _vm._v(" "),
      _c("h1", { staticClass: "title" }, [_vm._v("How about inspiring")]),
      _vm._v(" "),
      _c("h2", { staticClass: "title" }, [
        _vm._v("Unique products require unique teams")
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-bac70436", module.exports)
  }
}

/***/ }),

/***/ 252:
/***/ (function(module, exports) {

module.exports = "/images/content-header.png?f8d0335e5610a4d081ea91e491a437d1";

/***/ }),

/***/ 257:
/***/ (function(module, exports) {

module.exports = "/fonts/video-play-button.svg?8e4715748d8e4c89590db25d99158ddc";

/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(259)
}
var normalizeComponent = __webpack_require__(56)
/* script */
var __vue_script__ = __webpack_require__(262)
/* template */
var __vue_template__ = __webpack_require__(263)
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
Component.options.__file = "resources/assets/js/app/components/card/card.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0561729d", Component.options)
  } else {
    hotAPI.reload("data-v-0561729d", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(260);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(55)("87b05310", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0561729d\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/stylus-loader/index.js!./card.styl", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0561729d\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/stylus-loader/index.js!./card.styl");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)(undefined);
// imports


// module
exports.push([module.i, "\n.el-card {\n  background: transparent url(" + __webpack_require__(261) + ");\n  border: 0px;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  cursor: pointer;\n  color: #4c4c4c;\n  margin: 20px;\n  width: 100%;\n  -webkit-transition-property: all; /* Safari */\n  -webkit-transition-duration: 0.5s; /* Safari */\n  transition-property: all;\n  transition-duration: 0.5s;\n}\n.el-card:hover {\n  background: #33b2c1;\n  background-image: none;\n  color: #fff;\n}\n.el-card:hover .cardTitle {\n  color: #fff;\n}\n.el-card:hover .cardinnerBox {\n  background-color: #0a4960;\n}\n.el-card img {\n  width: 100%;\n}\n.cardTitle {\n  font-size: 1.79rem;\n  margin-top: 0px;\n  margin-bottom: 5px;\n  font-family: 'robotolight', sans-serif;\n  word-break: break-word;\n}\n.cardLabel {\n  font-size: 1.143rem;\n}\n.cardLabel.cardLabel--small {\n  font-size: 1rem;\n}\n.el-card__body {\n  padding: 0;\n}\n.cardContent {\n  font-size: 1.57rem;\n  font-family: 'robotobold', sans-serif;\n}\n.cardContent.cardContent--small {\n  font-size: 1rem;\n}\n.cardBadge {\n  margin-left: 10px;\n  font-size: 0.71rem;\n  color: #fff;\n  text-transform: uppercase;\n  text-align: center;\n  padding: 0.14rem 1.07rem;\n  border-radius: 3px;\n  background: #33b2c1;\n}\n.cardinnerBox {\n  background: #f5f5f5;\n  padding: 10px 15px;\n  border-radius: 3px;\n  margin-top: 10px;\n}\n.cardinnerBox>* {\n  margin-bottom: 10px;\n}\n.cardinnerBox>*:last-child {\n  margin-bottom: 0;\n}\n.cardinnerBox i,\n.optionBox i {\n  display: inline-block;\n  width: 1.07rem;\n  text-align: center;\n  font-size: 1.143rem;\n}\n.card-yellow {\n  background-color: #fed833;\n}\n.card-red {\n  background-color: #fb7245;\n}\n.card-green {\n  background-color: #a4ce62;\n}\n.icon_div {\n  width: calc(100% - 80px);\n}\n.icon {\n  background-image: url(" + __webpack_require__(269) + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n  position: absolute;\n  border-radius: 50%;\n  margin-left: 34%;\n  margin-top: 3%;\n  width: 16%;\n  height: 2%;\n}\n.icon-music {\n  background-image: url(" + __webpack_require__(270) + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n  width: 50px;\n  height: 50px;\n  border-radius: 80%;\n  margin-left: calc((100% - 90%) / 2);\n}\n@media (min-width: 768px) {\n.el-card {\n    width: calc(33% - (20px * 2));\n}\n.icon {\n    margin-left: 11%;\n    width: 5.5%;\n    height: 4.7%;\n    margin-top: 1.5%;\n}\n}\n@media (min-width: 1248px) {\n.el-card {\n    width: calc(25% - (20px * 2));\n}\n.icon {\n    margin-left: 8.5%;\n    margin-top: 1%;\n    width: 4%;\n    height: 5%;\n}\n}\n@media only screen and (max-width: 400px) {\n.icon {\n    height: 1.7%;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 261:
/***/ (function(module, exports) {

module.exports = "/images/cardbg.png?48e7372cb2603c983c2c8337f5e12185";

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {};

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("el-card", { staticClass: "box-card" }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0561729d", module.exports)
  }
}

/***/ }),

/***/ 265:
/***/ (function(module, exports) {

module.exports = "/images/marie_mostad.png?7a9294eba9b97878bbeba675eda0eb7b";

/***/ }),

/***/ 266:
/***/ (function(module, exports) {

module.exports = "/images/mats_lyngstad.png?ad5aac8b68f4202f26662d4e437f9e66";

/***/ }),

/***/ 267:
/***/ (function(module, exports) {

module.exports = "/images/yuri_karapetyan.png?68c9d75e185c2cd476a9f1235eb0fb0f";

/***/ }),

/***/ 268:
/***/ (function(module, exports) {

module.exports = "/images/angela_weang.png?caa31e40ecb0f94efe7097c262da019b";

/***/ }),

/***/ 269:
/***/ (function(module, exports) {

module.exports = "/fonts/front-team-icon.svg?530093d10be09c7a9e8d069f6d46b1e4";

/***/ }),

/***/ 270:
/***/ (function(module, exports) {

module.exports = "/fonts/back-team-icon.svg?16e2c705c1ff42f67bc564fcbe4aff62";

/***/ }),

/***/ 271:
/***/ (function(module, exports) {

module.exports = "/images/timeline-img-card-left.png?3ce2b918f31186db7124cbe6635bddfb";

/***/ }),

/***/ 272:
/***/ (function(module, exports) {

module.exports = "/images/timeline-img-card-right.png?4a2286abc298c92a8ca30c74943a9554";

/***/ }),

/***/ 273:
/***/ (function(module, exports) {

module.exports = "/images/universal-history.png?6f8eaa0d29fedea240e07a54747e93fb";

/***/ }),

/***/ 274:
/***/ (function(module, exports) {

module.exports = "/images/paul-history.png?e3317bb3360d3a6e7799c12c236dad70";

/***/ }),

/***/ 275:
/***/ (function(module, exports) {

module.exports = "/images/flags.png?261688364667691e8789cfbb7d26d305";

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(277)
}
var normalizeComponent = __webpack_require__(56)
/* script */
var __vue_script__ = __webpack_require__(279)
/* template */
var __vue_template__ = __webpack_require__(280)
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
Component.options.__file = "resources/assets/js/app/components/list_steps/list_steps.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-48f7b09d", Component.options)
  } else {
    hotAPI.reload("data-v-48f7b09d", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(278);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(55)("323b03b6", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-48f7b09d\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/stylus-loader/index.js!./list_steps.styl", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-48f7b09d\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/stylus-loader/index.js!./list_steps.styl");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)(undefined);
// imports


// module
exports.push([module.i, "\n.max-width-94p {\n  max-width: 94%;\n  padding-left: calc((100% - 94%) / 2);\n}\n.titleHistory {\n  padding-top: 77px;\n}\n.subTitleHistory {\n  padding-bottom: 15px;\n}\n.history_event {\n  background-color: #fff;\n  height: 115px;\n  position: relative;\n}\n.history_event img {\n  width: 100%;\n  display: block;\n}\n.history_event .titlePost {\n  color: #33b2c1;\n  margin-top: 16px;\n  margin-bottom: -10px;\n}\n.history_event .subTitlePost {\n  color: #d8315b;\n  margin-bottom: -14px;\n  font-size: 14px;\n}\n.history_event .description {\n  max-width: 84%;\n  padding-left: calc((100% - 84%) / 2);\n  font-size: 14px;\n  margin-bottom: 0;\n  margin-top: calc((100% - 82%) / 2);\n}\n.history_event .history-event-image {\n  height: 115px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n}\n.history_event:after,\n.history_event:before {\n  left: 100%;\n  top: 50%;\n  border: solid transparent;\n  content: \" \";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n.history_event:after {\n  border-width: 15px;\n  margin-top: -15px;\n}\n.history_event:before {\n  border-left-color: #fff;\n  border-width: 20px;\n  margin-top: -20px;\n}\n.history_event_right:after,\n.history_event_right:before {\n  left: -40px;\n  right: 100%;\n}\n.history_event_right:before {\n  border-right-color: #fff;\n  border-left-color: transparent;\n}\n.checkpoint {\n  width: 20px;\n  height: 20px;\n  border: 3px solid #fff;\n  border-radius: 50%;\n  margin: auto;\n}\n.checkpoint:after {\n  content: \"\";\n  position: relative;\n  bottom: 55px;\n  left: 0;\n  right: 0;\n  opacity: 0.5;\n  padding-bottom: 32px;\n  border-left: 3px solid #f5f5f5;\n}\n.checkpoint_right {\n  width: 20px;\n  height: 20px;\n  border: 3px solid #fff;\n  border-radius: 50%;\n  margin: auto;\n}\n.checkpoint_right:after {\n  content: \"\";\n  position: relative;\n  bottom: 85px;\n  left: 0;\n  right: 0;\n  opacity: 0.5;\n  padding-bottom: 62px;\n  border-left: 3px solid #f5f5f5;\n}\n.add-more-history {\n  width: 100px;\n  height: 26px;\n  border: 3px solid #fff;\n  background-color: #fff;\n  border-radius: 5%;\n  margin-top: 56px;\n  margin-bottom: 38px;\n  font-size: 9.5px;\n  color: #0b6cec;\n  font-weight: bold;\n  text-align: center;\n  vertical-align: middle;\n  line-height: 26px;\n}\n.add-more-history:after {\n  content: \"\";\n  position: relative;\n  bottom: 98px;\n  left: -50px;\n  right: 0;\n  opacity: 0.5;\n  padding-bottom: 85px;\n  border-left: 3px solid #f5f5f5;\n}\n.eventsDate {\n  margin-left: -16px;\n  font-weight: bold;\n  color: #fff;\n}\n.eventsDate_right {\n  float: right;\n  margin-right: -16px;\n  font-weight: bold;\n  color: #fff;\n}\n", ""]);

// exports


/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    // data() {
    //     return {
    //         'default_image': require('./../../../assets/images/timeline-img-card-left.png'),
    //     }
    // },
    props: {
        /**
         * Title of the event
         */
        history: Array,
        required: true,

        /**
         * Title of the event
         */
        addHistory: {
            type: Function,
            required: true
        }
    }
};

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm._l(_vm.history, function(item, index) {
        return index % 2 === 0
          ? _c(
              "div",
              { key: index, staticClass: "flex justify-center" },
              [
                _c(
                  "el-col",
                  { staticClass: "history_event", attrs: { sm: 5, lg: 5 } },
                  [
                    _c("el-col", {
                      staticClass: "history-event-image",
                      style: { backgroundImage: "url(" + item.img + ")" },
                      attrs: { sm: 3 }
                    }),
                    _vm._v(" "),
                    _c("el-col", { attrs: { sm: 21 } }, [
                      _c(
                        "p",
                        { staticClass: "titlePost text-center max-width-94p" },
                        [_vm._v(_vm._s(item.title))]
                      ),
                      _vm._v(" "),
                      _c(
                        "p",
                        {
                          staticClass: "subTitlePost text-center max-width-94p"
                        },
                        [
                          _vm._v(
                            "\n                    " +
                              _vm._s(item.subTitle) +
                              "\n                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "p",
                        {
                          staticClass:
                            "text-grey text-center max-width-94p description"
                        },
                        [
                          _vm._v(
                            "\n                    " +
                              _vm._s(item.description) +
                              "\n                "
                          )
                        ]
                      )
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-col",
                  { staticClass: "text-center", attrs: { sm: 17, lg: 2 } },
                  [
                    _c("div", {
                      class: {
                        checkpoint: index == 0,
                        checkpoint_right: index != 0
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c("el-col", { attrs: { sm: 17, lg: 5 } }, [
                  _c("p", { staticClass: "eventsDate" }, [
                    _vm._v(
                      "\n                " +
                        _vm._s(item.date) +
                        "\n            "
                    )
                  ])
                ])
              ],
              1
            )
          : _c(
              "div",
              { staticClass: "flex justify-center" },
              [
                _c("el-col", { attrs: { sm: 17, lg: 5 } }, [
                  _c("p", { staticClass: "eventsDate_right" }, [
                    _vm._v(_vm._s(item.date))
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "el-col",
                  { staticClass: "text-center", attrs: { sm: 17, lg: 2 } },
                  [_c("div", { staticClass: "checkpoint_right" })]
                ),
                _vm._v(" "),
                _c(
                  "el-col",
                  {
                    staticClass: "history_event history_event_right",
                    attrs: { sm: 5, lg: 5 }
                  },
                  [
                    _c("el-col", { attrs: { sm: 21 } }, [
                      _c(
                        "p",
                        { staticClass: "titlePost text-center max-width-94p" },
                        [_vm._v(_vm._s(item.title))]
                      ),
                      _vm._v(" "),
                      _c(
                        "p",
                        {
                          staticClass: "subTitlePost text-center max-width-94p"
                        },
                        [
                          _vm._v(
                            "\n                    " +
                              _vm._s(item.subTitle) +
                              "\n                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "p",
                        {
                          staticClass:
                            "text-grey text-center max-width-94p description"
                        },
                        [
                          _vm._v(
                            "\n                    " +
                              _vm._s(item.description) +
                              "\n                "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("el-col", {
                      staticClass: "history-event-image",
                      style: { backgroundImage: "url(" + item.img + ")" },
                      attrs: { sm: 3 }
                    })
                  ],
                  1
                )
              ],
              1
            )
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex justify-center" },
        [
          _c(
            "el-col",
            { staticClass: "text-center", attrs: { sm: 17, lg: 2 } },
            [
              _c(
                "div",
                {
                  staticClass: "add-more-history",
                  on: { click: _vm.addHistory }
                },
                [_vm._v("SEE MORE HISTORY")]
              )
            ]
          )
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-48f7b09d", module.exports)
  }
}

/***/ }),

/***/ 281:
/***/ (function(module, exports) {

module.exports = "/images/rocking-the-world1.png?f7522f215849bf276687fe1e22312218";

/***/ }),

/***/ 282:
/***/ (function(module, exports) {

module.exports = "/images/rocking-the-world3.png?2937eb6d3f1cf34d0dbd8adc9d7eeeef";

/***/ }),

/***/ 283:
/***/ (function(module, exports) {

module.exports = "/images/rocking-the-world2.png?ecb9ceeb858f58226c3cbcf06a552f37";

/***/ }),

/***/ 285:
/***/ (function(module, exports) {

module.exports = "/fonts/icon-mario.svg?1b830aef6d5870b5ad3f8fdfe25dfa5d";

/***/ }),

/***/ 286:
/***/ (function(module, exports) {

module.exports = "/fonts/icon-building.svg?e66c800f4c7bd87de270446954713bd0";

/***/ }),

/***/ 287:
/***/ (function(module, exports) {

module.exports = "/fonts/icon-cereal.svg?81c189935d89e748b331160024a15731";

/***/ }),

/***/ 288:
/***/ (function(module, exports) {

module.exports = "/fonts/icon-users.svg?681d86a4c510075dda2900e5b1a55b47";

/***/ }),

/***/ 289:
/***/ (function(module, exports) {

module.exports = "/fonts/icon-airplane.svg?d0f42a9f6bd7d970c65af55a0b9d097e";

/***/ }),

/***/ 290:
/***/ (function(module, exports) {

module.exports = "/fonts/icon-waffle.svg?d5bf36aea2f0a4bc775d88919a2a9a59";

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(247)
}
var normalizeComponent = __webpack_require__(56)
/* script */
var __vue_script__ = __webpack_require__(250)
/* template */
var __vue_template__ = __webpack_require__(251)
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
Component.options.__file = "resources/assets/js/app/pages/AboutUs/AboutUs.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bac70436", Component.options)
  } else {
    hotAPI.reload("data-v-bac70436", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});