"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[8409],{15680:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>m});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),u=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},c=function(e){var n=u(e.components);return t.createElement(p.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(a),g=r,m=s["".concat(p,".").concat(g)]||s[g]||d[g]||i;return a?t.createElement(m,l(l({ref:n},c),{},{components:a})):t.createElement(m,l({ref:n},c))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=g;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},23154:(e,n,a)=>{a.r(n),a.d(n,{contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var t=a(58168),r=(a(96540),a(15680));const i={title:"\u81ea\u5b9a\u4e49\u6761\u4ef6\u7b56\u7565",keywords:["PredicateJudge"],description:"\u81ea\u5b9a\u4e49\u6761\u4ef6\u7b56\u7565"},l=void 0,o={unversionedId:"developer/spi/custom-predicate-judge",id:"version-2.4.3/developer/spi/custom-predicate-judge",isDocsHomePage:!1,title:"\u81ea\u5b9a\u4e49\u6761\u4ef6\u7b56\u7565",description:"\u81ea\u5b9a\u4e49\u6761\u4ef6\u7b56\u7565",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/developer/spi/custom-predicate-judge.md",sourceDirName:"developer/spi",slug:"/developer/spi/custom-predicate-judge",permalink:"/zh/docs/2.4.3/developer/spi/custom-predicate-judge",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/developer/spi/custom-predicate-judge.md",version:"2.4.3",frontMatter:{title:"\u81ea\u5b9a\u4e49\u6761\u4ef6\u7b56\u7565",keywords:["PredicateJudge"],description:"\u81ea\u5b9a\u4e49\u6761\u4ef6\u7b56\u7565"},sidebar:"version-2.4.3/tutorialSidebar",previous:{title:"\u81ea\u5b9a\u4e49\u6761\u4ef6\u53c2\u6570",permalink:"/zh/docs/2.4.3/developer/spi/custom-parameter-data"},next:{title:"\u81ea\u5b9a\u4e49\u9650\u6d41\u7b56\u7565",permalink:"/zh/docs/2.4.3/developer/spi/custom-rate-limiter"}},p=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"\u6269\u5c55",id:"\u6269\u5c55",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]}],u={toc:p},c="wrapper";function s(e){let{components:n,...a}=e;return(0,r.yg)(c,(0,t.A)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5bf9 ",(0,r.yg)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.base.condition.judge.PredicateJudge")," \u8fdb\u884c\u81ea\u5b9a\u4e49\u6269\u5c55\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u6761\u4ef6\u8c13\u8bed\u662f\u9009\u62e9\u5668\u4e2d\u8fde\u63a5\u6570\u636e\u548c\u89c4\u5219\u7684\u6865\u6881\uff0c\u4f5c\u7528\u662f\u7b5b\u9009\u51fa\u7b26\u5408\u6761\u4ef6\u7684\u8bf7\u6c42\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u76ee\u524d\u5df2\u7ecf\u5b58\u5728\u5305\u62ec match, =, regex, contains, TimeBefore, TimeAfter, exclude \u5171\u4e03\u4e2a\u6761\u4ef6\u8c13\u8bed\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u7528\u6237\u53ef\u4ee5\u53c2\u8003 ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/shenyu/tree/v2.4.3/shenyu-plugin/shenyu-plugin-base/src/main/java/org/apache/shenyu/plugin/base/condition/judge"},"judge")," \u6a21\u5757\uff0c\u65b0\u589e\u81ea\u5df1\u7684\u6761\u4ef6\u8c13\u8bed\uff0c\u5982\u679c\u6709\u597d\u7684\u516c\u7528\u63d2\u4ef6\uff0c\u53ef\u4ee5\u5411\u5b98\u7f51\u63d0\u4ea4 ",(0,r.yg)("inlineCode",{parentName:"li"},"pr"),"\u3002")),(0,r.yg)("h2",{id:"\u6269\u5c55"},"\u6269\u5c55"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u65b0\u5efa\u4e00\u4e2a\u5de5\u7a0b\uff0c\u5f15\u5165\u5982\u4e0b\u4f9d\u8d56\uff1a")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-plugin-base</artifactId>\n        <version>${project.version}</version>\n    </dependency>\n</dependencies>\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u65b0\u589e\u7c7b ",(0,r.yg)("inlineCode",{parentName:"li"},"CustomPredicateJudge"),"\uff0c\u5b9e\u73b0 ",(0,r.yg)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.base.condition.judge.PredicateJudge")," \u63a5\u53e3\uff0c\u6dfb\u52a0\u6ce8\u89e3 ",(0,r.yg)("inlineCode",{parentName:"li"},"org.apache.shenyu.spi.Join"),"\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"/**\n * custom predicate judge.\n */\n@Join\npublic class CustomPredicateJudge implements PredicateJudge {\n\n    @Override\n    public Boolean judge(final ConditionData conditionData, final String realData) {\n        // \u81ea\u5b9a\u4e49\u6761\u4ef6\u7b56\u7565\n    }\n}\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5728\u5de5\u7a0b\u7684META-INF/services\u76ee\u5f55\u521b\u5efa ",(0,r.yg)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.base.condition.judge.PredicateJudge")," \u6587\u4ef6\uff0c\u5e76\u6dfb\u52a0\u5982\u4e0b\u5185\u5bb9\uff1a")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell",metastring:'title="script"',title:'"script"'},"${spi name}=${custom class path}\n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"${spi name}")," \u8868\u793a ",(0,r.yg)("inlineCode",{parentName:"p"},"spi")," \u7684\u540d\u79f0\uff0c ",(0,r.yg)("inlineCode",{parentName:"p"},"${custom class path}")," \u8868\u793a\u8be5\u7c7b\u7684\u5168\u9650\u5b9a\u540d\u3002\u6bd4\u5982\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell",metastring:'title="script"',title:'"script"'},"custom=xxx.xxx.xxx.CustomPredicateJudge\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5c06\u5de5\u7a0b\u6253\u5305\uff0c\u62f7\u8d1d\u5230\u7f51\u5173 (bootstrap-bin) \u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"lib")," \u6216 ",(0,r.yg)("inlineCode",{parentName:"p"},"ext-lib")," \u76ee\u5f55\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u7ba1\u7406\u7cfb\u7edf --\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u5b57\u5178\u7ba1\u7406\uff0c \u627e\u5230\u5b57\u5178\u7f16\u7801\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"OPERATOR"),"\uff0c\u65b0\u589e\u4e00\u6761\u6570\u636e\uff0c\u6ce8\u610f\u5b57\u5178\u540d\u79f0\u8981\u4e3a: ",(0,r.yg)("inlineCode",{parentName:"p"},"${spi name}"),"\uff0c\u56fe\u4e2d\u7684\u793a\u4f8b\u662f ",(0,r.yg)("inlineCode",{parentName:"p"},"custom"),"\u3002"))),(0,r.yg)("img",{src:"/img/shenyu/custom/custom_predicate_judge_zh.png",width:"70%",height:"60%"}),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u5b57\u5178\u7c7b\u578b\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"operator"),"\uff1b"),(0,r.yg)("p",{parentName:"blockquote"},"\u5b57\u5178\u7f16\u7801\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"OPERATOR"),"\uff1b"),(0,r.yg)("p",{parentName:"blockquote"},"\u5b57\u5178\u540d\u79f0\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"${spi name}"),"\uff0c\u586b\u5199\u81ea\u5b9a\u4e49",(0,r.yg)("inlineCode",{parentName:"p"},"spi"),"\u7684\u540d\u79f0\uff1b"),(0,r.yg)("p",{parentName:"blockquote"},"\u5b57\u5178\u503c\uff1a\u4f7f\u7528\u65f6\uff0c\u4e0b\u62c9\u6846\u7684\u503c\uff0c\u4e0d\u8981\u548c\u73b0\u6709\u7684\u91cd\u590d\uff1b"),(0,r.yg)("p",{parentName:"blockquote"},"\u5b57\u5178\u63cf\u8ff0\u6216\u5907\u6ce8\u4fe1\u606f\uff1a\u63cf\u8ff0\u4fe1\u606f\uff1b"),(0,r.yg)("p",{parentName:"blockquote"},"\u6392\u5e8f\uff1a \u6392\u5e8f\uff1b"),(0,r.yg)("p",{parentName:"blockquote"},"\u72b6\u6001\uff1a\u6253\u5f00\u6216\u5173\u95ed\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5728\u6dfb\u52a0\u9009\u62e9\u5668\u6216\u89c4\u5219\u65f6\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684\u6761\u4ef6\u7b56\u7565\uff1a")),(0,r.yg)("img",{src:"/img/shenyu/custom/use_custom_predicate_judge_zh.png",width:"80%",height:"70%"}),(0,r.yg)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u6dfb\u52a0 ",(0,r.yg)("inlineCode",{parentName:"li"},"GroovyPredicateJudge")," \u548c ",(0,r.yg)("inlineCode",{parentName:"li"},"SpELPredicateJudge")," \u6269\u5c55\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"/**\n * Groovy predicate judge.\n */\n@Join\npublic class GroovyPredicateJudge implements PredicateJudge {\n    \n    @Override\n    public Boolean judge(final ConditionData conditionData, final String realData) {\n        return (Boolean) Eval.me(conditionData.getParamName(), realData, conditionData.getParamValue());\n    }\n}\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"/**\n * SpEL predicate judge.\n */\n@Join\npublic class SpELPredicateJudge implements PredicateJudge {\n    \n    private static final ExpressionParser EXPRESSION_PARSER = new SpelExpressionParser();\n    \n    @Override\n    public Boolean judge(final ConditionData conditionData, final String realData) {\n        Expression expression = EXPRESSION_PARSER.parseExpression(conditionData.getParamValue().replace('#' + conditionData.getParamName(), realData));\n        return expression.getValue(Boolean.class);\n    }\n}\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u66f4\u65b0 ",(0,r.yg)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.base.condition.judge.PredicateJudge"),"\uff0c \u6dfb\u52a0\uff1a")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell",metastring:'title="script"',title:'"script"'},"Groovy=xxx.xxx.xxx.GroovyPredicateJudge\nSpEL=xxx.xxx.xxx.SpELPredicateJudge\n")))}s.isMDXComponent=!0}}]);