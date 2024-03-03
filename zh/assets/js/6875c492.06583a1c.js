"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[84813,80890],{27394:(e,t,a)=>{a.d(t,{A:()=>d});var l=a(96540),r=a(20053),n=a(84470),s=a(74676);const i={sidebar:"sidebar_SrOn",sidebarItemTitle:"sidebarItemTitle_jISh",categoryHeader:"categoryHeader_Xx2W",sidebarItemList:"sidebarItemList_UfcF",sidebarItem:"sidebarItem_v502",sidebarItemLink:"sidebarItemLink_yJnx",sidebarItemLinkActive:"sidebarItemLinkActive_Aygi"};var m=a(14798);function c(e){let{sidebar:t}=e;if(0===t.items.length)return null;let a={};return t.items[0].permalink.indexOf("/blog/")>-1?t.items.forEach((e=>{if(e.permalink.indexOf("-")>-1){let t=e.permalink.split("-")[0].split("/blog/")[1];a[t]?a[t].push(e):a[t]=[e]}})):a={"":t.items},l.createElement("nav",{className:(0,r.A)(i.sidebar,"thin-scrollbar"),"aria-label":(0,m.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.A)(i.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:i.sidebarItemList},Object.keys(a).map(((e,t)=>l.createElement(l.Fragment,null,e.length>0&&l.createElement("h4",{key:t,className:i.categoryHeader},e),a[e].map((e=>l.createElement("li",{key:e.permalink,className:i.sidebarItem},l.createElement(s.A,{isNavLink:!0,to:e.permalink,className:i.sidebarItemLink,activeClassName:i.sidebarItemLinkActive},e.title)))))))))}var o=a(61461);const d=function(e){const{sidebar:t,toc:a,children:s,...i}=e,m=t&&t.items.length>0;return l.createElement(n.A,i,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},m&&l.createElement("aside",{className:"col col--3"},l.createElement(c,{sidebar:t})),l.createElement("main",{className:(0,r.A)("col",{"col--7":m,"col--9 col--offset-1":!m})},s),a&&l.createElement("div",{className:"col col--2"},l.createElement(o.A,{toc:a})))))}},89178:(e,t,a)=>{a.d(t,{A:()=>p});var l=a(96540),r=a(20053),n=a(15680),s=a(14798),i=a(74676),m=a(55988),c=a(55582),o=a(8139),d=a(6458);const u="blogPostTitle_d4p0",g="blogPostData_-Im+",h="blogPostDetailsFull_xD8n";const p=function(e){const t=function(){const{selectMessage:e}=(0,m.Ww)();return t=>{const a=Math.ceil(t);return e(a,(0,s.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{children:a,frontMatter:p,metadata:b,truncated:E,isBlogPostPage:f=!1}=e,{date:v,formattedDate:_,permalink:A,tags:N,readingTime:k,title:T,editUrl:w}=b,{author:y,image:L,keywords:I}=p,x=p.author_url||p.authorURL,C=p.author_title||p.authorTitle,P=p.author_image_url||p.authorImageURL;return l.createElement(l.Fragment,null,l.createElement(o.A,{keywords:I,image:L}),l.createElement("article",{className:f?void 0:"margin-bottom--xl"},(()=>{const e=f?"h1":"h2";return l.createElement("header",null,l.createElement(e,{className:u},f?T:l.createElement(i.A,{to:A},T)),l.createElement("div",{className:(0,r.A)(g,"margin-vert--md")},l.createElement("time",{dateTime:v},_),k&&l.createElement(l.Fragment,null," \xb7 ",t(k))),l.createElement("div",{className:"avatar margin-vert--md"},P&&l.createElement(i.A,{className:"avatar__photo-link avatar__photo",href:x},l.createElement("img",{src:P,alt:y})),l.createElement("div",{className:"avatar__intro"},y&&l.createElement(l.Fragment,null,l.createElement("div",{className:"avatar__name"},l.createElement(i.A,{href:x},y)),l.createElement("small",{className:"avatar__subtitle"},C)))))})(),l.createElement("div",{className:"markdown"},l.createElement(n.xA,{components:c.A},a)),(N.length>0||E)&&l.createElement("footer",{className:(0,r.A)("row docusaurus-mt-lg",{[h]:f})},N.length>0&&l.createElement("div",{className:"col"},l.createElement("b",null,l.createElement(s.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),N.map((e=>{let{label:t,permalink:a}=e;return l.createElement(i.A,{key:a,className:"margin-horiz--sm",to:a},t)}))),f&&w&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(d.A,{editUrl:w})),!f&&E&&l.createElement("div",{className:"col text--right"},l.createElement(i.A,{to:b.permalink,"aria-label":`Read more about ${T}`},l.createElement("b",null,l.createElement(s.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},66033:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var l=a(96540),r=a(74676),n=a(27394),s=a(89178),i=a(14798),m=a(55988);const c=function(e){const{metadata:t,items:a,sidebar:c}=e,{allTagsPath:o,name:d,count:u}=t,g=function(){const{selectMessage:e}=(0,m.Ww)();return t=>e(t,(0,i.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}(),h=(0,i.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:g(u),tagName:d});return l.createElement(n.A,{title:h,wrapperClassName:m.GN.wrapper.blogPages,pageClassName:m.GN.page.blogTagsPostPage,searchMetadatas:{tag:"blog_tags_posts"},sidebar:c},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,h),l.createElement(r.A,{href:o},l.createElement(i.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),a.map((e=>{let{content:t}=e;return l.createElement(s.A,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:!0},l.createElement(t,null))})))}},6458:(e,t,a)=>{a.d(t,{A:()=>c});var l=a(96540),r=a(14798),n=a(58168),s=a(20053);const i="iconEdit_mS5F",m=e=>{let{className:t,...a}=e;return l.createElement("svg",(0,n.A)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.A)(i,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function c(e){let{editUrl:t}=e;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},l.createElement(m,null),l.createElement(r.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},61461:(e,t,a)=>{a.d(t,{m:()=>m,A:()=>c});var l=a(96540),r=a(20053);const n=function(e,t,a){const[r,n]=(0,l.useState)(void 0);(0,l.useEffect)((()=>{function l(){const l=function(){const e=Array.from(document.getElementsByClassName("anchor")),t=e.find((e=>{const{top:t}=e.getBoundingClientRect();return t>=a}));if(t){if(t.getBoundingClientRect().top>=a){return e[e.indexOf(t)-1]??t}return t}return e[e.length-1]}();if(l){let a=0,s=!1;const i=document.getElementsByClassName(e);for(;a<i.length&&!s;){const e=i[a],{href:m}=e,c=decodeURIComponent(m.substring(m.indexOf("#")+1));l.id===c&&(r&&r.classList.remove(t),e.classList.add(t),n(e),s=!0),a+=1}}}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}))},s="tableOfContents_vrFS",i="table-of-contents__link";function m(e){let{toc:t,isChild:a}=e;return t.length?l.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:i,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(m,{isChild:!0,toc:e.children}))))):null}const c=function(e){let{toc:t}=e;return n(i,"table-of-contents__link--active",100),l.createElement("div",{className:(0,r.A)(s,"thin-scrollbar")},l.createElement(m,{toc:t}))}},47317:(e,t,a)=>{a.d(t,{A:()=>n});var l=a(58168),r=a(96540);const n=e=>{let{width:t=40,height:a=20,...n}=e;return r.createElement("svg",(0,l.A)({t:"1631348384596",className:"icon",viewBox:"0 0 1024 1024",version:"1.1"},n,{"p-id":"557",width:"20",height:"20"}),r.createElement("path",{d:"M547.797333 638.208l-104.405333-103.168 1.237333-1.28a720.170667 720.170667 0 0 0 152.490667-268.373333h120.448V183.082667h-287.744V100.906667H347.605333v82.218666H59.818667V265.386667h459.178666a648.234667 648.234667 0 0 1-130.304 219.946666 643.242667 643.242667 0 0 1-94.976-137.728H211.541333a722.048 722.048 0 0 0 122.453334 187.434667l-209.194667 206.378667 58.368 58.368 205.525333-205.525334 127.872 127.829334 31.232-83.84m231.424-208.426667h-82.218666l-184.96 493.312h82.218666l46.037334-123.306667h195.242666l46.464 123.306667h82.218667l-185.002667-493.312m-107.690666 287.744l66.56-178.005333 66.602666 178.005333z",fill:"currentColor","p-id":"558"}))}}}]);