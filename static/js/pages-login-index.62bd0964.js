(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-index"],{"3d33":function(n,t,e){"use strict";e.r(t);var i=e("4aca"),o=e.n(i);for(var a in i)["default"].indexOf(a)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(a);t["default"]=o.a},"48e1":function(n,t,e){"use strict";var i;e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return i}));var o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"login-top"},[e("v-uni-view",{staticClass:"welcome"},[e("v-uni-view",{staticClass:"title"},[n._v("Hello，~")]),e("v-uni-text",{staticClass:"f36"},[n._v(n._s(n.$t("login.welcome")))])],1)],1)},a=[]},"4aca":function(n,t,e){"use strict";(function(n){var i=e("ee27").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(e("f3f3"));e("d3b7");var a=e("ed08"),s=i(e("6ccd")),l={components:{LoginTop:s.default},data:function(){var n=this;return{loginParams:{mobile:"13588043792",code:"123456"},pwdType:"password",loading:!1,codeSeconds:0,loginByPass:!0,smsCodeBtnDisabled:!1,userInfo:null,interval:null,hadGetSms:!1,rules:{mobile:[{validator:function(t,e,i){return n.$u.test.mobile(e)},message:this.$t("rules.phone"),trigger:["change","blur"]}]},leftIconStyle:{width:"50rpx",height:"50rpx"},wxLoginCode:""}},onLoad:function(n){this.setLocale()},onUnload:function(){this.clearSmsInterval()},onReady:function(){this.$refs.uForm.setRules(this.rules)},computed:{},methods:{sendMessage:function(){this.$request("user/sendMessage",{mobile:this.loginParams.mobile}).then((function(n){}))},handleMessageScribe:function(){var t="llTbB84LyUnMGYtHNrzQJomvy-6oQkfV3PAhyDwcKIE";uni.requestSubscribeMessage({tmplIds:[t],success:function(e){n.log(e),e[t]}})},setLocale:function(){var n=uni.getStorageSync("lang");n?this.$i18n.locale=n:uni.navigateTo({url:"/pages/chooseLang/index"})},clearSmsInterval:function(){clearInterval(this.interval),this.interval=null,this.smsCodeBtnDisabled=!1},getSmsCode:function(){var t=this;this.hadGetSms=!0,uni.showLoading({title:"loading..."}),this.$request("user/setVerifyCode",{mobile:this.loginParams.mobile}).then((function(e){t.$toast(t.$t("login.sms.success")),t.smsCodeBtnDisabled=!0,t.codeSeconds=60,t.interval=setInterval((function(){0===t.codeSeconds&&t.clearSmsInterval(),t.codeSeconds--}),1e3),n.log(e)})).catch((function(){t.clearSmsInterval(),uni.hideLoading()})).finally((function(){}))},navTo:function(n){uni.navigateTo({url:n})},handleLoginClick:function(){this.toLogin()},toLogin:function(){var n=this;this.$refs.uForm.validate((function(t){if(t){n.loading=!0;var e="web",i="";n.$request("user/loginBySms",(0,o.default)((0,o.default)({},n.loginParams),{},{deviceId:(0,a.getDeviceUUID)(),origin:e,wxUserInfo:i,wxLoginCode:n.wxLoginCode})).then((function(t){n.handleLoginResult(t)})).finally((function(){n.loading=!1,n.clearSmsInterval()}))}}))},handleLoginResult:function(t){t.userInfo;var e=t.status,i=t.product_type;n.log(t),"register"===t.type?(this.$toast(this.$t("login.tips.fill.info")),void 0===i&&uni.navigateTo({url:"/pages/login/login-info"})):0===e?(this.setLocal(t),void 0===i?uni.navigateTo({url:"/pages/login/login-info"}):(uni.setStorageSync("productType",i),uni.switchTab({url:"/pages/index/index"}))):2===e?void 0===i?(this.setLocal(t),uni.navigateTo({url:"/pages/login/login-info"})):this.$toast(this.$t("login.tips.audit")):1===e&&this.$toast(this.$t("login.tips.audit.reject"))},setLocal:function(n){uni.setStorageSync("uni_id_token",n.token),uni.setStorageSync("uni_id_token_expired",n.tokenExpired),uni.setStorageSync("mobile",n.mobile),uni.setStorageSync("userInfo",JSON.stringify(n.userInfo))},register:function(){this.navTo("/pages/register-forget/index")},forget:function(){this.navTo("/pages/register-forget/index?type=forget")}}};t.default=l}).call(this,e("5a52")["default"])},"4e72":function(n,t,e){var i=e("ad67");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var o=e("4f06").default;o("60abd74e",i,!0,{sourceMap:!1,shadowMode:!1})},"5fcc":function(n,t,e){"use strict";var i=e("4e72"),o=e.n(i);o.a},"69ec":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{}},onShow:function(){},onLoad:function(n){},methods:{}};t.default=i},"6ccd":function(n,t,e){"use strict";e.r(t);var i=e("48e1"),o=e("f2aa");for(var a in o)["default"].indexOf(a)<0&&function(n){e.d(t,n,(function(){return o[n]}))}(a);e("5fcc");var s,l=e("f0c5"),r=Object(l["a"])(o["default"],i["b"],i["c"],!1,null,"ba66e7ec",null,!1,i["a"],s);t["default"]=r.exports},"7c9e":function(n,t,e){var i=e("24fb");t=i(!1),t.push([n.i,'@charset "UTF-8";\n\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n\n/* 颜色变量 */\n\n/* 行为相关颜色 */\n\n/* 文字基本颜色 */\n\n/* 背景颜色 */\n\n/* 边框颜色 */\n\n/* 尺寸变量 */\n\n/* 文字尺寸 */\n\n/* 图片尺寸 */\n\n/* Border Radius */\n\n/* 水平间距 */\n\n/* 垂直间距 */\n\n/* 透明度 */\n\n/* 文章场景相关 */.login[data-v-ff4a3ba2]{min-height:100vh;padding:%?25?% %?30?%}.login .tabs[data-v-ff4a3ba2]{padding:0 %?20?%}.login .tabs .tab-item[data-v-ff4a3ba2]{display:inline-block;font-size:%?36?%;font-weight:600;color:#333;line-height:%?50?%}.login .tabs .item-text[data-v-ff4a3ba2]{padding-bottom:%?11?%}.login .tabs .item-line[data-v-ff4a3ba2]{width:50%;margin:auto;height:%?2?%;background:#52aef8}.login .login-content .main .login-type-form[data-v-ff4a3ba2]{padding:0 %?20?%;margin-bottom:%?53?%}.login .login-content .main .login-type-form .input-item[data-v-ff4a3ba2]{position:relative;height:%?90?%;line-height:%?90?%;margin-bottom:%?30?%}.login .login-content .main .login-type-form .input-item .iconfont[data-v-ff4a3ba2]{font-size:%?50?%;position:absolute;left:0}.login .login-content .main .login-type-form .input-item .login-type-input[data-v-ff4a3ba2]{height:%?90?%;padding-left:%?80?%;border-bottom:%?1?% solid rgba(0,0,0,.1)}.login .login-content .main .login-type-form .input-item .sms-code-btn[data-v-ff4a3ba2], .login .login-content .main .login-type-form .input-item .sms-code-resend[data-v-ff4a3ba2]{width:%?240?%;font-size:%?26?%}.login .login-content .main .login-footer[data-v-ff4a3ba2]{margin-top:%?25?%;padding:0 %?50?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-size:%?32?%;color:#666}.login .login-content .main .login-footer .login-footer-left[data-v-ff4a3ba2]{color:#333}.login .login-content .main .login-footer .forget[data-v-ff4a3ba2]{color:#fe981f}.login[data-v-ff4a3ba2]  .u-form-item--left__content__icon{display:-webkit-box;display:-webkit-flex;display:flex}.login .sms-code-btn[data-v-ff4a3ba2]{width:%?200?%;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-left:1px solid #ccc;text-align:right;font-size:%?30?%;color:#6a88f3}.login .sms-code-btn.disabled[data-v-ff4a3ba2]{pointer-events:none;cursor:not-allowed}',""]),n.exports=t},"7e62":function(n,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return i}));var i={uForm:e("aa8f").default,uFormItem:e("e0a3").default,uInput:e("d5da").default,uButton:e("d9ad").default},o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"login"},[e("login-top"),e("v-uni-view",{staticClass:"tabs"},[e("v-uni-view",{staticClass:"tab-item"},[e("v-uni-view",{staticClass:"item-text"},[n._v(n._s(n.$t("login.smsLogin")))]),e("v-uni-view",{staticClass:"item-line"})],1)],1),e("v-uni-view",{staticClass:"login-content ftf"},[e("v-uni-view",{staticClass:"main"},[e("v-uni-view",{staticClass:"login-type-form"},[e("u-form",{ref:"uForm",attrs:{model:n.loginParams,rules:n.rules,"border-bottom":!1}},[e("u-form-item",{attrs:{prop:"mobile","left-icon":"/static/login/account.png","left-icon-style":n.leftIconStyle}},[e("u-input",{attrs:{type:"number",clearable:!0,"left-icon":"/static/login/account.png",placeholder:n.$t("login.phone"),maxlength:"11"},model:{value:n.loginParams.mobile,callback:function(t){n.$set(n.loginParams,"mobile",t)},expression:"loginParams.mobile"}})],1),e("u-form-item",{attrs:{prop:"smsCode","left-icon":"/static/login/sms-edit.png","left-icon-style":n.leftIconStyle}},[e("u-input",{attrs:{placeholder:n.$t("login.sms"),maxlength:"6"},model:{value:n.loginParams.code,callback:function(t){n.$set(n.loginParams,"code",t)},expression:"loginParams.code"}}),e("template",{slot:"right"},[e("v-uni-view",{class:["sms-code-btn",n.smsCodeBtnDisabled?"disabled":""],on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.getSmsCode.apply(void 0,arguments)}}},[n.smsCodeBtnDisabled?e("v-uni-text",{staticClass:"sms-code-resend"},[n._v(n._s(n.codeSeconds+"s"))]):e("v-uni-text",{staticClass:"get-text"},[n._v(n._s(n.$t("login.sms.get")))])],1)],1)],2)],1)],1),e("u-button",{staticClass:"confirm-btn",attrs:{disabled:!n.loginParams.code,loading:n.loading,"open-type":"getUserProfile"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.handleLoginClick.apply(void 0,arguments)}}},[n._v(n._s(n.$t("login.submit")))])],1)],1)],1)},a=[]},"8eaf":function(n,t,e){"use strict";var i=e("bd4d"),o=e.n(i);o.a},ad67:function(n,t,e){var i=e("24fb");t=i(!1),t.push([n.i,'@charset "UTF-8";\n\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n\n/* 颜色变量 */\n\n/* 行为相关颜色 */\n\n/* 文字基本颜色 */\n\n/* 背景颜色 */\n\n/* 边框颜色 */\n\n/* 尺寸变量 */\n\n/* 文字尺寸 */\n\n/* 图片尺寸 */\n\n/* Border Radius */\n\n/* 水平间距 */\n\n/* 垂直间距 */\n\n/* 透明度 */\n\n/* 文章场景相关 */.login-top[data-v-ba66e7ec]{padding:0 %?20?%;padding-bottom:%?60?%}.login-top .welcome[data-v-ba66e7ec]{font-weight:500;color:#6a88f3;line-height:%?50?%}.login-top .welcome .title[data-v-ba66e7ec]{font-size:%?70?%;font-weight:600;line-height:%?98?%;text-shadow:0 %?20?% %?30?% rgba(32,50,131,.14)}',""]),n.exports=t},bd4d:function(n,t,e){var i=e("7c9e");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var o=e("4f06").default;o("1cff3b26",i,!0,{sourceMap:!1,shadowMode:!1})},ed08:function(n,t,e){"use strict";var i=e("ee27").default;Object.defineProperty(t,"__esModule",{value:!0}),t.getDeviceUUID=s,t.handleLoginAuth=t.formatTime=void 0,e("d3b7"),e("25f0");var o=i(e("5a0c")),a=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY/MM/DD HH:mm:ss";return(0,o.default)(n).format(t)};function s(){var n=uni.getStorageSync("uni_deviceId")||uni.getSystemInfoSync().deviceId||uni.getSystemInfoSync().system+"_"+Math.random().toString(36).substr(2);return uni.setStorageSync("uni_deviceId",n),n}t.formatTime=a;var l=function(n,t,e){var i=uni.getStorageSync("wxUserInfo");i?e?e():n&&n():wx.getUserProfile({desc:"用于完善用户资料"}).then((function(t){uni.setStorageSync("wxUserInfo",t.userInfo),n&&n()})).catch((function(n){"getUserProfile:fail auth deny"===n.errMsg&&(uni.showToast({title:"用户信息未授权",icon:"none"}),t&&t())})).finally((function(){e&&e()}))};t.handleLoginAuth=l},efcf:function(n,t,e){"use strict";e.r(t);var i=e("7e62"),o=e("3d33");for(var a in o)["default"].indexOf(a)<0&&function(n){e.d(t,n,(function(){return o[n]}))}(a);e("8eaf");var s,l=e("f0c5"),r=Object(l["a"])(o["default"],i["b"],i["c"],!1,null,"ff4a3ba2",null,!1,i["a"],s);t["default"]=r.exports},f2aa:function(n,t,e){"use strict";e.r(t);var i=e("69ec"),o=e.n(i);for(var a in i)["default"].indexOf(a)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(a);t["default"]=o.a}}]);