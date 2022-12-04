"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[85494],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,y=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return n?a.createElement(y,l(l({ref:t},u),{},{components:n})):a.createElement(y,l({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82223:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:1,title:"Local Quick Deployment",keywords:["Deployment"],description:"Local Quick Deployment"},l=void 0,i={unversionedId:"deployment/deployment-quick",id:"version-2.4.3/deployment/deployment-quick",isDocsHomePage:!1,title:"Local Quick Deployment",description:"Local Quick Deployment",source:"@site/versioned_docs/version-2.4.3/deployment/deployment-quick.md",sourceDirName:"deployment",slug:"/deployment/deployment-quick",permalink:"/docs/2.4.3/deployment/deployment-quick",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.3/deployment/deployment-quick.md",version:"2.4.3",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Local Quick Deployment",keywords:["Deployment"],description:"Local Quick Deployment"},sidebar:"version-2.4.3/tutorialSidebar",previous:{title:"Local Deployment",permalink:"/docs/2.4.3/deployment/deployment-local"},next:{title:"Binary Packages Deployment",permalink:"/docs/2.4.3/deployment/deployment-package"}},p=[{value:"Environmental preparation",id:"environmental-preparation",children:[]},{value:"Start Apache ShenYu Bootstrap",id:"start-apache-shenyu-bootstrap",children:[]},{value:"Selector and rule configuration",id:"selector-and-rule-configuration",children:[]},{value:"by postman",id:"by-postman",children:[]},{value:"by curl",id:"by-curl",children:[]}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This article introduces how to quick start the ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway in the standalone environment."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Before you read this document, you need to complete some preparations before deploying Shenyu according to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.4.3/deployment/deployment-before"},"Deployment Prerequisites document"),".")),(0,r.kt)("h3",{id:"environmental-preparation"},"Environmental preparation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install JDK1.8+ locally")),(0,r.kt)("h3",{id:"start-apache-shenyu-bootstrap"},"Start Apache ShenYu Bootstrap"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"download ",(0,r.kt)("a",{parentName:"p",href:"https://archive.apache.org/dist/incubator/shenyu/2.4.3/apache-shenyu-incubating-2.4.3-bootstrap-bin.tar.gz"},"apache-shenyu-incubating-2.4.3-bootstrap-bin.tar.gz"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"unzip ",(0,r.kt)("inlineCode",{parentName:"p"},"apache-shenyu-incubating-${current.version}-bootstrap-bin.tar.gz"),"\u3002 go to the ",(0,r.kt)("inlineCode",{parentName:"p"},"bin")," directory."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> windwos : start.bat \n\n> linux : ./start.sh \n")),(0,r.kt)("h3",{id:"selector-and-rule-configuration"},"Selector and rule configuration"),(0,r.kt)("p",null,"please refer to ",(0,r.kt)("a",{parentName:"p",href:"../developer/local-model#add-selector-and-rules"},"Developer Local Model")," add the selector and rule."),(0,r.kt)("p",null,"example\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"your service address is",(0,r.kt)("inlineCode",{parentName:"li"},"http://127.0.0.1:8080/helloworld")," and the response like follow:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name" : "Shenyu",\n  "data" : "hello world"\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"use the follow data to add selector and rule")),(0,r.kt)("h3",{id:"by-postman"},"by postman"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Add ",(0,r.kt)("inlineCode",{parentName:"p"},"localKey: 123456")," to Headers. If you need to customize the localKey, you can use the sha512 tool to generate the key based on plaintext and update the ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu.local.sha512Key")," property."),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"POST")," method\uff0caddress",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:9195/shenyu/plugin/selectorAndRules"),", body use ",(0,r.kt)("inlineCode",{parentName:"p"},"raw json")," content\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Headers\n\nlocalKey: 123456\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "pluginName": "divide",\n    "selectorHandler": "[{\\"upstreamUrl\\":\\"127.0.0.1:8080\\"}]",\n    "conditionDataList": [{\n        "paramType": "uri",\n        "operator": "match",\n        "paramValue": "/**"\n    }],\n    "ruleDataList": [{\n        "ruleHandler": "{\\"loadBalance\\":\\"random\\"}",\n        "conditionDataList": [{\n            "paramType": "uri",\n            "operator": "match",\n            "paramValue": "/**"\n        }]\n    }]\n}\n')),(0,r.kt)("h3",{id:"by-curl"},"by curl"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST \'http://localhost:9195/shenyu/plugin/selectorAndRules\' \\\n--header \'Content-Type: application/json\' \\\n--header \'localKey: 123456\' \\\n--data-raw \'{\n    "pluginName": "divide",\n    "selectorHandler": "[{\\"upstreamUrl\\":\\"127.0.0.1:8080\\"}]",\n    "conditionDataList": [{\n        "paramType": "uri",\n        "operator": "match",\n        "paramValue": "/**"\n    }],\n    "ruleDataList": [{\n        "ruleHandler": "{\\"loadBalance\\":\\"random\\"}",\n        "conditionDataList": [{\n            "paramType": "uri",\n            "operator": "match",\n            "paramValue": "/**"\n        }]\n    }]\n}\'\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"open ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:9195/helloworld"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name" : "Shenyu",\n  "data" : "hello world"\n}\n')))}u.isMDXComponent=!0}}]);