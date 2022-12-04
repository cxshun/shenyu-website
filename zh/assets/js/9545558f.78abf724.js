"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[82627],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,g=s["".concat(l,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:a,o[1]=p;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46497:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={title:"\u81ea\u5b9a\u4e49\u6761\u4ef6\u7b56\u7565",keywords:["PredicateJudge"],description:"\u81ea\u5b9a\u4e49\u6761\u4ef6\u7b56\u7565"},o=void 0,p={unversionedId:"developer/spi/custom-predicate-judge",id:"version-2.4.1/developer/spi/custom-predicate-judge",isDocsHomePage:!1,title:"\u81ea\u5b9a\u4e49\u6761\u4ef6\u7b56\u7565",description:"\u81ea\u5b9a\u4e49\u6761\u4ef6\u7b56\u7565",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.1/developer/spi/custom-predicate-judge.md",sourceDirName:"developer/spi",slug:"/developer/spi/custom-predicate-judge",permalink:"/zh/docs/2.4.1/developer/spi/custom-predicate-judge",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.4.1/developer/spi/custom-predicate-judge.md",version:"2.4.1",frontMatter:{title:"\u81ea\u5b9a\u4e49\u6761\u4ef6\u7b56\u7565",keywords:["PredicateJudge"],description:"\u81ea\u5b9a\u4e49\u6761\u4ef6\u7b56\u7565"},sidebar:"version-2.4.1/tutorialSidebar",previous:{title:"\u81ea\u5b9a\u4e49\u6761\u4ef6\u53c2\u6570",permalink:"/zh/docs/2.4.1/developer/spi/custom-parameter-data"},next:{title:"\u81ea\u5b9a\u4e49\u9650\u6d41\u7b56\u7565",permalink:"/zh/docs/2.4.1/developer/spi/custom-rate-limiter"}},l=[],u={toc:l};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.base.condition.judge.PredicateJudge")," \u8fdb\u884c\u81ea\u5b9a\u4e49\u6269\u5c55\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65b0\u589e\u4e00\u4e2a\u7c7b ",(0,a.kt)("inlineCode",{parentName:"li"},"CustomPredicateJudge"),"\uff0c\u5b9e\u73b0 ",(0,a.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.base.condition.judge.PredicateJudge")," \u63a5\u53e3 \uff0c\u6dfb\u52a0\u6ce8\u89e3",(0,a.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.spi.Join"),"\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * custom predicate judge.\n */\n@Join\npublic class CustomPredicateJudge implements PredicateJudge {\n\n    @Override\n    public Boolean judge(final ConditionData conditionData, final String realData) {\n        // \u81ea\u5b9a\u4e49\u6761\u4ef6\u7b56\u7565\n    }\n}\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.base.condition.judge.PredicateJudge")," \u6587\u4ef6\u4e2d\u6dfb\u52a0\u5982\u4e0b\u5185\u5bb9\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="script"',title:'"script"'},"${spi name}=${custom class path}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"${spi name}"),"\u8868\u793a",(0,a.kt)("inlineCode",{parentName:"p"},"spi"),"\u7684\u540d\u79f0\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"${custom class path}"),"\u8868\u793a\u8be5\u7c7b\u7684\u5168\u9650\u5b9a\u540d\u3002\u6bd4\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="script"',title:'"script"'},"custom=org.apache.shenyu.examples.http.judge.CustomPredicateJudge\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.common.enums.OperatorEnum")," \u7c7b\u4e2d\u6dfb\u52a0\u679a\u4e3e\u7c7b\u578b\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'    /**\n     * custom operator enum.\n     */\n    CUSTOM("custom", true),\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"Apache ShenYu"),"\u7f51\u5173\u7ba1\u7406\u7cfb\u7edf --\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u5b57\u5178\u7ba1\u7406\uff0c \u627e\u5230\u5b57\u5178\u7f16\u7801\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"OPERATOR"),"\uff0c\u65b0\u589e\u4e00\u6761\u6570\u636e\uff0c\u6ce8\u610f\u5b57\u5178\u540d\u79f0\u8981\u4e3a: ",(0,a.kt)("inlineCode",{parentName:"li"},"${spi name}"),"\uff0c\u56fe\u4e2d\u7684\u793a\u4f8b\u662f",(0,a.kt)("inlineCode",{parentName:"li"},"custom"),"\u3002")),(0,a.kt)("img",{src:"/img/shenyu/custom/custom_predicate_judge_zh.png",width:"70%",height:"60%"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5b57\u5178\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"operator"),"\uff1b"),(0,a.kt)("p",{parentName:"blockquote"},"\u5b57\u5178\u7f16\u7801\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"OPERATOR"),"\uff1b"),(0,a.kt)("p",{parentName:"blockquote"},"\u5b57\u5178\u540d\u79f0\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"${spi name}"),"\uff0c\u586b\u5199\u81ea\u5b9a\u4e49",(0,a.kt)("inlineCode",{parentName:"p"},"spi"),"\u7684\u540d\u79f0\uff1b"),(0,a.kt)("p",{parentName:"blockquote"},"\u5b57\u5178\u503c\uff1a\u4f7f\u7528\u65f6\uff0c\u4e0b\u62c9\u6846\u7684\u503c\uff0c\u4e0d\u8981\u548c\u73b0\u6709\u7684\u91cd\u590d\uff1b"),(0,a.kt)("p",{parentName:"blockquote"},"\u5b57\u5178\u63cf\u8ff0\u6216\u5907\u6ce8\u4fe1\u606f\uff1a\u63cf\u8ff0\u4fe1\u606f\uff1b"),(0,a.kt)("p",{parentName:"blockquote"},"\u6392\u5e8f\uff1a \u6392\u5e8f\uff1b"),(0,a.kt)("p",{parentName:"blockquote"},"\u72b6\u6001\uff1a\u6253\u5f00\u6216\u5173\u95ed\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u6dfb\u52a0\u9009\u62e9\u5668\u6216\u89c4\u5219\u65f6\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684\u6761\u4ef6\u7b56\u7565\uff1a")),(0,a.kt)("img",{src:"/img/shenyu/custom/use_custom_predicate_judge_zh.png",width:"80%",height:"70%"}))}c.isMDXComponent=!0}}]);