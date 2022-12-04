"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[42109],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=d(a),h=i,k=s["".concat(o,".").concat(h)]||s[h]||u[h]||r;return a?n.createElement(k,l(l({ref:t},m),{},{components:a})):n.createElement(k,l({ref:t},m))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=h;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:i,l[1]=p;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},22502:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var n=a(87462),i=(a(67294),a(3905));const r={title:"Selector And Rule Config",keywords:["Selector","Rule"],description:"detailed explanation of selector and rule"},l=void 0,p={unversionedId:"user-guide/admin-usage/selector-and-rule",id:"version-2.4.0/user-guide/admin-usage/selector-and-rule",isDocsHomePage:!1,title:"Selector And Rule Config",description:"detailed explanation of selector and rule",source:"@site/versioned_docs/version-2.4.0/user-guide/admin-usage/selector-and-rule.md",sourceDirName:"user-guide/admin-usage",slug:"/user-guide/admin-usage/selector-and-rule",permalink:"/docs/2.4.0/user-guide/admin-usage/selector-and-rule",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.0/user-guide/admin-usage/selector-and-rule.md",version:"2.4.0",frontMatter:{title:"Selector And Rule Config",keywords:["Selector","Rule"],description:"detailed explanation of selector and rule"},sidebar:"version-2.4.0/tutorialSidebar",previous:{title:"Role Management",permalink:"/docs/2.4.0/user-guide/admin-usage/role-management"},next:{title:"Admin Property Config",permalink:"/docs/2.4.0/user-guide/property-config/admin-property-config"}},o=[{value:"Features",id:"features",children:[]},{value:"Selector",id:"selector",children:[]},{value:"Rule",id:"rule",children:[]},{value:"Match Strategy",id:"match-strategy",children:[]},{value:"Condition Parameter Data",id:"condition-parameter-data",children:[]},{value:"Condition Match Strategy",id:"condition-match-strategy",children:[]}],d={toc:o};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("p",null,"This document will introduce the use of selectors and rules in the Apache ShenYu background management system. For the concept and design of selectors and rules, please refer to ",(0,i.kt)("inlineCode",{parentName:"p"},"Flow Control"),"."),(0,i.kt)("img",{src:"/img/shenyu/dataSync/flow-control-en.png",width:"60%",height:"50%"}),(0,i.kt)("p",null,"Please refer to the ",(0,i.kt)("inlineCode",{parentName:"p"},"deployment")," document, choose a way to start ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),". For example, ",(0,i.kt)("a",{parentName:"p",href:"../../deployment/deployment-local"},"local deployment"),". After startup, visit ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:9095"),", the default username and password are: ",(0,i.kt)("inlineCode",{parentName:"p"},"admin")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"123456")," ."),(0,i.kt)("h2",{id:"selector"},"Selector"),(0,i.kt)("p",null,"All plugins are displayed in the PluginList, and selectors and rules can be added to each plugin:"),(0,i.kt)("img",{src:"/img/shenyu/basicConfig/pluginHandle/selector_rule_page_en.jpg",width:"80%",height:"80%"}),(0,i.kt)("p",null,"For example, add a selector to the ",(0,i.kt)("inlineCode",{parentName:"p"},"divide")," plugin:"),(0,i.kt)("img",{src:"/img/shenyu/basicConfig/pluginHandle/divide_selector_config_en.jpg",width:"80%",height:"80%"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"selector detailed explanation\uff1a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Name: create your selector with a distinguish name."),(0,i.kt)("li",{parentName:"ul"},"Type: Choose request matching strategy.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"custom"),": Only handle requests that meet the following matching conditions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"full"),": Handle all requests."))),(0,i.kt)("li",{parentName:"ul"},"MatchType: Condition combination type.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"and"),"\uff1a Need to meet all conditions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"or"),": Meet any of the conditions."))),(0,i.kt)("li",{parentName:"ul"},"Conditions\uff1a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"uri: filter request with uri."),(0,i.kt)("li",{parentName:"ul"},"header: filter request with request header."),(0,i.kt)("li",{parentName:"ul"},"query: filter request with query string."),(0,i.kt)("li",{parentName:"ul"},"ip: filter request with your real ip."),(0,i.kt)("li",{parentName:"ul"},"host: filter request with your real host."),(0,i.kt)("li",{parentName:"ul"},"post: not recommend to use."),(0,i.kt)("li",{parentName:"ul"},"cookie: filter request with cookie."),(0,i.kt)("li",{parentName:"ul"},"req_method: filter request with request method."),(0,i.kt)("li",{parentName:"ul"},"condition match:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"match : fuzzy string matching\uff0crecommend to combine with uri\uff0csupport path-matching.\uff08/test/**)."),(0,i.kt)("li",{parentName:"ul"},"= : matches only if they are equal."),(0,i.kt)("li",{parentName:"ul"},"regEx : regex matching\uff0cmatch characters in regex expression."),(0,i.kt)("li",{parentName:"ul"},"like : string fuzzy matching."),(0,i.kt)("li",{parentName:"ul"},"contains: when it contains the specified value, it matches."),(0,i.kt)("li",{parentName:"ul"},"SpEl: SpEl expression matches."),(0,i.kt)("li",{parentName:"ul"},"Groovy: match through Groovy."),(0,i.kt)("li",{parentName:"ul"},"TimeBefore: before the specified time."),(0,i.kt)("li",{parentName:"ul"},"TimeAfter: after the specified time."))))),(0,i.kt)("li",{parentName:"ul"},"Continued: whether the subsequent selector is still executed."),(0,i.kt)("li",{parentName:"ul"},"PrintLogs: it will print the matching log with the open option enabled."),(0,i.kt)("li",{parentName:"ul"},"Enable: whether to enable the plugin."),(0,i.kt)("li",{parentName:"ul"},"Order\uff1athe smaller will have high priorty to execute among multi-selectors."),(0,i.kt)("li",{parentName:"ul"},"Handler: The operation when the request matches the selector."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"the above picture means: when the prefix of the request uri is ",(0,i.kt)("inlineCode",{parentName:"p"},"/http"),", it will redirect to this service ",(0,i.kt)("inlineCode",{parentName:"p"},"127.0.0.1:8080"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"selector advice : combine ",(0,i.kt)("inlineCode",{parentName:"p"},"uri")," conditon and ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," prefix\uff08/contextPath\uff09as the first request filter."))),(0,i.kt)("h2",{id:"rule"},"Rule"),(0,i.kt)("img",{src:"/img/shenyu/basicConfig/pluginHandle/plugin_rule_config_en.jpg",width:"80%",height:"80%"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"when the request was passed by the seletor, then it will be processed by the rule, the final filter.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"rule is the final confirmation about how to execute request logically.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"rule detailed explanation\uff1a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Name\uff1acreate your rule with a distinguish name.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"MatchType: you can combine these conditions with 'and' , 'or' operators.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Conditions\uff1a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"uri: filter request with uri.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"header: filter request with request header.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"query: filter request with query string.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"ip: filter request with your real ip.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"host: filter request with your real host.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"post: not recommend to use.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"cookie: filter request with cookie.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"req_method: filter request with request method.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"condition match:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"match : fuzzy string matching\uff0crecommend to combine with uri\uff0csupport path-matching.\uff08/test/**)."),(0,i.kt)("li",{parentName:"ul"},"= : matches only if they are equal."),(0,i.kt)("li",{parentName:"ul"},"regEx : regex matching\uff0cmatch characters in regex expression."),(0,i.kt)("li",{parentName:"ul"},"like : string fuzzy matching."),(0,i.kt)("li",{parentName:"ul"},"contains: when it contains the specified value, it matches."),(0,i.kt)("li",{parentName:"ul"},"SpEl: SpEl expression matches."),(0,i.kt)("li",{parentName:"ul"},"Groovy: match through Groovy."),(0,i.kt)("li",{parentName:"ul"},"TimeBefore: before the specified time."),(0,i.kt)("li",{parentName:"ul"},"TimeAfter: after the specified time."))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"PrintLogs: it will print the matching log with the open option enabled.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Enable: whether to enable the plugin.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Order\uff1athe smaller will have high priorty to execute among multi-rules.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"handle: The operation when the request matches the rule.")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"above picture means: when the request ",(0,i.kt)("inlineCode",{parentName:"p"},"uri")," equals to ",(0,i.kt)("inlineCode",{parentName:"p"},"/http/order/save"),", it will execute based on this rule\uff0cload strategy is ",(0,i.kt)("inlineCode",{parentName:"p"},"random"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"rule advice: combine ",(0,i.kt)("inlineCode",{parentName:"p"},"uri")," condition with ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," the real ",(0,i.kt)("inlineCode",{parentName:"p"},"uri path")," condition as the final filter.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"combine selector means \uff1awhen the request ",(0,i.kt)("inlineCode",{parentName:"p"},"uri")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"/http/order/save"),", it will be redicted to ",(0,i.kt)("inlineCode",{parentName:"p"},"127.0.0.1:8080")," by ",(0,i.kt)("inlineCode",{parentName:"p"},"random")," method."))),(0,i.kt)("h2",{id:"match-strategy"},"Match Strategy"),(0,i.kt)("p",null,"Matching mode refers to the matching mode between multiple conditions when a selector or rule is matched. Currently, ",(0,i.kt)("inlineCode",{parentName:"p"},"and")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"or")," are supported."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"and")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"and")," indicates that a selector or rule can be matched only if more than one condition is met."),(0,i.kt)("p",{parentName:"li"},"The example below shows that a request must meet both the condition ",(0,i.kt)("inlineCode",{parentName:"p"},"uri = /http/order/findById")," and the condition ",(0,i.kt)("inlineCode",{parentName:"p"},"id = 100"),"  to match this rule."),(0,i.kt)("p",{parentName:"li"},"For example, a real request ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:9195/http/order/findById?id=100")," satisfies both conditions, this rule can be matched."))),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(63105).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"or")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"or")," indicates that one of the conditions matches a selector or rule."),(0,i.kt)("p",{parentName:"li"},"The example below shows that a request matches this rule if it meets either the condition ",(0,i.kt)("inlineCode",{parentName:"p"},"uri = /http/order/findById")," or the condition ",(0,i.kt)("inlineCode",{parentName:"p"},"id = 100"),"."),(0,i.kt)("p",{parentName:"li"},"For example, a real request ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:9195/http/order/findById?id=99")," satisfies the first condition ",(0,i.kt)("inlineCode",{parentName:"p"},"uri = /http/order/findById"),", so it can also match this rule."))),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(46058).Z})),(0,i.kt)("h2",{id:"condition-parameter-data"},"Condition Parameter Data"),(0,i.kt)("p",null,"Conditional parameter Settings in selectors and rules are explained again. Suppose the following is a request header for an ",(0,i.kt)("inlineCode",{parentName:"p"},"Http")," request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"GET http://localhost:9195/http/order/findById?id=100\nAccept: application/json\nCookie: shenyu=shenyu_cookie\nMyHeader: custom-header\n")),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"ShenYu")," you can set different conditional parameters to get real data from the request information."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the condition parameter is ",(0,i.kt)("inlineCode",{parentName:"li"},"uri"),", then the actual data retrieved is ",(0,i.kt)("inlineCode",{parentName:"li"},"/http/order/findById"),";"),(0,i.kt)("li",{parentName:"ul"},"If the condition parameter is ",(0,i.kt)("inlineCode",{parentName:"li"},"header"),", the field name is ",(0,i.kt)("inlineCode",{parentName:"li"},"MyHeader"),", then the actual data retrieved is ",(0,i.kt)("inlineCode",{parentName:"li"},"custom-header"),";"),(0,i.kt)("li",{parentName:"ul"},"If the condition parameter is ",(0,i.kt)("inlineCode",{parentName:"li"},"query"),", the field name is ",(0,i.kt)("inlineCode",{parentName:"li"},"id"),", then the actual data retrieved is ",(0,i.kt)("inlineCode",{parentName:"li"},"100"),";"),(0,i.kt)("li",{parentName:"ul"},"If the condition parameter is ",(0,i.kt)("inlineCode",{parentName:"li"},"ip"),", then the actual data retrieved is ",(0,i.kt)("inlineCode",{parentName:"li"},"0:0:0:0:0:0:0:1"),";"),(0,i.kt)("li",{parentName:"ul"},"If the condition parameter is ",(0,i.kt)("inlineCode",{parentName:"li"},"host"),", then the actual data retrieved is ",(0,i.kt)("inlineCode",{parentName:"li"},"0:0:0:0:0:0:0:1"),";"),(0,i.kt)("li",{parentName:"ul"},"If the condition parameter is ",(0,i.kt)("inlineCode",{parentName:"li"},"post"),", the field name is ",(0,i.kt)("inlineCode",{parentName:"li"},"contextPath"),", then the actual data retrieved is ",(0,i.kt)("inlineCode",{parentName:"li"},"/http"),";"),(0,i.kt)("li",{parentName:"ul"},"If the condition parameter is ",(0,i.kt)("inlineCode",{parentName:"li"},"cookie"),", the field name is ",(0,i.kt)("inlineCode",{parentName:"li"},"shenyu"),", then the actual data retrieved is ",(0,i.kt)("inlineCode",{parentName:"li"},"shenyu_cookie"),";"),(0,i.kt)("li",{parentName:"ul"},"If the condition parameter is ",(0,i.kt)("inlineCode",{parentName:"li"},"req_method"),", then the actual data retrieved is ",(0,i.kt)("inlineCode",{parentName:"li"},"GET"),";")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"uri"),"(recommended)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"uri")," matches are based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"uri")," in the path you requested, and there is almost no change in the front end when accessing the gateway.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When using ",(0,i.kt)("inlineCode",{parentName:"p"},"match"),", the principle is the same as ",(0,i.kt)("inlineCode",{parentName:"p"},"SpringMVC")," fuzzy matching.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In selectors, it is recommended to use prefixes in ",(0,i.kt)("inlineCode",{parentName:"p"},"URI")," for matching, while in rules, specific paths are used for matching.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When using this matching method, fill in the value of the matching field, as shown in the figure ",(0,i.kt)("inlineCode",{parentName:"p"},"/http/**"),"."))),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(34890).Z}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"header")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"header")," is matched against the field values in your ",(0,i.kt)("inlineCode",{parentName:"p"},"http")," request header.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When using this matching method, you need to fill in the field name and field value. The examples in the figure are ",(0,i.kt)("inlineCode",{parentName:"p"},"MyHeader")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"custom-header")," respectively"))),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(92634).Z}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"query")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This matches the query parameters in your ",(0,i.kt)("inlineCode",{parentName:"p"},"uri"),", such as ",(0,i.kt)("inlineCode",{parentName:"p"},"/test?id=1"),", then the matching method can be selected.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When using this matching method, you need to fill in the field name and field value. The examples in the figure are ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," and 1 respectively."))),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(80235).Z}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ip")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This is matched against the ",(0,i.kt)("inlineCode",{parentName:"p"},"http")," caller's ",(0,i.kt)("inlineCode",{parentName:"p"},"ip"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Especially in waf plugin, if an ",(0,i.kt)("inlineCode",{parentName:"p"},"ip")," address is found to be attacked, you can add a matching condition, fill in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ip"),", deny the ",(0,i.kt)("inlineCode",{parentName:"p"},"ip")," access.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you use nginx proxy before ShenYu, you can get the right ip with refering to ",(0,i.kt)("a",{parentName:"p",href:"../../developer/custom-parsing-ip-and-host"},"parsing-ip-and-host"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When using this matching method, fill in the value of the matching field, as shown in the example ",(0,i.kt)("inlineCode",{parentName:"p"},"192.168.236.75"),"."))),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(36518).Z})))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"host")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This is matched against the ",(0,i.kt)("inlineCode",{parentName:"p"},"http")," caller's ",(0,i.kt)("inlineCode",{parentName:"p"},"host"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Especially in waf plugin, if an ",(0,i.kt)("inlineCode",{parentName:"p"},"host")," address is found to be attacked, you can add a matching condition, fill in the ",(0,i.kt)("inlineCode",{parentName:"p"},"host"),", deny the ",(0,i.kt)("inlineCode",{parentName:"p"},"host")," access.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you use nginx proxy before ShenYu, you can get the right ip with refering to ",(0,i.kt)("a",{parentName:"p",href:"../../developer/custom-parsing-ip-and-host"},"parsing-ip-and-host"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When using this matching method, fill in the value of the matching field, as shown in the example ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost"),"."))),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(96304).Z}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"post")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To get condition parameters from the request context(",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.api.context.ShenyuContext"),"), reflection is required to get the value of the field, which is not recommended.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When using this matching method, the field name and value need to be specified. The examples in the figure are ",(0,i.kt)("inlineCode",{parentName:"p"},"contextPath")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"/http")," respectively."))),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(99935).Z})))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"cookie")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This is matched against the ",(0,i.kt)("inlineCode",{parentName:"p"},"Cookie")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"http")," caller's request header as a condition parameter.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When using this matching method, you need to fill in the field name and field value. The examples in the figure are ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu_cookie")," respectively."))),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(45327).Z}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"req_method")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This matches the request form of the ",(0,i.kt)("inlineCode",{parentName:"p"},"http")," caller, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"GET"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"POST"),", etc.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When using this matching method, fill in the value of the matching field, as shown in the example ",(0,i.kt)("inlineCode",{parentName:"p"},"GET"),"."))),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(26772).Z})))),(0,i.kt)("p",null,"For a more in-depth understanding of condition parameter fetching, read the source code, package name is ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.base.condition.data"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Condition Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Class"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"uri")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"URIParameterData"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"header")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"HeaderParameterData"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"query")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"QueryParameterData"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ip")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"IpParameterData"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"host")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"HostParameterData"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"post")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PostParameterData"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"cookie")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"CookieParameterData"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"req_method")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"RequestMethodParameterData"))))),(0,i.kt)("h2",{id:"condition-match-strategy"},"Condition Match Strategy"),(0,i.kt)("p",null,"Condition parameters allow you to retrieve the actual data of the request. How the real data matches the conditional data preset by the selector or rule is realized through the condition match strategy."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"match")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"match")," supports fuzzy matching (",(0,i.kt)("inlineCode",{parentName:"li"},"/**"),"). Request ",(0,i.kt)("inlineCode",{parentName:"li"},"/http/order/findById")," will match if your selector condition is set as follows.")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(96835).Z}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"=")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"=")," means that the requested real data is equal to the preset condition data. If your selector condition is set to request uri equal to ",(0,i.kt)("inlineCode",{parentName:"li"},"/http/order/findById"),", then request",(0,i.kt)("inlineCode",{parentName:"li"},"/http/order/findById?id=1")," can match it.")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(29217).Z}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"regex")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"regex")," means that the requested real data can meet the preset condition of the regular expression to match successfully. Suppose your rule condition is set as follows: the request parameter contains an ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," and is a three-digit number. So request ",(0,i.kt)("inlineCode",{parentName:"li"},"/http/order/findById?id=900")," will match.")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(6183).Z}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"contains")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"contains"),"  means that the requested real data contains the default condition data. Suppose your rule condition is set as follows: request uri contains ",(0,i.kt)("inlineCode",{parentName:"li"},"findById"),". Request ",(0,i.kt)("inlineCode",{parentName:"li"},"/http/order/findById?id=1")," will match.")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(68779).Z}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"SpEL")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SpEL")," means that the requested real data can satisfy the preset ",(0,i.kt)("inlineCode",{parentName:"li"},"SpEL")," expression. Suppose your rule conditions are set as follows: request parameters contain ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," is greater than ",(0,i.kt)("inlineCode",{parentName:"li"},"100"),". Request ",(0,i.kt)("inlineCode",{parentName:"li"},"/http/order/findById?id=101")," will match.")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(12391).Z}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Groovy")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"Groovy")," way of expressing the request for real data can satisfy the preset ",(0,i.kt)("inlineCode",{parentName:"li"},"Groovy")," expression. Suppose your rule conditions are set as follows: request parameters include ",(0,i.kt)("inlineCode",{parentName:"li"},"id"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," equals ",(0,i.kt)("inlineCode",{parentName:"li"},"100"),". Request ",(0,i.kt)("inlineCode",{parentName:"li"},"/http/order/findById?id=100")," will match.")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(10859).Z}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"TimeBefore")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TimeBefore")," indicates that the request time will be matched before the preset condition time. Suppose your rule conditions are set as follows: request parameters contain ",(0,i.kt)("inlineCode",{parentName:"li"},"date")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"date")," is less than ",(0,i.kt)("inlineCode",{parentName:"li"},"2021-09-26 06:12:10"),". Request ",(0,i.kt)("inlineCode",{parentName:"li"},"/http/order/findById?id=100&date=2021-09-22 06:12:10")," will match.")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(67086).Z}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"TimeAfter")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TimeAfter")," indicates that the request time will be matched before the preset condition time. Suppose your rule conditions are set as follows: request parameters contain ",(0,i.kt)("inlineCode",{parentName:"li"},"date")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"date")," is greater than ",(0,i.kt)("inlineCode",{parentName:"li"},"2021-09-26 06:12:10"),". Request ",(0,i.kt)("inlineCode",{parentName:"li"},"/http/order/findById?id=100&date=2021-09-22 06:12:10")," will match.")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(68867).Z})))),(0,i.kt)("p",null,"If you want to further understand conditions matching strategy, please read the source code, the package name is ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.base.condition.judge"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Match Strategy"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Class"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"match")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"MatchPredicateJudge"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"=")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"EqualsPredicateJudge"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"regex")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"RegexPredicateJudge"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"contains")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ContainsPredicateJudge"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"SpEL")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"SpELPredicateJudge"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Groovy")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"GroovyPredicateJudge"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"TimeBefore")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"TimerBeforePredicateJudge"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"TimeAfter")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"TimerAfterPredicateJudge"))))),(0,i.kt)("p",null,"The examples in this article illustrate the use of selectors and rules. The Settings of specific conditions need to be selected according to actual conditions."))}m.isMDXComponent=!0},63105:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/match-strategy-and-en-3dc5ce5d8c0bc56e60b51e0f6abd12bd.png"},46058:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/match-strategy-or-en-a9b2dc0ee90d0532004ef7f0defad516.png"},45327:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/parameter-data-cookie-en-d4f494e4ff70a1029c64946c0fc6d3be.png"},92634:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/parameter-data-header-en-2d7350e606875425ba7000a63f60bae4.png"},96304:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/parameter-data-host-en-e602968ecae139d1fd003b2088d93954.png"},36518:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/parameter-data-ip-en-24cba6d24a6946934d4cae32b8c25520.png"},99935:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/parameter-data-post-en-64c4fa2226342bdbfcc7e1110e7375da.png"},80235:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/parameter-data-query-en-ae199d298b7d11fb67e656e2c84c7d15.png"},26772:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/parameter-data-req_method-en-0dcbf034ad9d7e94df26cfbf09534f2d.png"},34890:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/parameter-data-uri-en-8106039033485e12adc70d751e4ba81b.png"},68779:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/predicate-judge-contains-en-b23ef6d367776827239d836ef55e1fd6.png"},29217:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/predicate-judge-equals-en-a9e1c88ebd6b0c4e109ac6e030fb1b35.png"},10859:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/predicate-judge-groovy-en-24269c37b685c741c84767412653a3e4.png"},96835:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/predicate-judge-match-en-bfda0697b6762102f2a40f375d1be44b.png"},6183:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/predicate-judge-regex-en-079903a9d60961830e37eab69821e0f7.png"},12391:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/predicate-judge-spel-en-531fd0a58c100739fb6e29702f9bb13b.png"},68867:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/predicate-judge-timeafter-en-c3a68a43426d513363d677dd6d1f5f44.png"},67086:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/predicate-judge-timebefore-en-56c335cbe779dd1e56760a3d8c13ab94.png"}}]);