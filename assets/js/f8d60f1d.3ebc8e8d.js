"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[61105],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>p});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=u(n),d=i,p=h["".concat(c,".").concat(d)]||h[d]||m[d]||a;return n?o.createElement(p,r(r({ref:t},l),{},{components:n})):o.createElement(p,r({ref:t},l))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:i,r[1]=s;for(var u=2;u<a;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26228:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(87462),i=(n(67294),n(3905));const a={title:"[The Open Source Path for Tech Veterans]",author:"Haibo Duan",description:"The Open Source Path for Tech Veterans",categories:"Apache ShenYu Committers",tags:["Apache ShenYu"],date:new Date("2021-02-28T00:00:00.000Z")},r=void 0,s={permalink:"/news/Apache-ShenYu-Committer-2022-02-28",source:"@site/news/Apache-ShenYu-Committer-2022-02-28.md",title:"[The Open Source Path for Tech Veterans]",description:"The Open Source Path for Tech Veterans",date:"2021-02-28T00:00:00.000Z",formattedDate:"February 28, 2021",tags:[{label:"Apache ShenYu",permalink:"/news/tags/apache-shen-yu"}],readingTime:5.175,truncated:!1,prevItem:{title:"[How I became an Apache ShenYu Committer one year after graduation]",permalink:"/news/Apache-ShenYu-Committer-2021-07-27"},nextItem:{title:"\u3010Soul gateway release milestone version 2.3.0\u3011New support for grpc, tars and sofa protocols!",permalink:"/news/Soul-gateway-release-milestone-version-2.3.0"}},c=[{value:"Self Introduction:",id:"self-introduction",children:[]},{value:"Getting to know Apache ShenYu",id:"getting-to-know-apache-shenyu",children:[]},{value:"My way to Open source",id:"my-way-to-open-source",children:[]}],u={toc:c};function l(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"self-introduction"},"Self Introduction:"),(0,i.kt)("p",null,"Hello everyone, my name is Duan Haibo, my github account is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/haibo-duan"},"haibo-duan"),". It is my honor to be invited by the Apache ShenYu community as the Committer. Here, I would like to share with you my growth and advice from participating in the Apache ShenYu community."),(0,i.kt)("h3",{id:"getting-to-know-apache-shenyu"},"Getting to know Apache ShenYu"),(0,i.kt)("p",null,"In the last year's source code reading activity, Tt was my first time to hear about the Soul Gateway of the Dromara open source community officially joined the Apache Foundation incubator and renamed to ShenYu. Since ShenYu is the first open source project which named by Chinese traditional culture, which attracted me a lot since naming a procject can be frustrating for a programmer. Then, I followed to ShenYu's public account driven by curiosity. After that, I learned that ShenYu not only has the characteristics of high-performance, multi-protocol, and scalability, but also provides various plug-ins that can be used out of the box. With the mentality of learning, I forked the source code of ShenYu on github. I was amazed by the richness of the documentations and the great detailed description of the technical details. so I subscribed to ShenYu's email according to the description of the document, and tried to participate in the construction of the community."),(0,i.kt)("h3",{id:"my-way-to-open-source"},"My way to Open source"),(0,i.kt)("p",null,"There was a time that the community organized a code cleaning event, aiming to clean and optimize the current shenyu code. I took a look at the requirements of this task which was not difficult, so I optimized some codes according to the specification with the mentality of giving it a try, and then submitted the first PR. Everything is difficult at the beginning. There were a lot of things to learn in the first PR, including the format of PR, the branch of code, and the submission process. Fortunately, all of these were described in the ",(0,i.kt)("a",{parentName:"p",href:"https://shenyu.apache.org/en/community/contributor"},"Contributor Guide"),"  in great detail. What impressed me the most was ShenYu's checkstyle, which was very strict to the specification, including comments and spaces. Although I had paid a lot of attention to code specifications, there was still a little difficult for me to use this checkstyle at the beginning. However, I got used to this process soon, since the code after unified checkstyle let me feel extremely comfortable."),(0,i.kt)("p",null,"After the first PR from 0 to 1, the subsequent process was much easier. I found that the most time-consuming process of submitting a PR for local packaging was executing unit test cases. And I also found that there were still parts of the code that unit test code was not provided . Therefore, I decided to start participating in unit testing. First of all, I don't need to know too much source code since the tens of thousands of stock code in ShenYu is unable to be mastered in a day or two. In addition, results can be seen very quickly. In the process of writing unit test cases, I can not only find bugs in the source code to improve the code quality, but also understand the source code better."),(0,i.kt)("p",null,"At this time, some problems at work also required me to investigate the unit testing technology. When I learned about the new features of junit5, I found unit4 was used in Shenyu , so I sent an email to ask the ShenYu community if an upgrade was possible. After several rounds of discussions in the email, my proposal was accepted and I became the leader of this task. In the process of doing this task, I divided it into many small tasks due to the large amount of test code involved, and several new friends were attracted  to join together. In addition, in the task of this junit5 upgrade, it was also found that PowerMock was used in many previous use cases, which had a problem in the compatibility of the new version of jdk. So PowerMock had also been removed."),(0,i.kt)("p",null,"The ShenYu community is open and inclusive. After completing these tasks, I am very familiar with ShenYu's functional modules. In addition to continuing to follow up some issues in the community, I can also think more based on my own work experience, and propose some questions and ideas in the weekly meeting. At the same time, I received an invitation from the ShenYu community to officially become a committer. In my opinion, becoming an Apache committer is not only an honor, but also a responsibility. Being trusted by the community, I need to contribute more to the community then. Becoming an Apache committer is not the end, but just a higher beginning."),(0,i.kt)("h1",{id:"my-experience-in-apahce-shenyu-community"},"My experience in Apahce ShenYu Community"),(0,i.kt)("p",null,"In the process of participating in open source during this time, I have gained a lot, following are some of my experiences for your reference:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Start small: Contributions to the open source community are regardless of size. It's a contribution to the community no matter it's a major feature improvement or an one-line documentation error. Therefore,do not miss doing any good thing no matter how insignificant it looks. As long as it is a valuable contribution, it's welcomed by the community.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Active participation and continuous contribution:  Open source is a process of accumulating sand and building a tower. One time contribution may be limited, but as long as you participate in community activities actively, you can get promotion, no matter a proposal discussion in the email or the review code. You may not be as committed as you are in work, but as long as you make good use of your spare time and persist for a long time, you can still be successful.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Participate in email discussions and put forward ideas boldly: The biggest characteristics of open source communities are democracy, openness and transparency. Here, any ideas and suggestions will be fully valued. If you have a great idea, you just need to send an email and you can discuss it with everyone in the community. Your emails will always be answered. And all discussions are public, you can see people's discussions about your question. In many cases, the process of discussing about the problem is often more valuable than solving the problem itself."))))}l.isMDXComponent=!0}}]);