(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0d9b":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("4d63"),n("ac1f"),n("25f0"),n("4160");var i=n("b775"),o={name:"",props:{list:{type:Array,default:function(){return[]}}},data:function(){return{keyword:"",where:{isDeleted:0,type:uni.getStorageSync("productType")},loading:!1,orderby:"create_date",pageOptions:{size:20,current:1}}},computed:{isCN:function(){return"zh-CN"===uni.getStorageSync("lang")}},methods:{getLocaleName:function(t){return this.isCN?t.name:t.name_en},clear:function(){this.where="",this.loadData()},search:function(t){var e=this,n=new RegExp(t,"i"),i=["name","name_en"];i.forEach((function(t){e.where[t]=n})),this.$nextTick((function(){e.loadData()}))},handleItem:function(t){uni.navigateTo({url:"/pages/product-detail/index?id="+t._id})},handleError:function(t){(0,i.errorHandler)(t)},loadData:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=arguments.length>1?arguments[1]:void 0;this.$refs.udb.loadData({clear:t},e&&e())}},onPullDownRefresh:function(){this.loadData(!0,(function(){uni.stopPullDownRefresh()}))},onReachBottom:function(){this.$refs.udb.loadMore()}};e.default=o},"1c71":function(t,e,n){var i=n("4bad");e=i(!1),e.push([t.i,'@charset "UTF-8";\n\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n\n/* 颜色变量 */\n\n/* 行为相关颜色 */\n\n/* 文字基本颜色 */\n\n/* 背景颜色 */\n\n/* 边框颜色 */\n\n/* 尺寸变量 */\n\n/* 文字尺寸 */\n\n/* 图片尺寸 */\n\n/* Border Radius */\n\n/* 水平间距 */\n\n/* 垂直间距 */\n\n/* 透明度 */\n\n/* 文章场景相关 */[data-v-1fde1b38] .u-action-active{width:50px}.product-list .product-item[data-v-1fde1b38]{margin-bottom:%?18?%;padding-bottom:%?36?%;width:calc(50% - %?15?%);overflow:hidden;border-radius:%?14?%;box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)}.product-list .product-item .text[data-v-1fde1b38]{padding-left:%?18?%}.product-list .product-item .title[data-v-1fde1b38]{padding:%?36?% 0 %?6?%;color:#333}.product-list .product-item .title .desc[data-v-1fde1b38]{color:#999;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.min-h-80vh[data-v-1fde1b38]{min-height:80vh}',""]),t.exports=e},"1ce3":function(t,e,n){"use strict";n.r(e);var i=n("cb0a"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"21da":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uSearch:n("9cf5").default,unicloudDb:n("960d").default,uLoading:n("1bfa").default,uImage:n("9df5").default,uEmpty:n("7516").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"p-3 product-home"},[n("u-search",{attrs:{"action-text":t.$t("common.search"),placeholder:t.$t("search.keyword")},on:{search:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)},custom:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)},clear:function(e){arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),n("unicloud-db",{ref:"udb",attrs:{collection:"uni-id-product",options:t.pageOptions,where:t.where,field:"_id,name,name_en,imgUrls,price,status,create_date","page-data":"add",orderby:t.orderby,getcount:!0,"page-size":t.pageOptions.size,"page-current":t.pageOptions.current},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.handleError.apply(void 0,arguments)}},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.data,o=e.loading;return[o?n("v-uni-view",{staticClass:"layout-abs-center min-h-80vh"},[n("u-loading",{attrs:{mode:"circle",color:"#2d8cf0",size:"72"}})],1):n("v-uni-view",{staticClass:"layout-slide flex-wrap pt-3 product-list"},t._l(i,(function(e,i){return n("v-uni-view",{key:i,staticClass:"product-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleItem(e)}}},[n("u-image",{attrs:{src:e.imgUrls[0],width:"320rpx",height:"320rpx",mode:""}}),n("v-uni-view",{staticClass:"text"},[n("v-uni-view",{staticClass:"title text-base text-center"},[t._v(t._s(t.getLocaleName(e)))])],1)],1)})),1),o||i.length?t._e():n("u-empty",{staticClass:"min-h-80vh",attrs:{mode:"search"}})]}}])})],1)},a=[]},"43f6":function(t,e,n){"use strict";n.r(e);var i=n("980b"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"60a3":function(t,e,n){"use strict";var i=n("d51b"),o=n.n(i);o.a},8069:function(t,e,n){"use strict";n.r(e);var i=n("0d9b"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"827e":function(t,e,n){var i=n("1c71");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("7a51ff0a",i,!0,{sourceMap:!1,shadowMode:!1})},"980b":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var i={name:"u-search",props:{shape:{type:String,default:"round"},bgColor:{type:String,default:"#f2f2f2"},placeholder:{type:String,default:"请输入关键字"},clearabled:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},showAction:{type:Boolean,default:!0},actionStyle:{type:Object,default:function(){return{}}},actionText:{type:String,default:"搜索"},inputAlign:{type:String,default:"left"},disabled:{type:Boolean,default:!1},animation:{type:Boolean,default:!1},borderColor:{type:String,default:"none"},value:{type:String,default:""},height:{type:[Number,String],default:64},inputStyle:{type:Object,default:function(){return{}}},maxlength:{type:[Number,String],default:"-1"},searchIconColor:{type:String,default:""},color:{type:String,default:"#606266"},placeholderColor:{type:String,default:"#909399"},margin:{type:String,default:"0"},searchIcon:{type:String,default:"search"}},data:function(){return{keyword:"",showClear:!1,show:!1,focused:this.focus}},watch:{keyword:function(t){this.$emit("input",t),this.$emit("change",t)},value:{immediate:!0,handler:function(t){this.keyword=t}}},computed:{showActionBtn:function(){return!(this.animation||!this.showAction)},borderStyle:function(){return this.borderColor?"1px solid ".concat(this.borderColor):"none"}},methods:{inputChange:function(t){this.keyword=t.detail.value},clear:function(){var t=this;this.keyword="",this.$nextTick((function(){t.$emit("clear")}))},search:function(t){this.$emit("search",t.detail.value);try{uni.hideKeyboard()}catch(t){}},custom:function(){this.$emit("custom",this.keyword);try{uni.hideKeyboard()}catch(t){}},getFocus:function(){this.focused=!0,this.animation&&this.showAction&&(this.show=!0),this.$emit("focus",this.keyword)},blur:function(){var t=this;setTimeout((function(){t.focused=!1}),100),this.show=!1,this.$emit("blur",this.keyword)},clickHandler:function(){this.disabled&&this.$emit("click")}}};e.default=i},"9cf5":function(t,e,n){"use strict";n.r(e);var i=n("c690"),o=n("43f6");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("60a3");var r,c=n("f0c5"),l=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"3783e340",null,!1,i["a"],r);e["default"]=l.exports},"9df5":function(t,e,n){"use strict";n.r(e);var i=n("d478"),o=n("1ce3");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("fd40");var r,c=n("f0c5"),l=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"3fdd3616",null,!1,i["a"],r);e["default"]=l.exports},aaf3:function(t,e,n){"use strict";var i=n("827e"),o=n.n(i);o.a},b77c:function(t,e,n){var i=n("4bad");e=i(!1),e.push([t.i,'@charset "UTF-8";\n\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n\n/* 颜色变量 */\n\n/* 行为相关颜色 */\n\n/* 文字基本颜色 */\n\n/* 背景颜色 */\n\n/* 边框颜色 */\n\n/* 尺寸变量 */\n\n/* 文字尺寸 */\n\n/* 图片尺寸 */\n\n/* Border Radius */\n\n/* 水平间距 */\n\n/* 垂直间距 */\n\n/* 透明度 */\n\n/* 文章场景相关 */.u-image[data-v-3fdd3616]{position:relative;-webkit-transition:opacity .5s ease-in-out;transition:opacity .5s ease-in-out}.u-image__image[data-v-3fdd3616]{width:100%;height:100%}.u-image__loading[data-v-3fdd3616], .u-image__error[data-v-3fdd3616]{position:absolute;top:0;left:0;width:100%;height:100%;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;background-color:#f3f4f6;color:#909399;font-size:%?46?%}',""]),t.exports=e},c690:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uIcon:n("f86b").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-search",style:{margin:t.margin},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickHandler.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"u-content",style:{backgroundColor:t.bgColor,borderRadius:"round"==t.shape?"100rpx":"10rpx",border:t.borderStyle,height:t.height+"rpx"}},[n("v-uni-view",{staticClass:"u-icon-wrap"},[n("u-icon",{staticClass:"u-clear-icon",attrs:{size:30,name:t.searchIcon,color:t.searchIconColor?t.searchIconColor:t.color}})],1),n("v-uni-input",{staticClass:"u-input",style:[{textAlign:t.inputAlign,color:t.color,backgroundColor:t.bgColor},t.inputStyle],attrs:{"confirm-type":"search",value:t.value,disabled:t.disabled,focus:t.focus,maxlength:t.maxlength,"placeholder-class":"u-placeholder-class",placeholder:t.placeholder,"placeholder-style":"color: "+t.placeholderColor,type:"text"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.blur.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputChange.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.getFocus.apply(void 0,arguments)}}}),t.keyword&&t.clearabled&&t.focused?n("v-uni-view",{staticClass:"u-close-wrap",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}},[n("u-icon",{staticClass:"u-clear-icon",attrs:{name:"close-circle-fill",size:"34",color:"#c0c4cc"}})],1):t._e()],1),n("v-uni-view",{staticClass:"u-action",class:[t.showActionBtn||t.show?"u-action-active":""],style:[t.actionStyle],on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.custom.apply(void 0,arguments)}}},[t._v(t._s(t.actionText))])],1)},a=[]},cb0a:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var i={name:"u-image",props:{src:{type:String,default:""},mode:{type:String,default:"aspectFill"},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:"auto"},shape:{type:String,default:"square"},borderRadius:{type:[String,Number],default:0},lazyLoad:{type:Boolean,default:!0},showMenuByLongpress:{type:Boolean,default:!0},loadingIcon:{type:String,default:"photo"},errorIcon:{type:String,default:"error-circle"},showLoading:{type:Boolean,default:!0},showError:{type:Boolean,default:!0},fade:{type:Boolean,default:!0},webp:{type:Boolean,default:!1},duration:{type:[String,Number],default:500},bgColor:{type:String,default:"#f3f4f6"}},data:function(){return{isError:!1,loading:!0,opacity:1,durationTime:this.duration,backgroundStyle:{}}},watch:{src:{immediate:!0,handler:function(t){t?this.isError=!1:(this.isError=!0,this.loading=!1)}}},computed:{wrapStyle:function(){var t={};return t.width=this.$u.addUnit(this.width),t.height=this.$u.addUnit(this.height),t.borderRadius="circle"==this.shape?"50%":this.$u.addUnit(this.borderRadius),t.overflow=this.borderRadius>0?"hidden":"visible",this.fade&&(t.opacity=this.opacity,t.transition="opacity ".concat(Number(this.durationTime)/1e3,"s ease-in-out")),t}},methods:{onClick:function(){this.$emit("click")},onErrorHandler:function(t){this.loading=!1,this.isError=!0,this.$emit("error",t)},onLoadHandler:function(){var t=this;if(this.loading=!1,this.isError=!1,this.$emit("load"),!this.fade)return this.removeBgColor();this.opacity=0,this.durationTime=0,setTimeout((function(){t.durationTime=t.duration,t.opacity=1,setTimeout((function(){t.removeBgColor()}),t.durationTime)}),50)},removeBgColor:function(){this.backgroundStyle={backgroundColor:"transparent"}}}};e.default=i},ce011:function(t,e,n){var i=n("4bad");e=i(!1),e.push([t.i,'@charset "UTF-8";\n\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n\n/* 颜色变量 */\n\n/* 行为相关颜色 */\n\n/* 文字基本颜色 */\n\n/* 背景颜色 */\n\n/* 边框颜色 */\n\n/* 尺寸变量 */\n\n/* 文字尺寸 */\n\n/* 图片尺寸 */\n\n/* Border Radius */\n\n/* 水平间距 */\n\n/* 垂直间距 */\n\n/* 透明度 */\n\n/* 文章场景相关 */.u-search[data-v-3783e340]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-content[data-v-3783e340]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?18?%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-clear-icon[data-v-3783e340]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-input[data-v-3783e340]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;line-height:1;margin:0 %?10?%;color:#909399}.u-close-wrap[data-v-3783e340]{width:%?40?%;height:100%;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:50%}.u-placeholder-class[data-v-3783e340]{color:#909399}.u-action[data-v-3783e340]{font-size:%?28?%;color:#303133;width:0;overflow:hidden;-webkit-transition:all .3s;transition:all .3s;white-space:nowrap;text-align:center}.u-action-active[data-v-3783e340]{width:%?80?%;margin-left:%?10?%}',""]),t.exports=e},d478:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uIcon:n("f86b").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-image",style:[t.wrapStyle,t.backgroundStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.isError?t._e():n("v-uni-image",{staticClass:"u-image__image",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)},attrs:{src:t.src,mode:t.mode,"lazy-load":t.lazyLoad,"show-menu-by-longpress":t.showMenuByLongpress},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.onErrorHandler.apply(void 0,arguments)},load:function(e){arguments[0]=e=t.$handleEvent(e),t.onLoadHandler.apply(void 0,arguments)}}}),t.showLoading&&t.loading?n("v-uni-view",{staticClass:"u-image__loading",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius),backgroundColor:this.bgColor}},[t.$slots.loading?t._t("loading"):n("u-icon",{attrs:{name:t.loadingIcon,width:t.width,height:t.height}})],2):t._e(),t.showError&&t.isError&&!t.loading?n("v-uni-view",{staticClass:"u-image__error",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)}},[t.$slots.error?t._t("error"):n("u-icon",{attrs:{name:t.errorIcon,width:t.width,height:t.height}})],2):t._e()],1)},a=[]},d51b:function(t,e,n){var i=n("ce011");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("33326308",i,!0,{sourceMap:!1,shadowMode:!1})},f0aa:function(t,e,n){var i=n("b77c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("0004ca92",i,!0,{sourceMap:!1,shadowMode:!1})},f75a:function(t,e,n){"use strict";n.r(e);var i=n("21da"),o=n("8069");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("aaf3");var r,c=n("f0c5"),l=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"1fde1b38",null,!1,i["a"],r);e["default"]=l.exports},fd40:function(t,e,n){"use strict";var i=n("f0aa"),o=n.n(i);o.a}}]);