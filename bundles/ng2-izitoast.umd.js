(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	(factory((global.ng2Izitoast = global.ng2Izitoast || {}),global.ng.core));
}(this, (function (exports,_angular_core) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Ng2IzitoastService = (function () {
    function Ng2IzitoastService() {
        this.toastConfigQuestion = {
            timeout: 20000,
            close: false,
            overlay: true,
            toastOnce: true,
            id: 'question',
            zindex: 999,
            title: 'Hey',
            message: 'Are you sure about that?',
            position: 'center',
            buttons: [
                ['<button><b>YES</b></button>', function (instance, toast) {
                        instance.hide(toast, { transitionOut: 'fadeOut' }, 'button');
                    }, true],
                ['<button>NO</button>', function (instance, toast) {
                        instance.hide(toast, { transitionOut: 'fadeOut' }, 'button');
                    }]
            ],
            onClosing: function (instance, toast, closedBy) {
                console.info('Closing | closedBy: ' + closedBy);
            },
            onClosed: function (instance, toast, closedBy) {
                console.info('Closed | closedBy: ' + closedBy);
            }
        };
    }
    /**
     * @param {?} data
     * @return {?}
     */
    Ng2IzitoastService.prototype.show = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        iziToast.show(data);
        return data;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    Ng2IzitoastService.prototype.info = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        iziToast.info(data);
        return data;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    Ng2IzitoastService.prototype.success = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        iziToast.success(data);
        return data;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    Ng2IzitoastService.prototype.warning = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        iziToast.warning(data);
        return data;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    Ng2IzitoastService.prototype.error = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        iziToast.error(data);
        return data;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    Ng2IzitoastService.prototype.question = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var /** @type {?} */ iziToastConfig = Object.assign({}, this.toastConfigQuestion, data);
        iziToast.question(iziToastConfig);
        return iziToastConfig;
    };
    /**
     * @param {?} iziToastClass
     * @return {?}
     */
    Ng2IzitoastService.prototype.progress = /**
     * @param {?} iziToastClass
     * @return {?}
     */
    function (iziToastClass) {
        var /** @type {?} */ toast = document.querySelector(iziToastClass);
        return {
            reset: function () {
                setTimeout(function () {
                    iziToast.progress(toast).reset();
                }, 100);
            },
            pause: function () {
                setTimeout(function () {
                    iziToast.progress(toast).pause();
                }, 100);
            },
            resume: function () {
                setTimeout(function () {
                    iziToast.progress(toast).resume();
                }, 100);
            },
            start: function () {
                setTimeout(function () {
                    iziToast.progress(toast).start();
                }, 100);
            }
        };
    };
    /**
     * @param {?} iziToastClass
     * @param {?=} options
     * @return {?}
     */
    Ng2IzitoastService.prototype.hide = /**
     * @param {?} iziToastClass
     * @param {?=} options
     * @return {?}
     */
    function (iziToastClass, options) {
        if (options === void 0) { options = null; }
        var /** @type {?} */ toast = document.querySelector(iziToastClass);
        iziToast.hide(toast, options);
    };
    /**
     * @return {?}
     */
    Ng2IzitoastService.prototype.destroy = /**
     * @return {?}
     */
    function () {
        iziToast.destroy();
    };
    /**
     * @param {?} data
     * @return {?}
     */
    Ng2IzitoastService.prototype.settings = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        iziToast.settings(data);
        return data;
    };
    Ng2IzitoastService.decorators = [
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    Ng2IzitoastService.ctorParameters = function () { return []; };
    return Ng2IzitoastService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Ng2IziToastModule = (function () {
    function Ng2IziToastModule() {
    }
    Ng2IziToastModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    providers: [Ng2IzitoastService]
                },] },
    ];
    /** @nocollapse */
    Ng2IziToastModule.ctorParameters = function () { return []; };
    return Ng2IziToastModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

exports.Ng2IzitoastService = Ng2IzitoastService;
exports.Ng2IziToastModule = Ng2IziToastModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng2-izitoast.umd.js.map
