"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[37643,80890],{27394:(e,t,a)=>{a.d(t,{A:()=>d});var n=a(96540),l=a(20053),r=a(84470),i=a(74676);const s={sidebar:"sidebar_SrOn",sidebarItemTitle:"sidebarItemTitle_jISh",categoryHeader:"categoryHeader_Xx2W",sidebarItemList:"sidebarItemList_UfcF",sidebarItem:"sidebarItem_v502",sidebarItemLink:"sidebarItemLink_yJnx",sidebarItemLinkActive:"sidebarItemLinkActive_Aygi"};var m=a(14798);function c(e){let{sidebar:t}=e;if(0===t.items.length)return null;let a={};return t.items[0].permalink.indexOf("/blog/")>-1?t.items.forEach((e=>{if(e.permalink.indexOf("-")>-1){let t=e.permalink.split("-")[0].split("/blog/")[1];a[t]?a[t].push(e):a[t]=[e]}})):a={"":t.items},n.createElement("nav",{className:(0,l.A)(s.sidebar,"thin-scrollbar"),"aria-label":(0,m.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.A)(s.sidebarItemTitle,"margin-bottom--md")},t.title),n.createElement("ul",{className:s.sidebarItemList},Object.keys(a).map(((e,t)=>n.createElement(n.Fragment,null,e.length>0&&n.createElement("h4",{key:t,className:s.categoryHeader},e),a[e].map((e=>n.createElement("li",{key:e.permalink,className:s.sidebarItem},n.createElement(i.A,{isNavLink:!0,to:e.permalink,className:s.sidebarItemLink,activeClassName:s.sidebarItemLinkActive},e.title)))))))))}var o=a(61461);const d=function(e){const{sidebar:t,toc:a,children:i,...s}=e,m=t&&t.items.length>0;return n.createElement(r.A,s,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},m&&n.createElement("aside",{className:"col col--3"},n.createElement(c,{sidebar:t})),n.createElement("main",{className:(0,l.A)("col",{"col--7":m,"col--9 col--offset-1":!m})},i),a&&n.createElement("div",{className:"col col--2"},n.createElement(o.A,{toc:a})))))}},73861:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var n=a(96540),l=a(44586),r=a(27394),i=a(89178),s=a(74676),m=a(14798);const c=function(e){const{metadata:t}=e,{previousPage:a,nextPage:l}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,m.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(s.A,{className:"pagination-nav__link",to:a},n.createElement("div",{className:"pagination-nav__label"},"\xab"," ",n.createElement(m.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},l&&n.createElement(s.A,{className:"pagination-nav__link",to:l},n.createElement("div",{className:"pagination-nav__label"},n.createElement(m.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))};var o=a(55988);const d=function(e){const{metadata:t,items:a,sidebar:s}=e,{siteConfig:{title:m}}=(0,l.A)(),{blogDescription:d,blogTitle:g,permalink:u}=t,h="/"===u?m:g;return n.createElement(r.A,{title:h,description:d,wrapperClassName:o.GN.wrapper.blogPages,pageClassName:o.GN.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"},sidebar:s},a.map((e=>{let{content:t}=e;return n.createElement(i.A,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:t.metadata.truncated},n.createElement(t,null))})),n.createElement(c,{metadata:t}))}},89178:(e,t,a)=>{a.d(t,{A:()=>p});var n=a(96540),l=a(20053),r=a(15680),i=a(14798),s=a(74676),m=a(55988),c=a(55582),o=a(8139),d=a(6458);const g="blogPostTitle_d4p0",u="blogPostData_-Im+",h="blogPostDetailsFull_xD8n";const p=function(e){const t=function(){const{selectMessage:e}=(0,m.Ww)();return t=>{const a=Math.ceil(t);return e(a,(0,i.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{children:a,frontMatter:p,metadata:b,truncated:E,isBlogPostPage:v=!1}=e,{date:f,formattedDate:_,permalink:A,tags:N,readingTime:k,title:T,editUrl:L}=b,{author:w,image:I,keywords:y}=p,x=p.author_url||p.authorURL,C=p.author_title||p.authorTitle,P=p.author_image_url||p.authorImageURL;return n.createElement(n.Fragment,null,n.createElement(o.A,{keywords:y,image:I}),n.createElement("article",{className:v?void 0:"margin-bottom--xl"},(()=>{const e=v?"h1":"h2";return n.createElement("header",null,n.createElement(e,{className:g},v?T:n.createElement(s.A,{to:A},T)),n.createElement("div",{className:(0,l.A)(u,"margin-vert--md")},n.createElement("time",{dateTime:f},_),k&&n.createElement(n.Fragment,null," \xb7 ",t(k))),n.createElement("div",{className:"avatar margin-vert--md"},P&&n.createElement(s.A,{className:"avatar__photo-link avatar__photo",href:x},n.createElement("img",{src:P,alt:w})),n.createElement("div",{className:"avatar__intro"},w&&n.createElement(n.Fragment,null,n.createElement("div",{className:"avatar__name"},n.createElement(s.A,{href:x},w)),n.createElement("small",{className:"avatar__subtitle"},C)))))})(),n.createElement("div",{className:"markdown"},n.createElement(r.xA,{components:c.A},a)),(N.length>0||E)&&n.createElement("footer",{className:(0,l.A)("row docusaurus-mt-lg",{[h]:v})},N.length>0&&n.createElement("div",{className:"col"},n.createElement("b",null,n.createElement(i.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),N.map((e=>{let{label:t,permalink:a}=e;return n.createElement(s.A,{key:a,className:"margin-horiz--sm",to:a},t)}))),v&&L&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(d.A,{editUrl:L})),!v&&E&&n.createElement("div",{className:"col text--right"},n.createElement(s.A,{to:b.permalink,"aria-label":`Read more about ${T}`},n.createElement("b",null,n.createElement(i.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},6458:(e,t,a)=>{a.d(t,{A:()=>c});var n=a(96540),l=a(14798),r=a(58168),i=a(20053);const s="iconEdit_mS5F",m=e=>{let{className:t,...a}=e;return n.createElement("svg",(0,r.A)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.A)(s,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function c(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},n.createElement(m,null),n.createElement(l.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},61461:(e,t,a)=>{a.d(t,{m:()=>m,A:()=>c});var n=a(96540),l=a(20053);const r=function(e,t,a){const[l,r]=(0,n.useState)(void 0);(0,n.useEffect)((()=>{function n(){const n=function(){const e=Array.from(document.getElementsByClassName("anchor")),t=e.find((e=>{const{top:t}=e.getBoundingClientRect();return t>=a}));if(t){if(t.getBoundingClientRect().top>=a){return e[e.indexOf(t)-1]??t}return t}return e[e.length-1]}();if(n){let a=0,i=!1;const s=document.getElementsByClassName(e);for(;a<s.length&&!i;){const e=s[a],{href:m}=e,c=decodeURIComponent(m.substring(m.indexOf("#")+1));n.id===c&&(l&&l.classList.remove(t),e.classList.add(t),r(e),i=!0),a+=1}}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),()=>{document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},i="tableOfContents_vrFS",s="table-of-contents__link";function m(e){let{toc:t,isChild:a}=e;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:`#${e.id}`,className:s,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(m,{isChild:!0,toc:e.children}))))):null}const c=function(e){let{toc:t}=e;return r(s,"table-of-contents__link--active",100),n.createElement("div",{className:(0,l.A)(i,"thin-scrollbar")},n.createElement(m,{toc:t}))}},47317:(e,t,a)=>{a.d(t,{A:()=>r});var n=a(58168),l=a(96540);const r=e=>{let{width:t=40,height:a=20,...r}=e;return l.createElement("svg",(0,n.A)({t:"1631348384596",className:"icon",viewBox:"0 0 1024 1024",version:"1.1"},r,{"p-id":"557",width:"20",height:"20"}),l.createElement("path",{d:"M547.797333 638.208l-104.405333-103.168 1.237333-1.28a720.170667 720.170667 0 0 0 152.490667-268.373333h120.448V183.082667h-287.744V100.906667H347.605333v82.218666H59.818667V265.386667h459.178666a648.234667 648.234667 0 0 1-130.304 219.946666 643.242667 643.242667 0 0 1-94.976-137.728H211.541333a722.048 722.048 0 0 0 122.453334 187.434667l-209.194667 206.378667 58.368 58.368 205.525333-205.525334 127.872 127.829334 31.232-83.84m231.424-208.426667h-82.218666l-184.96 493.312h82.218666l46.037334-123.306667h195.242666l46.464 123.306667h82.218667l-185.002667-493.312m-107.690666 287.744l66.56-178.005333 66.602666 178.005333z",fill:"currentColor","p-id":"558"}))}}}]);