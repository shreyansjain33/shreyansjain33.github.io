!function(e,r,t){"use strict";function n(){function e(e,t){return r.extend(new(r.extend(function(){},{prototype:e})),t)}function t(e,r){var t=r.caseInsensitiveMatch,n={originalPath:e,regexp:e},a=n.keys=[];return e=e.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(e,r,t,n){var o="?"===n?n:null,i="*"===n?n:null;return a.push({name:t,optional:!!o}),r=r||"",""+(o?"":r)+"(?:"+(o?r:"")+(i&&"(.+?)"||"([^/]+)")+(o||"")+")"+(o||"")}).replace(/([\/$\*])/g,"\\$1"),n.regexp=new RegExp("^"+e+"$",t?"i":""),n}var n={};this.when=function(e,a){if(n[e]=r.extend({reloadOnSearch:!0},a,e&&t(e,a)),e){var o="/"==e[e.length-1]?e.substr(0,e.length-1):e+"/";n[o]=r.extend({redirectTo:e},t(o,a))}return this},this.otherwise=function(e){return this.when(null,e),this},this.$get=["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache","$sce",function(t,a,o,i,c,u,l,s){function p(e,r){var t=r.keys,n={};if(!r.regexp)return null;var a=r.regexp.exec(e);if(!a)return null;for(var o=1,i=a.length;i>o;++o){var c=t[o-1],u="string"==typeof a[o]?decodeURIComponent(a[o]):a[o];c&&u&&(n[c.name]=u)}return n}function $(){var e=h(),n=m.current;e&&n&&e.$$route===n.$$route&&r.equals(e.pathParams,n.pathParams)&&!e.reloadOnSearch&&!d?(n.params=e.params,r.copy(n.params,o),t.$broadcast("$routeUpdate",n)):(e||n)&&(d=!1,t.$broadcast("$routeChangeStart",e,n),m.current=e,e&&e.redirectTo&&(r.isString(e.redirectTo)?a.path(f(e.redirectTo,e.params)).search(e.params).replace():a.url(e.redirectTo(e.pathParams,a.path(),a.search())).replace()),i.when(e).then(function(){if(e){var t,n,a=r.extend({},e.resolve);return r.forEach(a,function(e,t){a[t]=r.isString(e)?c.get(e):c.invoke(e)}),r.isDefined(t=e.template)?r.isFunction(t)&&(t=t(e.params)):r.isDefined(n=e.templateUrl)&&(r.isFunction(n)&&(n=n(e.params)),n=s.getTrustedResourceUrl(n),r.isDefined(n)&&(e.loadedTemplateUrl=n,t=u.get(n,{cache:l}).then(function(e){return e.data}))),r.isDefined(t)&&(a.$template=t),i.all(a)}}).then(function(a){e==m.current&&(e&&(e.locals=a,r.copy(e.params,o)),t.$broadcast("$routeChangeSuccess",e,n))},function(r){e==m.current&&t.$broadcast("$routeChangeError",e,n,r)}))}function h(){var t,o;return r.forEach(n,function(n,i){!o&&(t=p(a.path(),n))&&(o=e(n,{params:r.extend({},a.search(),t),pathParams:t}),o.$$route=n)}),o||n[null]&&e(n[null],{params:{},pathParams:{}})}function f(e,t){var n=[];return r.forEach((e||"").split(":"),function(e,r){if(0===r)n.push(e);else{var a=e.match(/(\w+)(.*)/),o=a[1];n.push(t[o]),n.push(a[2]||""),delete t[o]}}),n.join("")}var d=!1,m={routes:n,reload:function(){d=!0,t.$evalAsync($)}};return t.$on("$locationChangeSuccess",$),m}]}function a(){this.$get=function(){return{}}}function o(e,t,n){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,o,i,c,u){function l(){p&&(p.$destroy(),p=null),$&&(n.leave($),$=null)}function s(){var i=e.current&&e.current.locals,c=i&&i.$template;if(r.isDefined(c)){var s=a.$new(),d=e.current,m=u(s,function(e){n.enter(e,null,$||o,function(){!r.isDefined(h)||h&&!a.$eval(h)||t()}),l()});$=m,p=d.scope=s,p.$emit("$viewContentLoaded"),p.$eval(f)}else l()}var p,$,h=i.autoscroll,f=i.onload||"";a.$on("$routeChangeSuccess",s),s()}}}function i(e,r,t){return{restrict:"ECA",priority:-400,link:function(n,a){var o=t.current,i=o.locals;a.html(i.$template);var c=e(a.contents());if(o.controller){i.$scope=n;var u=r(o.controller,i);o.controllerAs&&(n[o.controllerAs]=u),a.data("$ngControllerController",u),a.children().data("$ngControllerController",u)}c(n)}}}var c=r.module("ngRoute",["ng"]).provider("$route",n);c.provider("$routeParams",a),c.directive("ngView",o),c.directive("ngView",i),o.$inject=["$route","$anchorScroll","$animate"],i.$inject=["$compile","$controller","$route"]}(window,window.angular);