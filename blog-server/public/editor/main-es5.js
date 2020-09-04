function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _edit_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./edit/edit.component */
    "./src/app/edit/edit.component.ts");
    /* harmony import */


    var _preview_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./preview/preview.component */
    "./src/app/preview/preview.component.ts");

    var routes = [{
      path: 'edit/:id',
      component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_2__["EditComponent"]
    }, {
      path: 'preview/:id',
      component: _preview_preview_component__WEBPACK_IMPORTED_MODULE_3__["PreviewComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        useHash: true
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          // ensures that the app routing path is encoded as URL fragment identifier behind a hash symbol.
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            useHash: true
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./blog.service */
    "./src/app/blog.service.ts");
    /* harmony import */


    var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./list/list.component */
    "./src/app/list/list.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'angular-blog';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"]])],
      decls: 9,
      vars: 1,
      consts: [[1, "page-container"], [1, "text-center"], [1, "row", "main-container"], [1, "col1"], [1, "col2"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome to ", ctx.title, "");
        }
      },
      directives: [_list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["h1[_ngcontent-%COMP%] {\n  color: #df0e62;\n  font-family: 'Indie Flower', cursive;\n  font-size: 250%;\n}\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  color: #df0e62;\n  font-family: 'Parisienne', cursive;;\n  \n  font-weight: lighter;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 2em;\n}\nbody[_ngcontent-%COMP%], input[type=\"text\"][_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  color: #333;\n  font-family: Cambria, Georgia;\n}\n\n*[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n}\n.page-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin:0px;\n  padding: 10px;\n  max-width: unset;\n}\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 3em;\n}\n.col1[_ngcontent-%COMP%] {\n  background-color: #ffc1c8;\n  margin: 0 auto; \n  padding: 20px;\n  width: 30em;\n  position: relative;\n  height:50%;\n}\n.col2[_ngcontent-%COMP%] {\n  margin: 0 auto; \n  padding: 20px;\n  width: 30em;\n  position: relative;\n  height: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEJBQTRCO0FBQzVCO0VBQ0UsY0FBYztFQUNkLG9DQUFvQztFQUNwQyxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsa0NBQWtDO0VBQ2xDLCtDQUErQztFQUMvQyxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztFQUNYLDZCQUE2QjtBQUMvQjtBQUNBLG9CQUFvQjtBQUNwQjtFQUNFLHlDQUF5QztBQUMzQztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWMsRUFBRSxnREFBZ0Q7RUFDaEUsYUFBYTtFQUNiLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaO0FBRUE7RUFDRSxjQUFjLEVBQUUsZ0RBQWdEO0VBQ2hFLGFBQWE7RUFDYixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQXBwbGljYXRpb24td2lkZSBTdHlsZXMgKi9cbmgxIHtcbiAgY29sb3I6ICNkZjBlNjI7XG4gIGZvbnQtZmFtaWx5OiAnSW5kaWUgRmxvd2VyJywgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAyNTAlO1xufVxuaDIsIGgzIHtcbiAgY29sb3I6ICNkZjBlNjI7XG4gIGZvbnQtZmFtaWx5OiAnUGFyaXNpZW5uZScsIGN1cnNpdmU7O1xuICAvKiBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsgKi9cbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG5ib2R5IHtcbiAgbWFyZ2luOiAyZW07XG59XG5ib2R5LCBpbnB1dFt0eXBlPVwidGV4dFwiXSwgYnV0dG9uIHtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBHZW9yZ2lhO1xufVxuLyogZXZlcnl3aGVyZSBlbHNlICovXG4qIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbi5wYWdlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXgtd2lkdGg6IHVuc2V0O1xufVxuXG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogM2VtO1xufVxuXG4uY29sMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmMxYzg7XG4gIG1hcmdpbjogMCBhdXRvOyAvKiB0byBtYWtlIHRoZSBkaXYgY2VudGVyIGFsaWduIHRvIHRoZSBicm93c2VyICovXG4gIHBhZGRpbmc6IDIwcHg7XG4gIHdpZHRoOiAzMGVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDo1MCU7XG59XG5cbi5jb2wyIHtcbiAgbWFyZ2luOiAwIGF1dG87IC8qIHRvIG1ha2UgdGhlIGRpdiBjZW50ZXIgYWxpZ24gdG8gdGhlIGJyb3dzZXIgKi9cbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDMwZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA1MCU7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css'],
          providers: [_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./list/list.component */
    "./src/app/list/list.component.ts");
    /* harmony import */


    var _blog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./blog.service */
    "./src/app/blog.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./edit/edit.component */
    "./src/app/edit/edit.component.ts");
    /* harmony import */


    var _preview_preview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./preview/preview.component */
    "./src/app/preview/preview.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_blog_service__WEBPACK_IMPORTED_MODULE_6__["BlogService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__["EditComponent"], _preview_preview_component__WEBPACK_IMPORTED_MODULE_9__["PreviewComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__["EditComponent"], _preview_preview_component__WEBPACK_IMPORTED_MODULE_9__["PreviewComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
          providers: [_blog_service__WEBPACK_IMPORTED_MODULE_6__["BlogService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/blog.service.ts":
  /*!*********************************!*\
    !*** ./src/app/blog.service.ts ***!
    \*********************************/

  /*! exports provided: Post, BlogService */

  /***/
  function srcAppBlogServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Post", function () {
      return Post;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogService", function () {
      return BlogService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"); // Reference: https://stackoverflow.com/questions/48041597/angular-4-updating-view-on-array-push


    var Post = function Post(post) {
      _classCallCheck(this, Post);

      this.postid = post && post.postid || 0;
      this.created = post && new Date(post.created) || new Date(); // Date(value/Date)

      this.modified = post && new Date(post.modified) || new Date();
      this.title = post && post.title || '';
      this.body = post && post.body || '';
    };

    var BlogService = /*#__PURE__*/function () {
      function BlogService(http) {
        _classCallCheck(this, BlogService);

        this.http = http;
        this.apiRoot = '/api'; // shared data

        this._draft = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._postList = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.postList$ = this._postList.asObservable();
        this.draft$ = this._draft.asObservable();
        this.posts = [];
        this.notify();
      }

      _createClass(BlogService, [{
        key: "fetchPosts",
        value: function fetchPosts() {
          this.getAllPosts();
          return this.postList$;
        }
      }, {
        key: "getAllPosts",
        value: function getAllPosts() {
          var _this = this;

          this.posts = []; // Here, get our data from the API.

          var apiURL = "".concat(this.apiRoot, "/").concat(this.getUsername());
          this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
          })).subscribe(function (res) {
            // We update data with what comes back, and call notify again
            // so that the observable emits the latest data
            res.forEach(function (element) {
              _this.posts.push(new Post(element));
            });

            _this.notify();
          }, function (err) {
            console.error(err);
          });
        }
      }, {
        key: "getPost",
        value: function getPost(postid) {
          return this.posts.find(function (post) {
            if (post.postid == postid) {
              return post;
            }
          });
        }
      }, {
        key: "newPost",
        value: function newPost() {
          var _this2 = this;

          // Here we are updating the API
          var id = this.getNextId();
          var apiURL = "".concat(this.apiRoot, "/").concat(this.getUsername(), "/").concat(id);
          var post = {
            'postid': id,
            'created': new Date(),
            'modified': new Date(),
            'title': '',
            'body': ''
          };
          this.http.post(apiURL, {
            title: '',
            body: ''
          }).subscribe(function (res) {
            // The API returns our newly created item, so append it to data, and
            // call notify again to update the observable
            _this2.posts.push(res);

            _this2.notify();
          }, function (err) {
            if (err.status == 201) {
              console.log();
            } else {
              console.error(err);

              _this2.posts.splice(_this2.posts.length - 1, 1);
            } // this.notify();

          });
        }
      }, {
        key: "updatePost",
        value: function updatePost(post) {
          var _this3 = this;

          var apiURL = "".concat(this.apiRoot, "/").concat(this.getUsername(), "/").concat(post.postid);
          this.http.put(apiURL, {
            title: post.title,
            body: post.body
          }).subscribe(function (res) {
            // update the old item and replace
            var oldItem = _this3.getPost(post.postid);

            if (oldItem) {
              var index = _this3.posts.indexOf(oldItem);

              _this3.posts[index].title = post.title;
              _this3.posts[index].body = post.body;
              _this3.posts[index].modified = new Date();
            } // update observable


            _this3.notify();
          }, function (err) {
            if (err.status == 200) {
              console.log();
            } else {
              console.error(err);
            }

            _this3.notify();
          });
        }
      }, {
        key: "deletePost",
        value: function deletePost(postid) {
          var _this4 = this;

          var apiURL = "".concat(this.apiRoot, "/").concat(this.getUsername(), "/").concat(postid);
          this.http["delete"](apiURL).subscribe(function (res) {
            // remove item from posts
            var oldItem = _this4.getPost(postid);

            if (oldItem) {
              var index = _this4.posts.indexOf(oldItem);

              _this4.posts.splice(index, 1);
            }
          }, function (err) {
            if (err.status == 204) {
              console.log();
            } else {
              console.error(err);
            }
          }); // update observable

          this.notify();
        } // publish the change to all subscribers

      }, {
        key: "setCurrentDraft",
        value: function setCurrentDraft(post) {
          this._draft.next(post);
        } // returns the draft saved in the earlier setCurrentDraft() call

      }, {
        key: "getCurrentDraft",
        value: function getCurrentDraft() {
          return this.draft$;
        }
      }, {
        key: "notify",
        value: function notify() {
          // Call next on the subject with the latest data
          this._postList.next(this.posts);
        }
        /*------- Helper functions for fetching verfied username from jwt------- */
        // parse the encoded sequence

      }, {
        key: "parseJWT",
        value: function parseJWT(token) {
          var base64Url = token.split('.')[1];
          var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
          return JSON.parse(atob(base64));
        } // get the encoded sequence from cookie "jwt=<encoded>"

      }, {
        key: "getEncoded",
        value: function getEncoded(name) {
          var cookie = document.cookie;
          var parts = cookie.split(name + "=");
          if (parts.length == 2) return parts[1];
        }
      }, {
        key: "getUsername",
        value: function getUsername() {
          return this.parseJWT(this.getEncoded('jwt')).usr;
        }
      }, {
        key: "getNextId",
        value: function getNextId() {
          var nextId = this.posts[this.posts.length - 1].postid + 1;
          return nextId;
        }
      }]);

      return BlogService;
    }();

    BlogService.ɵfac = function BlogService_Factory(t) {
      return new (t || BlogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    BlogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BlogService,
      factory: BlogService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/edit/edit.component.ts":
  /*!****************************************!*\
    !*** ./src/app/edit/edit.component.ts ***!
    \****************************************/

  /*! exports provided: EditComponent */

  /***/
  function srcAppEditEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditComponent", function () {
      return EditComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../blog.service */
    "./src/app/blog.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0() {
      return ["/"];
    };

    function EditComponent_div_0_form_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 3, 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Title:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Body:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "textarea", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditComponent_div_0_form_1_Template_button_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r3["delete"]();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditComponent_div_0_form_1_Template_button_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r5.save();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditComponent_div_0_form_1_Template_button_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r6.preview();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Preview");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.userForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Last Modified: ", ctx_r1.modified.toDateString(), ", ", ctx_r1.modified.toLocaleTimeString(), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.userForm.pristine);
      }
    }

    function EditComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditComponent_div_0_form_1_Template, 21, 6, "form", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userForm);
      }
    }

    var EditComponent = /*#__PURE__*/function () {
      function EditComponent(blogService, route, router) {
        _classCallCheck(this, EditComponent);

        this.blogService = blogService;
        this.route = route;
        this.router = router;
      }

      _createClass(EditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.route.paramMap.subscribe(function () {
            return _this5.getPost();
          });
        }
      }, {
        key: "getPost",
        value: function getPost() {
          var _this6 = this;

          var id = +this.route.snapshot.paramMap.get('id');

          if (this.blogService.getCurrentDraft()) {
            this.blogService.getCurrentDraft().subscribe(function (draft) {
              console.log(draft);

              if (draft != null) {
                _this6.post = draft;
              }
            });
          }

          if (this.post == null || this.post.postid !== id) {
            this.post = this.blogService.getPost(id);
          }

          if (this.post) {
            console.log(this.post);
            this.modified = this.post.modified;
            this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.post.title),
              body: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.post.body)
            });
            this.userForm.valueChanges.subscribe(function (data) {
              _this6.post.title = data.title;
              _this6.post.body = data.body;

              _this6.blogService.setCurrentDraft(_this6.post);
            });
          }
        }
      }, {
        key: "delete",
        value: function _delete() {
          this.blogService.deletePost(this.post.postid);
          this.router.navigate(['']);
        }
      }, {
        key: "save",
        value: function save() {
          this.blogService.updatePost(this.post);
          this.modified = new Date();
          this.userForm.markAsPristine();
        }
      }, {
        key: "preview",
        value: function preview() {
          this.blogService.setCurrentDraft(this.post);
          this.router.navigate(['/preview', this.post.postid]);
        }
      }]);

      return EditComponent;
    }();

    EditComponent.ɵfac = function EditComponent_Factory(t) {
      return new (t || EditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    EditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditComponent,
      selectors: [["app-edit"]],
      decls: 1,
      vars: 1,
      consts: [["class", "box", 4, "ngIf"], [1, "box"], ["class", "edit-form", 3, "formGroup", 4, "ngIf"], [1, "edit-form", 3, "formGroup"], ["formDir", "ngForm"], [1, "form-group"], ["for", "title", 1, "label-text"], ["name", "title", "id", "title", "formControlName", "title", "placeholder", "give it a good title...", 1, "form-control"], ["for", "body", 1, "label-text"], ["name", "body", "id", "body", "formControlName", "body", "placeholder", "write something here...", 1, "form-control"], [1, "btn-group"], ["type", "button", 1, "btn", "del", 3, "routerLink", "click"], ["type", "button", 1, "btn", "save", 3, "disabled", "click"], ["type", "button", 1, "btn", "prev", 3, "click"]],
      template: function EditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EditComponent_div_0_Template, 2, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.post);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      styles: ["textarea[_ngcontent-%COMP%] {\n  height: 300px;\n  padding: 12px 20px;\n  box-sizing: border-box;\n  border: 2px solid #ccc;\n  border-radius: 4px;\n  background-color: #f8f8f8;\n}\n\n.label-text[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-family: 'Parisienne', cursive;\n  color: #df0e62;\n}\n\n.del[_ngcontent-%COMP%], .save[_ngcontent-%COMP%], .prev[_ngcontent-%COMP%]\n{\n  color: white;\n  border-radius: 4px;\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n}\n\n.prev[_ngcontent-%COMP%] {\n  background: rgb(28, 184, 65);\n  \n}\n\n.del[_ngcontent-%COMP%] {\n  background: rgb(202, 60, 60);\n  \n}\n\n.save[_ngcontent-%COMP%] {\n  background: rgb(223, 117, 20);\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQ0FBa0M7RUFDbEMsY0FBYztBQUNoQjs7QUFFQTs7OztFQUlFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0Isc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZXh0YXJlYSB7XG4gIGhlaWdodDogMzAwcHg7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiAycHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xufVxuXG4ubGFiZWwtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6ICdQYXJpc2llbm5lJywgY3Vyc2l2ZTtcbiAgY29sb3I6ICNkZjBlNjI7XG59XG5cbi5kZWwsXG4uc2F2ZSxcbi5wcmV2XG57XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLnByZXYge1xuICBiYWNrZ3JvdW5kOiByZ2IoMjgsIDE4NCwgNjUpO1xuICAvKiB0aGlzIGlzIGEgZ3JlZW4gKi9cbn1cblxuLmRlbCB7XG4gIGJhY2tncm91bmQ6IHJnYigyMDIsIDYwLCA2MCk7XG4gIC8qIHRoaXMgaXMgYSBtYXJvb24gKi9cbn1cblxuLnNhdmUge1xuICBiYWNrZ3JvdW5kOiByZ2IoMjIzLCAxMTcsIDIwKTtcbiAgLyogdGhpcyBpcyBhbiBvcmFuZ2UgKi9cbn1cblxuXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edit',
          templateUrl: './edit.component.html',
          styleUrls: ['./edit.component.css']
        }]
      }], function () {
        return [{
          type: _blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/list/list.component.ts":
  /*!****************************************!*\
    !*** ./src/app/list/list.component.ts ***!
    \****************************************/

  /*! exports provided: ListComponent */

  /***/
  function srcAppListListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListComponent", function () {
      return ListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../blog.service */
    "./src/app/blog.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a1) {
      return ["/edit", a1];
    };

    function ListComponent_li_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_li_8_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var post_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.onSelect(post_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var post_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", post_r1 === ctx_r0.selectedPost);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, post_r1.postid));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", post_r1.created.toLocaleDateString(), ", ", post_r1.created.toLocaleTimeString(), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r1.title, " ");
      }
    }

    var ListComponent = /*#__PURE__*/function () {
      function ListComponent(blogService, router, route) {
        _classCallCheck(this, ListComponent);

        this.blogService = blogService;
        this.router = router;
        this.route = route;
        this.posts = [];
      }

      _createClass(ListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.route.paramMap.subscribe(function () {
            return _this7.blogService.fetchPosts().subscribe(function (res) {
              _this7.posts = res;
            });
          });
        }
      }, {
        key: "onSelect",
        value: function onSelect(post) {
          this.selectedPost = post;
          this.blogService.setCurrentDraft(post);
          this.router.navigate(['edit', post.postid]);
        }
      }, {
        key: "newPost",
        value: function newPost() {
          var _this8 = this;

          // create a new post
          this.blogService.newPost(); // refresh current post lists

          this.blogService.fetchPosts().subscribe(function (res) {
            _this8.posts = res; // get the postid of newly created post

            _this8.posts.sort(function (a, b) {
              return a.postid - b.postid;
            });

            var id = _this8.posts[_this8.posts.length - 1].postid;

            var newpost = _this8.blogService.getPost(id); // open edit panel


            _this8.blogService.setCurrentDraft(newpost);

            _this8.router.navigate(['edit', id]);
          });
        }
      }]);

      return ListComponent;
    }();

    ListComponent.ɵfac = function ListComponent_Factory(t) {
      return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ListComponent,
      selectors: [["app-list"]],
      decls: 9,
      vars: 1,
      consts: [[1, "box"], [1, "head"], [1, "btn", "btn-primary", "new", 3, "click"], [1, "post-content"], [1, "posts"], [3, "selected", "routerLink", "click", 4, "ngFor", "ngForOf"], [3, "routerLink", "click"], [1, "badge"]],
      template: function ListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "All Posts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_Template_button_click_4_listener() {
            return ctx.newPost();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "New Post");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ListComponent_li_8_Template, 4, 8, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.posts);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: [".head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  position: relative;\n}\n.head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n  text-align: center;\n  font-family: 'Parisienne', cursive;\n}\n.head[_ngcontent-%COMP%]   .new[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n}\n.posts[_ngcontent-%COMP%] {\n  \n  margin: 0 auto;\n  list-style-type: none;\n  padding: 0;\n  width: 25em;\n}\n.posts[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #5dc0a6;\n  margin: .5em;\n  padding: .3em 0;\n  height: 2.5em;\n  border-radius: 4px;\n}\n.posts[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.posts[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%] {\n  background-color: #CFD8DC;\n  color: white;\n}\n.posts[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]:hover {\n  background-color: #BBD8DC;\n  color: white;\n}\n.posts[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: smaller;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color:#3f8f8d;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 2.5em;\n  width: 12em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixrQ0FBa0M7QUFDcEM7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0FBQ1Y7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxhQUFhO0VBQ2IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiwwQkFBMEI7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9saXN0L2xpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmhlYWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmhlYWQgaDJ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdQYXJpc2llbm5lJywgY3Vyc2l2ZTtcbn1cblxuLmhlYWQgLm5ldyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG59XG5cbi5wb3N0cyB7XG4gIC8qIG1hcmdpbjogMCAwIDJlbSAwOyAqL1xuICBtYXJnaW46IDAgYXV0bztcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMjVlbTtcbn1cbi5wb3N0cyBsaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWRjMGE2O1xuICBtYXJnaW46IC41ZW07XG4gIHBhZGRpbmc6IC4zZW0gMDtcbiAgaGVpZ2h0OiAyLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLnBvc3RzIGxpOmhvdmVyIHtcbiAgY29sb3I6ICM2MDdEOEI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XG4gIGxlZnQ6IC4xZW07XG59XG4ucG9zdHMgbGkuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEOERDO1xuICBjb2xvcjogd2hpdGU7XG59XG4ucG9zdHMgbGkuc2VsZWN0ZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkJEOERDO1xuICBjb2xvcjogd2hpdGU7XG59XG4ucG9zdHMgLmJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IHNtYWxsZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC44ZW0gMC43ZW0gMCAwLjdlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjojM2Y4ZjhkO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC0xcHg7XG4gIHRvcDogLTRweDtcbiAgaGVpZ2h0OiAyLjVlbTtcbiAgd2lkdGg6IDEyZW07XG4gIG1hcmdpbi1yaWdodDogLjhlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-list',
          templateUrl: './list.component.html',
          styleUrls: ['./list.component.css']
        }]
      }], function () {
        return [{
          type: _blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/preview/preview.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/preview/preview.component.ts ***!
    \**********************************************/

  /*! exports provided: PreviewComponent */

  /***/
  function srcAppPreviewPreviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreviewComponent", function () {
      return PreviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var commonmark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! commonmark */
    "./node_modules/commonmark/lib/index.js");
    /* harmony import */


    var commonmark__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(commonmark__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../blog.service */
    "./src/app/blog.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var PreviewComponent = /*#__PURE__*/function () {
      function PreviewComponent(blogService, route, router) {
        _classCallCheck(this, PreviewComponent);

        this.blogService = blogService;
        this.route = route;
        this.router = router;
      }

      _createClass(PreviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.route.paramMap.subscribe(function () {
            return _this9.getPost();
          });
        }
      }, {
        key: "getPost",
        value: function getPost() {
          var _this10 = this;

          var id = +this.route.snapshot.paramMap.get('id');

          if (this.blogService.getCurrentDraft()) {
            this.blogService.getCurrentDraft().subscribe(function (draft) {
              console.log(draft);

              if (draft != null) {
                _this10.post = draft;
              }
            });
          }

          if (this.post == null || this.post.postid !== id) {
            this.post = this.blogService.getPost(id);
          }

          console.log(this.post.title); // convert to markdown

          if (this.post) {
            var writer = new commonmark__WEBPACK_IMPORTED_MODULE_1__["HtmlRenderer"]();
            var reader = new commonmark__WEBPACK_IMPORTED_MODULE_1__["Parser"]();
            this.title = writer.render(reader.parse(this.post.title));
            this.body = writer.render(reader.parse(this.post.body));
          }
        }
      }, {
        key: "edit",
        value: function edit() {
          var _a;

          this.router.navigate(['/edit', (_a = this.post) === null || _a === void 0 ? void 0 : _a.postid]);
        }
      }]);

      return PreviewComponent;
    }();

    PreviewComponent.ɵfac = function PreviewComponent_Factory(t) {
      return new (t || PreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    PreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PreviewComponent,
      selectors: [["app-preview"]],
      decls: 9,
      vars: 2,
      consts: [[1, "box"], [1, "head"], [1, "btn", "btn-success", "back", 3, "click"], [1, "mdTitle", 3, "innerHTML"], [1, "mdBody", 3, "innerHTML"]],
      template: function PreviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Markdown Preview");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreviewComponent_Template_button_click_4_listener() {
            return ctx.edit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.title, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.body, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      },
      styles: [".head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  position: relative;\n}\n.head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n  text-align: center;\n  font-family: 'Parisienne', cursive;\n}\n.head[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJldmlldy9wcmV2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtDQUFrQztBQUNwQztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7QUFDViIsImZpbGUiOiJzcmMvYXBwL3ByZXZpZXcvcHJldmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmhlYWQgaDJ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdQYXJpc2llbm5lJywgY3Vyc2l2ZTtcbn1cbi5oZWFkIC5iYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-preview',
          templateUrl: './preview.component.html',
          styleUrls: ['./preview.component.css']
        }]
      }], function () {
        return [{
          type: _blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/cs144/shared/project04/angular-blog/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map