"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[14181],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||l;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58995:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"\u81ea\u5b9a\u4e49\u8d1f\u8f7d\u5747\u8861\u7b56\u7565",description:"\u81ea\u5b9a\u4e49\u8d1f\u8f7d\u5747\u8861\u7b56\u7565"},o=void 0,i={unversionedId:"developer/spi/custom-load-balance",id:"developer/spi/custom-load-balance",isDocsHomePage:!1,title:"\u81ea\u5b9a\u4e49\u8d1f\u8f7d\u5747\u8861\u7b56\u7565",description:"\u81ea\u5b9a\u4e49\u8d1f\u8f7d\u5747\u8861\u7b56\u7565",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/developer/spi/custom-load-balance.md",sourceDirName:"developer/spi",slug:"/developer/spi/custom-load-balance",permalink:"/zh/docs/next/developer/spi/custom-load-balance",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/developer/spi/custom-load-balance.md",version:"current",frontMatter:{title:"\u81ea\u5b9a\u4e49\u8d1f\u8f7d\u5747\u8861\u7b56\u7565",description:"\u81ea\u5b9a\u4e49\u8d1f\u8f7d\u5747\u8861\u7b56\u7565"},sidebar:"tutorialSidebar",previous:{title:"Mock \u63d2\u4ef6",permalink:"/zh/docs/next/plugin-center/mock/mock-plugin"},next:{title:"\u81ea\u5b9a\u4e49\u5339\u914d\u65b9\u5f0f",permalink:"/zh/docs/next/developer/spi/custom-match-mode"}},p=[],c={toc:p};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.loadbalancer.spi.LoadBalancer")," \u8fdb\u884c\u81ea\u5b9a\u4e49\u6269\u5c55\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u65b0\u5efa\u4e00\u4e2a\u5de5\u7a0b\uff0c\u5f15\u5165\u5982\u4e0b\u4f9d\u8d56\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-plugin-base</artifactId>\n        <version>${project.version}</version>\n    </dependency>\n</dependencies>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u65b0\u589e\u4e00\u4e2a\u7c7b ",(0,r.kt)("inlineCode",{parentName:"li"},"CustomLoadBalancer"),"\uff0c\u7ee7\u627f",(0,r.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.loadbalancer.spi.AbstractLoadBalancer"),"\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class CustomLoadBalancer extends AbstractLoadBalancer {\n\n    @Override\n    public Upstream doSelect(final List<Upstream> upstreamList, final String ip) {\n        // \u81ea\u5b9a\u4e49\u8d1f\u8f7d\u5747\u8861\u5b9e\u73b0\u903b\u8f91\n    }\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u5de5\u7a0b\u7684META-INF/services\u76ee\u5f55\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.loadbalancer.spi.LoadBalancer"),"\u6587\u4ef6\u4e2d\u6dfb\u52a0\u5982\u4e0b\u5185\u5bb9\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="script"',title:'"script"'},"${spi name}=${custom class path}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"${spi name}"),"\u8868\u793a",(0,r.kt)("inlineCode",{parentName:"p"},"spi"),"\u7684\u540d\u79f0\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"${custom class path}"),"\u8868\u793a\u8be5\u7c7b\u7684\u5168\u9650\u5b9a\u540d\u3002\u6bd4\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="script"',title:'"script"'},"custom=xxx.xxx.xxx.CustomLoadBalancer\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5c06\u5de5\u7a0b\u6253\u5305\uff0c\u62f7\u8d1d\u5230\u7f51\u5173 (bootstrap-bin) \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"lib")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"ext-lib")," \u76ee\u5f55\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u7ba1\u7406\u7cfb\u7edf --\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u5b57\u5178\u7ba1\u7406\uff0c \u627e\u5230\u5b57\u5178\u7f16\u7801\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"LOAD_BALANCE"),"\uff0c\u65b0\u589e\u4e00\u6761\u6570\u636e\uff0c\u6ce8\u610f\u5b57\u5178\u540d\u79f0\u8981\u4e3a: ",(0,r.kt)("inlineCode",{parentName:"p"},"${spi name}"),"\uff0c\u56fe\u4e2d\u7684\u793a\u4f8b\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"custom"),"\u3002"))),(0,r.kt)("img",{src:"/img/shenyu/custom/custom_load_balancer_zh.png",width:"80%",height:"70%"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5b57\u5178\u7c7b\u578b\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"loadBalance"),"\uff1b"),(0,r.kt)("p",{parentName:"blockquote"},"\u5b57\u5178\u7f16\u7801\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"LOAD_BALANCE"),"\uff1b"),(0,r.kt)("p",{parentName:"blockquote"},"\u5b57\u5178\u540d\u79f0\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"${spi name}"),"\uff0c\u586b\u5199\u81ea\u5b9a\u4e49",(0,r.kt)("inlineCode",{parentName:"p"},"spi"),"\u7684\u540d\u79f0\uff1b"),(0,r.kt)("p",{parentName:"blockquote"},"\u5b57\u5178\u503c\uff1a\u4f7f\u7528\u65f6\uff0c\u4e0b\u62c9\u6846\u7684\u503c\uff0c\u4e0d\u8981\u548c\u73b0\u6709\u7684\u91cd\u590d\uff1b"),(0,r.kt)("p",{parentName:"blockquote"},"\u5b57\u5178\u63cf\u8ff0\u6216\u5907\u6ce8\u4fe1\u606f\uff1a\u63cf\u8ff0\u4fe1\u606f\uff1b"),(0,r.kt)("p",{parentName:"blockquote"},"\u6392\u5e8f\uff1a \u6392\u5e8f\uff1b")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u6dfb\u52a0\u9009\u62e9\u5668\u6216\u89c4\u5219\u65f6\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684\u5339\u914d\u65b9\u5f0f\uff1a")),(0,r.kt)("img",{src:"/img/shenyu/custom/use_custom_load_balancer_zh.png",width:"90%",height:"80%"}))}s.isMDXComponent=!0}}]);