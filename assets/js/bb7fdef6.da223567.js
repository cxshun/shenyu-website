"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[61853],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),h=i,y=u["".concat(p,".").concat(h)]||u[h]||m[h]||a;return r?n.createElement(y,o(o({ref:t},c),{},{components:r})):n.createElement(y,o({ref:t},c))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3439:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const a={title:"Create Git repository",sidebar_position:12,description:"Create Git repository",cover:"/img/architecture/shenyu-framework.png"},o=void 0,l={unversionedId:"create-repository",id:"create-repository",isDocsHomePage:!1,title:"Create Git repository",description:"Create Git repository",source:"@site/community/12-create-repository.md",sourceDirName:".",slug:"/create-repository",permalink:"/community/create-repository",editUrl:"https://github.com/apache/shenyu-website/edit/main/community/12-create-repository.md",version:"current",lastUpdatedBy:"xuziyang",lastUpdatedAt:1688542348,formattedLastUpdatedAt:"7/5/2023",sidebarPosition:12,frontMatter:{title:"Create Git repository",sidebar_position:12,description:"Create Git repository",cover:"/img/architecture/shenyu-framework.png"},sidebar:"community",previous:{title:"Community",permalink:"/community/community"},next:{title:"FAQ",permalink:"/community/faq"}},p=[{value:"Create Git repository",id:"create-git-repository",children:[]},{value:"Initialize the GitHub repository",id:"initialize-the-github-repository",children:[]}],s={toc:p},c="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: Only PPMC members have the permission to do the following operations.")),(0,i.kt)("h2",{id:"create-git-repository"},"Create Git repository"),(0,i.kt)("p",null,"Fill in the new repository information in ",(0,i.kt)("a",{parentName:"p",href:"https://gitbox.apache.org/setup/newrepo.html"},"GitBox")," ","[1]",". Take shenyu-helm-chart as an example."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GitBox",src:r(19640).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PMC"),": choose shenyu"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Repository name"),": helm-chart (the suffix, not the full name)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Generated name"),": shenyu-helm-chart.git (full name automatically generated, no need to fill in)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Commit notification list")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"GitHub notification list"),": ",(0,i.kt)("a",{parentName:"li",href:"mailto:notifications@shenyu.apache.org"},"notifications@shenyu.apache.org"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Yes")," to complete the creation. The GitHub repository creation process will take about an hour.")),(0,i.kt)("h2",{id:"initialize-the-github-repository"},"Initialize the GitHub repository"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Once the GitHub repository is created, follow the instructions on the page to complete your first commit."),(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"LICENSE"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"NOTICE")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"DISCLAIMER")," files."),(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},".asf.yaml")," to custom repository configuration. A detailed description of .asf.yaml can be found ",(0,i.kt)("a",{parentName:"li",href:"https://cwiki.apache.org/confluence/display/INFRA/Git+-+.asf.yaml+features"},"here")," ","[2]",".")),(0,i.kt)("p",null,"helm-chart's .asf.yaml, with branch protection turned on, will need to be committed with PR for future code after push."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"github:\n  description: ShenYu is High-Performance Java API Gateway.\n  homepage: https://shenyu.apache.org/\n  labels:\n    - shenyu\n    - helm chart\n  features:\n    wiki: true\n    issues: true\n    projects: true\n  ghp_branch: main\n    ghp_path: /docs\n  enabled_merge_buttons:\n    squash: true\n    merge: false\n    rebase: false\n  protected_branches:\n    main:\n      required_status_checks:\n        strict: true\n      required_pull_request_reviews:\n        dismiss_stale_reviews: true\n        required_approving_review_count: 1\nnotifications:\n  commits: notifications@shenyu.apache.org\n  issues: notifications@shenyu.apache.org\n  pullrequests: notifications@shenyu.apache.org\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The content refers to")),(0,i.kt)("p",null,"[1]"," ",(0,i.kt)("a",{parentName:"p",href:"https://gitbox.apache.org/setup/newrepo.html"},"https://gitbox.apache.org/setup/newrepo.html")),(0,i.kt)("p",null,"[2]"," ",(0,i.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/INFRA/Git+-+.asf.yaml+features"},"https://cwiki.apache.org/confluence/display/INFRA/Git+-+.asf.yaml+features")))}u.isMDXComponent=!0},19640:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/create_repo-5943e2a67d3d70100e5dd0a949772fc5.png"}}]);