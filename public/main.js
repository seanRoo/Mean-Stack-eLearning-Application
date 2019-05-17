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
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_annotation_view_annotation_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/annotation-view/annotation-view.component */ "./src/app/components/annotation-view/annotation-view.component.ts");
/* harmony import */ var _components_annotate_annotate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/annotate/annotate.component */ "./src/app/components/annotate/annotate.component.ts");
/* harmony import */ var _components_create_class_create_class_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/create-class/create-class.component */ "./src/app/components/create-class/create-class.component.ts");
/* harmony import */ var _components_classroom_classroom_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/classroom/classroom.component */ "./src/app/components/classroom/classroom.component.ts");
/* harmony import */ var _components_activity_activity_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/activity/activity.component */ "./src/app/components/activity/activity.component.ts");
/* harmony import */ var _components_group_group_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/group/group.component */ "./src/app/components/group/group.component.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guards/auth.guards */ "./src/app/guards/auth.guards.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'view/annotations/:email/:activityname/:taskname', component: _components_annotation_view_annotation_view_component__WEBPACK_IMPORTED_MODULE_4__["AnnotationViewComponent"], canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'annotate/:activitytype/:activityname/:title', component: _components_annotate_annotate_component__WEBPACK_IMPORTED_MODULE_5__["AnnotateComponent"], canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'createclass', component: _components_create_class_create_class_component__WEBPACK_IMPORTED_MODULE_6__["CreateClassComponent"], canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'classroom/:classname', component: _components_classroom_classroom_component__WEBPACK_IMPORTED_MODULE_7__["ClassroomComponent"], canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'activity/:activityname', component: _components_activity_activity_component__WEBPACK_IMPORTED_MODULE_8__["ActivityComponent"], canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'group/:activityname', component: _components_group_group_component__WEBPACK_IMPORTED_MODULE_9__["GroupComponent"], canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] }
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

module.exports = "<app-navbar>\t\n</app-navbar>\n<div>\n  \t<router-outlet>\n  \t\t<flash-messages></flash-messages>\n  \t</router-outlet>\n</div>\n"

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
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_annotate_annotate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/annotate/annotate.component */ "./src/app/components/annotate/annotate.component.ts");
/* harmony import */ var _components_create_class_create_class_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/create-class/create-class.component */ "./src/app/components/create-class/create-class.component.ts");
/* harmony import */ var _components_classroom_classroom_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/classroom/classroom.component */ "./src/app/components/classroom/classroom.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_class_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/class.service */ "./src/app/services/class.service.ts");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _services_navbar_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/navbar.service */ "./src/app/services/navbar.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./guards/auth.guards */ "./src/app/guards/auth.guards.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-file-drop */ "./node_modules/ngx-file-drop/fesm5/ngx-file-drop.js");
/* harmony import */ var ngx_flip__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-flip */ "./node_modules/ngx-flip/fesm5/ngx-flip.js");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ngx-bootstrap/popover */ "./node_modules/ngx-bootstrap/popover/fesm5/ngx-bootstrap-popover.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _components_activity_activity_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/activity/activity.component */ "./src/app/components/activity/activity.component.ts");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm5/ngx-editor.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _components_group_group_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/group/group.component */ "./src/app/components/group/group.component.ts");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var angular2_lightbox__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! angular2-lightbox */ "./node_modules/angular2-lightbox/index.js");
/* harmony import */ var angular2_lightbox__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(angular2_lightbox__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var _components_annotation_view_annotation_view_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/annotation-view/annotation-view.component */ "./src/app/components/annotation-view/annotation-view.component.ts");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















































window['$'] = window['jQuery'] = jquery__WEBPACK_IMPORTED_MODULE_36__;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                _components_annotate_annotate_component__WEBPACK_IMPORTED_MODULE_7__["AnnotateComponent"],
                _components_annotate_annotate_component__WEBPACK_IMPORTED_MODULE_7__["AnnotateTaskDialogComponent"],
                _components_annotate_annotate_component__WEBPACK_IMPORTED_MODULE_7__["AnnotateConfirmDialogComponent"],
                _components_annotate_annotate_component__WEBPACK_IMPORTED_MODULE_7__["AnnotateSubmittedDialogComponent"],
                _components_group_group_component__WEBPACK_IMPORTED_MODULE_42__["GroupImagePreviewComponent"],
                _components_create_class_create_class_component__WEBPACK_IMPORTED_MODULE_8__["CreateClassComponent"],
                _components_classroom_classroom_component__WEBPACK_IMPORTED_MODULE_9__["ClassroomComponent"],
                _components_activity_activity_component__WEBPACK_IMPORTED_MODULE_38__["ActivityComponent"],
                _components_activity_activity_component__WEBPACK_IMPORTED_MODULE_38__["ImagePreviewComponent"],
                _components_group_group_component__WEBPACK_IMPORTED_MODULE_42__["GroupComponent"],
                _components_annotation_view_annotation_view_component__WEBPACK_IMPORTED_MODULE_45__["AnnotationViewComponent"],
                _components_annotation_view_annotation_view_component__WEBPACK_IMPORTED_MODULE_45__["ViewTaskDialogComponent"],
                _components_group_group_component__WEBPACK_IMPORTED_MODULE_42__["ImageHelpDialogComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["HelpDialogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_12__["FlashMessagesModule"].forRoot(),
                _angular_http__WEBPACK_IMPORTED_MODULE_17__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"],
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_22__["MatTreeModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_27__["NgbModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_37__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatListModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_29__["ModalModule"].forRoot(),
                ngx_file_drop__WEBPACK_IMPORTED_MODULE_30__["FileDropModule"],
                ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_32__["PopoverModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__["MatRadioModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__["MatCheckboxModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__["MatStepperModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_33__["FlexLayoutModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__["MatTabsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_35__["MatCardModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_39__["MatMenuModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_40__["NgxEditorModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_41__["MatTableModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_43__["MatTooltipModule"],
                angular2_lightbox__WEBPACK_IMPORTED_MODULE_44__["LightboxModule"],
                ngx_flip__WEBPACK_IMPORTED_MODULE_31__["FlipModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_46__["MatBadgeModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_47__["ScrollDispatchModule"]
            ],
            entryComponents: [
                _components_annotate_annotate_component__WEBPACK_IMPORTED_MODULE_7__["AnnotateTaskDialogComponent"],
                _components_annotate_annotate_component__WEBPACK_IMPORTED_MODULE_7__["AnnotateConfirmDialogComponent"],
                _components_annotate_annotate_component__WEBPACK_IMPORTED_MODULE_7__["AnnotateSubmittedDialogComponent"],
                _components_activity_activity_component__WEBPACK_IMPORTED_MODULE_38__["ImagePreviewComponent"],
                _components_group_group_component__WEBPACK_IMPORTED_MODULE_42__["GroupImagePreviewComponent"],
                _components_annotation_view_annotation_view_component__WEBPACK_IMPORTED_MODULE_45__["ViewTaskDialogComponent"],
                _components_group_group_component__WEBPACK_IMPORTED_MODULE_42__["ImageHelpDialogComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["HelpDialogComponent"]
            ],
            providers: [
                _services_validate_service__WEBPACK_IMPORTED_MODULE_11__["ValidateService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"],
                _services_class_service__WEBPACK_IMPORTED_MODULE_14__["ClassService"],
                _guards_auth_guards__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_28__["BsModalService"],
                _services_task_service__WEBPACK_IMPORTED_MODULE_15__["TaskService"],
                _services_navbar_service__WEBPACK_IMPORTED_MODULE_16__["NavbarService"]
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

module.exports = "<style>\n\n#flipCard{\n    height: 310px;\n    width: 500px;\n    margin-right: auto;\n    margin-left: auto;\n    margin-bottom: 20px;\n    overflow-x: hidden;\n    overflow-y: hidden;\n    margin-top: 10px;\n}\n#flipCardButtons .btn{\n  display: block;\n  width: 160px;\n  margin-left: auto;\n  margin-right: auto;\n}\n#flipCardButtons{\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n}\n.wrapper {\n   position: relative;\n}\n\n.wrapper .glyphicon {\n   position: absolute;\n   top: 20px;\n   left: 20px;\n}\ni:hover{\n  cursor: pointer;\n}\n\n.img-thumbnail , img :hover{\n  cursor: pointer;\n}\n.sidenav {\n  height: auto;\n  position: absolute;\n  z-index: 999;\n  top: 5;\n  right: 0;\n  background-color: white;\n  overflow-x: hidden;\n  padding-left: 30px;\n  border-style: inset;\n  margin: 20px;\n}\n.sidenav a {\n  padding: 6px 8px 6px 16px;\n  text-decoration: none;\n  font-size: 25px;\n  color: white;\n  display: block;\n}\n\n.sidenav a:hover {\n  color: grey;\n}\n\n.main {\n  margin: 20px;\n   /* Increased text to enable scrolling */\n  left: 0;\n  border-style: outset;\n  height: 100%;\n}\n#main{\n      position: absolute;\n    width: 60%;\n    height: auto;\n}\n\n\n@media screen and (max-height: 450px) {\n  .sidenav {padding-top: 15px;}\n  .sidenav a {font-size: 18px;}\n}\nbody{\n  font-size: 18px;\n  background-color: rgb(245,245,245)!important;\n}\n.mat-card {\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n  transition: 0.3s;\n  width: 40%;\n  border-radius: 5px;\n  border-style: ridge;\n}\n\n.mat-card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n}\n\nimg {\n  border-radius: 5px 5px 0 0;\n  margin-left: 15%;\n}\n#sideListItem {\n    display: block;\n    height: auto;\n    min-height: 50px;\n    -webkit-tap-highlight-color: transparent;\n    width: 100%;\n    padding: 0;\n    border-bottom-width: 2px;\n    border-bottom-style: solid;\n    border-bottom-color: gainsboro;\n}\n</style>\n\n<body>\n\n<mat-card style=\"width: 35%; padding-left: 5px;\" id=\"side\" class=\"sidenav\">\n  <div>\n    <h4>Tasks\n      <div *ngIf=\"!teacher\" style=\"float: right;\">Completed: {{submissionArray.length}}/{{activity?.tasks.length}}</div>\n    </h4>\n</div>\n<mat-divider></mat-divider>\n  <mat-list role=\"list\" style=\"text-transform: capitalize; height: 100%; padding-top: 0;\">\n  <mat-list-item *ngFor=\"let task of activity?.tasks; let i = index;\" id=\"sideListItem\" style=\"padding-top: 6%;\" role=\"listitem\">\n    <div style=\"width: 100%;\">\n    {{task.task_name}}\n  </div>\n  <div *ngIf=\"!teacher\">\n    <i *ngIf=\"!checkSubmitted(task.task_name)\" class=\"glyphicon glyphicon-unchecked\"></i>\n    <i *ngIf=\"checkSubmitted(task.task_name)\" class=\"glyphicon glyphicon-check\" style=\"color: limegreen;\"></i>\n  </div>\n  </mat-list-item>\n</mat-list>\n</mat-card>\n\n\n  <mat-card  class=\"main\" id=\"main\">\n  <mat-tab-group (selectedTabChange)=\"tabChange($event)\">\n    <mat-tab *ngFor=\"let task of activity?.tasks; let i = index;\" label=\"{{task.task_name}}\">\n     <!--  <div style=\"float: right;\">Annotations Submitted: {{taskCompletedCount}}</div> -->\n      <br>\n\n      \n        <div class=\"card-body\" *ngIf=\"task.task_type == 'image'\">\n      <ngx-flip id=\"flipCard\" [flip]=\"flipDiv\">\n         <div class=\"wrapper\" front style=\"height: 310px; background-color: white; border-style: ridge; text-align: center;\">\n            <img style=\"width: 500px; height: 300px; margin-left: 0;\" src=\"/api/image/{{dynamicURL}}\" (click)=\"openPreviewDialog()\" class=\"img-thumbnail\">\n            <i matTooltip=\"Flip\" (click)=\"flipDivFunc()\" style=\"font-size: 25px; font-weight: bolder;\" class=\"glyphicon glyphicon-refresh\"></i>\n          </div>\n         <div class=\"wrapper\" style=\"height: 300px; background-color: whitesmoke; border-style: ridge; text-align: center;\" back>\n          <div id=\"taskInfoDiv\" style=\"text-align: left; font-size: 18px; margin-bottom: 10%;\">\n            <h3 style=\"margin-left: 5px;\">{{task.task_name}}</h3>\n            <mat-divider></mat-divider>\n          </div>\n          <div>\n            <blockquote style=\"margin-left: 10px; text-align: center; font-size: 28px;\"><i>{{task.task_desc}}</i></blockquote>\n          </div>\n        <div id=\"flipCardButtons\" >\n          <a class=\"btn btn-primary\" *ngIf=\"checkSubmitted(task.task_name) &&!teacher\" href=\"/view/annotations/{{email}}/{{activityname}}/{{task.task_name}}\">View Submission</a>\n        <a href=\"/annotate/{{activity.activityType}}/{{activityname}}/{{task.task_name}}\" class=\"btn btn-primary\" *ngIf=\"!checkSubmitted(task.task_name) && !teacher\">Annotate</a>\n        <div *ngIf=\"teacher\">\n        <button class=\"btn btn-primary\" [matMenuTriggerFor]=\"menu\">View Submissions</button>\n    <mat-menu #menu=\"matMenu\">\n      <div *ngIf=\"classSubmissionArray.length > 0\">\n      <a *ngFor=\"let submission of classSubmissionArray\" href=\"view/annotations/{{submission.email}}/{{activityname}}/{{task.task_name}}\" mat-menu-item>{{submission.name.first}} {{submission.name.last}}</a>\n    </div>\n    <p style=\"font-size: 20px; text-align: center;\" *ngIf=\"classSubmissionArray.length == 0\">No submissions have been made yet!</p>\n    </mat-menu>\n  </div>\n\n        <button class=\"btn btn-danger\" (click)=\"flipDivFunc()\">Back</button>\n        </div>\n      </div>\n       </ngx-flip>\n\n</div>\n\n  <div class=\"card\" *ngIf=\"task.task_type == 'text'\" style=\"border-style: none;\">\n  <div class=\"card-body\">\n    <blockquote class=\"blockquote mb-0\">\n      <p><i [innerHTML]=\"task.task_desc\"></i></p>\n    </blockquote>\n  </div>\n<div *ngIf=\"!checkSubmitted(task.task_name) && !teacher\" style=\"margin-top: 15%;\" >\n     <app-ngx-editor [config]=\"editorConfig\" height=\"100px\" minHeight=\"100px\" [placeholder]=\"placeholder\" [spellcheck]=\"true\" [(ngModel)]=\"htmlContent\" name=\"htmlContent\"></app-ngx-editor>\n     <div>\n   <button *ngIf=\"htmlContent\" type=\"button\" class=\"btn btn-primary\" style=\"float: right;\" (click)=\"onAnswerSubmit(task.task_name,htmlContent)\">Submit</button>\n   <button *ngIf=\"!htmlContent\" type=\"button\" class=\"btn btn-primary\" style=\"float: right;\" (click)=\"empty()\">Submit</button>\n   <button type=\"button\" class=\"btn btn-warning\" style=\"float: right;\" (click)=\"clear()\">Clear</button>\n  </div>\n   </div>\n   <div *ngIf=\"checkSubmitted(task.task_name) && !teacher\">\n    <blockquote class=\"blockquote mb-0\">\n      <p [innerHTML]=\"dynamicContent\"></p>\n    </blockquote>\n    <div style=\"text-align: center;\">\n     <p>You have already submitted this task</p>\n     <a type=\"button\" [routerLink]=\"['/classroom/',module]\" *ngIf=\"checkAllAns()\" class=\"btn btn primary\">Back to Classroom</a>\n   </div> \n </div>\n\n <div *ngIf=\"teacher\">\n    <blockquote class=\"blockquote mb-0\">\n      <p [innerHTML]=\"dynamicStudentSubmission\"></p>\n    </blockquote>\n </div>\n\n <div style=\"width: 100%; text-align: center;\">\n <button class=\"btn btn-primary\" [matMenuTriggerFor]=\"menu\" *ngIf=\"teacher\">View Submissions</button>\n    <mat-menu #menu=\"matMenu\">\n      <div *ngIf=\"classSubmissionArray.length > 0\">\n      <div *ngFor=\"let submission of classSubmissionArray\">\n      <button (click)=\"showStudentSubmission(submission.content)\" mat-menu-item *ngIf=\"submission.taskTitle == task.task_name\">{{submission.name.first}} {{submission.name.last}}</button>\n    </div>\n    </div>\n    <p style=\"font-size: 20px; text-align: center;\" *ngIf=\"classSubmissionArray.length == 0\">No submissions have been made yet!</p>\n    </mat-menu>\n  </div>\n</div>\n\n    </mat-tab>\n</mat-tab-group>\n  \n</mat-card>\n</body>"

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
        this.flipDiv = false;
        this.checked = false;
        this.teacher = false;
        this.tasks = [];
        this.userComments = [];
        this.answer = false;
        this.answerArray = [];
        this.images = [];
        this.testEmails = ["email1"];
        this.alreadySubmitted = false;
        this.submissionArray = [];
        this.classSubmissionArray = [];
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
        this.activityname = this.route.snapshot.paramMap.get('activityname');
        if (this.authService.isTeacher()) {
            this.teacher = true;
        }
        this.activityService.getActivityByTitle(this.activityname).subscribe(function (data) {
            _this.activity = data;
            _this.module = data.module_code;
            console.log(data);
            _this.tasks = _this.activity.tasks;
            _this.classSubmissionArray = data.submissions;
            console.log(_this.classSubmissionArray);
            console.log(_this.activity);
        }, function (err) {
            console.log(err);
        });
        this.taskService.getFilesByActName(this.activityname).subscribe(function (data) {
            _this.images = data;
            console.log(data);
        });
        this.authService.getProfile().subscribe(function (suc) {
            console.log("Success!");
            _this.user = suc.user;
            _this.email = suc.user.email;
            for (var i = 0; i < suc.user.submissions.length; i++) {
                if (suc.user.submissions[i].activityName == _this.activityname) {
                    _this.submissionArray[i] = suc.user.submissions[i];
                }
            }
            console.log(_this.submissionArray);
        }, function (err) {
            console.log("Something went wrong!");
        });
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
        this.dynamicContent = null;
        this.dynamicStudentSubmission = null;
        // if(this.images[event.index] !=null){
        //   this.dynamicURL = this.images[event.index].originalname;
        // }
        for (var j = 0; j < this.images.length; j++) {
            if (this.images[j].task_title == event.tab.textLabel) {
                this.dynamicURL = this.images[j].originalname;
            }
        }
        for (var i = 0; i < this.submissionArray.length; i++) {
            if (this.submissionArray[i] != null) {
                if (this.submissionArray[i].taskName == event.tab.textLabel) {
                    this.dynamicContent = this.submissionArray[i].content;
                }
            }
        }
        this.clear();
        console.log(event);
        this.index = event.index;
        console.log(this.index);
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
    ActivityComponent.prototype.flipDivFunc = function () {
        this.flipDiv = !this.flipDiv;
    };
    ActivityComponent.prototype.clear = function () {
        this.htmlContent = "";
    };
    ActivityComponent.prototype.getTextContent = function (index) {
        if (this.submissionArray[index] != null && this.submissionArray[index].task_type == 'text') {
            return this.submissionArray[index].content;
        }
    };
    ActivityComponent.prototype.onAnswerSubmit = function (title, thisString) {
        this.dynamicContent = thisString;
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
            content: thisString,
            email: this.email
        };
        this.userStatusStr = {
            activityName: this.activity.activityName,
            taskName: title,
            submitted: true,
            content: thisString,
            email: this.email
        };
        console.log(this.userStatusStr);
        this.submissionArray[this.index] = this.userStatusStr;
        console.log(this.submissionArray);
        this.activityService.updateSubmissions(this.activity.activityName, this.statusStr).subscribe(function (suc) {
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
    ActivityComponent.prototype.showStudentSubmission = function (content) {
        this.dynamicStudentSubmission = content;
    };
    ActivityComponent.prototype.empty = function () {
        alert("You have not typed anything to submit!");
    };
    ActivityComponent.prototype.checkSubmitted = function (taskName) {
        for (var i = 0; i < this.submissionArray.length; i++) {
            if (this.submissionArray[i] != null) {
                if (this.submissionArray[i].submitted == true &&
                    this.submissionArray[i].taskName == taskName &&
                    this.submissionArray[i].activityName == this.activityname) {
                    return true;
                }
            }
        }
        return false;
    };
    ActivityComponent.prototype.openPreviewDialog = function (index) {
        var dialogRef = this.dialog.open(ImagePreviewComponent, {
            data: {
                image: this.dynamicURL
            },
            panelClass: 'custom-dialog-container'
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
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialog"], Object, _services_activity_service__WEBPACK_IMPORTED_MODULE_4__["ActivityService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_class_service__WEBPACK_IMPORTED_MODULE_1__["ClassService"]])
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

module.exports = "<mat-divider></mat-divider>\r\n<div *ngIf=\"data\" style=\"text-align: center; height: auto;\" mat-dialog-content>\r\n  <img style=\"width: 700px; height: 450px;\" src=\"/api/image/{{data.image}}\">\r\n</div>\r\n<!-- <div mat-dialog-actions>\r\n  <button mat-button-stroked mat-dialog-close cdkFocusInitial>Ok</button>\r\n</div>\r\n -->\r\n\r\n<style>\r\n\tdiv{\r\n\t\tmax-height: 75vh;\r\n\t\tpadding: 0px 0px 0px 0px;\r\n\t}\r\n\t.mat-dialog-container{\r\n\t\tpadding: 0px;\r\n\t}\r\n</style>"

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

module.exports = "<h1 mat-dialog-title style=\"margin-bottom: 5px;\">You have submitted this task!</h1>\r\n<mat-divider></mat-divider>\r\n<div style=\"text-align: center; margin-top: 15px; height: 60%;\" mat-dialog-content>\r\n\r\n  <p class=\"lead\">You will now be redirected back to the activity</p>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button-stroked mat-dialog-close cdkFocusInitial>Ok</button>\r\n</div>"

/***/ }),

/***/ "./src/app/components/annotate/annotate-task-dialog.html":
/*!***************************************************************!*\
  !*** ./src/app/components/annotate/annotate-task-dialog.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<h1 mat-dialog-title style=\"margin-bottom: 5px;\">Your Task</h1>\r\n<mat-divider></mat-divider>\r\n<div style=\"text-align: center; margin-top: 15px; height: 60%;\" mat-dialog-content>\r\n\r\n  <div *ngIf=\"data\">\r\n  <p class=\"lead\">{{data.tasks}}</p>\r\n</div>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button-stroked mat-dialog-close cdkFocusInitial>Ok</button>\r\n</div>"

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

module.exports = "<html>\n   <body>\n <mat-drawer-container style=\"width: 100%; height: 100%;\" class=\"example-container\" autosize [hasBackdrop]=\"true\">\n  <mat-drawer style=\"width: 350px; overflow-y: hidden;\" #drawer class=\"example-sidenav\" mode=\"over\">\n    <h3 style=\"text-align: center;\">Feedback</h3>\n    <div style=\"padding-left: 10px; padding-right: 10px; border-style: ridge;\">\n      <p style=\"text-transform: capitalize;\">Student: {{studentString}}</p>\n  <p>Annotation: {{annoText}}</p>\n</div>\n<div *ngIf=\"!isFeedbackSubmitted\">\n  <app-ngx-editor [config]=\"editorConfig\" height=\"350px\" minHeight=\"100px\" [placeholder]=\"placeholder\" [spellcheck]=\"true\" [(ngModel)]=\"htmlContent\" name=\"htmlContent\"></app-ngx-editor>\n  <button *ngIf=\"htmlContent\" type=\"button\" class=\"btn btn-primary\" style=\"float: right;\" (click)=\"submitFeedback(htmlContent)\">Submit</button>\n   <button *ngIf=\"!htmlContent\" type=\"button\" class=\"btn btn-primary\" style=\"float: right;\" (click)=\"empty()\">Submit</button>\n   <button type=\"button\" class=\"btn btn-warning\" style=\"float: right;\" (click)=\"clear()\">Clear</button>\n </div>\n   <div *ngIf=\"isFeedbackSubmitted\" style=\"padding-right: 10px; padding-left: 10px;\">\n  <p style=\"text-transform: capitalize;\">{{user?.name.first}} {{user?.name.last}} says:</p>\n  <p>{{dynamicFeedbackStr}}</p>\n</div>\n  </mat-drawer> \n\n\n  <mat-drawer-content id=\"drawerContent\">\n   <div style=\"margin-top: 2%;\">\n  <div id=\"imageContainer\" style=\"text-align: center;\">\n    <div style=\"float: left;\">\n    <button matTooltip=\"Go Back\" (click)=\"backClicked()\" mat-stroked-button><i class=\"glyphicon glyphicon-arrow-left\"></i></button>\n    <button matTooltip=\"Lock Annotations\" *ngIf=\"!submitted\" mat-stroked-button (click)=\"lockWidget()\"><i class=\"glyphicon glyphicon-lock\"></i></button>\n    <!--  <button style=\"float: right;\" type=\"button\" mat-stroked-button (click)=\"toggleSideNav()\"><i class=\"glyphicon glyphicon-menu-hamburger\"></i></button> -->\n     <button matTooltip=\"Make Annotatable\" *ngIf=\"!submitted\" mat-stroked-button (click)=\"showWidget()\"><i class=\"fas fa-unlock\"></i></button>\n     <button matTooltip=\"Submit\" *ngIf=\"!submitted\" mat-stroked-button (click)=\"openConfirmDialog()\"><i class=\"glyphicon glyphicon-ok\"></i></button>\n     <button matTooltip=\"Task\" mat-stroked-button (click)=\"openTaskDialog()\"><i class=\"glyphicon glyphicon-question-sign\"></i></button>\n  </div>\n    <img style=\"width: 1000px; height: 600px; border-style: ridge; border-width: 2px;\" id=\"image\" src={{url}} attr.data-original=\"{{dataOriginal}}\" />\n  </div>\n</div>\n</mat-drawer-content>\n\n</mat-drawer-container>\n</body>\n  \n<style>\n#imageDiv{\n  width: 60%\n}\n\nbody{\n  background-color: rgb(245,245,245)!important;\n  height: 100vh;\n}\nhtml{\n  height: 100%;\n  overflow-y: hidden;\n}\n.example-container {\n  width: 100%;\n    height: 100%;\n    overflow-y: hidden;\n}\n\n.example-sidenav {\n     overflow-y: hidden;\n    padding-bottom: 20px;\n}\n#mainDiv{\n    height: 100%;\n    width: 100%;\n    padding-top: 20px;\n}\n.sidenav {\n  min-height: 90%;\n  width: 25%;\n  position: absolute;\n  z-index: 999;\n  top: 5;\n  left: 0;\n  background-color: white;\n  overflow-x: hidden;\n  padding-right: 0px;\n  border-style: inset;\n  margin: 20px;\n}\n\n@media screen and (max-height: 450px) {\n  .sidenav {padding-top: 15px;}\n  .sidenav a {font-size: 18px;}\n}\n.sidenav a {\n  padding: 6px 8px 6px 16px;\n  text-decoration: none;\n  font-size: 25px;\n  color: white;\n  display: block;\n}\n#drawerContent button{\n  width: 35px;\n  height: 35px;\n  margin-right: 5px;\n}\n#imageContainer{\n  position: fixed;\n    left: 50%;\n    width: 1000px;\n    margin-left: -500px;\n    height: 600px;\n}\ni{\n  font-size: 25px;\n}\np::first-letter {\n  text-transform: uppercase;\n}\n\n</style>"

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
    function AnnotateComponent(dialog, nav, _formBuilder, route, router, taskService, activityService, authService, _location, document, renderer) {
        this.dialog = dialog;
        this.nav = nav;
        this._formBuilder = _formBuilder;
        this.route = route;
        this.router = router;
        this.taskService = taskService;
        this.activityService = activityService;
        this.authService = authService;
        this._location = _location;
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
        this.activityType = this.route.snapshot.paramMap.get('activitytype');
        this.activityName = this.route.snapshot.paramMap.get('activityname');
        this.taskService.getTaskMultiple(this.title, this.activityName).subscribe(function (data) {
            console.log(data);
            _this.image = data[0].originalname;
            _this.url = '/api/image/' + _this.image;
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
            _this.authService.getProfile().subscribe(function (data) {
                console.log(data);
                _this.user = {
                    name: {
                        first: data.user.first,
                        last: data.user.last
                    },
                    email: data.user.email,
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
        var comment = { user: {
                first: this.user.name.first,
                last: this.user.name.last
            },
            index: this.clickedIndex,
            comment: text
        };
        this.activityService.updateFeedback(this.email, this.studentContext, comment, this.clickedIndex)
            .subscribe(function (data) {
            console.log(data);
        });
        this.annotations[this.clickedIndex].feedback = text;
        console.log(this.annotations[this.clickedIndex].feedback);
        this.clear();
        this.toggleSideNav();
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
        var _this = this;
        this.userStatus = {
            activityName: this.activityName,
            taskName: this.title,
            submitted: true,
            count: this.annotations.length,
            email: this.email
        };
        this.lockWidget();
        this.submitted = true;
        for (var i = 0; i < this.annotations.length; i++) {
            this.taskService.submitAnnotation(this.annotations[i]).subscribe(function (data) {
                console.log(data);
            });
        }
        this.activityService.updateUserSubmission(this.user.email, this.userStatus).subscribe(function (data) {
            console.log(data);
            if (_this.activityType == 'Group') {
                var groupUserStatus = {
                    taskName: _this.title,
                    first: _this.user.name.first,
                    last: _this.user.name.last,
                    email: _this.user.email
                };
                _this.activityService.updateSubmissions(_this.activityName, groupUserStatus).subscribe(function (data) {
                    console.log(data);
                });
            }
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
    AnnotateComponent.prototype.backClicked = function () {
        this._location.back();
        //this.nav.show();
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
        var _this = this;
        var dialogRef = this.dialog.open(AnnotateSubmittedDialogComponent, {});
        dialogRef.afterClosed().subscribe(function (result) {
            _this.nav.show();
            if (_this.activityType == 'Group') {
                _this.router.navigate(['group/', _this.activityName]);
            }
            else if (_this.activityType == 'Individual') {
                _this.router.navigate(['activity/', _this.activityName]);
            }
        });
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
        __param(9, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"],
            _services_navbar_service__WEBPACK_IMPORTED_MODULE_5__["NavbarService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _services_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"],
            _services_activity_service__WEBPACK_IMPORTED_MODULE_4__["ActivityService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
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

/***/ "./src/app/components/annotation-view/annotation-view.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/annotation-view/annotation-view.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYW5ub3RhdGlvbi12aWV3L2Fubm90YXRpb24tdmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/annotation-view/annotation-view.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/annotation-view/annotation-view.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n   <body>\n <mat-drawer-container style=\"width: 100%; height: 100%;\" autosize = true class=\"example-container\" autosize [hasBackdrop]=\"true\">\n  <mat-drawer style=\"width: 450px;\" #drawer class=\"example-sidenav\" mode=\"over\">\n    <h3 style=\"text-align: center;\">\n      <span matBadge=\"{{dynamicFeedBack?.length}}\" matBadgeOverlap=\"false\">Feedback</span>\n      <i *ngIf=\"!sameUser\" matTooltip = \"Add a comment\" style=\"float: right; padding-right: 5px;\" (click)=\"addComment()\" class=\"glyphicon glyphicon-plus\"></i></h3>\n    <div id=\"annoInfo\" style=\"padding-left: 10px; padding-right: 10px; border-style: ridge;background-color: whitesmoke;\">\n      <p style=\"text-transform: capitalize;\">Student: {{studentString}}</p>\n  <p>Annotation: {{annoText}}</p>\n</div>\n<div *ngIf=\"!sameUser\">\n  <mat-list id=\"commentDiv\" *ngIf=\"dynamicFeedBack.length>0\" style=\"padding-top: 0px;\">\n      <mat-list-item *ngFor=\"let comment of dynamicFeedBack; let i = index\" style=\"min-height: 100px; height: auto; border-bottom-style: ridge;\">\n        <div style=\"width: 100%;\">\n        <h4 style=\"text-transform: capitalize; font-weight: bold;\">{{comment.first}} {{comment.last}} says:</h4>\n        <div>\n        <p id=\"commentPTag\" [innerHTML]=\"comment.comment\">\n        </p>\n      </div>\n      </div>\n      </mat-list-item>\n    </mat-list>\n    <p style=\"text-align: center; padding-right: 10px; padding-left: 10px;\" *ngIf=\"feedBack.length == 0\"><i>Be the first to submit feedback on this annotation</i></p>\n    <div *ngIf=\"addingComment\">\n    <app-ngx-editor [config]=\"editorConfig\" height=\"100px\" minHeight=\"100px\" [placeholder]=\"placeholder\" [spellcheck]=\"true\" [(ngModel)]=\"htmlContent\" name=\"htmlContent\"></app-ngx-editor>\n  <button *ngIf=\"htmlContent\" type=\"button\" class=\"btn btn-primary\" style=\"float: right;\" (click)=\"submitFeedback(htmlContent)\">Submit</button>\n   <button *ngIf=\"!htmlContent\" type=\"button\" class=\"btn btn-primary\" style=\"float: right;\" (click)=\"empty()\">Submit</button>\n   <button type=\"button\" class=\"btn btn-warning\" style=\"float: right;\" (click)=\"clear()\">Clear</button>\n   <button type=\"button\" class=\"btn btn-danger\" style=\"float: right;\" (click)=\"close()\">Close</button>\n </div>\n</div>\n\n<div *ngIf=\"sameUser\">\n  <mat-list id=\"commentDiv\" *ngIf=\"dynamicFeedBack.length>0\" style=\"padding-top: 0px;\">\n      <mat-list-item *ngFor=\"let comment of dynamicFeedBack; let i = index\" style=\"min-height: 100px; height: auto; border-bottom-style: ridge;\">\n        <div style=\"width: 100%;\">\n        <h4 style=\"text-transform: capitalize; font-weight: bold;\">{{comment.first}} {{comment.last}} says:</h4>\n        <div>\n        <p id=\"commentPTag\" [innerHTML]=\"comment.comment\">\n        </p>\n      </div>\n      </div>\n      </mat-list-item>\n    </mat-list>\n    <p style=\"text-align: center; padding-right: 10px; padding-left: 10px;\" *ngIf=\"feedBack.length == 0\"><i>Be the first to submit feedback on this annotation</i></p>\n    </div>\n <div *ngIf=\"sameUser && dynamicFeedBack.length == 0\">\n  <p id=\"noFeedbackP\"><i>You have not received any feedback on this annotation yet</i></p>\n</div>\n  </mat-drawer> \n\n\n  <mat-drawer-content id=\"drawerContent\">\n   <div style=\"margin-top: 2%;\">\n  <div id=\"imageContainer\" style=\"text-align: center;\">\n    <div style=\"float: left;\">\n    <button matTooltip=\"Go Back\" (click)=\"backClicked()\" mat-stroked-button><i class=\"glyphicon glyphicon-arrow-left\"></i></button>\n     <button matTooltip=\"Task\" mat-stroked-button (click)=\"openTaskDialog()\"><i class=\"glyphicon glyphicon-question-sign\"></i></button>\n  </div>\n    <img style=\"width: 1000px; height: 600px; border-style: ridge; border-width: 2px;\" id=\"image\" src={{url}} attr.data-original=\"{{dataOriginal}}\" />\n  </div>\n</div>\n</mat-drawer-content>\n\n</mat-drawer-container>\n</body>\n  \n<style>\n#imageDiv{\n  width: 60%\n}\n\nbody{\n  background-color: rgb(245,245,245)!important;\n  height: 100vh;\n}\nhtml{\n  height: 100%;\n  overflow-y: hidden;\n}\n.example-container {\n  width: 100%;\n\n}\n\n.example-sidenav {\n     \n    padding-bottom: 20px;\n}\n#mainDiv{\n    height: 100%;\n    width: 100%;\n    padding-top: 20px;\n}\n.sidenav {\n  min-height: 90%;\n  width: 25%;\n  position: absolute;\n  z-index: 999;\n  top: 5;\n  left: 0;\n  background-color: white;\n  overflow-x: hidden;\n  padding-right: 0px;\n  border-style: inset;\n  margin: 20px;\n}\n\n@media screen and (max-height: 450px) {\n  .sidenav {padding-top: 15px;}\n  .sidenav a {font-size: 18px;}\n}\n.sidenav a {\n  padding: 6px 8px 6px 16px;\n  text-decoration: none;\n  font-size: 25px;\n  color: white;\n  display: block;\n}\n#drawerContent button{\n  width: 35px;\n  height: 35px;\n  margin-right: 5px;\n}\n#imageContainer{\n  position: fixed;\n    left: 50%;\n    width: 1000px;\n    margin-left: -500px;\n    height: 600px;\n}\n\np::first-letter {\n  text-transform: uppercase;\n}\n#noFeedbackP{\n    text-align: center;\n}\n p{\n  padding: 5px;\n  font-size: 20px;\n}\nbutton i{\n  font-size: 25px;\n}\n#commentPTag{\n  font-size: 20px;\n}\n.glyphicon:hover{\n  cursor: pointer;\n}\n</style>"

/***/ }),

/***/ "./src/app/components/annotation-view/annotation-view.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/annotation-view/annotation-view.component.ts ***!
  \*************************************************************************/
/*! exports provided: AnnotationViewComponent, ViewTaskDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnotationViewComponent", function() { return AnnotationViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTaskDialogComponent", function() { return ViewTaskDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_navbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/navbar.service */ "./src/app/services/navbar.service.ts");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_activity_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/activity.service */ "./src/app/services/activity.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
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









var AnnotationViewComponent = /** @class */ (function () {
    function AnnotationViewComponent(dialog, route, nav, _location, router, taskService, activityService, authService, sanitizer) {
        this.dialog = dialog;
        this.route = route;
        this.nav = nav;
        this._location = _location;
        this.router = router;
        this.taskService = taskService;
        this.activityService = activityService;
        this.authService = authService;
        this.sanitizer = sanitizer;
        this.addingComment = false;
        this.hidden = true;
        this.subtasks = [];
        this.annotations = [];
        this.submitted = false;
        this.sameUser = false;
        this.feedBack = [];
        this.dynamicFeedBack = [];
    }
    AnnotationViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nav.hide();
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
        this.dataOriginal = "http://test";
        this.email = this.route.snapshot.paramMap.get("email");
        this.taskName = this.route.snapshot.paramMap.get('taskname');
        this.activityName = this.route.snapshot.paramMap.get('activityname');
        console.log(this.activityName);
        console.log(this.taskName);
        this.taskService.getTaskMultiple(this.taskName, this.activityName).subscribe(function (data) {
            console.log(data);
            _this.image = data[0].originalname;
            _this.url = '/api/image/' + _this.image;
            _this.subtasks.push(data[0].task_desc);
            var pic = document.getElementById("image");
            anno.makeAnnotatable(pic);
            anno.hideSelectionWidget();
            anno.setProperties({
                outline: 'red'
            });
            _this.taskService.getAnnotationsByEmail(_this.email, _this.activityName, _this.taskName).subscribe(function (data) {
                _this.annotations = data;
                for (var i = 0; i < _this.annotations.length; i++) {
                    if (_this.annotations[i].feedback.length > 0) {
                        for (var j = 0; j < _this.annotations[i].feedback.length; j++) {
                            _this.feedBack.push(data[i].feedback[j]);
                        }
                    }
                }
                console.log(_this.feedBack);
                //this.feedBack = data.feedback;
                console.log(_this.feedBack);
                console.log(_this.annotations);
                if (_this.annotations.length == 0) {
                    console.log("No submission yet!");
                    _this.submitted = false;
                }
                else {
                    for (var i = 0; i < _this.annotations.length; i++) {
                        anno.addAnnotation(_this.annotations[i]);
                    }
                }
            });
            /**Get the user that is logged in currently**/
            _this.authService.getProfile().subscribe(function (data) {
                _this.user = {
                    name: {
                        first: data.user.first,
                        last: data.user.last
                    },
                    email: data.user.email,
                };
                if (_this.checkSame()) {
                    _this.sameUser = true;
                }
                else {
                    _this.sameUser = false;
                }
            });
        });
        anno.addHandler('onAnnotationClicked', (function (data) {
            _this.dynamicFeedBack = [];
            _this.studentString = data.name.first + " " + data.name.last;
            _this.studentContext = data.context;
            _this.clickedIndex = data.index;
            _this.annoText = data.text;
            for (var i = 0; i < _this.feedBack.length; i++) {
                if (_this.feedBack[i].index == _this.clickedIndex) {
                    _this.dynamicFeedBack.push(_this.feedBack[i]);
                }
            }
            _this.toggleSideNav();
            //setTimeout(() => this.toggleSideNav(), 1000)
            console.log(_this.clickedIndex);
        }));
    };
    AnnotationViewComponent.prototype.toggleSideNav = function () {
        if (this.hidden) {
            this.hidden = false;
            this.drawer.toggle();
        }
        else if (!this.hidden) {
            this.hidden = true;
            this.drawer.toggle();
        }
    };
    AnnotationViewComponent.prototype.backClicked = function () {
        this._location.back();
        //this.nav.show();
    };
    AnnotationViewComponent.prototype.submitFeedback = function (text) {
        var comment = {
            first: this.user.name.first,
            last: this.user.name.last,
            index: this.clickedIndex,
            comment: text
        };
        this.activityService.updateFeedback(this.email, this.studentContext, comment, this.clickedIndex)
            .subscribe(function (data) {
            console.log(data);
        });
        this.addingComment = false;
        text = this.clean(text);
        this.feedBack.push(comment);
        this.dynamicFeedBack.push(comment);
        console.log(this.feedBack);
        this.clear();
    };
    AnnotationViewComponent.prototype.clear = function () {
        this.htmlContent = "";
    };
    AnnotationViewComponent.prototype.empty = function () {
        alert("You have not typed anything to submit!");
    };
    AnnotationViewComponent.prototype.close = function () {
        this.toggleSideNav();
    };
    AnnotationViewComponent.prototype.clean = function (text) {
        return this.sanitizer.bypassSecurityTrustHtml(text);
    };
    AnnotationViewComponent.prototype.addComment = function () {
        this.addingComment = true;
    };
    AnnotationViewComponent.prototype.checkSame = function () {
        if (this.email == this.user.email) {
            return true;
        }
        else {
            return false;
        }
    };
    AnnotationViewComponent.prototype.openTaskDialog = function () {
        var dialogRef = this.dialog.open(ViewTaskDialogComponent, {
            data: {
                tasks: this.subtasks
            },
            width: "300px",
            height: "250px"
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('drawer'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"])
    ], AnnotationViewComponent.prototype, "drawer", void 0);
    AnnotationViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-annotation-view',
            template: __webpack_require__(/*! ./annotation-view.component.html */ "./src/app/components/annotation-view/annotation-view.component.html"),
            styles: [__webpack_require__(/*! ./annotation-view.component.css */ "./src/app/components/annotation-view/annotation-view.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_navbar_service__WEBPACK_IMPORTED_MODULE_3__["NavbarService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"],
            _services_activity_service__WEBPACK_IMPORTED_MODULE_6__["ActivityService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]])
    ], AnnotationViewComponent);
    return AnnotationViewComponent;
}());

var ViewTaskDialogComponent = /** @class */ (function () {
    function ViewTaskDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ViewTaskDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'annotate-dialog',
            template: __webpack_require__(/*! ./view-task-dialog.html */ "./src/app/components/annotation-view/view-task-dialog.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], ViewTaskDialogComponent);
    return ViewTaskDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/annotation-view/view-task-dialog.html":
/*!******************************************************************!*\
  !*** ./src/app/components/annotation-view/view-task-dialog.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<h1 mat-dialog-title style=\"margin-bottom: 5px;\">Your Task</h1>\r\n<mat-divider></mat-divider>\r\n<div style=\"text-align: center; margin-top: 15px; height: 60%;\" mat-dialog-content>\r\n  <div *ngIf=\"data\">\r\n  <p class=\"lead\">{{data.tasks}}</p>\r\n</div>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button-stroked mat-dialog-close cdkFocusInitial>Ok</button>\r\n</div>"

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

module.exports = "<!DOCTYPE html>\n<head>\n\n</head>\n<body>\n<div>\n<mat-card style=\"position: absolute; width: 80%; border-width: 2px; height:auto; margin-top: 25px; overflow-y: auto;\" class=\"main\" id=\"main\" *ngIf=\"class\">\n\n  <a  *ngIf=\"isTeacher\" style=\"color: black; float: right; padding-right: 5px; font-size: 22px;\" (click)=\"openModal(newActivityModal)\"><i matTooltip=\"Create a New Activity\" class=\"glyphicon glyphicon-plus\"></i></a>\n\t<mat-card-title>Welcome to {{class.title}}</mat-card-title>\n\t<ul class=\"list-group\">\n    <br>\n\t\t<li *ngIf=\"user\" class=\"list-group-item\"><strong>Teacher:</strong> {{teacher}} </li>\n\t\t<li class=\"list-group-item\"><strong>Email:</strong> {{class.teacher.email}}</li>\n\t\t<li class=\"list-group-item\"><strong>Module:</strong> {{class.module_code}}</li>\n    <li class=\"list-group-item\"><strong>Active Class Activities:</strong> {{activities.length}}</li>\n    <li class=\"list-group-item\"><strong>Students:</strong> {{studentList?.length}}</li>\n  <mat-expansion-panel *ngFor=\"let act of activities\">\n    <mat-expansion-panel-header style=\"margin-left: auto; margin-right: auto;\">\n      <tr>\n        <th><strong>Activity Name:</strong>&nbsp;&nbsp; {{act.activityName}}\n      &nbsp;&nbsp;&nbsp;&nbsp;</th>\n        <th> <strong>Activity Type:</strong>&nbsp;&nbsp; {{act.activityType}}\n      &nbsp;&nbsp;&nbsp;&nbsp;</th>\n        <th><strong> Number of tasks</strong>&nbsp;&nbsp; {{act.tasks?.length}}</th>\n  </tr>\n\n    </mat-expansion-panel-header>\n<div style=\"width: 100%; text-align: -webkit-right;\">\n<a *ngIf=\"act.activityType=='Individual'\"  style=\"width: 10%; display: inline-block;\" [routerLink]=\"['/activity/',act.activityName]\"type=\"submit\" class=\"btn btn-primary btn-block mt-4\" >View</a>\n<a *ngIf=\"act.activityType=='Group'\"  style=\"width: 10%; display: inline-block;\" [routerLink]=\"['/group/',act.activityName]\" type=\"submit\" class=\"btn btn-primary btn-block mt-4\" >View</a>\n<button *ngIf=\"isTeacher\" class=\"btn btn-danger\" style=\"width: 10%; display: inline-block;\" (click)=\"deleteActivity(act.activityName)\">Delete</button>\n</div>\n\n<div class=\"example-container mat-elevation-z8\">\n  <table mat-table [dataSource]=\"act.tasks\">\n\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef> Task Name </th>\n      <td style=\"padding-left: 0px;\" mat-cell *matCellDef=\"let task\" > {{task.task_name}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"type\">\n      <th mat-header-cell *matHeaderCellDef> Type </th>\n      <td mat-cell *matCellDef=\"let task\"> {{task.task_type}} </td>\n    </ng-container>\n    <ng-container matColumnDef=\"preview\">\n      <th mat-header-cell *matHeaderCellDef> Preview </th>\n      <td mat-cell *matCellDef=\"let task; let i = index \">\n        <i *ngIf=\"task.task_type=='image'\" (click)=\"openImagePreview(imageModal,act.activityName,task.task_name)\" class=\"glyphicon glyphicon-eye-open\"></i>\n        <i *ngIf=\"task.task_type=='text'\" (click)=\"openTextPreview(textModal,task.task_name, task.task_desc)\" class=\"glyphicon glyphicon-eye-open\"></i>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n</div>\n  </mat-expansion-panel>\n  </ul>\n\n</mat-card>\n</div>\n\n<ng-template #enrollTemp>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Task Image</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n  \t<img class=\"thumbnail\" src={{url}}>\n    <form>\n  <div class=\"form-group\">\n    <label>Task Description</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"task_description\" name=\"task_description\">\n  </div>\n  <button class=\"btn btn-primary\" type=\"submit\">Choose</button>\n</form>\n  </div>\n</ng-template>\n\n\n\n\n\n\n<ng-template #newActivityModal id=\"newActivityModal\" style=\"width: 700px; height: 50vh;\">\n\n<!--ACTIVITY STUFF-->\n<mat-horizontal-stepper labelPosition=\"bottom\" #stepper [linear]=\"isLinear\">\n  <mat-step [stepControl]=\"activityNameForm\">\n    <form [formGroup]=\"activityNameForm\" (ngSubmit)=\"onActivityNameSubmit()\">\n      <ng-template matStepLabel>Activity name</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Activity Name\" formControlName=\"activityNameCtrl\">\n      </mat-form-field>\n      <div>\n        <button type=\"submit\" mat-stroked-button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"activityTypeForm\">\n    <form [formGroup]=\"activityTypeForm\" (ngSubmit)=\"onActivityTypeSubmit()\" style=\"text-align: center; font-size: 18px;\">\n      <ng-template matStepLabel>Activity Type</ng-template>\n      <mat-radio-group formControlName=\"activityTypeCtrl\" required>\n    <mat-radio-button (click)=\"notGroup()\" class=\"example-margin\" value=\"Individual\">Individual </mat-radio-button>\n    <mat-radio-button (click)=\"group()\" class=\"example-margin\" value=\"Group\">Group </mat-radio-button>\n    </mat-radio-group>\n    <div *ngIf=\"isGroup\" style=\"margin-top: 15px;\">\n    <mat-form-field style=\"width: 30%; margin-left: auto; margin-right: auto; display: block;\">\n    <input formControlName=\"groupNameCtrl\" matInput placeholder=\"Group Name\" value=\"\">\n  </mat-form-field>\n    <mat-form-field style=\"width: 30%; margin-left: auto; margin-right: auto; display: block;\">\n  <mat-select placeholder=\"Students\"  [disableOptionCentering]=\"true\" formControlName=\"students\" multiple>\n    <mat-option *ngFor=\"let student of studentList\" [value]=\"student\">{{student.first}} {{student.last}}</mat-option>\n  </mat-select>\n</mat-form-field>\n</div>\n    <br>\n      <div style=\"margin-top: 20px; text-align: left;\">\n        <button mat-stroked-button matStepperPrevious>Back</button>\n        <button mat-stroked-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n\n  <!--TASK STUFF-->\n  <mat-step [stepControl]=\"taskForm\">\n    <form [formGroup]=\"taskForm\" (ngSubmit)=\"onTaskNameSubmit()\">\n      <ng-template matStepLabel>Tasks</ng-template>\n        <mat-list role=\"list\">\n          <mat-divider></mat-divider>\n          <mat-list-item role=\"listitem\">\n            <mat-list-item role=\"listitem\">\n            <strong>Task Type</strong>\n          </mat-list-item>\n          <mat-form-field>\n          <mat-select [(value)]=\"selected\" formControlName=\"taskTypeCtrl\" >\n            <mat-option>None</mat-option>\n            <mat-option value=\"image\" >Image</mat-option>\n            <mat-option value=\"text\">Text</mat-option>\n          </mat-select>\n        </mat-form-field>\n          <mat-divider></mat-divider>\n        </mat-list-item>\n        <div style=\"text-align: center;\" >\n          <div class=\"table-responsive\">\n    <table class=\"table table-striped table table-bordered\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th>No.</th>\n        <th>Name</th>\n        <th>Type</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let task of tasks; let i = index\">\n        <td>{{i + 1}}</td>\n        <td>{{task.task_name}}</td>\n        <!--<ng-template #popTemplate>\n        Email: {{class.teacher.email}}</ng-template> -->\n        <td>{{task.task_type}}</td>\n      </tr>\n      </tbody>\n  </table>\n</div>\n\n  <mat-card *ngIf=\"selected=='image' && url\" style=\"border-style: ridge; width: 80%;\">\n  <div style=\"text-align: center; height: auto;\">\n    <button style=\"float: right;\" class=\"btn btn-danger\" (click)=\"clearURL()\">Delete</button>\n        <img src={{url}} style=\"padding: 20px;\">\n    <mat-list style=\"text-align: left; margin-top: 5px; margin-top: 5px;\">\n      <h3 style=\"margin-top: 10px; margin-bottom: 0px; border-bottom-style: ridge; border-top-style: ridge; background-color: gainsboro; border-color: gainsboro; padding-bottom: 10px; padding-top: 10px;\">Tasks\n      <!-- <i (click)=\"submitTask()\" style=\"float: right;\" class=\"glyphicon glyphicon-ok\"></i> -->\n    </h3>\n\n      <div style=\"width: 100%; margin-top: 20px;\">\n        <mat-form-field *ngIf=\"!taskName\">\n      <input matInput placeholder=\"Task Name\" formControlName=\"taskNameCtrl\">\n    </mat-form-field>\n    <button matTooltip=\"Confirm Task Name\" type=\"button\" *ngIf=\"!taskName\" style=\"float: right;\" (click)=\"addTask()\" class=\"btn btn-primary\">OK</button>\n    <blockquote *ngIf=\"taskName\">\n      <p><i>{{taskName}}</i></p>\n    </blockquote>\n\n       <app-ngx-editor height=\"150px\" minHeight=\"150px\" [config]=\"editorConfig\"  [placeholder]=\"placeholder\" [spellcheck]=\"true\" [(ngModel)]=\"htmlContent\" [ngModelOptions]=\"{standalone: true}\" name=\"htmlContent\"></app-ngx-editor>\n        <div style=\"width: 100%; text-align: center;\" *ngIf=\"taskName && htmlContent\">\n        <button class=\"btn btn-primary\" (click)=\"submitTask()\" matTooltip=\"Submit Task\">Submit</button>\n      </div>\n    </div>\n    </mat-list>\n  </div> \n</mat-card>\n      </div>\n\n          <file-drop *ngIf=\"selected=='image' && !url\" headertext=\"Drop file here\" (onFileDrop)=\"dropped($event)\"\n    (onFileOver)=\"fileOver($event)\" (onFileLeave)=\"fileLeave($event)\">\n    </file-drop>\n\n\n\n\n\n    <!--Text task-->\n    <div *ngIf=\"selected=='text'\">\n  <div style=\"text-align: center;\">\n  <mat-card style=\"border-style: ridge; width: 80%;\">\n\n  <div style=\"text-align: center; height: auto;\">\n\n    <mat-list style=\"text-align: left; margin-top: 5px; margin-top: 5px;\">\n\n      <h3 style=\"margin-top: 10px; margin-bottom: 0px; border-bottom-style: ridge; border-top-style: ridge; background-color: gainsboro; border-color: gainsboro; padding-bottom: 10px; padding-top: 10px;\">Add a new task\n      <!-- <i (click)=\"submitTask()\" matTooltip=\"Submit Task\" style=\"float: right;\" class=\"glyphicon glyphicon-ok\"></i> -->\n    </h3>\n      <div style=\"width: 100%; margin-top: 20px;\">\n        <mat-form-field *ngIf=\"!taskName\">\n      <input matInput placeholder=\"Task Name\" formControlName=\"taskNameCtrl\">\n    </mat-form-field>\n    <button matTooltip=\"Confirm Task Name\" type=\"button\" *ngIf=\"!taskName\" style=\"float: right;\" (click)=\"addTask()\" class=\"btn btn-primary\">OK</button>\n    <blockquote *ngIf=\"taskName\">\n      <p><i>{{taskName}}</i></p>\n    </blockquote>\n\n       <app-ngx-editor height=\"150px\" minHeight=\"150px\" [config]=\"editorConfig\"  [placeholder]=\"placeholder\" [spellcheck]=\"true\" [(ngModel)]=\"htmlContent\" [ngModelOptions]=\"{standalone: true}\" name=\"htmlContent\"></app-ngx-editor>\n       <div style=\"width: 100%; text-align: center;\" *ngIf=\"taskName && htmlContent\">\n        <button class=\"btn btn-primary\" (click)=\"submitTask()\" matTooltip=\"Submit Task\">Submit</button>\n      </div>\n    </div>\n    </mat-list>\n  </div> \n</mat-card>\n      </div>\n   </div>\n\n        </mat-list>\n\n        <!--ACTIVITY DISPLAY STUFF-->\n      <div>\n        <button mat-stroked-button matStepperPrevious>Back</button>\n        <button *ngIf=\"tasks?.length > 0\" mat-stroked-button matStepperNext>Done</button>\n        <button *ngIf=\"taskDesc\" style=\"float: right;\" type=\"button\" (click)=\"submitTask()\" class=\"btn btn-primary\">Submit Task</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    Activity Created.\n    <mat-list role=\"list\">\n      <mat-list-item>\n      <mat-divider></mat-divider>\n      <mat-list-item role=\"listitem\"><strong>Activity Name: </strong>&nbsp;&nbsp;{{activityName}}</mat-list-item>\n      <mat-divider></mat-divider>\n      <mat-list-item role=\"listitem\"><strong>Activity Type: </strong>&nbsp;&nbsp;{{activityType}}</mat-list-item>\n      <mat-divider></mat-divider>\n      <mat-list-item role=\"listitem\"><strong>#Tasks: </strong>&nbsp;&nbsp;{{tasks?.length}}</mat-list-item>\n    </mat-list-item>\n\n  <h4><strong>Tasks: </strong></h4>\n  <mat-list-item *ngFor=\"let task of tasks\" role=\"listitem\">\n    <mat-list-item><strong>Name</strong>&nbsp;&nbsp;{{task?.task_name}}</mat-list-item>\n    <mat-list-item><strong>Type</strong>&nbsp;&nbsp;{{task?.task_type}}</mat-list-item>\n    <ng-template #popTemplate>\n      {{task?.task_desc}}\n  </ng-template>\n    <mat-list-item><a [popover]=\"popTemplate\" popoverTitle=\"Task Description\" triggers=\"mouseenter:mouseleave\">\n      Description\n    </a>\n    </mat-list-item>\n    <mat-divider ></mat-divider>\n  </mat-list-item>\n\n</mat-list>\n    <div>\n      <button mat-stroked-button matStepperPrevious>Back</button>\n      <button mat-stroked-button (click)=\"stepper.reset()\">Reset</button>\n      <button class=\"btn btn-primary\" (click)=\"submitActivity()\" (click)=\"modalRef.hide()\">Submit</button>\n    </div>\n  </mat-step>\n</mat-horizontal-stepper>\n</ng-template>\n\n\n<!--Image Modal-->\n<ng-template #imageModal>\n  <div style=\"text-transform: capitalize;\" class=\"modal-header\">\n     <h4 class=\"modal-title pull-left\"><strong>{{tempName}}</strong></h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\" style=\"padding-top: 0px; text-transform: capitalize;\">\n    <h4><blockquote><p><i>{{tempDesc}}</i></p></blockquote></h4>\n    <img  id=\"modalImage\" [src]=\"imageSrc\">\n    \n  </div>\n</ng-template>\n\n<!--Text Modal-->\n<ng-template #textModal>\n  <div style=\"text-transform: capitalize;\" class=\"modal-header\">\n     <h4 class=\"modal-title pull-left\"><strong>{{tempName}}</strong></h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\" style=\"padding-top: 0px; text-transform: capitalize;\">\n    <h4><blockquote><p><i>{{tempDesc}}</i></p></blockquote></h4>\n    \n  </div>\n</ng-template>\n\n</body>\n\n<style>\ni{\n  font-size: 22px;\n}\nimg{\n\twidth: 100%;\n  height: 400px;\n}\nli{\n\ttext-transform: capitalize;\n}\n.column {\n    float: left;\n    width: 33.33%;\n    padding: 5px;\n}\n.card {\n    border:1px solid black; \n    outline-style:solid;\n}\n.thumbnail {\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  padding: 5px;\n  width: 150px;\n}\n.newActivity, #newtask{\n  float: right;\n}\n.example-margin {\n  margin: 0 10px;\n}\n.mat-list-item-content{\n      justify-content: flex-end;\n}\n.mat-list-item{\n  text-transform: capitalize;\n}\n#newActivityModal{\n  width: 700px;\n}\n.mat-card{\n  display: inline-block;\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n  transition: 0.3s;\n  border-style: solid;\n  text-transform: capitalize;\n  border-width: 1px;\n}\n.mat-card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n}\n.example-container {\n  height: auto;\n  overflow: auto;\n}\n\ntable {\n  width: 100%;\n}\nth.mat-header-cell {\n    text-align: center;\n    width: 25%;\n    font-size: 16px;\n}\ntd.mat-cell, td.mat-footer-cell, th.mat-header-cell {\n    padding: 0;\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    border-right-style: solid;\n    border-right-width: 1px;\n    border-right-color: rgba(0,0,0,.12);\n}\ntd{\n  text-align: center;\n}\n.mat-row:nth-child(odd){\n          background-color:white;\n          }\n.mat-row:nth-child(even){\n          background-color:honeydew;\n      }\n#main{\n  width: 85%;\nposition: fixed;\nleft: 50%;\nmargin-left: -42.5%;\n}\n\ni:hover {\n cursor:pointer;\n}\n\n#modalImage{\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n  height: 450px;\n}\n\n\n</style>\n\n\n\n"

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
        this.isMember = false;
        this.done = true;
        this.submitted = true;
        this.add = false;
        this.makingTask = false;
        this.submission = false;
        this.isGroup = false;
        this.displayedColumns = ['name', 'type', 'preview'];
        this.url = "";
        this.tasks = [];
        this.taskFiles = [];
        this.activities = [];
        this.studentGroup = [];
        /*File variables*/
        this.files2 = [];
        this.files1 = [];
        this.images = [];
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
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
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
            students: [''],
            groupNameCtrl: ['']
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
                if (!_this.isTeacher) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].activityType == 'Group') {
                            _this.checkGroup(data[i].group);
                            if (_this.isMember) {
                                _this.activities.push(data[i]);
                            }
                            else {
                                console.log("Not in group");
                            }
                        }
                        else if (data[i].activityType == 'Individual') {
                            _this.activities.push(data[i]);
                        }
                    }
                }
                else if (_this.isTeacher) {
                    _this.activities = data;
                }
                _this.taskService.getTaskByModule(_this.module_code).subscribe(function (data) {
                    _this.images = data;
                });
            });
            _this.authService.getProfile().subscribe(function (data) {
                _this.user = data.user;
                console.log(_this.user);
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
        this.activityNameForm.reset();
        this.activityTypeForm.reset();
        this.taskForm.reset();
        this.tasks = [];
        this.modalRef = this.modalService.show(template, this.config);
    };
    ClassroomComponent.prototype.openImagePreview = function (template, actname, title) {
        for (var i = 0; i < this.images.length; i++) {
            if (this.images[i].activity_name == actname && this.images[i].task_title == title) {
                this.imageSrc = "/api/image/" + this.images[i].originalname;
                this.tempDesc = this.images[i].task_desc;
                this.tempName = this.images[i].task_title;
            }
        }
        this.config.class = "modal-md";
        this.modalRef = this.modalService.show(template, this.config2);
    };
    ClassroomComponent.prototype.openTextPreview = function (template, title, desc) {
        this.tempName = title;
        this.tempDesc = desc;
        this.config.class = "modal-md";
        this.modalRef = this.modalService.show(template, this.config2);
    };
    ClassroomComponent.prototype.addTask = function () {
        this.taskName = this.taskForm.get('taskNameCtrl').value;
    };
    ClassroomComponent.prototype.submitTask = function () {
        this.taskDesc = this.htmlContent;
        console.log(this.taskForm.get('taskNameCtrl').value);
        this.taskType = this.taskForm.get("taskTypeCtrl").value;
        if (this.taskType == 'image') {
            this.taskStr = {
                task_name: this.taskName,
                task_type: "image",
                task_desc: this.taskDesc,
                index: this.taskIndex
            };
            this.tasks.push(this.taskStr);
            var formData = new FormData();
            formData.append('file', this.file);
            formData.append('activityName', this.activityName);
            formData.append('taskName', this.taskName);
            formData.append('taskDesc', this.taskDesc);
            formData.append('taskType', this.taskType);
            formData.append('index', this.taskIndex);
            this.http.post('http://localhost:3000/upload/image/' + this.module_code, formData)
                .subscribe(function (res) {
                console.log(res);
            });
        }
        if (this.taskType == 'text') {
            this.taskStr = { task_name: this.taskName, task_type: "text", task_desc: this.taskDesc, index: this.taskIndex };
            this.tasks.push(this.taskStr);
        }
        console.log(this.tasks);
        this.taskForm.reset();
        this.url = null;
        this.taskName = null;
        this.taskDesc = null;
        this.taskType = null;
        this.selected = null;
    };
    ClassroomComponent.prototype.deleteActivity = function (activityName) {
        this.activityService.deleteActivity(activityName).subscribe(function (data) {
            console.log(data);
        });
        this.taskService.deleteTasksByActivity(activityName).subscribe(function (data) {
            console.log(data);
        });
        location.reload();
    };
    ClassroomComponent.prototype.submitActivity = function () {
        var _this = this;
        this.activityCount++;
        this.activityStr = { activityName: this.activityName, activityType: this.activityType, group: this.studentGroup, module_code: this.module_code, tasks: this.tasks, comments: [], submissions: [] };
        this.activities.push(this.activityStr);
        console.log(this.activityStr);
        this.tasks = [];
        this.taskService.submitActivity(this.activityStr).subscribe(function (data) {
            console.log(data);
            _this.activityNameForm.reset();
            _this.activityTypeForm.reset();
            _this.taskForm.reset();
        }, function (err) {
            console.log(err);
        });
        location.reload();
    };
    ;
    ClassroomComponent.prototype.clearURL = function () {
        this.url = null;
    };
    ClassroomComponent.prototype.onActivityNameSubmit = function () {
        this.activityName = this.activityNameForm.get('activityNameCtrl').value;
        console.log(this.activityName);
    };
    ClassroomComponent.prototype.onActivityTypeSubmit = function () {
        this.groupname = this.activityTypeForm.get('groupNameCtrl').value;
        this.activityType = this.activityTypeForm.get('activityTypeCtrl').value;
        console.log(this.activityType);
        if (this.activityType == 'Group') {
            var studentList = this.activityTypeForm.get("students").value;
            for (var i = 0; i < studentList.length; i++) {
                this.studentGroup.push({
                    first: studentList[i].first,
                    last: studentList[i].last,
                    email: studentList[i].email,
                    groupname: this.groupname
                });
            }
        }
        else {
            console.log("Individual");
        }
    };
    ClassroomComponent.prototype.onTaskNameSubmit = function () {
        this.taskName = this.taskForm.get('taskNameCtrl').value;
        console.log(this.taskName);
        //this.tasks.push(this.task);
    };
    ClassroomComponent.prototype.onTaskTypeSubmit = function () {
        this.taskType = this.taskForm.get("taskTypeCtrl").value;
        console.log(this.taskType);
    };
    ClassroomComponent.prototype.checkGroup = function (group) {
        for (var i = 0; i < group.length; i++) {
            if (this.user.first == group[i].first && this.user.last == group[i].last || this.isTeacher) {
                this.isMember = true;
            }
            else {
                this.isMember = false;
            }
        }
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
        __metadata("design:paramtypes", [angular2_lightbox__WEBPACK_IMPORTED_MODULE_10__["Lightbox"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"],
            _services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"],
            _services_class_service__WEBPACK_IMPORTED_MODULE_1__["ClassService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_activity_service__WEBPACK_IMPORTED_MODULE_4__["ActivityService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
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

module.exports = "\n <mat-card id=\"sideNav\" style=\"border-top: 0px; position: fixed;\">\n    <div class=\"row profile\">\n      <div class=\"profile-sidebar\">\n        \n        <div class=\"profile-userpic\">\n          <img src=\"http://keenthemes.com/preview/metronic/theme/assets/admin/pages/media/profile/profile_user.jpg\" class=\"img-responsive\" alt=\"\">\n        </div>\n        \n        <div class=\"profile-usertitle\">\n          <div class=\"profile-usertitle-name\">\n            {{user?.first}} {{user?.last}}\n          </div>\n          <div class=\"profile-usertitle-job\">\n            {{user?.role}}\n          </div>\n        </div>\n\n        <div class=\"profile-usermenu\">\n          <ul class=\"nav\">\n            <li *ngIf=\"teacher\">\n              <a (click)=\"openModal(create_class)\">\n                <i class=\"glyphicon glyphicon-plus\"></i>\n                 Create a Class\n              </a>\n            </li>\n            <li *ngIf=\"!teacher\">\n              <a (click)=\"openModal(enrollTemp)\">\n              <i class=\"glyphicon glyphicon-user\"></i>\n              Enroll </a>\n            </li>\n            <li (click)=\"openHelpDialog()\">\n              <a>\n              <i class=\"glyphicon glyphicon-flag\"></i>\n              Help </a>\n            </li>\n            <li>\n              <a>\n                <i class=\"glyphicon glyphicon-cog\"></i>\n                Settings\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n  </div>\n   </mat-card>\n\n  <div style=\"height: 100%; position: fixed; margin-left: 22%; width: 78%; overflow-y: scroll;\">\n    <div style=\"height: auto;\">\n    <mat-card style=\"padding-top: 16px; margin-top: 3%; width: 100%;\" id=\"tab\" class=\"col-md-9\">\n    <h3>Your Classes\n  </h3>\n    <div class=\"table-responsive\">\n    <table class=\"table table-striped table table-bordered\" *ngIf=\"classes\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th>Class</th>\n        <th>Module Code</th>\n        <th>Teacher</th>\n      </tr>\n    </thead>\n    <tbody *ngIf=\"classes.length > 0 && !renderer\">\n      <tr *ngFor=\"let class of classes\">\n        <td>{{class.title}}</td>\n        <td><a [routerLink]=\"['/classroom/',class.module_code]\" (click)=\"storeCode(class.module_code, class.teacher.email)\">{{class.module_code}}</a></td>\n        <ng-template #popTemplate>\n        Email: {{class.teacher.email}}</ng-template>\n        <td id=\"teacher\"><a [popover]=\"popTemplate\" popoverTitle=\"Teacher Info\" triggers=\"mouseenter:mouseleave\">{{class.teacher.first}} {{class.teacher.last}}</a></td>\n      </tr>\n      </tbody>\n  </table>\n  <h3 style=\"text-align: center;\" *ngIf=\"classes.length == 0\">You have no classses yet</h3>\n</div>\n  </mat-card>\n</div>\n\n<div class=\"columns\" id=\"cardContainer\" style=\"height: 100%; margin-top: 20px;\">\n<div *ngFor=\"let act of activityArray; let i = index\" class=\"card column is-one-third\" style=\"width: 23rem;\">\n  <img *ngIf=\"act.activityType=='Group'\" src=\"https://img.icons8.com/cotton/64/000000/groups.png\">\n  <img *ngIf=\"act.activityType=='Individual'\" src=\"https://img.icons8.com/cotton/64/000000/person-male.png\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">{{act.activityName}}</h4>\n    <h4 style=\"height: auto;\" class=\"card-text\">{{act.activityType}}</h4>\n    <h4 style=\"height: auto;\" class=\"card-text\">{{act.module_code}}</h4>\n    <div>\n    <a *ngIf=\"act.activityType=='Individual'\" class=\"btn btn-primary\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/activity/',act.activityName]\">Go to Activity</a>\n     <a *ngIf=\"act.activityType=='Group'\" class=\"btn btn-primary\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/group/',act.activityName]\">Go to Activity</a>\n   </div>\n  </div>\n  <div class=\"is-clearfix\" *ngIf=\"i % 3 == 0\"></div>\n</div>\n\n</div>\n</div>\n\n<ng-template #create_class>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">New Class</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form (submit)=\"createClass()\">\n  <div class=\"form-group\">\n  <label>Title</label>\n  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newTitle\" name=\"newTitle\">\n  </div>\n  <div class=\"form-group\">\n    <label>Module Code</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newModule_code\" name=\"newModule_code\">\n  </div>\n  <input type=\"submit\" (click)=\"modalRef.hide()\"  class=\"btn btn-primary\" value=\"Create Class\">\n</form>\n  </div>\n</ng-template>\n\n<ng-template #enrollTemp>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Enroll</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form (submit)=\"enroll()\">\n  <div class=\"form-group\">\n    <label>Module Code</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"enrollCode\" name=\"enrollCode\">\n  </div>\n  <input type=\"submit\" (click)=\"modalRef.hide()\"  class=\"btn btn-primary\" value=\"Enroll\">\n</form>\n  </div>\n</ng-template>\n\n<style>\n/* Profile container */\n\n/* Profile sidebar */\n.profile-sidebar {\n  background: #fff;\n}\n\n.profile-userpic img {\n  float: none;\n  margin: 0 auto;\n  width: 50%;\n  height: 50%;\n  -webkit-border-radius: 50% !important;\n  -moz-border-radius: 50% !important;\n  border-radius: 50% !important;\n}\n\n.profile-usertitle {\n  text-align: center;\n  margin-top: 20px;\n}\n\n.profile-usertitle-name {\n  color: black;\n  font-size: 20px;\n  font-weight: 600;\n  margin-bottom: 7px;\n}\n\n.profile-usertitle-job {\n  text-transform: capitalize;\n  color: black;\n  font-size: 20px;\n  font-weight: 600;\n  margin-bottom: 15px;\n}\n\n.profile-userbuttons {\n  text-align: center;\n  margin-top: 10px;\n}\n\n.profile-userbuttons .btn {\n  text-transform: capitalize;\n  font-size: 20px;\n  font-weight: 600;\n  padding: 6px 15px;\n  margin-right: 5px;\n}\n\n.profile-userbuttons .btn:last-child {\n  margin-right: 0px;\n}\n    \n.profile-usermenu {\n  margin-top: 30px;\n}\n\n.profile-usermenu ul li {\n  border-bottom: 1px solid #f0f4f7;\n}\n\n.profile-usermenu ul li:last-child {\n  border-bottom: none;\n}\n\n.profile-usermenu ul li a {\n  color: black;\n  font-size: 20px;\n  font-weight: 400;\n}\n\n.profile-usermenu ul li a i {\n  margin-right: 8px;\n  font-size: 20px;\n}\n\n.profile-usermenu ul li a:hover {\n  background-color: #fafcfd;\n  color: black;\n}\n\n.profile-usermenu ul li.active {\n  border-bottom: none;\n}\n\n.profile-usermenu ul li.active a {\n  color: black;\n  background-color: #f6f9fb;\n  border-left: 2px solid black;\n  margin-left: -2px;\n}\n\n/* Profile Content */\n.profile-content {\n  padding: 5px;\n  background: #fff;\n  min-height: 460px;\n}\n.profile-usertitle-name{\ntext-transform: capitalize;\n}\nth, td{\n  color: black;\n  font-size: 20px;\n}\na{\n  color: blue;\n  cursor: pointer;\n}\n#tab{\n  padding-top: 50px;\n}\n#teacher{\n  text-transform: capitalize;\n}\n\n#sideNav{\n    width: 20%;\n    height: 90vh;\n    position: fixed;\n}\n#activityDiv{\n    height: 45vh;\n    position: fixed;\n    width: 135vh;\n    margin-top: 2%;\n  }\n#tableDiv{\n    width: 135vh;\n    height: 30%;\n}\nmat-card{\n  border-style: solid !important;\n  border-width: 2px;\n}\n.card{\n  border-style: solid;\n  margin-right: 20px;\n  display: inline-block;\n  text-align: center;\n  background-color: white;\n  width: 300px;\n  min-height: 250px;\n  height: auto;\n  margin-top: 20px;\n  \n}\n.card img{\n  height: 64px;\n  width: 65px;\n}\nbody{\n  height: 100%;\n  overflow-y: auto;\n  background-color: whitesmoke;\n}\n</style>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: module_code, DashboardComponent, HelpDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "module_code", function() { return module_code; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpDialogComponent", function() { return HelpDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_class_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/class.service */ "./src/app/services/class.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _services_activity_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/activity.service */ "./src/app/services/activity.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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
    function DashboardComponent(_ngZone, dialog, activityService, modalService, classService, authService, router, _location) {
        this._ngZone = _ngZone;
        this.dialog = dialog;
        this.activityService = activityService;
        this.modalService = modalService;
        this.classService = classService;
        this.authService = authService;
        this.router = router;
        this._location = _location;
        this.flipDiv = false;
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
        this.activityArray = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (data) {
            console.log(data);
            _this.email = data.user.email;
            _this.user = data.user;
            _this.classes = data.user.classes;
            console.log(_this.classes);
            _this.first = data.user.first;
            _this.last = data.user.last;
            for (var i = 0; i < _this.classes.length; i++) {
                _this.activityService.getActivitiesByModule(_this.classes[i].module_code)
                    .subscribe(function (data) {
                    if (data.length == 0) {
                        console.log("empty");
                    }
                    else {
                        for (var j = 0; j < data.length; j++) {
                            _this.activityArray.push(data[j]);
                            console.log(_this.activityArray);
                        }
                    }
                });
            }
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
        window.location.reload();
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
                        _this.classes.push(data);
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
    DashboardComponent.prototype.flipDivFunc = function () {
        if (this.flipDiv) {
            this.flipDiv = false;
        }
        else {
            this.flipDiv = true;
        }
    };
    DashboardComponent.prototype.openHelpDialog = function () {
        var dialogRef = this.dialog.open(HelpDialogComponent, {
            width: "350px"
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"],
            _services_activity_service__WEBPACK_IMPORTED_MODULE_5__["ActivityService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _services_class_service__WEBPACK_IMPORTED_MODULE_2__["ClassService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]])
    ], DashboardComponent);
    return DashboardComponent;
}());

var HelpDialogComponent = /** @class */ (function () {
    function HelpDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    HelpDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'help-dialog',
            template: __webpack_require__(/*! ./help-dialog.html */ "./src/app/components/dashboard/help-dialog.html"),
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"]])
    ], HelpDialogComponent);
    return HelpDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/help-dialog.html":
/*!*******************************************************!*\
  !*** ./src/app/components/dashboard/help-dialog.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title style=\"margin-bottom: 5px;\">Welcome to your Dashboard!</h1>\r\n<mat-divider></mat-divider>\r\n<div style=\"text-align: center; margin-top: 15px; height: 60%;\" mat-dialog-content>\r\n\r\n  <p class=\"lead\">Here you have direct access to all your classes and activities!\r\n  \t\t\t\t\tClick a module code in the table to navigate to that class or jump straight into an activity below!</p>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button-stroked mat-dialog-close cdkFocusInitial>Ok</button>\r\n</div>"

/***/ }),

/***/ "./src/app/components/group/group-image-preview-dialog.html":
/*!******************************************************************!*\
  !*** ./src/app/components/group/group-image-preview-dialog.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"data\" style=\"text-align: center; height: auto;\" mat-dialog-content>\r\n  <img style=\"width: 700px; height: 450px;\" src=\"/api/image/{{data.image}}\">\r\n</div>\r\n\r\n<style>\r\n\tdiv{\r\n\t\tmax-height: 75vh;\r\n\t\tpadding: 0px 0px 0px 0px;\r\n\t}\r\n\t.mat-dialog-container{\r\n\t\tpadding: 0px;\r\n\t}\r\n</style>"

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

module.exports = "\n<div id=\"mainDiv\">\n<mat-card class=\"main\" id=\"main\" >\n\t <mat-tab-group style=\"text-transform: capitalize; height: 100%;\" (selectedTabChange)=\"tabChange($event)\">\n \t<mat-tab *ngFor=\"let task of activity?.tasks; let i = index\" label='Task {{i + 1}}'>\n        <div class=\"card-body\" *ngIf=\"task.task_type == 'image'\">\n\n<ngx-flip id=\"flipCard\" [flip]=\"flipDiv\" >\n   <div class=\"wrapper\" front style=\"height: 310px; background-color: white; border-style: ridge; text-align: center;\">\n      <img style=\"width: 500px; height: 300px; margin-left: 0;\" src=\"/api/image/{{images[i]?.originalname}}\" (click)=\"openPreviewDialog(i)\" class=\"img-thumbnail\">\n      <i id=\"flipIcon\" matTooltip=\"Flip\" (click)=\"flipDivFunc()\" style=\"font-size: 25px; font-weight: bolder;\" class=\"glyphicon glyphicon-refresh\"></i>\n      <i id=\"helpIcon\" (click)=\"openImageHelpDialog()\" matTooltip=\"Help\" class=\"fa fa-question\" style=\"font-size: 25px; font-weight: bolder;\"></i>\n    </div>\n   <div class=\"wrapper\" style=\"height: 300px; background-color: whitesmoke; border-style: ridge; text-align: center;\" back>\n    <div id=\"taskInfoDiv\" style=\"text-align: left; font-size: 18px; margin-bottom: 22%;\">\n      <h3 style=\"margin-left: 5px;\">{{task.task_name}}</h3>\n      <mat-divider></mat-divider>\n      <blockquote style=\"margin-left: 10px;\" style=\"margin-top: 20px;\"><i>{{task.task_desc}}</i></blockquote>\n    </div>\n  <div id=\"flipCardButtons\">\n  <a href=\"/annotate/{{activity.activityType}}/{{activityName}}/{{task.task_name}}\" class=\"btn btn-primary\" *ngIf=\"!checkSubmitted(task.task_name) && !isTeacher\">Annotate</a>\n  <button class=\"btn btn-primary\" [matMenuTriggerFor]=\"menu\" *ngIf=\"checkSubmitted(task.task_name) || isTeacher\">View Submissions</button>\n    <mat-menu #menu=\"matMenu\">\n      <div *ngIf=\"submissionArray.length > 0\">\n      <a href=\"view/annotations/{{submission.email}}/{{activityName}}/{{task.task_name}}\" mat-menu-item *ngFor=\"let submission of submissionArray\">{{submission.first}} {{submission.last}}</a>\n    </div>\n    <p style=\"font-size: 20px; text-align: center;\" *ngIf=\"submissionArray.length == 0\">No submissions have been made yet!</p>\n    </mat-menu>\n  <button class=\"btn btn-danger\" (click)=\"flipDivFunc()\">Back</button>\n  </div>\n</div>\n </ngx-flip>\n\n</div>\n\n\t <div class=\"card\" *ngIf=\"task.task_type == 'text'\" style=\"border-style: none;\">\n  <div id=\"textCardBody\" class=\"card-body\" style=\"text-align: left; min-height: 200px;\">\n    <i style=\"float: right; font-size: 30px;\" matTooltip=\"Help\" class=\"fa fa-question\"></i>\n      <div style=\"background-color: white; padding-top: 0px; margin-bottom: 15px;\">\n  <div>\n    <h2 class=\"display-4\">{{task.task_name}}</h2>\n    <mat-divider></mat-divider>\n    <blockquote style=\"margin-top: 50px;\" class=\"lead\"[innerHtml]=\"task.task_desc\"></blockquote>\n  </div>\n</div>\n\n  </div>\n</div>\n\t</mat-tab>\n </mat-tab-group>\n\n<mat-card id=\"commentDiv\">\n  <div id=\"heading\" style=\"border-bottom-style: ridge; \">\n    <h3 style=\"padding-left: 16px; margin-top: 0px;\"> Comments&nbsp;&nbsp;<i class=\"fa fa-comments\"></i>&nbsp;{{comments?.length}}\n    <a style=\"color: black; float: right; padding-right: 5px;\"><i matTooltip=\"Add a Comment\" (click)=\"addComment()\" class=\"glyphicon glyphicon-plus\"></i></a>\n  </h3>\n  </div>\n  <div>\n    <p style=\"text-align: center; margin-top: 20px;\" *ngIf=\"comments.length == 0\"><i>No comments yet! Be the first to contribute...</i></p>\n    <mat-list style=\"min-height: 100px;\" *ngIf=\"comments.length > 0\">\n      <mat-list-item *ngFor=\"let comment of comments; let i = index\" style=\"height: 100px; height: auto; border-bottom-style: ridge;\">\n        <div style=\"width: 100%;\">\n        <h5 style=\"float: right;\"><i>{{ comment.time | date:'EEEE, MMMM d, h:mm:ss a' }} </i></h5>\n        <h4 style=\"text-transform: capitalize;\">{{comment.first}} {{comment.last}}</h4>\n        <div>\n          <a><i matTooltip=\"Delete Comment\" style=\"float: right; color: black; font-weight: bold;\" class=\"glyphicon glyphicon-trash\" (click)=\"delete(i)\"></i></a>\n        <p [innerHTML]=\"comment.comment\">\n        </p>\n      </div>\n      </div>\n      </mat-list-item>\n    </mat-list>\n  </div>\n  <div style=\"height: 200px;\" *ngIf=\"add\">\n   <app-ngx-editor [config]=\"editorConfig\" height=\"200px\" minHeight=\"200px\" [placeholder]=\"placeholder\" [spellcheck]=\"true\" [(ngModel)]=\"htmlContent\" name=\"htmlContent\"></app-ngx-editor>\n   <div>\n   <button type=\"button\" class=\"btn btn-primary\" style=\"float: right;\" (click)=\"submitComment(htmlContent)\">Submit</button>\n   <button type=\"button\" class=\"btn btn-warning\" style=\"float: right;\" (click)=\"clear()\">Clear</button>\n   <button type=\"button\" class=\"btn btn-danger\" style=\"float: right;\" (click)=\"cancel()\">Cancel</button>\n  </div>\n</div>\n</mat-card>\n\n</mat-card>\n\n<mat-card class=\"sidenav\" style=\"padding-top: 0px;\">\n\t<div style=\"border-bottom-style: ridge; padding-top: 20px; background-color: whitesmoke;\">\n\t<h4 style=\"padding-left: 16px; margin-top: 0px;\">Group Members</h4>\n\t</div>\n  <div>\n\t<mat-list style=\"padding-top: 0px;\">\n\t\t<mat-list-item *ngFor=\"let student of students\" style=\"border-bottom-style: ridge; text-transform: capitalize;\" >\n\t\t\t<div>\n\t\t\t{{student.first}} {{student.last}}\n\t\t</div>\n\t\t</mat-list-item>\n</mat-list>\n</div>\n</mat-card>\n\n\n\n\n\n<style>\n body{\n    background-color: rgb(245,245,245);\n  }\n\n\n.sidenav {\n  height: auto;\n  z-index: 999;\n  right: 0;\n  background-color: white;\n  overflow-x: hidden;\n  padding-left: 0px;\n  padding-right: 0px;\n  border-style: inset;\n  width: 25%;\n  float: right;\n  margin-top: 20px;\n  height: 85vh;\n  margin-right: 20px;\n}\n.sidenav a {\n  padding: 6px 8px 6px 16px;\n  text-decoration: none;\n  font-size: 25px;\n  color: white;\n  display: block;\n}\n\n.sidenav a:hover {\n  color: grey;\n} \n\n.main {\n   /* Increased text to enable scrolling */\n  left: 0;\n  border-style: outset;\n  height: 100%;\n}\n#main{\n    width: 65%;\n    position: absolute;\n    margin-top: 20px;\n    height: auto;\n    margin-left: 20px;\n}\n\n#mainDiv{\n\tbackground-color: rgb(245,245,245);\n\n}\n#commentDiv{\n    width: 100%%;\n    height: auto;\n    min-height: 22%;\n    padding-right: 0px;\n    padding-left: 0px;\n    padding-top: 0px;\n}\na:hover {\n cursor:pointer;\n}\n#delete: hover{\n\n}\nmat-card{\n\tborder-style: solid !important;\n\tborder-width: 2px;\n}\nimg:hover{\n  cursor: pointer;\n}\n.wrapper {\n   position: relative;\n}\n\n#flipIcon {\n   position: absolute;\n   top: 20px;\n   left: 20px;\n}\n#helpIcon{\n  position: absolute;\n   top: 20px;\n   right: 20px;\n}\ni:hover{\n  cursor: pointer;\n}\n#flipCardButtons .btn{\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n  width: 160px;\n}\n#taskInfoDiv p{\n  padding: 10px;\n}\n\n#flipCard{\n    height: 310px;\n    width: 500px;\n    margin-right: auto;\n    margin-left: auto;\n    margin-bottom: 20px;\n    overflow-x: hidden;\n    overflow-y: hidden;\n    margin-top: 10px;\n}\n#textCardBody{\n  background-color: white;\n}\n#heading{\n    border-bottom-style: ridge;\n    margin-top: 0px;\n    height: 100%;\n    padding-top: 20px;\n    background-color: whitesmoke;\n}\n\n</style>"

/***/ }),

/***/ "./src/app/components/group/group.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/group/group.component.ts ***!
  \*****************************************************/
/*! exports provided: GroupComponent, GroupImagePreviewComponent, ImageHelpDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupComponent", function() { return GroupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupImagePreviewComponent", function() { return GroupImagePreviewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageHelpDialogComponent", function() { return ImageHelpDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_class_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/class.service */ "./src/app/services/class.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_activity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/activity.service */ "./src/app/services/activity.service.ts");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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







var GroupComponent = /** @class */ (function () {
    function GroupComponent(dialog, classService, authService, taskService, activityService, route, router) {
        this.dialog = dialog;
        this.classService = classService;
        this.authService = authService;
        this.taskService = taskService;
        this.activityService = activityService;
        this.route = route;
        this.router = router;
        this.currentTab = 0;
        this.addingComment = false;
        this.flipDiv = false;
        this.answer = false;
        this.add = false;
        this.students = [];
        this.comments = [];
        this.images = [];
        this.submissionArray = [];
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
        if (this.authService.isTeacher()) {
            this.isTeacher = true;
        }
        else {
            this.isTeacher = false;
        }
        this.activityName = this.route.snapshot.paramMap.get('activityname');
        console.log(this.activityName);
        this.activityService.getComments(this.activityName).subscribe(function (data) {
            console.log(data);
            _this.comments = data;
        });
        this.authService.getProfile().subscribe(function (data) {
            _this.user = data.user;
            _this.email = data.user.email;
        });
        this.activityService.getActivityByTitle(this.activityName).subscribe(function (data) {
            console.log(data);
            _this.activity = data;
            _this.submissionArray = data.submissions;
            console.log(_this.submissionArray);
            _this.moduleCode = data.module_code;
            _this.students = data.group;
            _this.taskService.getFilesByActName(_this.activityName).subscribe(function (data) {
                _this.images = data;
                console.log(_this.images);
            });
            console.log(_this.activity);
            console.log(_this.students);
        });
    };
    GroupComponent.prototype.tabChange = function (event) {
        this.currentTab = event.index;
        console.log(this.currentTab);
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
        this.activityService.updateComments(this.activityName, this.commentStr).subscribe(function (data) {
            console.log(data);
        });
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
    GroupComponent.prototype.checkSubmitted = function (taskName) {
        for (var i = 0; i < this.submissionArray.length; i++) {
            if (this.submissionArray[i] != null) {
                if (this.submissionArray[i].email == this.email && this.submissionArray[i].taskName == taskName) {
                    return true;
                }
            }
        }
        return false;
    };
    GroupComponent.prototype.flipDivFunc = function () {
        this.flipDiv = !this.flipDiv;
    };
    GroupComponent.prototype.openPreviewDialog = function (index) {
        var dialogRef = this.dialog.open(GroupImagePreviewComponent, {
            data: {
                image: this.images[index].originalname
            },
            panelClass: 'custom-dialog-container'
        });
    };
    GroupComponent.prototype.openImageHelpDialog = function () {
        var dialogRef = this.dialog.open(ImageHelpDialogComponent, {
            width: "300px"
        });
    };
    GroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-group',
            template: __webpack_require__(/*! ./group.component.html */ "./src/app/components/group/group.component.html"),
            styles: [__webpack_require__(/*! ./group.component.css */ "./src/app/components/group/group.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            _services_class_service__WEBPACK_IMPORTED_MODULE_1__["ClassService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"],
            _services_activity_service__WEBPACK_IMPORTED_MODULE_3__["ActivityService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], GroupComponent);
    return GroupComponent;
}());

var GroupImagePreviewComponent = /** @class */ (function () {
    function GroupImagePreviewComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    GroupImagePreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'preview-dialog',
            template: __webpack_require__(/*! ./group-image-preview-dialog.html */ "./src/app/components/group/group-image-preview-dialog.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"], Object])
    ], GroupImagePreviewComponent);
    return GroupImagePreviewComponent;
}());

var ImageHelpDialogComponent = /** @class */ (function () {
    function ImageHelpDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ImageHelpDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'preview-dialog',
            template: __webpack_require__(/*! ./image-help-dialog.html */ "./src/app/components/group/image-help-dialog.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"], Object])
    ], ImageHelpDialogComponent);
    return ImageHelpDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/group/image-help-dialog.html":
/*!*********************************************************!*\
  !*** ./src/app/components/group/image-help-dialog.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center; height: auto; \" mat-dialog-content>\r\n  <p style=\"font-size: 20px;\">This is an image task! Flip the card, complete the task, then come back here where you will be able to see what your fellow group members submitted!</p>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button-stroked mat-dialog-close cdkFocusInitial>Ok</button>\r\n</div>\r\n"

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

module.exports = "<ngx-flip id=\"loginCard\"  [flip]=\"flipDiv\">\n   <div front style=\"background-color: white; height: 55vh; border-style: ridge; border-radius: 20px;\">\n   \t<div style=\"text-align: center; padding-top: 5%;\">\n    <h1 class=\"display-4\">Welcome to Classroom</h1>\n    <p style=\"margin-left: 10%; margin-right: 10%;\" class=\"lead\">Log in to resume your Classroom experience or register an account above!</p>\n  </div>\n  <div style=\"text-align: center;\">\n  \t<button style=\"margin-bottom: 2%;\" (click)=\"flipDivFunc()\" class=\"btn btn-primary btn-lg\">Log In</button>\n  \t<button class=\"btn btn-primary btn-lg\" (click)=\"openModal(register)\">Register</button>\n  </div>\n   </div>\n\n   <div back style=\"background-color: white; height: 55vh; border-style: ridge; border-radius: 20px;\">\n   \t<div style=\"text-align: center; padding-top: 5%;\">\n   \t<h1 class=\"display-4\">Log In</h1>\n   </div>\n<form style=\"margin-left: 10%; margin-right: 10%;\">\n\t<div class=\"form-group\">\n\t\t<label>Email</label>\n\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Password</label>\n\t\t<input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n\t</div>\n\t<button type=\"button\" (click)=\"onLoginSubmit()\" style=\"margin-bottom: 2%;\" class=\"btn btn-primary\">Log In</button>\n\t<button class=\"btn btn-primary\" (click)=\"flipDivFunc()\">Back</button>\n</form>\n   \n\t</div>\n </ngx-flip>\n\n <ng-template #register style=\"background-color: whitesmoke;\">\n  <div class=\"modal-header\">\n    <h3 class=\"modal-title pull-left\">Register</h3>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div *ngIf=\"regError\" class=\"alert alert-danger\">\n  <strong>Couldn't create user!</strong> Something has gone wrong with the information you have given\n</div>\n  <div class=\"modal-body\">\n  \t<form>\n\t<mat-radio-group style=\"margin-left: 2%;\" (change)=\"onSelectionChange($event)\">\n  <mat-radio-button value=\"student\" >Student</mat-radio-button>\n  <mat-radio-button style=\"margin-left: 2%;\" value=\"teacher\">Teacher</mat-radio-button>\n</mat-radio-group>\n\t<div (click)=\"onClick()\" class=\"form-group\">\n\t\t<label>First Name</label>\n\t\t<div>\n\t\t<i *ngIf=\"isNull(first)\" class=\"glyphicon glyphicon-minus form-control-feedback\"></i>\n\t\t<i *ngIf=\"!isNull(first)\" style=\"color: green;\" class=\"glyphicon glyphicon-ok-circle form-control-feedback\"></i>\n\t\t<input autocomplete=\"off\" type=\"text\" [(ngModel)]=\"first\" name=\"first\" class=\"form-control normal\">\n\t\t</div>\n\t</div>\n\t<div (click)=\"onClick()\" class=\"form-group\">\n\t\t<label>Last Name</label>\n\t\t<div>\n\t\t<i *ngIf=\"isNull(last)\" class=\"glyphicon glyphicon-minus form-control-feedback\"></i>\n\t\t<i *ngIf=\"!isNull(last)\" style=\"color: green;\" class=\"glyphicon glyphicon-ok-circle form-control-feedback\"></i>\n\t\t<input autocomplete=\"off\" type=\"text\" [(ngModel)]=\"last\" name=\"last\" class=\"form-control normal\">\n\t\t</div>\n\t</div>\n\t<div (click)=\"onClick()\" class=\"form-group\">\n\t\t<label>Email</label>\n\t\t<div>\n\t\t<i *ngIf=\"!validateService.validateEmail(regEmail)\" class=\"glyphicon glyphicon-minus form-control-feedback\"></i>\n\t\t<i *ngIf=\"validateService.validateEmail(regEmail)\" style=\"color: green;\" class=\"glyphicon glyphicon-ok-circle form-control-feedback\"></i>\n\t\t<input autocomplete=\"off\" type=\"text\" [(ngModel)]=\"regEmail\" name=\"regEmail\" class=\"form-control normal\">\n\t\t</div>\n\t</div>\n\t<div (click)=\"onClick()\" class=\"form-group\">\n\t\t<label>Password</label>\n\t\t<div>\n\t\t<i *ngIf=\"regPassword?.length <= 3\" class=\"glyphicon glyphicon-minus form-control-feedback\"></i>\n\t\t<i *ngIf=\"regPassword?.length > 3\" style=\"color: green;\" class=\"glyphicon glyphicon-ok-circle form-control-feedback\"></i>\n\t\t<input autocomplete=\"off\"  type=\"password\" [(ngModel)]=\"regPassword\" name=\"regPassword\" class=\"form-control normal\" >\n\t\t</div>\n\t</div>\n\t<div (click)=\"onClick()\" class=\"form-group\">\n\t\t<label>University</label>\n\t\t<div>\n\t\t<i *ngIf=\"isNull(regUniversity)\" class=\"glyphicon glyphicon-minus form-control-feedback\"></i>\n\t\t<i *ngIf=\"!isNull(regUniversity)\" style=\"color: green;\" class=\"glyphicon glyphicon-ok-circle form-control-feedback\"></i>\n\t\t<input autocomplete=\"off\" type=\"text\" [(ngModel)]=\"regUniversity\" name=\"regUniversity\" class=\"form-control normal\">\n\t\t</div>\n\t</div>\n\n<button (click)=\"onRegisterSubmit()\" class=\"btn btn-primary\">Submit</button>\n</form>\n  </div>\n</ng-template>\n\n\n<style>\n#loginCard{\n\twidth: 50%;\n\tmargin-top: 5%;\n\tmargin-left: 25%;\n}\n.btn-primary {\n\tdisplay: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n.form-control{\n\twidth: 85%;\n}\ni{\n\tposition: relative;\n\tfloat: right;\n}\n\n.invalid{\n\tborder-color: red;\n}\n.valid{\n\tborder-color: green!important;\n}\n.normal{\n\tborder-color: black;\n}\n</style>"

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
        this.regError = false;
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
    LoginComponent.prototype.flipDivFunc = function () {
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
                    _this.regError = true;
                    _this.router.navigate(['login']);
                }
            });
        }
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
        //this.modalRef.hide();
        var user = {
            first: this.first,
            last: this.last,
            email: this.regEmail,
            password: this.regPassword,
            university: this.regUniversity
        };
        //Required Fields
        if (!this.validateService.validateRegister(user)) {
            //this.flashMessage.show("Fill in all fields", {cssClass: 'alert-danger', timeout: 3000});
            this.regError = true;
        }
        else {
            this.regError = false;
            this.modalRef.hide();
        }
        //Register User
        if (this.value == 'student') {
            this.authService.registerUser(user).subscribe(function (suc) {
                _this.flashMessage.show("Registration Successful", { cssClass: 'alert-success', timeout: 3000 });
            }, function (err) {
                _this.flashMessage.show("Something went wrong", { cssClass: 'alert-danger', timeout: 3000 });
                //this.router.navigate(['/register']);
                _this.regError = true;
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
    LoginComponent.prototype.onClick = function () {
        this.regError = false;
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

module.exports = "<nav *ngIf=\"nav.visible\" style=\"background-color: #1C56F6;\" class=\"navbar navbar-inverse navbar-fixed-top\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav navbar-left\">\n            <li style=\"padding-top: 15px; font-family: EraserDust\"><a style=\"font-size: 30px;\" class=\"navbar-brand\">Classroom</a></li>\n          </ul>\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li><a *ngIf=\"authService.loggedIn()\"[routerLinkActive]=\"['active']\" [routerLink]=\"['/dashboard']\" matTooltip=\"Dashboard\"><i class=\"glyphicon glyphicon-th-list\"></i></a></li>\n            <li>\n              <a *ngIf=\"authService.loggedIn()\" matTooltip=\"Classes\"  mat-button [matMenuTriggerFor]=\"classMenu\">\n              <i class=\"fa fa-mortar-board\"></i></a>\n              <mat-menu #classMenu=\"matMenu\">\n                <div *ngIf=\"classes.length > 0\">\n                <a style=\"color: black;\" mat-menu-item *ngFor=\"let class of classes\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/classroom/',class.module_code]\" (click)=\"storeCode(class.module_code, class.teacher)\">{{class?.title}}</a></div>\n                <div style=\"text-align: center;\" *ngIf=\"classes.length == 0\">\n                  <h4>You are not enrolled in any classes!</h4>\n                </div>\n              </mat-menu>\n            </li>\n            <li *ngIf=\"authService.loggedIn()\" style=\" cursor: pointer;\">\n              <a mat-button [matMenuTriggerFor]=\"userMenu\" matTooltip=\"User Information\"><i class=\"glyphicon glyphicon-user\"></i></a>\n              <mat-menu (click)=\"$event.stopPropagation()\" #userMenu=\"matMenu\" style=\"height: 300px; max-width: 300px; overflow-x: hidden; overflow-y: hidden; padding-top: 0px;\">\n                <div style=\"height: 250px\">\n                <mat-list (click)=\"$event.stopPropagation()\" *ngIf=\"!isEditable\" style=\"height: 200px; width: 200px;\">\n                  <mat-list-item>\n                    <div style=\"width: 45%;\">\n                    First\n                    </div> \n                    <div style=\"width: 55%;\">\n                    {{first}}\n                  </div>\n                  </mat-list-item>\n                  <mat-list-item>\n                    <div style=\"width: 45%;\">\n                    last\n                    </div> \n                    <div style=\"width: 55%;\">\n                    {{last}}\n                  </div>\n                  </mat-list-item>\n                  <mat-list-item>\n                    <div style=\"width: 45%\">\n                    Email\n                    </div>\n                    <div style=\"width: 55%\">\n                     {{user?.email}}\n                   </div>\n                 </mat-list-item>\n                  <mat-list-item>\n                  <div style=\"width: 45%\">\n                  Role\n                  </div>\n                  <div style=\"width: 55%\">\n                   {{user?.role}}\n                 </div>\n                 </mat-list-item>\n                  <mat-list-item>\n                  <div style=\"width: 45%\">\n                  School\n                  </div>\n                  <div style=\"width: 55%\">\n                   {{user?.university}}\n                 </div>\n               </mat-list-item>\n              </mat-list>\n\n<!--TODO: Only use the users emails to get their info instead of their first and second names. \n  This code is for editing user details but if the users first/last name is altered this could cause problems in other parts of the application-->\n\n              <!-- <mat-list *ngIf=\"isEditable\" style=\"height: 200px; width: 200px;\">\n                <form [formGroup]=\"updateForm\" (click)=\"$event.stopPropagation()\" >\n                  <mat-list-item>\n                    <div style=\"width: 45%;\">\n                    First\n                    </div> \n                    <mat-form-field class=\"example-form-field\">\n                      <input matInput type=\"text\" placeholder=\"{{first}}\" formControlName=\"first\" (click)=\"$event.stopPropagation()\">\n                      <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\">\n                        <mat-icon>close</mat-icon>\n                      </button>\n                      </mat-form-field>\n                  </mat-list-item>\n                  <mat-list-item>\n                    <div style=\"width: 45%;\">\n                    Last\n                    </div> \n                    <mat-form-field class=\"example-form-field\">\n                      <input matInput type=\"text\" placeholder=\"{{last}}\" formControlName=\"last\" (click)=\"$event.stopPropagation()\">\n                      <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\">\n                        <mat-icon>close</mat-icon>\n                      </button>\n                      </mat-form-field>\n                  </mat-list-item>\n                  <mat-list-item>\n                    <div style=\"width: 45%\">\n                    Email\n                    </div>\n                   <div style=\"width: 55%\">\n                   {{user?.email}}\n                 </div>\n                 </mat-list-item>\n                  <mat-list-item>\n                  <div style=\"width: 45%\">\n                  Role\n                  </div>\n                  <div style=\"width: 55%\">\n                   {{user?.role}}\n                 </div>\n                 </mat-list-item>\n                  <mat-list-item>\n                  <div style=\"width: 45%\">\n                  School\n                  </div>\n                   <div style=\"width: 55%\">\n                   {{user?.university}}\n                 </div>\n               </mat-list-item>\n             </form>\n              </mat-list> -->\n\n            </div>\n           <!--  <div style=\"width: 100%; text-align: center;\">\n              <button class=\"btn btn-primary\" *ngIf=\"!isEditable\" (click)=\"edit(); $event.stopPropagation()\">Edit</button>\n               <button class=\"btn btn-primary\" *ngIf=\"isEditable\" (click)=\"edit(); $event.stopPropagation()\">Ok</button>\n              </div> -->\n              </mat-menu>\n            </li>\n             <li><a *ngIf=\"authService.loggedIn()\"(click)=\"onLogOutClick()\" href=\"#\" matTooltip=\"Log Out\"><i class=\"glyphicon glyphicon-log-out\"></i></a></li>\n          </ul>\n        </div>\n      </div>\n    </nav>\n <style>   \nnav{\n  position: static;\n  min-height: 70px;\n  margin: 0;\n}  \nli{\n  padding-top: 10px;\n  list-style: none;\n  margin-right: 5px;\n}\na{\n  font-size: 20px;\n  color: #ffffff;\n}\na:hover{\n  font-weight: bolder;\n  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);\n}\nnav ul{\n  list-style: none;\n}\n.navbar-header a, .navbar-left a, .navbar-right a, li {\n  color: white;\n}\ni{\n  font-size: 30px;\n}\nmat-menu{\n  width: 450px !important;\n}\n.mat-list-item{\n  height: 45px !important;\n}\nmat-form-field{\n  margin-left: 10px;\n  padding-bottom: 0px;\n  width: 70%;\n}\n\n</style>\n"

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







var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, classService, router, flashMessage, nav, _formBuilder) {
        this.authService = authService;
        this.classService = classService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.nav = nav;
        this._formBuilder = _formBuilder;
        this.classes = [];
        this.classIDs = [];
        this.isEditable = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.updateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            first: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
            last: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]()
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                _this.ngOnInit();
            }
        });
        if (this.authService.loggedIn()) {
            this.userSub = this.authService.getProfile().subscribe(function (data) {
                _this.classes = data.user.classes;
                _this.user = data.user;
                _this.first = data.user.first;
                _this.last = data.user.last;
            });
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
    NavbarComponent.prototype.edit = function () {
        if (this.isEditable == false) {
            this.isEditable = true;
        }
        else {
            this.isEditable = false;
            var updateObj = {
                first: this.updateForm.get('first').value,
                last: this.updateForm.get('last').value
            };
            this.authService.updateUser(this.user.email, updateObj).subscribe(function (data) {
                console.log(data);
            });
            if (this.updateForm.get('first').value != null) {
                this.first = this.updateForm.get('first').value;
            }
            if (this.updateForm.get('last').value != null) {
                this.last = this.updateForm.get('last').value;
            }
        }
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
            _services_navbar_service__WEBPACK_IMPORTED_MODULE_3__["NavbarService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], NavbarComponent);
    return NavbarComponent;
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
        return this.http.get('/api/activities/all', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ActivityService.prototype.getActivityByTitle = function (title) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('/api/activity/' + title, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ActivityService.prototype.getActivitiesByModule = function (module) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('/api/activity/module/' + module, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ActivityService.prototype.updateComments = function (activity, comment) {
        var body = {
            activityName: activity,
            comment: comment
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json'
        });
        return this.http.put('/api/activity/comments/update', body, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ActivityService.prototype.deleteActivity = function (activity) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.delete('/api/activity/delete/' + activity, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ActivityService.prototype.updateSubmissions = function (activity, sub) {
        var body = {
            activityname: activity,
            submission: sub
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json'
        });
        return this.http.put('/api/activity/submissions/update', body, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ActivityService.prototype.updateUserSubmission = function (email, sub) {
        var body = {
            submission: sub
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json'
        });
        return this.http.put('/api/user/update/submission/' + email, body, { headers: headers })
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
        return this.http.put('/api/annotation/feedback', body, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ActivityService.prototype.getComments = function (activityName) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('/api/activity/group/' + activityName + '/comments', { headers: headers })
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
        return this.http.post('/api/users/createStud', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.registerTeacher = function (teacher) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/users/createTeacher', teacher, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getUser = function (email) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('/api/user/' + email, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/authenticate', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getProfile = function () {
        this.loadToken();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': this.auth_token
        });
        return this.http.get('http://localhost:3000/profile', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
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
    AuthService.prototype.updateUser = function (email, obj) {
        var body = {
            first: obj.first,
            last: obj.last
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json'
        });
        return this.http.put('/api/user/update/' + email, body, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
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
        return this.http.get('/api/classes', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ClassService.prototype.getClassByModule = function (module) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('/api/class/module=' + module, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ClassService.prototype.getClassById = function (id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('/api/class/id=' + id, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ClassService.prototype.getTeacher = function (email) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('/api/user/' + email, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ClassService.prototype.createClass = function (thisClass) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/class/create', thisClass, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ClassService.prototype.enrollClass = function (module_code, user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/class/enroll/' + module_code, user, { headers: headers })
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
        return this.http.get('/api/files/module=' + module_code, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ClassService.prototype.getImages = function (file) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('/api/files/file=' + file, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ClassService.prototype.getStudents = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('/api/users/students', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ClassService.prototype.getStudentsByModule = function (module) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('/api/classes/students/' + module, { headers: headers })
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
        return this.http.get('/api/files/file=' + filename, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    TaskService.prototype.getTaskByTitle = function (title) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('/api/files/title=' + title, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    TaskService.prototype.getTaskByModule = function (module) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('/api/files/module=' + module, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    TaskService.prototype.getTaskMultiple = function (task, activity) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('/api/files/' + activity + '/' + task, { headers: headers })
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
        return this.http.post('/api/activity/create', activity, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    TaskService.prototype.submitAnnotation = function (annotation) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/annotation/create', annotation, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    TaskService.prototype.getActivityByTitle = function (title) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('/api/activity/' + title, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    TaskService.prototype.getFilesByActName = function (actName) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('/api/files/activityname=' + actName, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    TaskService.prototype.getFilesByModule = function (module) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('/api/files/module=' + module, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    TaskService.prototype.getAnnotations = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('/api/annotations', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    TaskService.prototype.getAnnotationsByEmail = function (email, activityName, taskName) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('/api/annotations/user=' + email + '/activity=' + activityName + '/task=' + taskName, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    TaskService.prototype.deleteAnnotation = function (text) {
        var body = {
            text: text
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.delete('/api/annotations/delete', { headers: headers, body: body })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    TaskService.prototype.deleteTasksByActivity = function (activity) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.delete('/api/tasks/delete/' + activity, { headers: headers })
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