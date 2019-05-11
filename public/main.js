(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_annotate_annotate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/annotate/annotate.component */ "./src/app/components/annotate/annotate.component.ts");
/* harmony import */ var _components_create_class_create_class_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/create-class/create-class.component */ "./src/app/components/create-class/create-class.component.ts");
/* harmony import */ var _components_classroom_classroom_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/classroom/classroom.component */ "./src/app/components/classroom/classroom.component.ts");
/* harmony import */ var _components_task_task_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/task/task.component */ "./src/app/components/task/task.component.ts");
/* harmony import */ var _components_activity_activity_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/activity/activity.component */ "./src/app/components/activity/activity.component.ts");
/* harmony import */ var _components_group_group_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/group/group.component */ "./src/app/components/group/group.component.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./guards/auth.guards */ "./src/app/guards/auth.guards.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"], canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'annotate/:activityname/:title', component: _components_annotate_annotate_component__WEBPACK_IMPORTED_MODULE_7__["AnnotateComponent"] },
    { path: 'createclass', component: _components_create_class_create_class_component__WEBPACK_IMPORTED_MODULE_8__["CreateClassComponent"] },
    { path: 'classroom/:classname', component: _components_classroom_classroom_component__WEBPACK_IMPORTED_MODULE_9__["ClassroomComponent"] },
    { path: 'task/:title', component: _components_task_task_component__WEBPACK_IMPORTED_MODULE_10__["TaskComponent"] },
    { path: 'activity/:title', component: _components_activity_activity_component__WEBPACK_IMPORTED_MODULE_11__["ActivityComponent"] },
    { path: 'group/:activityname', component: _components_group_group_component__WEBPACK_IMPORTED_MODULE_12__["GroupComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar>\t\n</app-navbar>\n<div>\n\t<flash-messages></flash-messages>\n  \t<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-src';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_annotate_annotate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/annotate/annotate.component */ "./src/app/components/annotate/annotate.component.ts");
/* harmony import */ var _components_create_class_create_class_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/create-class/create-class.component */ "./src/app/components/create-class/create-class.component.ts");
/* harmony import */ var _components_classroom_classroom_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/classroom/classroom.component */ "./src/app/components/classroom/classroom.component.ts");
/* harmony import */ var _components_task_task_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/task/task.component */ "./src/app/components/task/task.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_class_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/class.service */ "./src/app/services/class.service.ts");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _services_navbar_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/navbar.service */ "./src/app/services/navbar.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./guards/auth.guards */ "./src/app/guards/auth.guards.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-file-drop */ "./node_modules/ngx-file-drop/fesm5/ngx-file-drop.js");
/* harmony import */ var ngx_flip__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-flip */ "./node_modules/ngx-flip/fesm5/ngx-flip.js");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ngx-bootstrap/popover */ "./node_modules/ngx-bootstrap/popover/fesm5/ngx-bootstrap-popover.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _components_activity_activity_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/activity/activity.component */ "./src/app/components/activity/activity.component.ts");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm5/ngx-editor.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _components_group_group_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/group/group.component */ "./src/app/components/group/group.component.ts");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var angular2_lightbox__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! angular2-lightbox */ "./node_modules/angular2-lightbox/index.js");
/* harmony import */ var angular2_lightbox__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(angular2_lightbox__WEBPACK_IMPORTED_MODULE_48__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















































window['$'] = window['jQuery'] = jquery__WEBPACK_IMPORTED_MODULE_40__;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                _components_annotate_annotate_component__WEBPACK_IMPORTED_MODULE_10__["AnnotateComponent"],
                _components_annotate_annotate_component__WEBPACK_IMPORTED_MODULE_10__["AnnotateTaskDialogComponent"],
                _components_annotate_annotate_component__WEBPACK_IMPORTED_MODULE_10__["AnnotateConfirmDialogComponent"],
                _components_annotate_annotate_component__WEBPACK_IMPORTED_MODULE_10__["AnnotateSubmittedDialogComponent"],
                _components_create_class_create_class_component__WEBPACK_IMPORTED_MODULE_11__["CreateClassComponent"],
                _components_classroom_classroom_component__WEBPACK_IMPORTED_MODULE_12__["ClassroomComponent"],
                _components_task_task_component__WEBPACK_IMPORTED_MODULE_13__["TaskComponent"],
                _components_activity_activity_component__WEBPACK_IMPORTED_MODULE_42__["ActivityComponent"],
                _components_activity_activity_component__WEBPACK_IMPORTED_MODULE_42__["ImagePreviewComponent"],
                _components_group_group_component__WEBPACK_IMPORTED_MODULE_46__["GroupComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_16__["FlashMessagesModule"].forRoot(),
                _angular_http__WEBPACK_IMPORTED_MODULE_21__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatExpansionModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"],
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_26__["MatTreeModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_41__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatListModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_33__["ModalModule"].forRoot(),
                ngx_file_drop__WEBPACK_IMPORTED_MODULE_34__["FileDropModule"],
                ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_36__["PopoverModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_27__["MatRadioModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_30__["MatCheckboxModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_28__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_37__["FlexLayoutModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__["MatTabsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_39__["MatCardModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_43__["MatMenuModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_44__["NgxEditorModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_45__["MatTableModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_47__["MatTooltipModule"],
                angular2_lightbox__WEBPACK_IMPORTED_MODULE_48__["LightboxModule"],
                ngx_flip__WEBPACK_IMPORTED_MODULE_35__["FlipModule"]
            ],
            entryComponents: [
                _components_annotate_annotate_component__WEBPACK_IMPORTED_MODULE_10__["AnnotateTaskDialogComponent"],
                _components_annotate_annotate_component__WEBPACK_IMPORTED_MODULE_10__["AnnotateConfirmDialogComponent"],
                _components_annotate_annotate_component__WEBPACK_IMPORTED_MODULE_10__["AnnotateSubmittedDialogComponent"],
                _components_activity_activity_component__WEBPACK_IMPORTED_MODULE_42__["ImagePreviewComponent"]
            ],
            providers: [
                _services_validate_service__WEBPACK_IMPORTED_MODULE_15__["ValidateService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"],
                _services_class_service__WEBPACK_IMPORTED_MODULE_18__["ClassService"],
                _guards_auth_guards__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_32__["BsModalService"],
                _services_task_service__WEBPACK_IMPORTED_MODULE_19__["TaskService"],
                _services_navbar_service__WEBPACK_IMPORTED_MODULE_20__["NavbarService"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/activity/activity.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/activity/activity.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWN0aXZpdHkvYWN0aXZpdHkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/activity/activity.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/activity/activity.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n\n.img-thumbnail:hover{\n  cursor: pointer;\n}\n.sidenav {\n  height: auto;\n  position: absolute;\n  z-index: 999;\n  top: 5;\n  right: 0;\n  background-color: white;\n  overflow-x: hidden;\n  padding-left: 30px;\n  border-style: inset;\n  margin: 20px;\n}\n.sidenav a {\n  padding: 6px 8px 6px 16px;\n  text-decoration: none;\n  font-size: 25px;\n  color: white;\n  display: block;\n}\n\n.sidenav a:hover {\n  color: grey;\n}\n\n.main {\n  margin: 20px;\n   /* Increased text to enable scrolling */\n  left: 0;\n  border-style: outset;\n  height: 100%;\n}\n#main{\n      position: absolute;\n    width: 60%;\n    height: auto;\n    margin-top: 8%;\n}\n#topBar{\n      width: 60%;\n    height: 12%;\n    margin-left: 20px;\n    position: absolute;\n    left: 0;\n    margin-top: 20px;\n\n}\n\n\n@media screen and (max-height: 450px) {\n  .sidenav {padding-top: 15px;}\n  .sidenav a {font-size: 18px;}\n}\nbody{\n  font-size: 18px;\n  background-color: rgb(245,245,245)!important;\n}\n.mat-card {\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n  transition: 0.3s;\n  width: 40%;\n  border-radius: 5px;\n  border-style: ridge;\n}\n\n.mat-card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n}\n\nimg {\n  border-radius: 5px 5px 0 0;\n  margin-left: 15%;\n}\n#sideListItem {\n    display: block;\n    height: auto;\n    min-height: 50px;\n    -webkit-tap-highlight-color: transparent;\n    width: 100%;\n    padding: 0;\n    border-bottom-width: 2px;\n    border-bottom-style: solid;\n    border-bottom-color: gainsboro;\n}\n</style>\n\n<body>\n  <mat-card id=\"topBar\">\n    <div>\n  <mat-list>\n      <mat-list-item>\n       <mat-list-item role=\"listitem\"><strong>Activity Title: </strong> {{activity?.activityName}} </mat-list-item>\n       </mat-list-item>\n       </mat-list>\n     </div>\n</mat-card>\n\n\n<!-- <mat-card style=\"width: 30%; height: 100%; overflow-y: hidden; padding-left: 5px;\" id=\"side\" class=\"sidenav\">\n  <mat-card-header>Submissions\n</mat-card-header>\n<mat-divider></mat-divider>\n  <mat-list  *ngIf=\"userComments.length!=0\" role=\"list\" style=\"overflow-y: scroll; height: 100%; padding-top: 0;\">\n  <div *ngFor=\"let comment of userComments\">\n  <mat-list-item id=\"sideListItem\"  style=\"padding-top: 10px;\" role=\"listitem\" [innerHTML]=\"comment\">\n  </mat-list-item>\n</div>\n</mat-list>\n</mat-card> -->\n\n<mat-card style=\"width: 35%; padding-left: 5px;\" id=\"side\" class=\"sidenav\">\n  <div>\n    <h4>Tasks</h4>\n</div>\n<mat-divider></mat-divider>\n  <mat-list role=\"list\" style=\"text-transform: capitalize; height: 100%; padding-top: 0;\">\n  <mat-list-item *ngFor=\"let task of activity?.tasks; let i = index;\" id=\"sideListItem\" style=\"padding-top: 6%;\" role=\"listitem\">\n    <div style=\"width: 100%;\">\n    {{task.task_title}}\n  </div>\n  <div>\n    <i *ngIf=\"!checked\" class=\"glyphicon glyphicon-unchecked\"></i>\n    <i *ngIf=\"checked\" class=\"glyphicon glyphicon-check\" style=\"color: limegreen;\"></i>\n  </div>\n  </mat-list-item>\n</mat-list>\n</mat-card>\n\n\n  <mat-card  class=\"main\" id=\"main\">\n  <mat-tab-group (selectedTabChange)=\"tabChange($event)\">\n    <mat-tab *ngFor=\"let task of activity?.tasks; let i = index;\" label=\"{{task.task_title}}\">\n     <!--  <div style=\"float: right;\">Annotations Submitted: {{taskCompletedCount}}</div> -->\n      <br>\n  <div class=\"card\" *ngIf=\"task.task_type == 'text'\">\n  <div class=\"card-body\">\n    <blockquote class=\"blockquote mb-0\">\n      <p><i [innerHTML]=\"task.task_desc\"></i></p>\n    </blockquote>\n  </div>\n<div *ngIf=\"!checkSubmitted(task.task_title)\" style=\"margin-top: 15%;\" >\n     <app-ngx-editor *ngIf=\"!htmlContent\" [config]=\"editorConfig\" height=\"100px\" minHeight=\"100px\" [placeholder]=\"placeholder\" [spellcheck]=\"true\" [(ngModel)]=\"htmlContent\" name=\"htmlContent\"></app-ngx-editor>\n     <div>\n   <button *ngIf=\"htmlContent\" type=\"button\" class=\"btn btn-primary\" style=\"float: right;\" (click)=\"onAnswerSubmit(task.task_title,htmlContent)\">Submit</button>\n   <button *ngIf=\"!htmlContent\" type=\"button\" class=\"btn btn-primary\" style=\"float: right;\" (click)=\"empty()\">Submit</button>\n   <button type=\"button\" class=\"btn btn-warning\" style=\"float: right;\" (click)=\"clear()\">Clear</button>\n  </div>\n   </div>\n   <div *ngIf=\"answer || checkSubmitted(task.task_title)\">\n    <blockquote class=\"blockquote mb-0\">\n      <p [innerHTML]=\"htmlContent\"></p>\n    </blockquote>\n    <div style=\"text-align: center;\">\n     <p>You have already submitted this task</p>\n     <a type=\"button\" href=\"http://localhost:4200/classroom/{{module}}\" *ngIf=\"checkAllAns()\" class=\"btn btn primary\">Back to Classroom</a>\n   </div> \n </div>\n</div>\n\n      <div id=\"refresh\" class=\"card\" *ngIf=\"task.task_type == 'image'\">\n        <div class=\"card-body\">\n          <blockquote class=\"blockquote mb-0\">\n      <p><i [innerHTML]=\"task.task_desc\"></i></p>\n      <div style=\"text-align: center;\">\n      <img style=\"width: 300px; height: 300px; margin-left: 0;\" src=\"http://localhost:3000/image/{{task.originalname}}\" (click)=\"openPreviewDialog(i)\" class=\"img-thumbnail\">\n    </div>\n    </blockquote>\n        </div>\n        <div style=\"text-align: center;\" *ngIf=\"!checkSubmitted(task.task_title)\">\n        <a href=\"http://localhost:4200/annotate/{{task.activity_name}}/{{task.task_title}}\" class=\"btn\">Go to annotation tool</a>\n      </div>\n      <div style=\"text-align: center;\" *ngIf=\"checkSubmitted(task.task_title)\">\n     <p>You have already submitted this task</p>\n     <a type=\"button\" href=\"http://localhost:4200/classroom/{{module}}\" *ngIf=\"checkAllAns()\" class=\"btn btn primary\">Back to Classroom</a>\n   </div> \n      </div>\n      <!-- <div *ngIf=\"checkSubmitted(task.task_title)\">\n        <div class=\"card-body\">\n          <blockquote class=\"blockquote mb-0\">\n      <p><i [innerHTML]=\"task.task_desc\"></i></p>\n      <div style=\"text-align: center;\">\n      <img style=\"width: 300px; height: 300px; margin-left: 0;\" src=\"http://localhost:3000/image/{{task.originalname}}\" class=\"img-thumbnail\">\n    </div>\n    </blockquote>\n        </div>\n    <blockquote class=\"blockquote mb-0\">\n      <p [innerHTML]=\"htmlContent\"></p>\n    </blockquote>\n    <div style=\"text-align: center;\">\n     <p>You have already submitted this task</p>\n     <a type=\"button\" href=\"http://localhost:4200/classroom/{{module}}\" *ngIf=\"checkAllAns()\" class=\"btn btn primary\">Back to Classroom</a>\n   </div> \n </div> -->\n    </mat-tab>\n</mat-tab-group>\n  \n</mat-card>\n</body>"

/***/ }),

/***/ "./src/app/components/activity/activity.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/activity/activity.component.ts ***!
  \***********************************************************/
/*! exports provided: ActivityComponent, ImagePreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityComponent", function() { return ActivityComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePreviewComponent", function() { return ImagePreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_class_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/class.service */ "./src/app/services/class.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _services_activity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/activity.service */ "./src/app/services/activity.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










var ActivityComponent = /** @class */ (function () {
    function ActivityComponent(dialog, document, activityService, sanitize, route, router, taskService, authService, classService) {
        this.dialog = dialog;
        this.activityService = activityService;
        this.sanitize = sanitize;
        this.route = route;
        this.router = router;
        this.taskService = taskService;
        this.authService = authService;
        this.classService = classService;
        this.checked = false;
        this.teacher = false;
        this.loaded = false;
        this.tasks = [];
        this.userComments = [];
        this.answer = false;
        this.answerArray = [];
        this.testEmails = ["email1"];
        this.alreadySubmitted = false;
        this.submissionArray = [];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({ email: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]() });
    }
    ActivityComponent_1 = ActivityComponent;
    ActivityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.answer = null;
        this.editorConfig = {
            "editable": true,
            "spellcheck": true,
            "translate": "yes",
            "enableToolbar": true,
            "showToolbar": true,
            "placeholder": "Enter text here...",
            "imageEndPoint": "",
            "toolbar": [
                ["bold", "italic", "underline", "strikeThrough", "superscript", "subscript"],
                ["fontName", "fontSize", "color"],
                ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent", "outdent"]
            ]
        };
        //anno.makeAnnotatable(test);
        var desc = this.route.snapshot.paramMap.get('title');
        if (this.authService.isTeacher()) {
            this.teacher = true;
        }
        this.taskService.getActivityByTitle(desc).subscribe(function (data) {
            _this.activity = data;
            _this.module = data.module_code;
            console.log(data);
            _this.tasks = _this.activity.tasks;
            console.log(_this.activity);
            //console.log(JSON.stringify(this.tasks));
            // this.url = "http://localhost:3000/activity/"+ this.originalName;
            // console.log(this.url);
            // this.path = this.sanitize.bypassSecurityTrustUrl(this.url);
        }, function (err) {
            console.log(err);
        });
        this.email = this.authService.loadEmail();
        this.authService.getUser(this.email).subscribe(function (suc) {
            console.log("Success!");
            _this.user = suc;
            _this.submissionArray = _this.user.submissions;
            //this.taskCompletedCount = this.submissionArray.length;
        }, function (err) {
            console.log("Something went wrong!");
        });
    };
    ActivityComponent.prototype.ngAfterViewInit = function () {
        console.log(this.tasks);
    };
    ActivityComponent.prototype.checkSingleAns = function (index) {
        if (this.tasks[index] == null) {
            return false;
        }
        else if (this.tasks[index].submitted == true)
            return true;
    };
    ActivityComponent.prototype.checkAllAns = function () {
        if (this.tasks.length == this.answerArray.length) {
            return true;
        }
        else {
            return false;
        }
    };
    ActivityComponent.prototype.tabChange = function (event) {
        this.clear();
        console.log(event);
        this.index = event.index;
        if (this.answerArray.length > 0) {
            if (this.answerArray[event.index] != null) {
                this.htmlContent = this.answerArray[event.index].content;
                this.answer = true;
                console.log("ANSWER!!: " + this.answerArray[event.index].content);
            }
            else {
                this.answer = false;
                console.log("no answer yet");
            }
        }
        else {
            this.answer = false;
            console.log("nothing in here");
        }
        //is it an image
        if (this.tasks[event.index].originalname) {
            console.log("YES");
        }
        else {
            console.log("Nah");
        }
    };
    ActivityComponent.prototype.clear = function () {
        this.htmlContent = "";
    };
    ActivityComponent.prototype.onAnswerSubmit = function (title, thisString) {
        this.taskCompletedCount++;
        console.log(this.index);
        this.answer = true;
        this.answerStr = thisString;
        this.statusStr = {
            name: {
                first: this.user.first,
                last: this.user.last,
            },
            taskTitle: title,
            content: thisString
        };
        this.userStatusStr = {
            activityName: this.activity.activityName,
            taskName: title,
            submitted: true
        };
        console.log(this.userStatusStr);
        //this.answerArray[this.index]=this.statusStr;
        this.userComments.push(thisString);
        this.activityService.updateSubmission(this.activity.activityName, this.statusStr).subscribe(function (suc) {
            console.log("Success!");
        }, function (err) {
            console.log("Something went wrong! " + err);
        });
        this.activityService.updateUserSubmission(this.email, this.userStatusStr).subscribe(function (suc) {
            console.log("Success!");
        }, function (err) {
            console.log("Something went wrong!");
        });
        console.log(title);
        console.log(this.statusStr);
        // console.log(this.answerArray);
    };
    ActivityComponent.prototype.empty = function () {
        alert("You have not typed anything to submit!");
    };
    ActivityComponent.prototype.checkSubmitted = function (taskName) {
        for (var i = 0; i < this.submissionArray.length; i++) {
            if (this.submissionArray[i] != null) {
                if (this.submissionArray[i].submitted == true && this.submissionArray[i].taskName == taskName) {
                    return true;
                }
            }
        }
        return false;
    };
    ActivityComponent.prototype.openPreviewDialog = function (index) {
        var dialogRef = this.dialog.open(ImagePreviewComponent, {
            data: {
                image: this.activity.tasks[index].originalname
            }
        });
    };
    var ActivityComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ActivityComponent_1),
        __metadata("design:type", ActivityComponent)
    ], ActivityComponent.prototype, "pollComponent", void 0);
    ActivityComponent = ActivityComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-activity',
            template: __webpack_require__(/*! ./activity.component.html */ "./src/app/components/activity/activity.component.html"),
            styles: [__webpack_require__(/*! ./activity.component.css */ "./src/app/components/activity/activity.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialog"], Object, _services_activity_service__WEBPACK_IMPORTED_MODULE_4__["ActivityService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_class_service__WEBPACK_IMPORTED_MODULE_1__["ClassService"]])
    ], ActivityComponent);
    return ActivityComponent;
}());

var ImagePreviewComponent = /** @class */ (function () {
    function ImagePreviewComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ImagePreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'preview-dialog',
            template: __webpack_require__(/*! ./image-preview-dialog.html */ "./src/app/components/activity/image-preview-dialog.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_9__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogRef"], Object])
    ], ImagePreviewComponent);
    return ImagePreviewComponent;
}());



/***/ }),

/***/ "./src/app/components/activity/image-preview-dialog.html":
/*!***************************************************************!*\
  !*** ./src/app/components/activity/image-preview-dialog.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-divider></mat-divider>\r\n<div *ngIf=\"data\" style=\"text-align: center; margin-top: 15px; height: 60%;\" mat-dialog-content>\r\n  <img style=\"width: 450px; height: 300px;\" src=\"/image/{{data.image}}\">\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button-stroked mat-dialog-close cdkFocusInitial>Ok</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/annotate/annotate-confirm-dialog.html":
/*!******************************************************************!*\
  !*** ./src/app/components/annotate/annotate-confirm-dialog.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title style=\"margin-bottom: 5px;\">Are you sure?</h1>\r\n<mat-divider></mat-divider>\r\n<div style=\"text-align: center; margin-top: 15px; height: 60%;\" mat-dialog-content>\r\n  <p class=\"lead\">Once you submit this task it cannot be resubmitted</p>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button-stroked cdkFocusInitial [mat-dialog-close]=\"true\" >Submit</button>\r\n  <button mat-button-stroked [mat-dialog-close]=\"false\" cdkFocusInitial>Cancel</button>\r\n</div>"

/***/ }),

/***/ "./src/app/components/annotate/annotate-submitted-dialog.html":
/*!********************************************************************!*\
  !*** ./src/app/components/annotate/annotate-submitted-dialog.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title style=\"margin-bottom: 5px;\">You have submitted this task!</h1>\r\n<mat-divider></mat-divider>\r\n<div style=\"text-align: center; margin-top: 15px; height: 60%;\" mat-dialog-content>\r\n  <!-- <ul>\r\n    <li *ngFor=\"let task of data.tasks\">{{task}}</li>\r\n  </ul> -->\r\n  <p class=\"lead\">Would you like to review your submission or go back to the Classroom?</p>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button-stroked mat-dialog-close cdkFocusInitial>Ok</button>\r\n</div>"

/***/ }),

/***/ "./src/app/components/annotate/annotate-task-dialog.html":
/*!***************************************************************!*\
  !*** ./src/app/components/annotate/annotate-task-dialog.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<h1 mat-dialog-title style=\"margin-bottom: 5px;\">Your Task</h1>\r\n<mat-divider></mat-divider>\r\n<div style=\"text-align: center; margin-top: 15px; height: 60%;\" mat-dialog-content>\r\n  <!-- <ul>\r\n    <li *ngFor=\"let task of data.tasks\">{{task}}</li>\r\n  </ul> -->\r\n  <div *ngIf=\"data\">\r\n  <p class=\"lead\">{{data.tasks}}</p>\r\n</div>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button-stroked mat-dialog-close cdkFocusInitial>Ok</button>\r\n</div>"

/***/ }),

/***/ "./src/app/components/annotate/annotate.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/annotate/annotate.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  body {\r\n    font-family: Georgia, Cambria, \"Times New Roman\", Times, serif;\r\n    letter-spacing: 0.01rem;\r\n    font-size: 22px;\r\n    line-height: 1.5;\r\n    text-rendering: optimizeLegibility;\r\n    -webkit-font-smoothing: antialiased;\r\n    height: 100%;\r\n  }\r\n  html{\r\n    height: 100%!important;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbm5vdGF0ZS9hbm5vdGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7RUFDRTtJQUNFLDhEQUE4RDtJQUM5RCx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQ0FBa0M7SUFDbEMsbUNBQW1DO0lBQ25DLFlBQVk7RUFDZDtFQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hbm5vdGF0ZS9hbm5vdGF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgQ2FtYnJpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFyZW07XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBodG1se1xyXG4gICAgaGVpZ2h0OiAxMDAlIWltcG9ydGFudDtcclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/annotate/annotate.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/annotate/annotate.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n   <body>\n <mat-drawer-container style=\"width: 100%; height: 100%;\" class=\"example-container\" autosize [hasBackdrop]=\"true\">\n  <mat-drawer style=\"width: 350px; overflow-y: hidden;\" #drawer class=\"example-sidenav\" mode=\"over\">\n    <h3 style=\"text-align: center;\">Feedback</h3>\n    <div style=\"padding-left: 10px; padding-right: 10px; border-style: ridge;\">\n      <p style=\"text-transform: capitalize;\">Student: {{studentString}}</p>\n  <p>Annotation: {{annoText}}</p>\n</div>\n<div *ngIf=\"!isFeedbackSubmitted\">\n  <app-ngx-editor [config]=\"editorConfig\" height=\"350px\" minHeight=\"100px\" [placeholder]=\"placeholder\" [spellcheck]=\"true\" [(ngModel)]=\"htmlContent\" name=\"htmlContent\"></app-ngx-editor>\n  <button *ngIf=\"htmlContent\" type=\"button\" class=\"btn btn-primary\" style=\"float: right;\" (click)=\"submitFeedback(htmlContent)\">Submit</button>\n   <button *ngIf=\"!htmlContent\" type=\"button\" class=\"btn btn-primary\" style=\"float: right;\" (click)=\"empty()\">Submit</button>\n   <button type=\"button\" class=\"btn btn-warning\" style=\"float: right;\" (click)=\"clear()\">Clear</button>\n </div>\n   <div *ngIf=\"isFeedbackSubmitted\" style=\"padding-right: 10px; padding-left: 10px;\">\n  <p style=\"text-transform: capitalize;\">{{user?.name.first}} {{user?.name.last}} says:</p>\n  <p>{{dynamicFeedbackStr}}</p>\n</div>\n  </mat-drawer> \n\n\n  <mat-drawer-content id=\"drawerContent\">\n   <div style=\"margin-top: 2%;\">\n  <div id=\"imageContainer\" style=\"text-align: center;\">\n    <div style=\"float: left;\">\n    <button matTooltip=\"Go Back\" (click)=\"back()\" mat-stroked-button [routerLink]=\"['/activity/',activityName]\"><i class=\"glyphicon glyphicon-arrow-left\"></i></button>\n    <button matTooltip=\"Lock Annotations\" *ngIf=\"!submitted\" mat-stroked-button (click)=\"lockWidget()\"><i class=\"glyphicon glyphicon-lock\"></i></button>\n    <!--  <button style=\"float: right;\" type=\"button\" mat-stroked-button (click)=\"toggleSideNav()\"><i class=\"glyphicon glyphicon-menu-hamburger\"></i></button> -->\n     <button matTooltip=\"Make Annotatable\" *ngIf=\"!submitted\" mat-stroked-button (click)=\"showWidget()\"><i class=\"fas fa-unlock\"></i></button>\n     <button matTooltip=\"Submit\" *ngIf=\"!submitted\" mat-stroked-button (click)=\"openConfirmDialog()\"><i class=\"glyphicon glyphicon-ok\"></i></button>\n     <button matTooltip=\"Task\" mat-stroked-button (click)=\"openTaskDialog()\"><i class=\"glyphicon glyphicon-question-sign\"></i></button>\n  </div>\n    <img style=\"width: 1000px; height: 600px; border-style: ridge; border-width: 2px;\" id=\"image\" src={{url}} attr.data-original=\"{{dataOriginal}}\" />\n  </div>\n</div>\n</mat-drawer-content>\n\n</mat-drawer-container>\n</body>\n  \n<style>\n#imageDiv{\n  width: 60%\n}\n\n/*#cardDiv{\n      height: 70vh;\n    border-style: solid;\n    margin-top: 5%;\n}*/\nbody{\n  background-color: rgb(245,245,245)!important;\n  height: 100vh;\n}\nhtml{\n  height: 100%;\n  overflow-y: hidden;\n}\n.example-container {\n  width: 100%;\n    height: 100%;\n    overflow-y: hidden;\n}\n\n.example-sidenav {\n     overflow-y: hidden;\n    padding-bottom: 20px;\n}\n#mainDiv{\n    height: 100%;\n    width: 100%;\n    padding-top: 20px;\n}\n.sidenav {\n  min-height: 90%;\n  width: 25%;\n  position: absolute;\n  z-index: 999;\n  top: 5;\n  left: 0;\n  background-color: white;\n  overflow-x: hidden;\n  padding-right: 0px;\n  border-style: inset;\n  margin: 20px;\n}\n\n@media screen and (max-height: 450px) {\n  .sidenav {padding-top: 15px;}\n  .sidenav a {font-size: 18px;}\n}\n.sidenav a {\n  padding: 6px 8px 6px 16px;\n  text-decoration: none;\n  font-size: 25px;\n  color: white;\n  display: block;\n}\n#drawerContent button{\n  width: 35px;\n  height: 35px;\n  margin-right: 5px;\n}\n#imageContainer{\n  position: fixed;\n    left: 50%;\n    width: 1000px;\n    margin-left: -500px;\n    height: 600px;\n}\ni{\n  font-size: 25px;\n}\np::first-letter {\n  text-transform: uppercase;\n}\n\n</style>"

/***/ }),

/***/ "./src/app/components/annotate/annotate.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/annotate/annotate.component.ts ***!
  \***********************************************************/
/*! exports provided: AnnotateComponent, AnnotateTaskDialogComponent, AnnotateConfirmDialogComponent, AnnotateSubmittedDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnotateComponent", function() { return AnnotateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnotateTaskDialogComponent", function() { return AnnotateTaskDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnotateConfirmDialogComponent", function() { return AnnotateConfirmDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnotateSubmittedDialogComponent", function() { return AnnotateSubmittedDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_activity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/activity.service */ "./src/app/services/activity.service.ts");
/* harmony import */ var _services_navbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/navbar.service */ "./src/app/services/navbar.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var AnnotateComponent = /** @class */ (function () {
    function AnnotateComponent(dialog, nav, _formBuilder, route, router, taskService, activityService, authService, document, renderer) {
        this.dialog = dialog;
        this.nav = nav;
        this._formBuilder = _formBuilder;
        this.route = route;
        this.router = router;
        this.taskService = taskService;
        this.activityService = activityService;
        this.authService = authService;
        this.renderer = renderer;
        this.showFiller = false;
        this.annotations = [];
        this.update = false;
        this.subtasks = [];
        this.marked = false;
        this.index = 0;
        this.commentIndex = null;
        this.hidden = true;
        this.submitted = false;
        this.clickedIndex = -1;
        this.isFeedbackSubmitted = false;
    }
    AnnotateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editorConfig = {
            "editable": true,
            "spellcheck": true,
            "translate": "yes",
            "enableToolbar": true,
            "showToolbar": true,
            "placeholder": "Enter text here...",
            "imageEndPoint": "",
            "toolbar": [
                ["bold", "italic", "underline", "strikeThrough", "superscript", "subscript"],
                ["fontName", "fontSize", "color"],
                ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent", "outdent"]
            ]
        };
        this.nav.hide();
        this.email = this.authService.loadEmail();
        console.log(this.email);
        //this.dataOriginal = "http://"+ this.email;
        this.dataOriginal = "http://test";
        console.log(this.dataOriginal);
        this.updateForm = this._formBuilder.group({
            updateCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
        });
        this.title = this.route.snapshot.paramMap.get('title');
        this.activityName = this.route.snapshot.paramMap.get('activityname');
        this.taskService.getTaskMultiple(this.title, this.activityName).subscribe(function (data) {
            _this.image = data[0].originalname;
            _this.url = 'http://localhost:3000/image/' + _this.image;
            _this.subtasks.push(data[0].task_desc);
            var pic = document.getElementById("image");
            anno.makeAnnotatable(pic);
            anno.setProperties({
                outline: 'red'
            });
            _this.taskService.getAnnotationsByEmail(_this.email, _this.activityName, _this.title).subscribe(function (data) {
                _this.annotations = data;
                if (_this.annotations.length == 0) {
                    console.log("No submission yet!");
                    _this.submitted = false;
                }
                else {
                    for (var i = 0; i < _this.annotations.length; i++) {
                        anno.addAnnotation(_this.annotations[i]);
                    }
                    _this.submitted = true;
                    _this.lockWidget();
                }
            });
            _this.authService.getUser(_this.email).subscribe(function (data) {
                _this.user = {
                    name: {
                        first: data.first,
                        last: data.last
                    },
                    email: data.email,
                };
            });
        });
        /**Annotation handlers**/
        anno.addHandler('onAnnotationCreated', (function (data) {
            console.log(data);
            _this.annotation = {
                editable: false,
                src: data.src,
                text: data.text,
                shapes: [{
                        type: "rect",
                        geometry: {
                            x: data.shapes[0].geometry.x,
                            y: data.shapes[0].geometry.y,
                            height: data.shapes[0].geometry.height,
                            width: data.shapes[0].geometry.width
                        }
                    }],
                index: _this.index,
                context: data.context,
                name: _this.user.name,
                email: _this.user.email,
                feedback: null,
                activity: {
                    activityName: _this.activityName,
                    taskName: _this.title
                },
            };
            _this.index++;
            console.log(_this.annotation);
            _this.annotations.push(_this.annotation);
        }));
        anno.addHandler('onAnnotationClicked', (function (data) {
            _this.studentEmail = data.email;
            _this.studentString = data.name.first + " " + data.name.last;
            _this.studentContext = data.context;
            _this.clickedIndex = data.index;
            _this.lockWidget();
            _this.commentIndex = data.index;
            _this.annoText = data.text;
            _this.hidden = false;
            if (_this.feedbackSubmitted() == true) {
                _this.isFeedbackSubmitted = true;
                _this.dynamicFeedbackStr = _this.annotations[_this.clickedIndex].feedback;
            }
            else if (_this.feedbackSubmitted() == false) {
                _this.isFeedbackSubmitted = false;
            }
            _this.toggleSideNav();
        }));
        anno.addHandler('onAnnotationUpdated', (function (data) {
            //console.log(data.index);
            console.log(data.shapes[0].geometry);
            for (var i = 0; i < _this.annotations.length; i++) {
                if (_this.compareGeoms(_this.annotations[i].shapes[0].geometry, data.shapes[0].geometry)) {
                    //console.log("YES");
                    _this.annotations[i].text = data.text;
                    console.log(_this.annotations);
                    console.log("Successful");
                }
                else {
                    console.log("NO");
                }
            }
        }));
        anno.addHandler('onAnnotationRemoved', (function (data) {
            var text_ = data.text;
            _this.taskService.deleteAnnotation(text_).subscribe(function (data) {
                console.log(data);
            });
            _this.index--;
        }));
    };
    AnnotateComponent.prototype.checkMarked = function (title) {
        if (this.marked == false) {
            this.marked = true;
        }
        else {
            this.marked = false;
        }
    };
    AnnotateComponent.prototype.test = function () {
        //anno.hideAnnotations(this.annotations[1].src);
        var pic = document.getElementById("image").getAttribute("data-original");
        pic = "http://test@test.ie";
        //console.log( document.getElementById("image").getAttribute("data-original"));
        this.dataOriginal = pic;
        console.log(this.dataOriginal);
        anno.showAnnotations(this.dataOriginal);
    };
    AnnotateComponent.prototype.onUpdateSubmit = function (index) {
        this.tempAnnotation = this.annotations[index];
        // tempAnnotation.text = this.updateForm.get("updateCtrl").value;
        this.tempAnnotation.text = this.updateForm.get("updateCtrl").value;
        anno.addAnnotation(this.tempAnnotation, this.annotations[index]);
        this.annotations[index].update = false;
        console.log(this.annotations);
        this.updateForm.reset();
    };
    AnnotateComponent.prototype.submitFeedback = function (text) {
        this.activityService.updateFeedback(this.email, this.studentContext, text, this.clickedIndex)
            .subscribe(function (data) {
            console.log(data);
        });
        this.annotations[this.clickedIndex].feedback = text;
        console.log(this.annotations[this.clickedIndex].feedback);
        this.clear();
        this.toggleSideNav();
    };
    AnnotateComponent.prototype.back = function () {
        this.nav.show();
    };
    AnnotateComponent.prototype.clear = function () {
        this.htmlContent = "";
    };
    AnnotateComponent.prototype.empty = function () {
        alert("You have not typed anything to submit!");
    };
    AnnotateComponent.prototype.feedbackSubmitted = function () {
        if (this.clickedIndex != null && this.annotations[this.clickedIndex].feedback != null) {
            return true;
        }
        else {
            return false;
        }
    };
    AnnotateComponent.prototype.submitAllAnnotations = function () {
        this.userStatus = {
            activityName: this.activityName,
            taskName: this.title,
            submitted: true,
            count: this.annotations.length
        };
        this.lockWidget();
        this.submitted = true;
        for (var i = 0; i < this.annotations.length; i++) {
            this.taskService.submitAnnotation(this.annotations[i]).subscribe(function (data) {
                console.log(data);
            });
        }
        this.activityService.updateUserSubmission(this.annotations[0].email, this.userStatus).subscribe(function (data) {
            console.log(data);
        });
    };
    AnnotateComponent.prototype.compareGeoms = function (geom1, geom2) {
        if (geom1.x == geom2.x && geom1.y == geom2.y && geom1.height == geom2.height && geom1.width == geom2.width) {
            return true;
        }
        else {
            return false;
        }
    };
    AnnotateComponent.prototype.lockWidget = function () {
        anno.hideSelectionWidget();
    };
    AnnotateComponent.prototype.showWidget = function () {
        anno.showSelectionWidget();
    };
    AnnotateComponent.prototype.toggleSideNav = function () {
        if (this.hidden) {
            this.hidden = false;
            this.drawer.toggle();
        }
        else if (!this.hidden) {
            this.hidden = true;
            this.drawer.toggle();
        }
    };
    /**Dialog code**/
    AnnotateComponent.prototype.openTaskDialog = function () {
        var dialogRef = this.dialog.open(AnnotateTaskDialogComponent, {
            data: {
                tasks: this.subtasks
            },
            width: "300px",
            height: "250px"
        });
    };
    AnnotateComponent.prototype.openConfirmDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(AnnotateConfirmDialogComponent, {
            data: {
                annotations: this.annotations
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == true) {
                _this.submitAllAnnotations();
                _this.openSubmittedDialog();
            }
            else {
                console.log("closing");
            }
        });
    };
    AnnotateComponent.prototype.openSubmittedDialog = function () {
        var dialogRef = this.dialog.open(AnnotateSubmittedDialogComponent, {});
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('drawer'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenav"])
    ], AnnotateComponent.prototype, "drawer", void 0);
    AnnotateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-annotate',
            template: __webpack_require__(/*! ./annotate.component.html */ "./src/app/components/annotate/annotate.component.html"),
            styles: [__webpack_require__(/*! ./annotate.component.css */ "./src/app/components/annotate/annotate.component.css")]
        }),
        __param(8, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"],
            _services_navbar_service__WEBPACK_IMPORTED_MODULE_5__["NavbarService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _services_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"],
            _services_activity_service__WEBPACK_IMPORTED_MODULE_4__["ActivityService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], AnnotateComponent);
    return AnnotateComponent;
}());

var AnnotateTaskDialogComponent = /** @class */ (function () {
    function AnnotateTaskDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("annotate-Component"),
        __metadata("design:type", AnnotateComponent)
    ], AnnotateTaskDialogComponent.prototype, "annotateComponent", void 0);
    AnnotateTaskDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'annotate-dialog',
            template: __webpack_require__(/*! ./annotate-task-dialog.html */ "./src/app/components/annotate/annotate-task-dialog.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_8__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogRef"], Object])
    ], AnnotateTaskDialogComponent);
    return AnnotateTaskDialogComponent;
}());

var AnnotateConfirmDialogComponent = /** @class */ (function () {
    function AnnotateConfirmDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    AnnotateConfirmDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("annotate-Component"),
        __metadata("design:type", AnnotateComponent)
    ], AnnotateConfirmDialogComponent.prototype, "annotateComponent", void 0);
    AnnotateConfirmDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'annotate-dialog',
            template: __webpack_require__(/*! ./annotate-confirm-dialog.html */ "./src/app/components/annotate/annotate-confirm-dialog.html"),
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogRef"]])
    ], AnnotateConfirmDialogComponent);
    return AnnotateConfirmDialogComponent;
}());

var AnnotateSubmittedDialogComponent = /** @class */ (function () {
    function AnnotateSubmittedDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    AnnotateSubmittedDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'annotate-dialog',
            template: __webpack_require__(/*! ./annotate-submitted-dialog.html */ "./src/app/components/annotate/annotate-submitted-dialog.html"),
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogRef"]])
    ], AnnotateSubmittedDialogComponent);
    return AnnotateSubmittedDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/classroom/classroom.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/classroom/classroom.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xhc3Nyb29tL2NsYXNzcm9vbS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/classroom/classroom.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/classroom/classroom.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<head>\n\n</head>\n<body>\n<div>\n<mat-card style=\"position: absolute; width: 80%; height:auto; margin-top: 25px; overflow-y: auto;\" class=\"main\" id=\"main\" *ngIf=\"class\">\n\n  <a  *ngIf=\"isTeacher\" style=\"color: black; float: right; padding-right: 5px; font-size: 22px;\" (click)=\"openModal(newActivityModal)\"><i matTooltip=\"Create a New Activity\" class=\"glyphicon glyphicon-plus\"></i></a>\n\t<mat-card-title>Welcome to {{class.title}}</mat-card-title>\n\t<ul class=\"list-group\">\n    <br>\n\t\t<li *ngIf=\"user\" class=\"list-group-item\"><strong>Teacher:</strong> {{teacher}} </li>\n\t\t<li class=\"list-group-item\"><strong>Email:</strong> {{class.teacher.email}}</li>\n\t\t<li class=\"list-group-item\"><strong>Module:</strong> {{class.module_code}}</li>\n    <li class=\"list-group-item\"><strong>Active Class Activities:</strong> {{activities.length}}</li>\n    <li class=\"list-group-item\"><strong>Students:</strong> {{studentList?.length}}</li>\n  <mat-expansion-panel *ngFor=\"let act of activities\">\n    <mat-expansion-panel-header style=\"margin-left: auto; margin-right: auto;\">\n      <tr>\n        <th><strong>Activity Name:</strong>&nbsp;&nbsp; {{act.activityName}}\n      &nbsp;&nbsp;&nbsp;&nbsp;</th>\n        <th> <strong>Activity Type:</strong>&nbsp;&nbsp; {{act.activityType}}\n      &nbsp;&nbsp;&nbsp;&nbsp;</th>\n        <th><strong> Number of tasks</strong>&nbsp;&nbsp; {{act.tasks?.length}}</th>\n      <!-- <div style=\"width: 90%;\">\n      <strong>Activity Name:</strong>&nbsp;&nbsp; {{act.activityName}}\n      &nbsp;&nbsp;&nbsp;&nbsp;\n      <strong>Activity Type:</strong>&nbsp;&nbsp; {{act.activityType}}\n      &nbsp;&nbsp;&nbsp;&nbsp;\n      <strong> Number of tasks</strong>&nbsp;&nbsp; {{act.tasks?.length}}\n    </div> -->\n  </tr>\n\n    </mat-expansion-panel-header>\n<div style=\"width: 100%; text-align: -webkit-right;\">\n<a *ngIf=\"act.activityType=='Individual'\"  style=\"width: 10%;\" href=\"http://localhost:4200/activity/{{act.activityName}} \"type=\"submit\" class=\"btn btn-primary btn-block mt-4\" >Attempt</a>\n<a *ngIf=\"act.activityType=='Group'\"  style=\"width: 10%;\" href=\"http://localhost:4200/group/{{act.activityName}} \"type=\"submit\" class=\"btn btn-primary btn-block mt-4\" >Attempt</a>\n</div>\n<div class=\"example-container mat-elevation-z8\">\n  <table mat-table [dataSource]=\"act.tasks\">\n\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef> Task Name </th>\n      <td style=\"padding-left: 0px;\" mat-cell *matCellDef=\"let task\" > {{task.task_title}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"type\">\n      <th mat-header-cell *matHeaderCellDef> Type </th>\n      <td mat-cell *matCellDef=\"let task\"> {{task.task_type}} </td>\n    </ng-container>\n\n    <!-- <ng-container matColumnDef=\"desc\">\n      <th mat-header-cell *matHeaderCellDef> Description </th>\n      <td mat-cell *matCellDef=\"let task\"> </td>\n    </ng-container> -->\n\n    <ng-container matColumnDef=\"status\">\n      <th mat-header-cell *matHeaderCellDef> Status </th>\n      <td mat-cell *matCellDef=\"let task\">Incomplete</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"preview\">\n      <th mat-header-cell *matHeaderCellDef> Preview </th>\n      <td mat-cell *matCellDef=\"let task\">\n        <i *ngIf=\"task.task_type=='image'\" (click)=\"openTaskPreview(imageModal, task.originalname, task.task_desc, task.task_title)\" class=\"glyphicon glyphicon-eye-open\"></i>\n        <i *ngIf=\"task.task_type=='text'\" (click)=\"openTaskPreview(textModal, task.originalname, task.task_desc, task.task_title)\" class=\"glyphicon glyphicon-eye-open\"></i>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n</div>\n  </mat-expansion-panel>\n  </ul>\n\n</mat-card>\n</div>\n\n<!-- <div class=\"row\" *ngIf=\"files1\">\n\t<div *ngFor=\"let file of files1\" class=\"col-lg-4 col-md-12\">\n\t\t<div class=\"card\">\n\t\t  <img src=\"http://localhost:3000/image/{{file.originalname}}\" width=\"200px\" height=\"200px\" />\n\t\t  <div class=\"card-body\">\n\t\t    <h5 class=\"card-title\">{{file.task_title}}</h5>\n\t\t    <p #myElement class=\"card-text\">{{file.task_desc}}</p>\n\t\t    <a href=\"http://localhost:4200/task/{{file.task_title}}\"type=\"submit\" class=\"btn btn-primary btn-block mt-4\" >Go To Task</a>\n\t\t    <button *ngIf=\"(teacher)\" class=\"btn btn-danger btn-block mt-4\" (click)=\"delete(file.originalname)\">Delete</button>\n\t\t  </div>\n\t\t</div>\n\t\t\t<button (click)=\"onSubmit(file._id)\" type=\"Submit\">Submit</button>\n\t</div>\n</div> -->\n\n<!-- <div class=\"container\" *ngIf=\"teacher\">\n<h2 class=\"display-6 my-6\">Upload a new task</h2>\n\n<div class=\"center\">\n    <file-drop headertext=\"Drop file here\" (onFileDrop)=\"dropped($event)\"(onFileDrop)=\"openModal(enrollTemp)\" \n    (onFileOver)=\"fileOver($event)\" (onFileLeave)=\"fileLeave($event)\">\n    </file-drop>\n    <div class=\"upload-table\">\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th>Name</th>\n                </tr>\n            </thead>\n            <tbody class=\"upload-name-style\">\n                <tr *ngFor=\"let item of files2; let i=index\">\n                    <td><strong>{{ item.relativePath }}</strong></td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <button (click)=\"onUpload()\" class=\"btn btn-primary\">Submit</button>\n</div>\n</div> -->\n<ng-template #enrollTemp>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Task Image</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n  \t<img class=\"thumbnail\" src={{url}}>\n    <form>\n  <!-- <div class=\"form-group\">\n    <label>Title</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"task_title\" name=\"task_title\">\n  </div> -->\n  <div class=\"form-group\">\n    <label>Task Description</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"task_description\" name=\"task_description\">\n  </div>\n  <!-- <input [routerLink]=\"['/classroom']\" (click)=\"modalRef.hide()\" (click)=\"onUpload(task_title, task_description)\"  class=\"btn btn-primary\" value=\"Create\"> -->\n  <button class=\"btn btn-primary\" type=\"submit\">Choose</button>\n</form>\n  </div>\n</ng-template>\n\n\n\n\n\n\n<ng-template #newActivityModal id=\"newActivityModal\" style=\"width: 700px; height: 50vh;\">\n  <!-- <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">New Activity</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div [formGroup]=\"activityForm\">Activity Name:\n    <input [(ngModel)]=\"activity\" formControlName=\"activity\">\n  <mat-radio-group>\n    <mat-radio-button class=\"example-margin\" value=\"1\">Individual </mat-radio-button>\n    <mat-radio-button class=\"example-margin\" value=\"2\">Group </mat-radio-button>\n    </mat-radio-group>\n    <button style=\"float: right;\" class=\"btn btn-primary\" (click)=\"modalRef.hide()\"(click)=\"addActivity(activity)\">Add</button>\n</div>\n</div> -->\n\n<!--ACTIVITY STUFF-->\n<mat-horizontal-stepper labelPosition=\"bottom\" #stepper [linear]=\"isLinear\">\n  <mat-step [stepControl]=\"activityNameForm\">\n    <form [formGroup]=\"activityNameForm\" (ngSubmit)=\"onActivityNameSubmit()\">\n      <ng-template matStepLabel>Activity name</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Activity Name\" formControlName=\"activityNameCtrl\">\n      </mat-form-field>\n      <div>\n        <button type=\"submit\" mat-stroked-button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"activityTypeForm\">\n    <form [formGroup]=\"activityTypeForm\" (ngSubmit)=\"onActivityTypeSubmit()\" style=\"text-align: left; font-size: 18px;\">\n      <ng-template matStepLabel>Activity Type</ng-template>\n      <mat-radio-group formControlName=\"activityTypeCtrl\" required>\n    <mat-radio-button (click)=\"notGroup()\" class=\"example-margin\" value=\"Individual\">Individual </mat-radio-button>\n    <mat-radio-button (click)=\"group()\" class=\"example-margin\" value=\"Group\">Group </mat-radio-button>\n    </mat-radio-group>\n    <mat-form-field *ngIf=\"isGroup\" style=\"float: right;\">\n  <mat-select placeholder=\"Students\" formControlName=\"students\" multiple>\n    <mat-option *ngFor=\"let student of studentList\" [value]=\"student\">{{student.first}} {{student.last}}</mat-option>\n  </mat-select>\n</mat-form-field>\n    <br>\n      <div style=\"margin-top: 20px; text-align: left;\">\n        <button mat-stroked-button matStepperPrevious>Back</button>\n        <button mat-stroked-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n\n  <!--TASK STUFF-->\n  <mat-step [stepControl]=\"taskForm\">\n    <form [formGroup]=\"taskForm\" (ngSubmit)=\"onTaskNameSubmit()\">\n      <ng-template matStepLabel>Tasks</ng-template>\n        <mat-list role=\"list\">\n          <mat-divider></mat-divider>\n          <mat-list-item role=\"listitem\">\n            <mat-list-item role=\"listitem\">\n            <strong>Task Type</strong>\n          </mat-list-item>\n          <mat-form-field>\n          <mat-select [(value)]=\"selected\" formControlName=\"taskTypeCtrl\" >\n            <mat-option>None</mat-option>\n            <mat-option value=\"image\" >Image</mat-option>\n            <mat-option value=\"text\">Text</mat-option>\n          </mat-select>\n        </mat-form-field>\n          <mat-divider></mat-divider>\n        </mat-list-item>\n       <!--  <mat-list-item style=\"border-bottom-style: ridge; height: auto; padding-left: 0px; padding-right: 0px;\" *ngFor=\"let task of tasks\">\n      <div *ngIf=\"submission\" style=\"width: 100%; margin-top: 20px;\">\n      <p><strong><i>Task: {{task.task_name}}</i></strong></p>\n    <blockquote>\n      <p><i [innerHTML]='task.task_desc'></i></p>\n    </blockquote>\n  </div>\n  </mat-list-item> -->\n        <div style=\"text-align: center;\" >\n          <div class=\"table-responsive\">\n    <table class=\"table table-striped table table-bordered\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th>No.</th>\n        <th>Name</th>\n        <th>Type</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let task of tasks; let i = index\">\n        <td>{{i + 1}}</td>\n        <td>{{task.task_name}}</td>\n        <!--<ng-template #popTemplate>\n        Email: {{class.teacher.email}}</ng-template> -->\n        <td>{{task.task_type}}</td>\n      </tr>\n      </tbody>\n  </table>\n</div>\n\n  <mat-card *ngIf=\"selected=='image' && url\" style=\"border-style: ridge; width: 80%;\">\n  <div style=\"text-align: center; height: auto;\">\n        <img src={{url}} style=\"padding: 20px;\">\n    <mat-list style=\"text-align: left; margin-top: 5px; margin-top: 5px;\">\n      <h3 style=\"margin-top: 10px; margin-bottom: 0px; border-bottom-style: ridge; border-top-style: ridge; background-color: gainsboro; border-color: gainsboro; padding-bottom: 10px; padding-top: 10px;\">Tasks\n     <!--  <i *ngIf=\"!makingTask\" (click)=\"newTask()\" style=\"float: right;\" class=\"glyphicon glyphicon-plus\"></i> -->\n      <i (click)=\"submitTask()\" style=\"float: right;\" class=\"glyphicon glyphicon-ok\"></i>\n    </h3>\n\n      <div style=\"width: 100%; margin-top: 20px;\">\n        <mat-form-field *ngIf=\"!taskName\">\n      <input matInput placeholder=\"Task Name\" formControlName=\"taskNameCtrl\">\n    </mat-form-field>\n    <button type=\"button\" style=\"float: right;\" (click)=\"addTask()\" class=\"btn btn-primary\">OK</button>\n    <blockquote *ngIf=\"taskName\">\n      <p><i>{{taskName}}</i></p>\n    </blockquote>\n\n       <app-ngx-editor height=\"150px\" minHeight=\"150px\" [config]=\"editorConfig\"  [placeholder]=\"placeholder\" [spellcheck]=\"true\" [(ngModel)]=\"htmlContent\" [ngModelOptions]=\"{standalone: true}\" name=\"htmlContent\"></app-ngx-editor>\n    </div>\n    <!-- <div *ngIf=\"done\" style=\"width: 100%; margin-top: 20px;\">\n      <p><strong><i>Task: {{task.task_name}}</i></strong></p>\n    <blockquote>\n      <p><i [innerHTML]='task.task_desc'></i></p>\n    </blockquote>\n  </div> -->\n    </mat-list>\n  </div> \n</mat-card>\n      </div>\n\n          <file-drop *ngIf=\"selected=='image' && !url\" headertext=\"Drop file here\" (onFileDrop)=\"dropped($event)\"\n    (onFileOver)=\"fileOver($event)\" (onFileLeave)=\"fileLeave($event)\">\n    </file-drop>\n\n\n\n\n\n    <!--Text task-->\n    <div *ngIf=\"selected=='text'\">\n  <div style=\"text-align: center;\">\n  <mat-card style=\"border-style: ridge; width: 80%;\">\n\n  <div style=\"text-align: center; height: auto;\">\n\n    <mat-list style=\"text-align: left; margin-top: 5px; margin-top: 5px;\">\n\n      <h3 style=\"margin-top: 10px; margin-bottom: 0px; border-bottom-style: ridge; border-top-style: ridge; background-color: gainsboro; border-color: gainsboro; padding-bottom: 10px; padding-top: 10px;\">Add a new task\n      <!-- <i *ngIf=\"!makingTask\" (click)=\"newTask()\" style=\"float: right;\" class=\"glyphicon glyphicon-plus\"></i> -->\n      <i (click)=\"submitTask()\" style=\"float: right;\" class=\"glyphicon glyphicon-ok\"></i>\n    </h3>\n    <!-- <h3>\n   <p style=\"text-align: center;\" *ngIf=\"tasks.length == 0 && !makingTask\"><i>You haven't added any tasks yet.</i></p>\n    </h3> -->\n      <div style=\"width: 100%; margin-top: 20px;\">\n        <mat-form-field *ngIf=\"!taskName\">\n      <input matInput placeholder=\"Task Name\" formControlName=\"taskNameCtrl\">\n    </mat-form-field>\n    <button type=\"button\" *ngIf=\"!taskName\" style=\"float: right;\" (click)=\"addTask()\" class=\"btn btn-primary\">OK</button>\n    <blockquote *ngIf=\"taskName\">\n      <p><i>{{taskName}}</i></p>\n    </blockquote>\n\n       <app-ngx-editor height=\"150px\" minHeight=\"150px\" [config]=\"editorConfig\"  [placeholder]=\"placeholder\" [spellcheck]=\"true\" [(ngModel)]=\"htmlContent\" [ngModelOptions]=\"{standalone: true}\" name=\"htmlContent\"></app-ngx-editor>\n    </div>\n    <!-- <div *ngIf=\"done\" style=\"width: 100%; margin-top: 20px;\">\n      <p><strong><i>Task: {{task.task_name}}</i></strong></p>\n    <blockquote>\n      <p><i [innerHTML]='task.task_desc'></i></p>\n    </blockquote>\n  </div> -->\n    </mat-list>\n  </div> \n</mat-card>\n      </div>\n   </div>\n   <!-- <div style=\"width: 100%; margin-top: 20px;\" *ngFor=\"let task of tasks\">\n      <p><strong><i>Task: {{task.task_name}}</i></strong></p>\n    <blockquote>\n      <p><i [innerHTML]='task.task_desc'></i></p>\n    </blockquote>\n  </div> -->\n        </mat-list>\n\n        <!-- <input type=\"number\" name=\"points\" step=\"1\" matInput placeholder=\"0\" formControlName=\"initialTaskAmountCtrl\" required> -->\n\n        <!--ACTIVITY DISPLAY STUFF-->\n      <div>\n        <button mat-stroked-button matStepperPrevious>Back</button>\n        <button *ngIf=\"tasks?.length > 0\" mat-stroked-button matStepperNext>Done</button>\n        <button *ngIf=\"taskDesc\" style=\"float: right;\" type=\"button\" (click)=\"submitTask()\" class=\"btn btn-primary\">Submit Task</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    Activity Created.\n    <mat-list role=\"list\">\n      <mat-list-item>\n      <mat-divider></mat-divider>\n      <mat-list-item role=\"listitem\"><strong>Activity Name: </strong>&nbsp;&nbsp;{{activityName}}</mat-list-item>\n      <mat-divider></mat-divider>\n      <mat-list-item role=\"listitem\"><strong>Activity Type: </strong>&nbsp;&nbsp;{{activityType}}</mat-list-item>\n      <mat-divider></mat-divider>\n      <mat-list-item role=\"listitem\"><strong>#Tasks: </strong>&nbsp;&nbsp;{{tasks?.length}}</mat-list-item>\n    </mat-list-item>\n\n  <h4><strong>Tasks: </strong></h4>\n  <mat-list-item *ngFor=\"let task of tasks\" role=\"listitem\">\n    <mat-list-item><strong>Name</strong>&nbsp;&nbsp;{{task?.task_name}}</mat-list-item>\n    <mat-list-item><strong>Type</strong>&nbsp;&nbsp;{{task?.task_type}}</mat-list-item>\n    <ng-template #popTemplate>\n      {{task?.task_desc}}\n  </ng-template>\n    <mat-list-item><a [popover]=\"popTemplate\" popoverTitle=\"Task Description\" triggers=\"mouseenter:mouseleave\">\n      Description\n    </a>\n    </mat-list-item>\n    <mat-divider ></mat-divider>\n  </mat-list-item>\n\n</mat-list>\n    <div>\n      <button mat-stroked-button matStepperPrevious>Back</button>\n      <button mat-stroked-button (click)=\"stepper.reset()\">Reset</button>\n      <button class=\"btn btn-primary\" (click)=\"submitActivity()\" (click)=\"modalRef.hide()\">Submit</button>\n    </div>\n  </mat-step>\n</mat-horizontal-stepper>\n</ng-template>\n\n\n<!--Image Modal-->\n<ng-template #imageModal>\n  <div style=\"text-transform: capitalize;\" class=\"modal-header\">\n     <h4 class=\"modal-title pull-left\"><strong>{{tempName}}</strong></h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\" style=\"padding-top: 0px; text-transform: capitalize;\">\n    <h4><blockquote><p><i>{{tempDesc}}</i></p></blockquote></h4>\n    <img  id=\"modalImage\" [src]=\"imageSrc\">\n    \n  </div>\n</ng-template>\n\n<!--Text Modal-->\n<ng-template #textModal>\n  <div style=\"text-transform: capitalize;\" class=\"modal-header\">\n     <h4 class=\"modal-title pull-left\"><strong>{{tempName}}</strong></h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\" style=\"padding-top: 0px; text-transform: capitalize;\">\n    <h4><blockquote><p><i>{{tempDesc}}</i></p></blockquote></h4>\n    \n  </div>\n</ng-template>\n\n</body>\n<!-- <div><strong>Task Type:</strong> \n    <select matNativeControl required>\n    <option>None</option>\n    <option value=\"annotate\">Annotate</option>\n    <option value=\"text\">Text</option>\n  </select>\n  </div> -->\n\n<!-- <span class=\"glyphicon glyphicon-plus\" style=\"float: right;\" id=\"newtask\" (click)=\"addTask(task)\"></span>\n  </div>\n  <mat-list *ngFor=\"let task of tasks\" role=\"list\">\n    <mat-divider></mat-divider>\n    <div>\n      <div [formGroup]=\"form\"><strong>Task Name:</strong>\n    <input [(ngModel)]=\"task\" formControlName=\"task\">\n  </div>\n</div>\n\n  <mat-divider></mat-divider>\n</mat-list> -->\n\n\n\n\n\n\n\n<script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.min.js\"></script>\n<script src=\"http://annotorious.github.com/latest/annotorious.min.js\"></script>\n<style>\nimg{\n\twidth: 100%;\n  height: 400px;\n}\nli{\n\ttext-transform: capitalize;\n}\n.column {\n    float: left;\n    width: 33.33%;\n    padding: 5px;\n}\n.card {\n    border:1px solid black; \n    outline-style:solid;\n}\n.thumbnail {\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  padding: 5px;\n  width: 150px;\n}\n.newActivity, #newtask{\n  float: right;\n}\n.example-margin {\n  margin: 0 10px;\n}\n.mat-list-item-content{\n      justify-content: flex-end;\n}\n.mat-list-item{\n  text-transform: capitalize;\n}\n#newActivityModal{\n  width: 700px;\n}\n.mat-card{\n  display: inline-block;\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n  transition: 0.3s;\n  border-radius: 5px;\n  border-style: solid;\n  text-transform: capitalize;\n}\n.mat-card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n}\n.example-container {\n  height: auto;\n  overflow: auto;\n}\n\ntable {\n  width: 100%;\n}\nth.mat-header-cell {\n    text-align: center;\n    width: 25%;\n    font-size: 16px;\n}\ntd.mat-cell, td.mat-footer-cell, th.mat-header-cell {\n    padding: 0;\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    border-right-style: solid;\n    border-right-width: 1px;\n    border-right-color: rgba(0,0,0,.12);\n}\ntd{\n  text-align: center;\n}\n.mat-row:nth-child(odd){\n          background-color:white;\n          }\n\n   .mat-row:nth-child(even){\n          background-color:honeydew;\n          }\n#main{\n  width: 85%;\nposition: fixed;\nleft: 50%;\nmargin-left: -42.5%;\n}\n\ni:hover {\n cursor:pointer;\n}\n\n#modalImage{\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n  height: 450px;\n}\n\n\n</style>\n\n\n\n"

/***/ }),

/***/ "./src/app/components/classroom/classroom.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/classroom/classroom.component.ts ***!
  \*************************************************************/
/*! exports provided: ClassroomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassroomComponent", function() { return ClassroomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_class_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/class.service */ "./src/app/services/class.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _services_activity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/activity.service */ "./src/app/services/activity.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_lightbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular2-lightbox */ "./node_modules/angular2-lightbox/index.js");
/* harmony import */ var angular2_lightbox__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular2_lightbox__WEBPACK_IMPORTED_MODULE_10__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ClassroomComponent = /** @class */ (function () {
    function ClassroomComponent(_lightbox, _formBuilder, modalService, taskService, classService, authService, activityService, route, router, http) {
        this._lightbox = _lightbox;
        this._formBuilder = _formBuilder;
        this.modalService = modalService;
        this.taskService = taskService;
        this.classService = classService;
        this.authService = authService;
        this.activityService = activityService;
        this.route = route;
        this.router = router;
        this.http = http;
        //students = new FormControl();
        //toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
        /*Task variables*/
        this.done = true;
        this.submitted = true;
        //teacher: any;
        //adding task
        this.add = false;
        this.makingTask = false;
        this.submission = false;
        this.isGroup = false;
        this.displayedColumns = ['name', 'type', 'status', 'preview'];
        this.url = "";
        this.tasks = [];
        this.taskFiles = [];
        this.activities = [];
        this.studentGroup = [];
        /*File variables*/
        this.files2 = [];
        this.files1 = [];
        this.isTeacher = false;
        this.id = 1;
        this.config = {
            animated: true,
            keyboard: true,
            class: 'modal-lg'
        };
        this.config2 = {
            animated: true,
            keyboard: true,
            class: 'modal-dialog-centered'
        };
        this.panelOpenState = false;
        this.isLinear = true;
        this.status = false;
        this.studentList = [];
        this.editorConfig = {
            "editable": true,
            "spellcheck": true,
            "translate": "yes",
            "enableToolbar": true,
            "showToolbar": true,
            "placeholder": "Enter text here...",
            "imageEndPoint": "",
            "toolbar": [
                ["bold", "italic", "underline", "strikeThrough", "superscript", "subscript"],
                ["fontName", "fontSize", "color"],
                ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent", "outdent"]
            ]
        };
        this.selectedFile = null;
    }
    ClassroomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.email = this.authService.loadEmail();
        var module = this.route.snapshot.paramMap.get('classname');
        console.log(module);
        this.activities = [];
        this.taskIndex = this.tasks.length;
        this.activityNameForm = this._formBuilder.group({
            activityNameCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]
        });
        //this.taskName = this.activityNameForm.controls['activityNameCtrl'].value;
        this.activityTypeForm = this._formBuilder.group({
            activityTypeCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            students: ['']
        });
        this.taskForm = this._formBuilder.group({
            taskNameCtrl: [''],
            taskDescCtrl: [''],
            taskTypeCtrl: ['']
        });
        this.taskService.clearFile();
        if (this.authService.isTeacher()) {
            this.isTeacher = true;
        }
        this.classService.getClassByModule(module).subscribe(function (data) {
            console.log(data);
            _this.class = data;
            _this.title = data.title;
            _this.module_code = data.module_code;
            _this.teacherEmail = data.teacher.email;
            _this.classService.getTeacher(_this.teacherEmail).subscribe(function (data) {
                _this.first = data.first;
                _this.last = data.last;
                _this.role = data.role;
                _this.teacher = _this.first + " " + _this.last;
                _this.classService.getStudentsByModule(_this.module_code).subscribe(function (data) {
                    _this.studentList = data;
                });
            });
            _this.activityService.getActivitiesByModule(_this.module_code).subscribe(function (data) {
                _this.activities = data;
                console.log(_this.activities);
            });
            _this.authService.getUser(_this.email).subscribe(function (data) {
                _this.user = data;
            });
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ClassroomComponent.prototype.dropped = function (event) {
        var _this = this;
        this.files2 = event.files;
        var _loop_1 = function (droppedFile) {
            // Is it a file?
            if (droppedFile.fileEntry.isFile) {
                var fileEntry = droppedFile.fileEntry;
                fileEntry.file(function (file) {
                    _this.file = file;
                    console.log(_this.file);
                    // Here you can access the real file
                    console.log(droppedFile.relativePath, file);
                    var reader = new FileReader();
                    reader.readAsDataURL(_this.file);
                    reader.onload = function (event) {
                        _this.url = event.target.result;
                    };
                    console.log(_this.url);
                });
            }
            else {
                var fileEntry = droppedFile.fileEntry;
                console.log(droppedFile.relativePath, fileEntry);
            }
        };
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var droppedFile = _a[_i];
            _loop_1(droppedFile);
        }
    };
    ClassroomComponent.prototype.fileOver = function (event) {
        console.log(event);
    };
    ClassroomComponent.prototype.fileLeave = function (event) {
        console.log(event);
    };
    ClassroomComponent.prototype.delete = function (thisId) {
        console.log(thisId);
        var url = 'http://localhost:3000/files/' + thisId;
        this.http.delete(url)
            .subscribe(function (res) {
            console.log(res);
        });
        location.reload();
    };
    ClassroomComponent.prototype.getTaskDesc = function (title, desc) {
        this.taskName = title;
        this.taskDesc = desc;
    };
    ClassroomComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template, this.config);
    };
    ClassroomComponent.prototype.openTaskPreview = function (template, src, desc, name) {
        this.config.class = "modal-md";
        this.modalRef = this.modalService.show(template, this.config2);
        this.imageSrc = "http://localhost:3000/image/" + src;
        this.tempDesc = desc;
        this.tempName = name;
        console.log(this.tempName);
    };
    ClassroomComponent.prototype.newTask = function () {
        //this.taskForm.reset();
        this.done = false;
        this.makingTask = true;
        this.add = true;
        // if(this.tasks.length > 0){
        //   this.taskIndex++;
        // }
    };
    ClassroomComponent.prototype.addTask = function () {
        this.taskName = this.taskForm.get('taskNameCtrl').value;
    };
    ClassroomComponent.prototype.submitTask = function () {
        this.submission = true;
        this.makingTask = false;
        this.done = true;
        this.add = false;
        this.taskDesc = this.htmlContent;
        console.log(this.taskForm.get('taskNameCtrl').value);
        this.taskType = this.taskForm.get("taskTypeCtrl").value;
        console.log(this.taskName);
        console.log(this.taskType);
        console.log(this.taskDesc);
        if (this.taskType == 'image') {
            this.taskStr = { task_name: this.taskName, task_type: "image", task_desc: this.taskDesc, status: 'unsubmitted' };
            this.tasks.push(this.taskStr);
            var formData = new FormData();
            formData.append('file', this.file);
            formData.append('activityName', this.activityName);
            formData.append('taskName', this.taskName);
            formData.append('taskDesc', this.taskDesc);
            formData.append('taskType', this.taskType);
            formData.append('submitted', 'false');
            this.http.post('http://localhost:3000/upload/image/' + this.module_code, formData)
                .subscribe(function (res) {
                console.log(res);
            });
        }
        if (this.taskType == 'text') {
            this.taskStr = { task_name: this.taskName, task_type: this.taskType, task_desc: this.taskDesc, status: 'unsubmitted' };
            this.tasks.push(this.taskStr);
            this.task = {
                activityName: this.activityName,
                taskName: this.taskName,
                taskDesc: this.taskDesc,
                taskType: this.taskType,
                submitted: false
            };
            this.http.post('http://localhost:3000/upload/text/' + this.module_code, this.task)
                .subscribe(function (res) {
                console.log(res);
            });
        }
        console.log(this.tasks);
        this.taskForm.reset();
        this.url = null;
        this.taskName = null;
        this.taskDesc = null;
        this.taskType = null;
        this.selected = null;
    };
    ClassroomComponent.prototype.submitActivity = function () {
        var _this = this;
        this.taskFiles = [];
        this.taskService.getFilesByActName(this.activityName).subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                _this.taskFiles.push(data[i]);
            }
            _this.activityCount++;
            _this.activityStr = { activityName: _this.activityName, activityType: _this.activityType, group: _this.studentGroup, module_code: _this.module_code, tasks: _this.taskFiles, submissions: [] };
            _this.activities.push(_this.activityStr);
            console.log(_this.activityStr);
            _this.activityNameForm.reset();
            _this.activityTypeForm.reset();
            _this.taskForm.reset();
            _this.tasks = [];
            _this.taskService.submitActivity(_this.activityStr).subscribe(function (data) {
                console.log(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ClassroomComponent.prototype.clear = function () {
        this.tasks.length--;
        console.log(this.tasks);
    };
    ClassroomComponent.prototype.onActivityNameSubmit = function () {
        this.activityName = this.activityNameForm.get('activityNameCtrl').value;
        console.log(this.activityName);
    };
    ClassroomComponent.prototype.onActivityTypeSubmit = function () {
        this.studentGroup = this.activityTypeForm.get("students").value;
        this.activityType = this.activityTypeForm.get('activityTypeCtrl').value;
        console.log(this.activityType);
        console.log(this.studentGroup);
    };
    ClassroomComponent.prototype.onTaskNameSubmit = function () {
        this.taskName = this.taskForm.get('taskNameCtrl').value;
        console.log(this.taskName);
        //this.tasks.push(this.task);
    };
    ClassroomComponent.prototype.onTaskTypeSubmit = function () {
        //let value = (<HTMLSelectElement>document.getElementById('organization')).value;
        this.taskType = this.taskForm.get("taskTypeCtrl").value;
        console.log(this.taskType);
    };
    ClassroomComponent.prototype.group = function () {
        this.isGroup = true;
    };
    ClassroomComponent.prototype.notGroup = function () {
        this.isGroup = false;
    };
    ClassroomComponent.prototype.checkSubmitted = function () {
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('text'),
        __metadata("design:type", Object)
    ], ClassroomComponent.prototype, "card", void 0);
    ClassroomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-classroom',
            template: __webpack_require__(/*! ./classroom.component.html */ "./src/app/components/classroom/classroom.component.html"),
            styles: [__webpack_require__(/*! ./classroom.component.css */ "./src/app/components/classroom/classroom.component.css")]
        }),
        __metadata("design:paramtypes", [angular2_lightbox__WEBPACK_IMPORTED_MODULE_10__["Lightbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"], _services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"], _services_class_service__WEBPACK_IMPORTED_MODULE_1__["ClassService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_activity_service__WEBPACK_IMPORTED_MODULE_4__["ActivityService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
    ], ClassroomComponent);
    return ClassroomComponent;
}());



/***/ }),

/***/ "./src/app/components/create-class/create-class.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/create-class/create-class.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JlYXRlLWNsYXNzL2NyZWF0ZS1jbGFzcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/create-class/create-class.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/create-class/create-class.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Create a Class</h2>\n<form (submit)=\"onCreateSubmit()\">\n\t<div class=\"form-group\">\n\t\t<label>Title</label>\n\t\t<input type=\"text\" [(ngModel)]=\"title\" name=\"title\" class=\"form-control\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Module Code</label>\n\t\t<input type=\"text\" [(ngModel)]=\"module_code\" name=\"module_code\" class=\"form-control\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Email</label>\n\t\t<input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n\t</div>\n\n<input type='submit' class=\"btn btn-primary\" value=\"Submit\">\n</form>"

/***/ }),

/***/ "./src/app/components/create-class/create-class.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/create-class/create-class.component.ts ***!
  \*******************************************************************/
/*! exports provided: CreateClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateClassComponent", function() { return CreateClassComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_class_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/class.service */ "./src/app/services/class.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CreateClassComponent = /** @class */ (function () {
    function CreateClassComponent(validateService, flashMessage, classService, router, zone) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.classService = classService;
        this.router = router;
        this.zone = zone;
        //module_code: String;
        //email: String;
        this.isTeacher = false;
    }
    CreateClassComponent.prototype.ngOnInit = function () {
    };
    CreateClassComponent.prototype.onCreateSubmit = function () {
        var _this = this;
        var theStr = "";
        var theClass = {
            title: this.title,
            module_code: this.module_code,
            teacher: {
                title: this.title,
                email: this.email
            }
        };
        if (!this.validateService.validateClass(theClass)) {
            this.flashMessage.show("Fill in all fields", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        else {
            console.log("ALL GOOD");
        }
        /*this.authService.getUser(this.email).subscribe(
          suc=>{
            theStr = JSON.stringify(suc);
            console.log("THIS IS RETURNED" + JSON.stringify(suc));
            console.log("PARSING NIGGA "+JSON.parse(theStr).first);
          },
          err=>{
          console.log(err);
        });*/
        this.classService.createClass(theClass).subscribe(function (suc) {
            _this.classService.storeClassData(suc.module.module_code, suc.module.email);
            //console.log(suc.module);
            _this.flashMessage.show("Class Created", { cssClass: 'alert-success', timeout: 3000 });
            _this.router.navigate(['/dashboard']);
        }, function (err) {
            _this.flashMessage.show("Something went wrong", { cssClass: 'alert-danger', timeout: 3000 });
            //this.router.navigate(['/']);
            console.log(err);
        });
        /*this.authService.createClass(theClass).subscribe(data =>{
          if(data.success){
            //this.authService.storeClassData(data.theClass);
            console.log(data);
            this.flashMessage.show("Logged in!", {cssClass: 'alert-success', timeout: 5000});
            //this.router.navigate(['profile']);
          }else{
            this.flashMessage.show("Something went wrong, try again", {cssClass: 'alert-danger', timeout: 5000});
            //this.router.navigate(['login']);
          }
        });*/
    };
    CreateClassComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__["FlashMessagesModule"].forRoot()
            ]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-class',
            template: __webpack_require__(/*! ./create-class.component.html */ "./src/app/components/create-class/create-class.component.html"),
            styles: [__webpack_require__(/*! ./create-class.component.css */ "./src/app/components/create-class/create-class.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_4__["ValidateService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__["FlashMessagesService"],
            _services_class_service__WEBPACK_IMPORTED_MODULE_2__["ClassService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], CreateClassComponent);
    return CreateClassComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n   <!--  <div class=\"row profile\">\n    <div class=\"col-md-3\">\n      <div class=\"profile-sidebar\">\n        \n        <div class=\"profile-userpic\">\n          <img src=\"http://keenthemes.com/preview/metronic/theme/assets/admin/pages/media/profile/profile_user.jpg\" class=\"img-responsive\" alt=\"\">\n        </div>\n        \n        <div class=\"profile-usertitle\">\n          <div class=\"profile-usertitle-name\">\n            {{user.first}} {{user.last}}\n          </div>\n          <div class=\"profile-usertitle-job\">\n            {{user.role}}\n          </div>\n        </div>\n\n        <div class=\"profile-usermenu\">\n          <ul class=\"nav\">\n            <li class=\"active\">\n              <a href=\"#\">\n              <i class=\"glyphicon glyphicon-home\"></i>\n              Classes </a>\n            </li>\n            <li *ngIf=\"!teacher\">\n              <a (click)=\"openModal(template)\">\n              <i class=\"glyphicon glyphicon-user\"></i>\n              Enroll </a>\n            </li>\n            <li>\n              <a href=\"#\" target=\"_blank\">\n              <i class=\"glyphicon glyphicon-ok\"></i>\n              Tasks </a>\n            </li>\n            <li *ngIf=\"teacher\">\n              <a>\n              <i class=\"glyphicon glyphicon-flag\"></i>\n              Help </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div> -->\n <mat-card id=\"sideNav\" style=\"border-top: 0px;\">\n    <div class=\"row profile\">\n      <div class=\"profile-sidebar\">\n        \n        <div class=\"profile-userpic\">\n          <img src=\"http://keenthemes.com/preview/metronic/theme/assets/admin/pages/media/profile/profile_user.jpg\" class=\"img-responsive\" alt=\"\">\n        </div>\n        \n        <div class=\"profile-usertitle\">\n          <div class=\"profile-usertitle-name\">\n            {{user?.first}} {{user?.last}}\n          </div>\n          <div class=\"profile-usertitle-job\">\n            {{user?.role}}\n          </div>\n        </div>\n\n        <div class=\"profile-usermenu\">\n          <ul class=\"nav\">\n            <li class=\"active\">\n              <a href=\"#\">\n              <i class=\"glyphicon glyphicon-home\"></i>\n              Classes </a>\n            </li>\n            <li *ngIf=\"teacher\">\n              <a (click)=\"openModal(create_class)\">\n                <i class=\"glyphicon glyphicon-plus\"></i>\n                 Create a Class\n              </a>\n            </li>\n            <li *ngIf=\"!teacher\">\n              <a (click)=\"openModal(enrollTemp)\">\n              <i class=\"glyphicon glyphicon-user\"></i>\n              Enroll </a>\n            </li>\n            <li>\n              <a href=\"#\" target=\"_blank\">\n              <i class=\"glyphicon glyphicon-ok\"></i>\n              Tasks </a>\n            </li>\n            <li>\n              <a>\n              <i class=\"glyphicon glyphicon-flag\"></i>\n              Help </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n  </div>\n   </mat-card>\n\n  <div style=\"height: 100%; position: fixed; margin-left: 22%; width: 75%\">\n    <div style=\"height: 40%;\">\n    <mat-card style=\"padding-top: 16px; margin-top: 3%; width: 100%;\" id=\"tab\" class=\"col-md-9\">\n    <h3>Your Classes\n    <!-- <button *ngIf=\"teacher\" type=\"button\" class=\"btn btn-default btn-sm\" style=\"float: right\" (click)=\"openModal(create_class)\">\n          <span class=\"glyphicon glyphicon-plus\"></span> Create new class\n    </button> -->\n  </h3>\n    <div class=\"table-responsive\">\n    <table class=\"table table-striped table table-bordered\" *ngIf=\"classes\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th>Class</th>\n        <th>Module Code</th>\n        <th>Teacher</th>\n      </tr>\n    </thead>\n    <tbody *ngIf=\"classes.length > 0 && !renderer\">\n      <tr *ngFor=\"let class of classes\">\n        <td>{{class.title}}</td>\n        <td><a [routerLink]=\"['/classroom/',class.module_code]\" (click)=\"storeCode(class.module_code, class.teacher.email)\">{{class.module_code}}</a></td>\n        <ng-template #popTemplate>\n        Email: {{class.teacher.email}}</ng-template>\n        <td id=\"teacher\"><a [popover]=\"popTemplate\" popoverTitle=\"Teacher Info\" triggers=\"mouseenter:mouseleave\">{{class.teacher.first}} {{class.teacher.last}}</a></td>\n      </tr>\n      </tbody>\n  </table>\n  <h3 style=\"text-align: center;\" *ngIf=\"classes.length == 0\">You have no classses yet</h3>\n</div>\n  </mat-card>\n</div>\n\n<!-- <div style=\"height: 50%;\">\n   <mat-card>\n    <h3>Activities</h3>\n     <mat-tab-group style=\"text-transform: capitalize;\" (selectedTabChange)=\"tabChange($event)\">\n  <mat-tab label=\"Active\">\n  <blockquote class=\"blockquote mb-0\">\n  <p>Test 1</p>\n   </blockquote>\n  </mat-tab>\n  <mat-tab label=\"Expired\">\n  <blockquote class=\"blockquote mb-0\">\n  <p>Test 2</p>\n   </blockquote>\n  </mat-tab>\n  <mat-tab label=\"Notifications\">\n  <blockquote class=\"blockquote mb-0\">\n  <p>Test 3</p>\n   </blockquote>\n  </mat-tab>\n </mat-tab-group>\n   </mat-card>\n</div> -->\n\n\n<ng-template #create_class>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">New Class</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form (submit)=\"createClass()\">\n  <div class=\"form-group\">\n  <label>Title</label>\n  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newTitle\" name=\"newTitle\">\n  </div>\n  <div class=\"form-group\">\n    <label>Module Code</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newModule_code\" name=\"newModule_code\">\n  </div>\n  <input type=\"submit\" (click)=\"modalRef.hide()\"  class=\"btn btn-primary\" value=\"Create Class\">\n</form>\n  </div>\n</ng-template>\n\n<ng-template #enrollTemp>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Enroll</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form (submit)=\"enroll()\">\n  <div class=\"form-group\">\n    <label>Module Code</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"enrollCode\" name=\"enrollCode\">\n  </div>\n  <input type=\"submit\" (click)=\"modalRef.hide()\"  class=\"btn btn-primary\" value=\"Enroll\">\n</form>\n  </div>\n</ng-template>\n\n<style>\n/* Profile container */\n\n/* Profile sidebar */\n.profile-sidebar {\n  background: #fff;\n}\n\n.profile-userpic img {\n  float: none;\n  margin: 0 auto;\n  width: 50%;\n  height: 50%;\n  -webkit-border-radius: 50% !important;\n  -moz-border-radius: 50% !important;\n  border-radius: 50% !important;\n}\n\n.profile-usertitle {\n  text-align: center;\n  margin-top: 20px;\n}\n\n.profile-usertitle-name {\n  color: black;\n  font-size: 20px;\n  font-weight: 600;\n  margin-bottom: 7px;\n}\n\n.profile-usertitle-job {\n  text-transform: capitalize;\n  color: black;\n  font-size: 20px;\n  font-weight: 600;\n  margin-bottom: 15px;\n}\n\n.profile-userbuttons {\n  text-align: center;\n  margin-top: 10px;\n}\n\n.profile-userbuttons .btn {\n  text-transform: capitalize;\n  font-size: 20px;\n  font-weight: 600;\n  padding: 6px 15px;\n  margin-right: 5px;\n}\n\n.profile-userbuttons .btn:last-child {\n  margin-right: 0px;\n}\n    \n.profile-usermenu {\n  margin-top: 30px;\n}\n\n.profile-usermenu ul li {\n  border-bottom: 1px solid #f0f4f7;\n}\n\n.profile-usermenu ul li:last-child {\n  border-bottom: none;\n}\n\n.profile-usermenu ul li a {\n  color: black;\n  font-size: 20px;\n  font-weight: 400;\n}\n\n.profile-usermenu ul li a i {\n  margin-right: 8px;\n  font-size: 20px;\n}\n\n.profile-usermenu ul li a:hover {\n  background-color: #fafcfd;\n  color: black;\n}\n\n.profile-usermenu ul li.active {\n  border-bottom: none;\n}\n\n.profile-usermenu ul li.active a {\n  color: black;\n  background-color: #f6f9fb;\n  border-left: 2px solid black;\n  margin-left: -2px;\n}\n\n/* Profile Content */\n.profile-content {\n  padding: 5px;\n  background: #fff;\n  min-height: 460px;\n}\n.profile-usertitle-name{\ntext-transform: capitalize;\n}\nth, td{\n  color: black;\n  font-size: 20px;\n}\na{\n  color: blue;\n  cursor: pointer;\n}\n#tab{\n  padding-top: 50px;\n}\n#teacher{\n  text-transform: capitalize;\n}\n\n#sideNav{\n    width: 20%;\n    height: 90vh;\n    position: fixed;\n}\n#activityDiv{\n    height: 45vh;\n    position: fixed;\n    width: 135vh;\n    margin-top: 2%;\n  }\n#tableDiv{\n    width: 135vh;\n    height: 30%;\n}\nmat-card{\n  border-style: solid !important;\n  border-width: 2px;\n}\n\n</style>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: module_code, DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "module_code", function() { return module_code; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_class_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/class.service */ "./src/app/services/class.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var module_code = module_code;
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_ngZone, modalService, classService, authService, router) {
        this._ngZone = _ngZone;
        this.modalService = modalService;
        this.classService = classService;
        this.authService = authService;
        this.router = router;
        this.renderer = false;
        this.classIds = [];
        this.classes = [];
        this.show = false;
        this.teacher = false;
        this.config = {
            animated: true,
            keyboard: true
        };
        this.students = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (data) {
            console.log(data);
        });
        this.email = this.authService.loadEmail();
        this.authService.getUser(this.email).subscribe(function (data) {
            console.log(data);
            _this.user = data;
            _this.classes = data.classes;
            console.log(_this.classes);
            _this.first = data.first;
            _this.last = data.last;
            if (_this.authService.isTeacher()) {
                _this.teacher = true;
            }
        }, function (err) {
            console.log(err);
            return false;
        });
        console.log(this.classes);
        this.classService.getStudents().subscribe(function (data) {
            _this.students = data;
        });
    };
    DashboardComponent.prototype.storeCode = function (module_code, email) {
        this.classService.storeClassData(module_code, email);
    };
    DashboardComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template, this.config);
    };
    DashboardComponent.prototype.createClass = function () {
        var _this = this;
        this.class = {
            title: this.newTitle,
            module_code: this.newModule_code,
            teacher: {
                email: this.email,
                first: this.user.first,
                last: this.user.last
            }
        };
        this.classService.createClass(this.class).subscribe(function (data) {
            if (data.status == true) {
                console.log(data);
                _this.classes.push(_this.class);
            }
            else {
                console.log(data);
            }
        });
    };
    DashboardComponent.prototype.enroll = function () {
        var _this = this;
        var user_ = {
            first: this.first,
            last: this.last,
            email: this.email,
            password: this.password
        };
        //console.log(this.enrollModuleCode);
        this.classService.enrollClass(this.enrollCode, user_).subscribe(function (data) {
            if (data.status == true) {
                console.log(data);
                _this.classService.getClassByModule(_this.enrollCode).subscribe(function (data) {
                    if (data.status == true) {
                        _this._ngZone.run(function () { _this.classes.push(data); });
                    }
                    else {
                        console.log(data);
                    }
                });
            }
            else {
                console.log(data);
            }
        }, function (err) {
            console.log(err);
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"], _services_class_service__WEBPACK_IMPORTED_MODULE_2__["ClassService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/group/group.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/group/group.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ3JvdXAvZ3JvdXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/group/group.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/group/group.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"mainDiv\">\n<mat-card class=\"main\" id=\"main\" >\n\t <mat-tab-group style=\"text-transform: capitalize; height: 100%;\" (selectedTabChange)=\"tabChange($event)\">\n \t<mat-tab *ngFor=\"let task of activity?.tasks\" label={{task.task_title}}>\n \t<div *ngIf=\"task.type == 'image'\">\n\t <div style=\"width: 35%; height: 35%; position: fixed; margin-top: 5%;\">\n\t \t<h3><p [innerHTML] = \"task.task_desc\"></p></h3>\n\t </div>\n\t <div style=\"width: 50%;  text-align: center; float: right;\">\n\t <img style=\"width: 200px; height: 200px;\" src=\"http://localhost:3000/image/{{task.originalname}}\" class=\"img-thumbnail\">\n\t <div style=\"text-align: center;\">\n        <a style=\"color: black\" href=\"http://localhost:4200/annotate/{{task.activity_name}}/{{task.task_title}}\" class=\"btn\">Go to annotation tool\n        \t<i class=\"glyphicon glyphicon-wrench\"></i></a>\n      </div>\n\t</div>\n\t</div>\n\t <div class=\"card\" *ngIf=\"task.task_type == 'text'\">\n  <div class=\"card-body\">\n    <blockquote class=\"blockquote mb-0\">\n      <p><i [innerHTML]=\"task.task_desc\"></i></p>\n    </blockquote>\n  </div>\n<!-- <div *ngIf=\"!answer\" style=\"margin-top: 15%;\" >\n     <app-ngx-editor [config]=\"editorConfig\" height=\"100px\" minHeight=\"100px\" [placeholder]=\"placeholder\" [spellcheck]=\"true\" [(ngModel)]=\"htmlContent\" name=\"htmlContent\"></app-ngx-editor>\n     <div>\n   <button *ngIf=\"htmlContent\" type=\"button\" class=\"btn btn-primary\" style=\"float: right;\" (click)=\"onAnswerSubmit(task.task_title,htmlContent)\">Submit</button>\n   <button *ngIf=\"!htmlContent\" type=\"button\" class=\"btn btn-primary\" style=\"float: right;\" (click)=\"empty()\">Submit</button>\n   <button type=\"button\" class=\"btn btn-warning\" style=\"float: right;\" (click)=\"clear()\">Clear</button>\n  </div>\n   </div> -->\n   <div *ngIf=\"answer\">\n    <blockquote class=\"blockquote mb-0\">\n      <p [innerHTML]=\"htmlContent\"></p>\n    </blockquote>\n    <div style=\"text-align: center;\">\n     <p>You have already submitted this task</p>\n     <a type=\"button\" href=\"http://localhost:4200/classroom/{{module}}\" *ngIf=\"checkAllAns()\" class=\"btn btn primary\">Back to Classroom</a>\n   </div> \n </div>\n</div>\n\t</mat-tab>\n </mat-tab-group>\n\n</mat-card>\n\n<mat-card class=\"sidenav\">\n\t<div style=\"border-bottom-style: ridge;\">\n\t<h4 style=\"padding-left: 16px;\">Group Members</h4>\n\t</div>\n\t<mat-list style=\"padding-top: 0px;\">\n\t\t<mat-list-item *ngFor=\"let student of students\" style=\"border-bottom-style: ridge; text-transform: capitalize;\" >\n\t\t\t<div>\n\t\t\t{{student.first}} {{student.last}}\n\t\t</div>\n\t\t</mat-list-item>\n</mat-list>\n</mat-card>\n\n<mat-card id=\"commentDiv\">\n\t<div style=\"border-bottom-style: ridge; margin-top: 15px;\">\n\t\t<h3 style=\"padding-left: 16px;\"> Comments&nbsp;&nbsp;<i class=\"fa fa-comments\"></i>&nbsp;{{comments?.length}}\n\t\t<a style=\"color: black; float: right; padding-right: 5px;\"><i matTooltip=\"Add a Comment\" (click)=\"addComment()\" class=\"glyphicon glyphicon-plus\"></i></a>\n\t</h3>\n\t</div>\n\t<div>\n\t\t<p style=\"text-align: center; margin-top: 20px;\" *ngIf=\"comments.length == 0\"><i>No comments yet! Be the first to contribute...</i></p>\n\t\t<mat-list style=\"min-height: 200px;\" *ngIf=\"comments.length > 0\">\n\t\t\t<mat-list-item *ngFor=\"let comment of comments; let i = index\" style=\"height: 100px; height: auto; border-bottom-style: ridge;\">\n\t\t\t\t<div style=\"width: 100%;\">\n\t\t\t\t<h5 style=\"float: right;\"><i>{{ comment.time | date:'EEEE, MMMM d, h:mm:ss a' }} </i></h5>\n\t\t\t\t<h4 style=\"text-transform: capitalize;\">{{comment.first}} {{comment.last}}</h4>\n\t\t\t\t<div>\n\t\t\t\t\t<a><i matTooltip=\"Delete Comment\" style=\"float: right; color: black; font-weight: bold;\" class=\"glyphicon glyphicon-trash\" (click)=\"delete(i)\"></i></a>\n\t\t\t\t<p [innerHTML]=\"comment.comment\">\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t\t</div>\n\t\t\t</mat-list-item>\n\t\t</mat-list>\n\t</div>\n\t<div style=\"height: 200px;\" *ngIf=\"add\">\n\t <app-ngx-editor [config]=\"editorConfig\" height=\"200px\" minHeight=\"200px\" [placeholder]=\"placeholder\" [spellcheck]=\"true\" [(ngModel)]=\"htmlContent\" name=\"htmlContent\"></app-ngx-editor>\n\t <div>\n\t <button type=\"button\" class=\"btn btn-primary\" style=\"float: right;\" (click)=\"submitComment(htmlContent)\">Submit</button>\n\t <button type=\"button\" class=\"btn btn-warning\" style=\"float: right;\" (click)=\"clear()\">Clear</button>\n\t <button type=\"button\" class=\"btn btn-danger\" style=\"float: right;\" (click)=\"cancel()\">Cancel</button>\n\t</div>\n</div>\n</mat-card>\n</div>\n<!-- <mat-card style=\"width: 80%; margin-right: auto; margin-left: auto;\"></mat-card> -->\n\n\n\n<style>\n body{\n    background-color: rgb(245,245,245);\n  }\n/* #mainDiv{\n\nwidth: 75%;\nposition: fixed;\nleft: 50%;\nmargin-left: -37.5%;\n}*/\n\n\n.sidenav {\n  height: auto;\n  z-index: 999;\n  right: 0;\n  background-color: white;\n  overflow-x: hidden;\n  padding-left: 0px;\n  padding-right: 0px;\n  border-style: inset;\n  width: 25%;\n  float: right;\n  margin-top: 20px;\n  height: 85vh;\n  margin-right: 20px;\n}\n.sidenav a {\n  padding: 6px 8px 6px 16px;\n  text-decoration: none;\n  font-size: 25px;\n  color: white;\n  display: block;\n}\n\n.sidenav a:hover {\n  color: grey;\n} \n\n.main {\n   /* Increased text to enable scrolling */\n  left: 0;\n  border-style: outset;\n  height: 100%;\n}\n#main{\n    width: 65%;\n    position: absolute;\n    margin-top: 20px;\n    height: 57%;\n    margin-left: 20px;\n}\n\n#mainDiv{\n\tbackground-color: rgb(245,245,245);\n\n}\n#commentDiv{\n\tposition: absolute;\n    margin-top: 63vh;\n    width: 65%;\n    margin-left: 20px;\n    height: auto;\n    min-height: 22%;\n    padding-right: 0px;\n    padding-left: 0px;\n    padding-top: 0px;\n}\na:hover {\n cursor:pointer;\n}\n#delete: hover{\n\n}\nmat-card{\n\tborder-style: solid !important;\n\tborder-width: 2px;\n}\n\n</style>"

/***/ }),

/***/ "./src/app/components/group/group.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/group/group.component.ts ***!
  \*****************************************************/
/*! exports provided: GroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupComponent", function() { return GroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_class_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/class.service */ "./src/app/services/class.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_activity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/activity.service */ "./src/app/services/activity.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GroupComponent = /** @class */ (function () {
    function GroupComponent(classService, authService, activityService, route, router) {
        this.classService = classService;
        this.authService = authService;
        this.activityService = activityService;
        this.route = route;
        this.router = router;
        this.add = false;
        this.students = [];
        this.comments = [];
        this.editorConfig = {
            "editable": true,
            "spellcheck": true,
            "translate": "yes",
            "enableToolbar": true,
            "showToolbar": true,
            "placeholder": "Enter text here...",
            "imageEndPoint": "",
            "toolbar": [
                ["bold", "italic", "underline", "strikeThrough", "superscript", "subscript"],
                ["fontName", "fontSize", "color"],
                ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent", "outdent"]
            ]
        };
    }
    GroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activityName = this.route.snapshot.paramMap.get('activityname');
        console.log(this.activityName);
        this.activityService.getSubmissions(this.activityName).subscribe(function (data) {
            console.log(data);
            if (data != null) {
                _this.comments = data;
            }
        });
        this.email = this.authService.loadEmail();
        this.authService.getUser(this.email).subscribe(function (data) {
            _this.user = data;
            console.log(_this.user);
        });
        this.activityService.getActivityByTitle(this.activityName).subscribe(function (data) {
            console.log(data);
            _this.activity = data;
            _this.students = data.group;
            console.log(_this.activity);
            console.log(_this.students);
        });
    };
    GroupComponent.prototype.tabChange = function (event) {
        console.log(event);
        //console.log(new Date().toJSON("yyyy/MM/dd HH"));
    };
    GroupComponent.prototype.addComment = function () {
        this.add = true;
    };
    GroupComponent.prototype.submitComment = function (comment) {
        this.commentStr = { first: this.user.first, last: this.user.last, comment: comment, time: Date.now() };
        this.comments.push(this.commentStr);
        this.htmlContent = "";
        this.add = false;
        console.log(this.comments[0]);
        this.activityService.updateSubmission(this.activityName, this.commentStr).subscribe(function (data) {
            console.log(data);
        });
        //this.today = Date.now();
        //console.log(this.today);
    };
    GroupComponent.prototype.cancel = function () {
        this.add = false;
    };
    GroupComponent.prototype.clear = function () {
        this.htmlContent = "";
    };
    GroupComponent.prototype.delete = function (key) {
        this.comments.splice(key, 1);
    };
    GroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-group',
            template: __webpack_require__(/*! ./group.component.html */ "./src/app/components/group/group.component.html"),
            styles: [__webpack_require__(/*! ./group.component.css */ "./src/app/components/group/group.component.css")]
        }),
        __metadata("design:paramtypes", [_services_class_service__WEBPACK_IMPORTED_MODULE_1__["ClassService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_activity_service__WEBPACK_IMPORTED_MODULE_3__["ActivityService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], GroupComponent);
    return GroupComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n\t<h1>Annotator Application</h1>\n\t<p class=\"lead\">This application will demonstrate the core functionality of my Annotator project</p>\n\n\t<div>\n\t\t<a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a> <a class=\"btn btn-default\" [routerLink]=\"['/login']\">Login</a>\n\t</div>\n</div>\n<div class=\"row\">\n\t<div class=\"col-md-4\">\n\t\t<h3>Express Backend</h3>\n\t</div>\n\t<div class=\"col-md-4\">\n\t\t<h3>Angular-CLI</h3>\n\t</div>\n\t<div class=\"col-md-4\">\n\t\t<h3>JWT Tokens</h3>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-card id=\"loginCard\">\n  <div style=\"text-align: center;\">\n    <h1 class=\"display-4\">Welcome to Classroom</h1>\n    <p class=\"lead\">Log in to resume your Classroom experience or register an account above!</p>\n  </div>\n<h2 class=\"page-header\">Log in</h2>\n<form (submit)=\"onLoginSubmit()\">\n\t<div class=\"form-group\">\n\t\t<label>Email</label>\n\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Password</label>\n\t\t<input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n\t</div>\n\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Log in\">\n</form>\n</mat-card>\n -->\n\n<ngx-flip id=\"loginCard\"  [flip]=\"flipDiv\">\n   <div front style=\"background-color: white; height: 55vh; border-style: ridge; border-radius: 20px;\">\n   \t<div style=\"text-align: center; padding-top: 5%;\">\n    <h1 class=\"display-4\">Welcome to Classroom</h1>\n    <p style=\"margin-left: 10%; margin-right: 10%;\" class=\"lead\">Log in to resume your Classroom experience or register an account above!</p>\n  </div>\n  <div style=\"text-align: center;\">\n  \t<button style=\"margin-bottom: 2%;\" (click)=\"onClick()\" class=\"btn btn-primary btn-lg\">Log In</button>\n  \t<button class=\"btn btn-primary btn-lg\" (click)=\"openModal(register)\">Register</button>\n  </div>\n   </div>\n\n   <div back style=\"background-color: white; height: 55vh; border-style: ridge; border-radius: 20px;\">\n   \t<div style=\"text-align: center; padding-top: 5%;\">\n   \t<h1 class=\"display-4\">Log In</h1>\n   </div>\n<form style=\"margin-left: 10%; margin-right: 10%;\">\n\t<div class=\"form-group\">\n\t\t<label>Email</label>\n\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Password</label>\n\t\t<input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n\t</div>\n\t<button type=\"button\" (click)=\"onLoginSubmit()\" style=\"margin-bottom: 2%;\" class=\"btn btn-primary\">Log In</button>\n\t<button class=\"btn btn-primary\" (click)=\"onClick()\">Back</button>\n</form>\n   \n\t</div>\n </ngx-flip>\n\n <ng-template #register style=\"background-color: whitesmoke;\">\n  <div class=\"modal-header\">\n    <h3 class=\"modal-title pull-left\">Register</h3>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n  \t<form (submit)=\"onRegisterSubmit()\">\n\t<mat-radio-group style=\"margin-left: 2%;\" (change)=\"onSelectionChange($event)\">\n  <mat-radio-button value=\"student\" >Student</mat-radio-button>\n  <mat-radio-button style=\"margin-left: 2%;\" value=\"teacher\">Teacher</mat-radio-button>\n</mat-radio-group>\n\t<div class=\"form-group\">\n\t\t<label>First Name</label>\n\t\t<div>\n\t\t<i *ngIf=\"isNull(first)\" class=\"glyphicon glyphicon-minus form-control-feedback\"></i>\n\t\t<i *ngIf=\"!isNull(first)\" style=\"color: green;\" class=\"glyphicon glyphicon-ok-circle form-control-feedback\"></i>\n\t\t<input type=\"text\" [(ngModel)]=\"first\" name=\"first\" class=\"form-control normal\">\n\t\t</div>\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Last Name</label>\n\t\t<div>\n\t\t<i *ngIf=\"isNull(last)\" class=\"glyphicon glyphicon-minus form-control-feedback\"></i>\n\t\t<i *ngIf=\"!isNull(last)\" style=\"color: green;\" class=\"glyphicon glyphicon-ok-circle form-control-feedback\"></i>\n\t\t<input type=\"text\" [(ngModel)]=\"last\" name=\"last\" class=\"form-control normal\">\n\t\t</div>\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Email</label>\n\t\t<div>\n\t\t<i *ngIf=\"!validateService.validateEmail(email)\" class=\"glyphicon glyphicon-minus form-control-feedback\"></i>\n\t\t<i *ngIf=\"validateService.validateEmail(email)\" style=\"color: green;\" class=\"glyphicon glyphicon-ok-circle form-control-feedback\"></i>\n\t\t<input type=\"text\" [(ngModel)]=\"regEmail\" name=\"regEmail\" class=\"form-control normal\">\n\t\t</div>\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Password</label>\n\t\t<div>\n\t\t<i *ngIf=\"password?.length <= 3\" class=\"glyphicon glyphicon-minus form-control-feedback\"></i>\n\t\t<i *ngIf=\"password?.length > 3\" style=\"color: green;\" class=\"glyphicon glyphicon-ok-circle form-control-feedback\"></i>\n\t\t<input type=\"text\" [(ngModel)]=\"regPassword\" name=\"regPassword\" class=\"form-control normal\" >\n\t\t</div>\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>University</label>\n\t\t<div>\n\t\t<i *ngIf=\"isNull(university)\" class=\"glyphicon glyphicon-minus form-control-feedback\"></i>\n\t\t<i *ngIf=\"!isNull(university)\" style=\"color: green;\" class=\"glyphicon glyphicon-ok-circle form-control-feedback\"></i>\n\t\t<input type=\"text\" [(ngModel)]=\"regUniversity\" name=\"regUniversity\" class=\"form-control normal\">\n\t\t</div>\n\t</div>\n\n<button type='submit' class=\"btn btn-primary\">Submit</button>\n</form>\n  </div>\n</ng-template>\n<style>\n#loginCard{\n\t/*width: 55%;\n\tposition: absolute;\n\tleft: 50%;\n\tmargin-left: -27.5%;\n\tmargin-top: 5%;*/\n\twidth: 50%;\n\tmargin-top: 5%;\n\tmargin-left: 25%;\n}\n.btn-primary {\n\tdisplay: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n.form-control{\n\twidth: 85%;\n}\ni{\n\tposition: relative;\n\tfloat: right;\n}\n\n.invalid{\n\tborder-color: red;\n}\n.valid{\n\tborder-color: green!important;\n}\n.normal{\n\tborder-color: black;\n}\n</style>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, flashMessage, modalService, validateService, _formBuilder) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.modalService = modalService;
        this.validateService = validateService;
        this._formBuilder = _formBuilder;
        this.flipDiv = false;
        this.config = {
            animated: true,
            keyboard: true,
            class: "my-modal"
        };
        this.switch = {
            first_: false,
            last_: false,
            email_: false,
            password_: false,
            university_: false
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        //this.authService.logOut();
        this.regForm = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            lastCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            emailCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            passwordCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            universityCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
    };
    LoginComponent.prototype.onClick = function () {
        this.flipDiv = !this.flipDiv;
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        if (this.email == null || this.password == null) {
            this.email = null;
            this.password = null;
            this.flashMessage.show("Something went wrong, empty email or password", { cssClass: 'alert-danger', timeout: 5000 });
            this.router.navigate(['login']);
        }
        else if (this.email != null && this.password != null) {
            var user = {
                email: this.email,
                password: this.password
            };
            this.authService.authenticateUser(user).subscribe(function (data) {
                if (data.success) {
                    _this.authService.storeUserData(data.token, data.user);
                    _this.flashMessage.show("Logged in!", { cssClass: 'alert-success', timeout: 5000 });
                    _this.router.navigateByUrl('/dashboard');
                }
                else {
                    _this.email = null;
                    _this.password = null;
                    _this.flashMessage.show("Something went wrong, are you sure those credentials are correct?", { cssClass: 'alert-danger', timeout: 5000 });
                    _this.router.navigate(['login']);
                }
            });
        }
        /** this.authService.authenticateUser(user).subscribe(
             suc =>{
                 this.authService.storeUserData(suc.user.token, suc.user);
                 this.flashMessage.show("Logged in!", {cssClass: 'alert-success', timeout: 5000});
                 this.router.navigate(['dashboard']);
             },
             err => {
                 this.flashMessage.show("Something went wrong, try again", {cssClass: 'alert-danger', timeout: 5000});
                 this.router.navigate(['login']);
             }
         );**/
        /**this.authService.authenticateUser(user).subscribe((data) => {
            
            this.authService.storeUserData(data.token, data.user);
            this.flashMessage.show("Logged in!", {cssClass: 'alert-success', timeout: 5000});
            this.router.navigate(['dashboard']);
        },(error: any) => {
            if(typeof error['Errors'] !="undefined"){
                console.log(error['Errors']);
            }
    });**/
        // this.authService.authenticateUser(user).subscribe(
        //     suc =>{
        //         this.authService.storeUserData(suc.token, suc.user);
        //         this.flashMessage.show("Logged in!", {cssClass: 'alert-success', timeout: 5000});
        //         this.router.navigate(['dashboard']);
        //     },
        //     err => {
        //       this.email = null;
        //        this.password = null;
        //         this.flashMessage.show("Something went wrong, are these the right credentials?", {cssClass: 'alert-danger', timeout: 5000});
        //         this.router.navigate(['login']);
        //     }
        // );
    };
    LoginComponent.prototype.openModal = function (template) {
        this.regEmail = null;
        this.regPassword = null;
        this.regRole = null;
        this.regUniversity = null;
        this.first = null;
        this.last = null;
        this.modalRef = this.modalService.show(template, this.config);
    };
    LoginComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        console.log(this.value);
        this.modalRef.hide();
        var user = {
            first: this.first,
            last: this.last,
            email: this.regEmail,
            password: this.regPassword,
            university: this.regUniversity
        };
        //Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show("Fill in all fields", { cssClass: 'alert-danger', timeout: 3000 });
            //return false;
        }
        //Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show("Valid email required", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //Register User
        if (this.value == 'student') {
            this.authService.registerUser(user).subscribe(function (suc) {
                _this.flashMessage.show("Registration Successful", { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }, function (err) {
                _this.flashMessage.show("Something went wrong", { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
                console.log(err);
            });
        }
        else if (this.value == 'teacher') {
            this.authService.registerTeacher(user).subscribe(function (suc) {
                _this.flashMessage.show("Registration Successful", { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }, function (err) {
                _this.flashMessage.show("Something went wrong", { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
                console.log(err);
            });
        }
    };
    LoginComponent.prototype.onSelectionChange = function (event) {
        this.value = event.value;
    };
    LoginComponent.prototype.empty = function (event) {
        console.log(event);
    };
    LoginComponent.prototype.isNull = function (field) {
        if (field == null || field == "") {
            return true;
        }
        else {
            return false;
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_1__["ValidateService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav *ngIf=\"nav.visible\" style=\"background-color: #1C56F6;\" class=\"navbar navbar-inverse navbar-fixed-top\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav navbar-left\">\n            <li style=\"padding-top: 15px; font-family: EraserDust\"><a style=\"font-size: 30px;\" class=\"navbar-brand\">Classroom</a></li>\n          </ul>\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li><a *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/']\" matTooltip=\"Home\"><i class=\"glyphicon glyphicon-home\"></i></a></li>\n            <li><a *ngIf=\"authService.loggedIn()\"[routerLinkActive]=\"['active']\" [routerLink]=\"['/dashboard']\" matTooltip=\"Dashboard\"><i class=\"glyphicon glyphicon-th-list\"></i></a></li>\n            <li>\n              <a *ngIf=\"authService.loggedIn()\" matTooltip=\"Classes\"  mat-button [matMenuTriggerFor]=\"classMenu\">\n              <i class=\"fa fa-mortar-board\"></i></a>\n              <mat-menu #classMenu=\"matMenu\">\n                <a style=\"color: black;\" mat-menu-item *ngFor=\"let class of classes\" [routerLink]=\"['/classroom/',class.module_code]\" (click)=\"storeCode(class.module_code, class.teacher)\">{{class?.title}}</a>\n              </mat-menu>\n            </li>\n            <!-- <li *ngIf=\"authService.loggedIn()\" style=\" cursor: pointer;\">\n              <a mat-button [matMenuTriggerFor]=\"userMenu\" matTooltip=\"User Information\"><i class=\"glyphicon glyphicon-user\"></i></a>\n              <mat-menu #userMenu=\"matMenu\" style=\"max-width: 300px; overflow-x: hidden; overflow-y: hidden; padding-top: 0px;\">\n                <mat-list style=\"height: 200px; width: 200px;\">\n                  <mat-list-item>Name: {{user?.first}}</mat-list-item>\n                  <mat-list-item>Email: {{user?.email}}</mat-list-item>\n                  <mat-list-item>Role: {{user?.role}}</mat-list-item>\n                  <mat-list-item>University: {{user?.university}}</mat-list-item>\n              </mat-list>\n              </mat-menu>\n            </li> -->\n             <li><a *ngIf=\"authService.loggedIn()\"(click)=\"onLogOutClick()\" href=\"#\" matTooltip=\"Log Out\"><i class=\"glyphicon glyphicon-log-out\"></i></a></li>\n          </ul>\n        </div><!--/.nav-collapse -->\n      </div>\n    </nav>\n <style>   \nnav{\n  position: static;\n  min-height: 70px;\n  margin: 0;\n}  \nli{\n  padding-top: 10px;\n  list-style: none;\n  margin-right: 5px;\n}\na{\n  font-size: 20px;\n  color: #ffffff;\n}\na:hover{\n  font-weight: bolder;\n  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);\n}\nnav ul{\n  list-style: none;\n}\n.navbar-header a, .navbar-left a, .navbar-right a, li {\n  color: white;\n}\ni{\n  font-size: 30px;\n}\nmat-menu{\n  width: 450px !important;\n}\n.mat-list-item{\n  height: 45px !important;\n}\n\n</style>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_class_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/class.service */ "./src/app/services/class.service.ts");
/* harmony import */ var _services_navbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/navbar.service */ "./src/app/services/navbar.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, classService, router, flashMessage, nav) {
        this.authService = authService;
        this.classService = classService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.nav = nav;
        this.classes = [];
        this.classIDs = [];
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                _this.ngOnInit();
            }
        });
        // this.classService.clearClass();
        if (this.authService.loggedIn()) {
            //this.email = this.authService.loadEmail();
            this.userSub = this.authService.getProfile().subscribe(function (data) {
                _this.classes = data.user.classes;
                console.log(data);
                _this.user = data.user;
            });
        }
        else {
            this.userSub.unsubscribe();
        }
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        this.userSub.unsubscribe();
    };
    NavbarComponent.prototype.onLogOutClick = function () {
        this.authService.logOut();
        this.flashMessage.show("Logged Out", { cssClass: 'alert-success', timeout: 3000 });
        this.ngOnInit();
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent.prototype.storeCode = function (module_code, email) {
        this.classService.storeClassData(module_code, email);
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_class_service__WEBPACK_IMPORTED_MODULE_2__["ClassService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"],
            _services_navbar_service__WEBPACK_IMPORTED_MODULE_3__["NavbarService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n\t<h2 class=\"page-header\">Hello {{user.first}}</h2>\n\t<ul class=\"list-group\">\n\t\t<li class=\"list-group-item\">Name: {{user.first}} {{user.last}} </li>\n\t\t<li class=\"list-group-item\">Email: {{user.email}}</li>\n\t</ul>\n</div>\n<button (click)=\"runClick()\"*ngIf=\"show\">New Annotation</button>\n<p id=pTest>\n\tProfile Works!\n</p>\n<div id=\"here\"></div>\n\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.show = false;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (data) {
            _this.user = data.user;
            if (_this.authService.isTeacher()) {
                _this.show = true;
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent.prototype.runClick = function () {
        var div = document.getElementById("here");
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n\t<mat-radio-group style=\"margin-left: 2%;\" (change)=\"onSelectionChange($event)\">\n  <mat-radio-button value=\"student\" >Student</mat-radio-button>\n  <mat-radio-button style=\"margin-left: 2%;\" value=\"teacher\">Teacher</mat-radio-button>\n</mat-radio-group>\n\t<div class=\"form-group\">\n\t\t<label>First Name</label>\n\t\t<input type=\"text\" [(ngModel)]=\"first\" name=\"first\" class=\"form-control\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Last Name</label>\n\t\t<input type=\"text\" [(ngModel)]=\"last\" name=\"last\" class=\"form-control\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Email</label>\n\t\t<input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Password</label>\n\t\t<input type=\"text\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>University</label>\n\t\t<input type=\"text\" [(ngModel)]=\"university\" name=\"university\" class=\"form-control\">\n\t</div>\n\n<input type='submit' class=\"btn btn-primary\" value=\"Submit\">\n</form>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, flashMessage, authService, router, zone) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.zone = zone;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        console.log(this.value);
        var user = {
            first: this.first,
            last: this.last,
            email: this.email,
            password: this.password,
            university: this.university
        };
        //Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show("Fill in all fields", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show("Valid email required", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //Register User
        if (this.value == 'student') {
            this.authService.registerUser(user).subscribe(function (suc) {
                _this.flashMessage.show("Registration Successful", { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }, function (err) {
                _this.flashMessage.show("Something went wrong", { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
                console.log(err);
            });
        }
        else if (this.value == 'teacher') {
            this.authService.registerTeacher(user).subscribe(function (suc) {
                _this.flashMessage.show("Registration Successful", { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }, function (err) {
                _this.flashMessage.show("Something went wrong", { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
                console.log(err);
            });
        }
    };
    RegisterComponent.prototype.onSelectionChange = function (event) {
        this.value = event.value;
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesModule"].forRoot()
            ]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_1__["ValidateService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/task/task.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/task/task.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFzay90YXNrLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/task/task.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/task/task.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n\n.sidenav {\n  height: 100%;\n  width: 30%;\n  position: absolute;\n  z-index: 999;\n  top: 5;\n  right: 0;\n  background-color: white;\n  overflow-x: hidden;\n  padding-left: 30px;\n  border-style: inset;\n  margin: 20px;\n}\n.sidenav a {\n  padding: 6px 8px 6px 16px;\n  text-decoration: none;\n  font-size: 25px;\n  color: white;\n  display: block;\n}\n\n.sidenav a:hover {\n  color: grey;\n}\n\n.main {\n  margin: 20px;\n   /* Increased text to enable scrolling */\n  left: 0;\n  border-style: outset;\n  height: 100%;\n}\n\n@media screen and (max-height: 450px) {\n  .sidenav {padding-top: 15px;}\n  .sidenav a {font-size: 18px;}\n}\nbody{\n  font-size: 18px;\n  background-color: rgb(245,245,245)!important;\n}\n.mat-card {\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n  transition: 0.3s;\n  width: 40%;\n  border-radius: 5px;\n  border-style: solid;\n}\n\n.mat-card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n}\n\nimg {\n  border-radius: 5px 5px 0 0;\n  margin-left: 15%;\n}\n\n</style>\n\n<body>\n<mat-card style=\"width: 30%; height: 85%;\" id=\"side\" class=\"sidenav\">\n  <mat-list role=\"list\">\n  <mat-list-item role=\"listitem\">Item 1</mat-list-item>\n  <mat-list-item role=\"listitem\">Item 2</mat-list-item>\n  <mat-list-item role=\"listitem\">Item 3</mat-list-item>\n  <mat-list-item *ngFor=\"let email of testEmails\">\n    <div>{{email}}</div>\n    \n  </mat-list-item>\n  <div [formGroup]=\"form\">\n  <input [(ngModel)]=\"email\" formControlName=\"email\">\n  </div>\n  <button (click)=\"addEmail(email)\">Add email</button>\n  <button (click)=\"clear()\">Delete</button>\n</mat-list>\n</mat-card>\n\n\n\n  <mat-card style=\"position: absolute; width: 60%; height: 85%;\" class=\"main\">\n\n    <!-- <ul class=\"list-group\" class=\"panel-body\" *ngIf=\"file\">\n    <li class=\"list-group-item\"><strong>Title </strong> {{file.task_title}} </li>\n    <li class=\"list-group-item\"><strong>Description: </strong>{{file.task_desc}}</li>\n    <li class=\"list-group-item\"><strong>Graded: </strong> One mark per label</li>\n  </ul> -->\n\n    <mat-list>\n      <mat-list-item>\n       <mat-list-item role=\"listitem\"><strong>Activity Title: </strong> {{file.task_title}} </mat-list-item>\n         <mat-list-item role=\"listitem\"><strong>Graded: </strong> One mark per label</mat-list-item>\n       </mat-list-item>\n       </mat-list>\n  <mat-tab-group>\n  <mat-tab label=\"First\">\n    <br>\n  <div>\n    <mat-card style=\"width: 400px; margin: auto;\">\n      <mat-card-title>{{file.task_title}}</mat-card-title>\n      <div>\n      <img src=\"http://localhost:3000/image/27ffb566a878a08eb74da21c1767a4fb\" width=\"250px\" height=\"250px\" />\n    </div>\n      <mat-card-content style=\"font-size: 22px;\">\n        <p>{{file.task_desc}}</p>\n        <a href=\"http://localhost:4200/task/{{file.task_title}}\"type=\"submit\" class=\"btn btn-primary btn-block mt-4\">Go To Task</a>\n      </mat-card-content>\n    </mat-card>\n    <!-- <ng-template matTabContent>\n            <img class=\"annotatable\" height=\"400px\" width=\"400px\" [src]=\"path\">\n          </ng-template ></div> -->\n    </div>\n   </mat-tab>\n  <mat-tab label=\"Second\">\n         <!--  <img *ngIf=\"teacher\" height=\"400px\" width=\"400px\" [src]=\"path\"> -->\n         {{file.task_desc}}\n  \n  </mat-tab>\n  <mat-tab label=\"Third\"> Content 3 </mat-tab>\n</mat-tab-group>\n  \n</mat-card>\n</body>\n<!-- <div fxLayout=\"row\" style=\"justify-content: flex-end;\">\n    <div fxFlex>First item in row</div>\n    <div fxFlex>Second item in row</div>\n</div>\n<div fxLayout=\"column\">\n    <div fxFlex>First item in column</div>\n    <div fxFlex>Second item in column</div>\n</div> -->\n <!-- <div style=\"position: absolute;\">\n  <div class=\"panel panel-default\">\n    <ul class=\"list-group\" class=\"panel-body\" *ngIf=\"file\">\n    <li class=\"list-group-item\"><strong>Title </strong> {{file.task_title}} </li>\n    <li class=\"list-group-item\"><strong>Description: </strong>{{file.task_desc}}</li>\n    <li class=\"list-group-item\"><strong>Graded: </strong> One mark per label</li>\n  </ul>\n\n    <div *ngIf=\"class\">\n  <h2 class=\"display-4\" class=\"page-header\">Welcome to {{class.title}}</h2>\n  <ul class=\"list-group\">\n    <li *ngIf=\"user\" class=\"list-group-item\"><strong>Teacher:</strong> {{user}} </li>\n    <li class=\"list-group-item\"><strong>Email:</strong> {{class.teacher.email}}</li>\n    <li class=\"list-group-item\"><strong>Module:</strong> {{class.module_code}}</li>\n  </ul>\n</div>\n  \n      <div *ngIf=\"teacher\">\n      <div class=\"panel-body\">\n          <img height=\"400px\" width=\"600px\" [src]=\"path\">\n      </div>\n    </div>\n      <div *ngIf=\"!teacher\">\n      <div class=\"panel-body\">\n          <img class=\"annotatable\" height=\"400px\" width=\"600px\" [src]=\"path\">\n      </div>\n      </div>\n</div>\n<mat-list role=\"list\">\n  <mat-list-item role=\"listitem\">Item 1</mat-list-item>\n  <mat-list-item role=\"listitem\">Item 2</mat-list-item>\n  <mat-list-item role=\"listitem\">Item 3</mat-list-item>\n  <div *ngFor=\"let email of testEmails\">\n    <div>{{email}}</div>\n    \n  </div>\n  <div [formGroup]=\"form\">\n  <input [(ngModel)]=\"email\" formControlName=\"email\">\n  </div>\n  <button (click)=\"addEmail(email)\">Add email</button>\n  <button (click)=\"clear()\">Delete</button>\n</mat-list>\n</div> -->\n\n<!-- </mat-grid-list>\n  <mat-list-item>Item 1</mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>Item 2</mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>Item 3</mat-list-item>\n</mat-list> -->\n<!-- <style>\nimg {\n        display:block;\n        margin-left: auto;\n        margin-right: auto;\n        border: 1px solid;\n        border-radius: 10%;\n        max-width: 100%;\n    }\n.panel-heading{\n  font-size: 20px;\n}\n.panel-default{\n  float: left;\n  padding-right: 100px;\n}\n.mat-list{\n  position: absolute;\n  border: 3px solid black;\n  height: 595px;\n  width: 400px;\n  float: right;\n  overflow: scroll;\n  display: inline-block;\n}\n.container {\n  display: flex; /* or inline-flex */\n}\n.row{\n  align-items: flex-end;\n}\n\n\n</style> -->"

/***/ }),

/***/ "./src/app/components/task/task.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/task/task.component.ts ***!
  \***************************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_class_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/class.service */ "./src/app/services/class.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TaskComponent = /** @class */ (function () {
    function TaskComponent(sanitize, route, router, taskService, authService, classService) {
        this.sanitize = sanitize;
        this.route = route;
        this.router = router;
        this.taskService = taskService;
        this.authService = authService;
        this.classService = classService;
        this.teacher = false;
        this.testEmails = ["email1"];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({ email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]() });
    }
    TaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        var desc = this.route.snapshot.paramMap.get('title');
        if (this.authService.isTeacher()) {
            this.teacher = true;
        }
        this.taskService.getTaskByTitle(desc).subscribe(function (data) {
            _this.file = data[0];
            _this.originalName = _this.file.originalname;
            _this.url = "http://localhost:3000/image/" + _this.originalName;
            console.log(_this.url);
            _this.path = _this.sanitize.bypassSecurityTrustUrl(_this.url);
        }, function (err) {
            console.log(err);
        });
    };
    TaskComponent.prototype.addEmail = function (email) {
        this.email = email;
        this.testEmails.push(this.email);
        this.email = "";
        console.log(this.testEmails);
        this.form.reset();
    };
    TaskComponent.prototype.clear = function () {
        this.testEmails.length--;
        console.log(this.testEmails);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('test'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TaskComponent.prototype, "img", void 0);
    TaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task',
            template: __webpack_require__(/*! ./task.component.html */ "./src/app/components/task/task.component.html"),
            styles: [__webpack_require__(/*! ./task.component.css */ "./src/app/components/task/task.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_class_service__WEBPACK_IMPORTED_MODULE_1__["ClassService"]])
    ], TaskComponent);
    return TaskComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guards.ts":
/*!***************************************!*\
  !*** ./src/app/guards/auth.guards.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/activity.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/activity.service.ts ***!
  \**********************************************/
/*! exports provided: ActivityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityService", function() { return ActivityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActivityService = /** @class */ (function () {
    function ActivityService(http) {
        this.http = http;
    }
    ActivityService.prototype.getActivities = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/activities/all', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ActivityService.prototype.getActivityByTitle = function (title) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/activity/' + title, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ActivityService.prototype.getActivitiesByModule = function (module) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/activity/module/' + module, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ActivityService.prototype.updateSubmission = function (activity, submission) {
        var body = {
            activityName: activity,
            submission: submission
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json'
        });
        return this.http.put('http://localhost:3000/activity/submissions/update', body, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ActivityService.prototype.updateUserSubmission = function (email, sub) {
        var body = {
            email: email,
            submission: sub
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json'
        });
        return this.http.put('http://localhost:3000/user/update/submission', body, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ActivityService.prototype.updateFeedback = function (email, context, feedback, index) {
        var body = {
            email: email,
            feedback: feedback,
            context: context,
            index: index
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json'
        });
        return this.http.put('http://localhost:3000/annotation/feedback', body, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ActivityService.prototype.getSubmissions = function (activityName) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/activity/group/' + activityName + '/submissions', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ActivityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ActivityService);
    return ActivityService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/createStud', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.registerTeacher = function (teacher) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/createTeacher', teacher, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getUser = function (email) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/user/' + email, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/authenticate', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    /**getProfile() {
      this.loadToken();
      let headers = new Headers({
        'Authorization': this.authToken,
        'Content-Type':'application/json'
      });
      return this.http.get('http://localhost:3000/auth/profile', {headers: headers}).pipe(map(res => res.json()));
    }﻿**/
    AuthService.prototype.getProfile = function () {
        this.loadToken();
        //console.log(this.auth_token);
        /**let headers = new Headers();
        headers.append('Authorization','bearer '+this.auth_token);
        headers.append('Content-Type', 'application/json');**/
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': this.auth_token
        });
        return this.http.get('http://localhost:3000/profile', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
        //this.isTeacher();
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('_idtoken', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.auth_token = token;
        this.user = user;
    };
    AuthService.prototype.loadEmail = function () {
        return JSON.parse(localStorage.getItem("user")).email;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('_idtoken');
        this.auth_token = token;
    };
    AuthService.prototype.isTeacher = function () {
        var user = JSON.parse(localStorage.getItem("user"));
        if (user.role == "Teacher") {
            return true;
        }
        else if (user.role == "Student") {
            //console.log("Yah");
            return false;
        }
    };
    AuthService.prototype.loggedIn = function () {
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__["tokenNotExpired"])('_idtoken');
    };
    AuthService.prototype.logOut = function () {
        this.auth_token = null;
        this.user = null;
        this.thisClass = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/class.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/class.service.ts ***!
  \*******************************************/
/*! exports provided: ClassService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassService", function() { return ClassService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClassService = /** @class */ (function () {
    function ClassService(http) {
        this.http = http;
    }
    ClassService.prototype.getClasses = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/classes', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ClassService.prototype.getClassByModule = function (module) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/class/module=' + module, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ClassService.prototype.getClassById = function (id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/class/id=' + id, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ClassService.prototype.getTeacher = function (email) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/user/' + email, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ClassService.prototype.createClass = function (thisClass) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/class/create', thisClass, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ClassService.prototype.enrollClass = function (module_code, user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/class/enroll/' + module_code, user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ClassService.prototype.storeClassData = function (thisModuleCode, email) {
        localStorage.setItem("Module", JSON.stringify({ module_code: thisModuleCode, email: email }));
        //localStorage.setItem("Email", JSON.stringify(email));
    };
    ClassService.prototype.loadModuleCode = function () {
        var storedModule = JSON.parse(localStorage.getItem("Module"));
        this.module_code = storedModule.module_code;
    };
    ClassService.prototype.loadEmail = function () {
        var storedEmail = JSON.parse(localStorage.getItem("Module"));
        this.email = storedEmail.email;
    };
    ClassService.prototype.clearClass = function () {
        localStorage.removeItem("Module");
    };
    ClassService.prototype.getfiles = function (module_code) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/files/module=' + module_code, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ClassService.prototype.getImages = function (file) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/files/file=' + file, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ClassService.prototype.getStudents = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/students', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ClassService.prototype.getStudentsByModule = function (module) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/classes/students/' + module, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ClassService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ClassService);
    return ClassService;
}());



/***/ }),

/***/ "./src/app/services/navbar.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/navbar.service.ts ***!
  \********************************************/
/*! exports provided: NavbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarService", function() { return NavbarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarService = /** @class */ (function () {
    function NavbarService() {
        this.visible = true;
    }
    NavbarService.prototype.hide = function () { this.visible = false; };
    NavbarService.prototype.show = function () { this.visible = true; };
    NavbarService.prototype.toggle = function () { this.visible = !this.visible; };
    NavbarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], NavbarService);
    return NavbarService;
}());



/***/ }),

/***/ "./src/app/services/task.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/task.service.ts ***!
  \******************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskService = /** @class */ (function () {
    function TaskService(http) {
        this.http = http;
    }
    TaskService.prototype.getTaskByFilename = function (filename) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/files/file=' + filename, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    TaskService.prototype.getTaskByTitle = function (title) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/files/title=' + title, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    TaskService.prototype.getTaskMultiple = function (task, activity) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/files/activityname=' + activity + '/tasktitle=' + task, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    TaskService.prototype.storeFileData = function (filename) {
        localStorage.setItem("Task", JSON.stringify({ file: filename }));
        //localStorage.setItem("Email", JSON.stringify(email));
    };
    TaskService.prototype.loadFile = function () {
        var file = JSON.parse(localStorage.getItem("Task"));
        return file.filename;
    };
    TaskService.prototype.clearFile = function () {
        localStorage.removeItem("Task");
    };
    TaskService.prototype.submitActivity = function (activity) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/activity/create', activity, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    TaskService.prototype.submitAnnotation = function (annotation) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/annotation/create', annotation, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    TaskService.prototype.getActivityByTitle = function (title) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/activity/' + title, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    TaskService.prototype.getFilesByActName = function (actName) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/files/activityname=' + actName, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    TaskService.prototype.getFilesByModule = function (module) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/files/module=' + module, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    TaskService.prototype.getAnnotations = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/annotations', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    TaskService.prototype.getAnnotationsByEmail = function (email, activityName, taskName) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/annotations/user=' + email + '/activity=' + activityName + '/task=' + taskName, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    TaskService.prototype.deleteAnnotation = function (text) {
        var body = {
            text: text
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.delete('http://localhost:3000/annotations/delete', { headers: headers, body: body })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    TaskService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.first == undefined || user.last == undefined || user.email == undefined || user.password == undefined || user.university == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateField = function (field) {
        if (field == null || field == "") {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.validateClass = function (theClass) {
        if (theClass.title == undefined || theClass.module_code == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Sean Rooney\Documents\davesCode\Classroom\angular-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map