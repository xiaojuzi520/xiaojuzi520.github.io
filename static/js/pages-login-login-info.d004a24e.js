(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login-info"],{"01ec":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={props:{title:{type:String,default:"立即注册~"},center:{type:Boolean,default:!1}},data:function(){return{}},onShow:function(){},onLoad:function(t){},methods:{}};n.default=a},"287c":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return a}));var a={uForm:e("aa8f").default,uFormItem:e("e0a3").default,uInput:e("d5da").default,uButton:e("d9ad").default},i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"register container"},[e("title-header",{attrs:{title:t.$t("login.complete")}}),e("v-uni-view",{staticClass:"main-content ftf"},[e("v-uni-view",{staticClass:"register-form"},[e("u-form",{ref:"uForm",attrs:{model:t.form,"label-position":"top"}},[e("u-form-item",{attrs:{label:t.$t("login.desc"),required:!0,prop:"desc"}},[e("u-input",{attrs:{required:!0,placeholder:t.$t("login.desc")},model:{value:t.form.desc,callback:function(n){t.$set(t.form,"desc",n)},expression:"form.desc"}})],1),e("u-form-item",{attrs:{label:t.productTypeSelectedLabel,required:!0,prop:"type"}},[e("choose-product-type",{on:{change:function(n){arguments[0]=n=t.$handleEvent(n),t.productTypeChange.apply(void 0,arguments)}}})],1)],1)],1)],1),e("v-uni-view",{staticClass:"footer"},[e("u-button",{staticClass:"confirm-btn",attrs:{disabled:t.btnLoading,loading:t.btnLoading},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.submitForm.apply(void 0,arguments)}}},[t._v(t._s(t.$t("common.submit")))])],1)],1)},r=[]},"33bb":function(t,n,e){"use strict";e.r(n);var a=e("55b1"),i=e.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=i.a},4528:function(t,n,e){"use strict";(function(t){var a=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("d3b7");var i=a(e("f337")),r=a(e("d18b")),c={components:{TitleHeader:i.default,chooseProductType:r.default},data:function(){var t=this;return{label:this.$t("product.choose.label"),form:{desc:"3123",product_type:""},btnLoading:!1,productTypeName:"",rules:{type:[{validator:function(n,e,a){return!!t.productTypeName},message:this.$t("rules.product.type"),trigger:["change","blur"]}],desc:[{required:!0,message:this.$t("rules.desc"),trigger:["change","blur"]}]}}},computed:{productTypeSelectedLabel:function(){var t=this.productTypeName?"：(".concat(this.productTypeName,")"):"";return this.label+t}},onLoad:function(t){},onUnload:function(){},onReady:function(){this.$refs.uForm.setRules(this.rules)},methods:{productTypeChange:function(t){this.productTypeName=t.title,this.form.product_type=t.value},handleMessageScribe:function(){var t=this,n="llTbB84LyUnMGYtHNrzQJomvy-6oQkfV3PAhyDwcKIE";uni.requestSubscribeMessage({tmplIds:[n],success:function(e){"accept"===e[n]?t.submit():t.$toast("将无法接收到小程序的通知")}})},submitForm:function(){this.handleMessageScribe()},submit:function(){var n=this;this.$refs.uForm.validate((function(e){e?(t.log(n.form),n.updateUserInfo()):t.log("验证失败")}))},updateUserInfo:function(){var t=this;uni.showLoading(),this.$request("user/completeUserInfo",this.form).then((function(n){uni.setStorageSync("productType",t.form.product_type),uni.showToast({title:t.$t("choose.success")}),uni.switchTab({url:"/pages/index/index"})})).finally((function(){uni.hideLoading()}))}}};n.default=c}).call(this,e("5a52")["default"])},"4f22":function(t,n,e){var a=e("4bad");n=a(!1),n.push([t.i,'@charset "UTF-8";\n\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n\n/* 颜色变量 */\n\n/* 行为相关颜色 */\n\n/* 文字基本颜色 */\n\n/* 背景颜色 */\n\n/* 边框颜色 */\n\n/* 尺寸变量 */\n\n/* 文字尺寸 */\n\n/* 图片尺寸 */\n\n/* Border Radius */\n\n/* 水平间距 */\n\n/* 垂直间距 */\n\n/* 透明度 */\n\n/* 文章场景相关 */.title-line-header[data-v-5bfd7bc9]{padding:0 %?20?%}.title-line-header.center[data-v-5bfd7bc9]{text-align:center}.title-line-header.center .line[data-v-5bfd7bc9]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.title-line-header .title[data-v-5bfd7bc9]{font-size:%?50?%;font-weight:600;color:#6a88f3;line-height:%?70?%;text-shadow:0 %?10?% %?20?% rgba(32,50,131,.14)}.title-line-header .line[data-v-5bfd7bc9]{margin-left:%?5?%;margin-top:%?22?%;display:-webkit-box;display:-webkit-flex;display:flex}.title-line-header .line .line-main[data-v-5bfd7bc9]{width:%?48?%;height:%?9?%;background:#c8d4ff}',""]),t.exports=n},5015:function(t,n,e){"use strict";e.r(n);var a=e("4528"),i=e.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=i.a},"55b1":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={name:"index",data:function(){return{cards:[{title:this.$t("product.spot"),value:1,icon:"/static/icon/spot-product.png",bgImg:"/static/img/bg-people.png",class:"spot"},{title:this.$t("product.futures"),value:0,icon:"/static/icon/future-product.png",bgImg:"/static/img/bg-record.png",class:"futures"}]}},onLoad:function(){},methods:{updateUserProductType:function(t){this.$emit("change",t)}}};n.default=a},"5c6b":function(t,n,e){var a=e("e7ad");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("d8896470",a,!0,{sourceMap:!1,shadowMode:!1})},"646c":function(t,n,e){var a=e("4f22");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("49b6c426",a,!0,{sourceMap:!1,shadowMode:!1})},"64a6":function(t,n,e){"use strict";e.r(n);var a=e("287c"),i=e("5015");for(var r in i)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(r);e("9927");var c,o=e("f0c5"),s=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"633dd422",null,!1,a["a"],c);n["default"]=s.exports},"91a6":function(t,n,e){"use strict";var a=e("646c"),i=e.n(a);i.a},9927:function(t,n,e){"use strict";var a=e("aab1"),i=e.n(a);i.a},aab1:function(t,n,e){var a=e("e25ee");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("11a4cf46",a,!0,{sourceMap:!1,shadowMode:!1})},acad:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return a}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"layout-col-center w-full"},t._l(t.cards,(function(n){return e("v-uni-view",{key:n.title,staticClass:"layout-abs-center card-item mt-5",class:n.class,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.updateUserProductType(n)}}},[e("img",{staticClass:"card-item-icon",attrs:{src:n.icon,width:"30",height:"30",alt:""}}),e("v-uni-text",{staticClass:"text-xl text-white ml-10"},[t._v(t._s(n.title))])],1)})),1)},r=[]},ad01:function(t,n,e){"use strict";e.r(n);var a=e("01ec"),i=e.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=i.a},d18b:function(t,n,e){"use strict";e.r(n);var a=e("acad"),i=e("33bb");for(var r in i)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(r);e("eda0");var c,o=e("f0c5"),s=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"ac0aa3e0",null,!1,a["a"],c);n["default"]=s.exports},d57a:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return a}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"title-line-header",class:t.center?"center":""},[e("v-uni-view",{staticClass:"title"},[t._v(t._s(t.title))]),e("v-uni-view",{staticClass:"line"},[e("div",{staticClass:"line-main"})])],1)},r=[]},e25ee:function(t,n,e){var a=e("4bad");n=a(!1),n.push([t.i,'@charset "UTF-8";\n\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n\n/* 颜色变量 */\n\n/* 行为相关颜色 */\n\n/* 文字基本颜色 */\n\n/* 背景颜色 */\n\n/* 边框颜色 */\n\n/* 尺寸变量 */\n\n/* 文字尺寸 */\n\n/* 图片尺寸 */\n\n/* Border Radius */\n\n/* 水平间距 */\n\n/* 垂直间距 */\n\n/* 透明度 */\n\n/* 文章场景相关 */.register[data-v-633dd422]{padding:10px 20px}.register .main-content[data-v-633dd422]{margin-top:%?51?%}.register .main-content .register-form[data-v-633dd422]{padding-left:%?20?%;margin-bottom:%?53?%}.register .main-content .register-form .user-name-row .u-border-bottom[data-v-633dd422]:after{width:100%}.register .footer[data-v-633dd422]{margin-top:%?114?%}',""]),t.exports=n},e7ad:function(t,n,e){var a=e("4bad");n=a(!1),n.push([t.i,'@charset "UTF-8";\n\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n\n/* 颜色变量 */\n\n/* 行为相关颜色 */\n\n/* 文字基本颜色 */\n\n/* 背景颜色 */\n\n/* 边框颜色 */\n\n/* 尺寸变量 */\n\n/* 文字尺寸 */\n\n/* 图片尺寸 */\n\n/* Border Radius */\n\n/* 水平间距 */\n\n/* 垂直间距 */\n\n/* 透明度 */\n\n/* 文章场景相关 */.card-item.spot[data-v-ac0aa3e0]{background:url(https://vkceyugu.cdn.bspapp.com/VKCEYUGU-6b121507-e08b-44d2-a95c-b568b76b7844/387bb998-a851-45c5-a9f0-f89b8d1abaa0.png)}.card-item.futures[data-v-ac0aa3e0]{background:url(https://vkceyugu.cdn.bspapp.com/VKCEYUGU-6b121507-e08b-44d2-a95c-b568b76b7844/f2f4decb-cb5d-436d-baae-44c05d92d097.png)}',""]),t.exports=n},eda0:function(t,n,e){"use strict";var a=e("5c6b"),i=e.n(a);i.a},f337:function(t,n,e){"use strict";e.r(n);var a=e("d57a"),i=e("ad01");for(var r in i)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(r);e("91a6");var c,o=e("f0c5"),s=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"5bfd7bc9",null,!1,a["a"],c);n["default"]=s.exports}}]);