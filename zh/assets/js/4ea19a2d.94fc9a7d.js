"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[85288],{15680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>m});var a=r(96540);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function t(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,a,o=function(e,n){if(null==e)return{};var r,a,o={},t=Object.keys(e);for(a=0;a<t.length;a++)r=t[a],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)r=t[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),s=function(e){var n=a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},c=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var r=e.components,o=e.mdxType,t=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,m=u["".concat(l,".").concat(d)]||u[d]||y[d]||t;return r?a.createElement(m,p(p({ref:n},c),{},{components:r})):a.createElement(m,p({ref:n},c))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var t=r.length,p=new Array(t);p[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:o,p[1]=i;for(var s=2;s<t;s++)p[s]=r[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},46098:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>p,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>l});var a=r(58168),o=(r(96540),r(15680));const t={sidebar_position:3,title:"Docker\u90e8\u7f72",keywords:["Docker","\u90e8\u7f72"],description:"docker\u90e8\u7f72"},p=void 0,i={unversionedId:"deployment/deployment-docker",id:"version-2.5.1/deployment/deployment-docker",isDocsHomePage:!1,title:"Docker\u90e8\u7f72",description:"docker\u90e8\u7f72",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5.1/deployment/deployment-docker.md",sourceDirName:"deployment",slug:"/deployment/deployment-docker",permalink:"/zh/docs/2.5.1/deployment/deployment-docker",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.5.1/deployment/deployment-docker.md",version:"2.5.1",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Docker\u90e8\u7f72",keywords:["Docker","\u90e8\u7f72"],description:"docker\u90e8\u7f72"},sidebar:"version-2.5.1/tutorialSidebar",previous:{title:"Docker-compose \u90e8\u7f72",permalink:"/zh/docs/2.5.1/deployment/deployment-docker-compose"},next:{title:"K8s\u90e8\u7f72",permalink:"/zh/docs/2.5.1/deployment/deployment-k8s"}},l=[{value:"\u521b\u5efa Docker Network",id:"\u521b\u5efa-docker-network",children:[]},{value:"\u542f\u52a8 Apache ShenYu Admin",id:"\u542f\u52a8-apache-shenyu-admin",children:[]},{value:"\u542f\u52a8Apache ShenYu Bootstrap",id:"\u542f\u52a8apache-shenyu-bootstrap",children:[]}],s={toc:l},c="wrapper";function u(e){let{components:n,...r}=e;return(0,o.yg)(c,(0,a.A)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4f7f\u7528 ",(0,o.yg)("inlineCode",{parentName:"p"},"docker")," \u6765\u90e8\u7f72 ",(0,o.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u3002"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"\u5728\u9605\u8bfb\u672c\u6587\u6863\u524d\uff0c\u4f60\u9700\u8981\u5148\u9605\u8bfb",(0,o.yg)("a",{parentName:"p",href:"/zh/docs/2.5.1/deployment/deployment-before"},"\u90e8\u7f72\u5148\u51b3\u6761\u4ef6"),"\u6587\u6863\u6765\u5b8c\u6210\u90e8\u7f72 ",(0,o.yg)("inlineCode",{parentName:"p"},"shenyu")," \u524d\u7684\u73af\u5883\u51c6\u5907\u5de5\u4f5c\u3002")),(0,o.yg)("h3",{id:"\u521b\u5efa-docker-network"},"\u521b\u5efa Docker Network"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"docker network create shenyu\n")),(0,o.yg)("h3",{id:"\u542f\u52a8-apache-shenyu-admin"},"\u542f\u52a8 Apache ShenYu Admin"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"docker pull apache/shenyu-admin:${current.version}\n")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"\u5728 2.5.1 \u7248\u672c\u4e4b\u540e\uff0c\u5728 ",(0,o.yg)("inlineCode",{parentName:"p"},"docker run")," \u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u6dfb\u52a0 ",(0,o.yg)("inlineCode",{parentName:"p"},'-e ADMIN_JVM="xxxx"')," \u6765\u81ea\u5b9a\u4e49 JVM \u542f\u52a8\u53c2\u6570")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,o.yg)("inlineCode",{parentName:"li"},"h2")," \u6765\u5b58\u50a8\u540e\u53f0\u6570\u636e\uff1a")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"docker run -d -p 9095:9095 --name shenyu-admin --net shenyu apache/shenyu-admin:${current.version}\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,o.yg)("inlineCode",{parentName:"li"},"MySQL")," \u6765\u5b58\u50a8\u540e\u53f0\u6570\u636e, \u6309\u7167 ",(0,o.yg)("a",{parentName:"li",href:"/zh/docs/2.5.1/deployment/deployment-before#mysql"},"\u6307\u5f15\u6587\u6863")," \u521d\u59cb\u5316\u6570\u636e\u5e93, \u5c06 ",(0,o.yg)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.29/mysql-connector-java-8.0.29.jar"},"mysql-connector.jar")," \u62f7\u8d1d\u5230 ",(0,o.yg)("inlineCode",{parentName:"li"},"/${your_work_dir}/ext-lib"),"\uff1a")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'docker run --name shenyu-admin -v /${your_work_dir}/ext-lib:/opt/shenyu-admin/ext-lib -e "SPRING_PROFILES_ACTIVE=mysql" -e "spring.datasource.url=jdbc:mysql://${your_ip_port}/shenyu?useUnicode=true&characterEncoding=utf-8&useSSL=false&serverTimezone=Asia/Shanghai&zeroDateTimeBehavior=convertToNull" -e "spring.datasource.username=${your_username}" -e "spring.datasource.password=${your_password}" -d -p 9095:9095 --net shenyu apache/shenyu-admin:${current.version}\n')),(0,o.yg)("p",null,"\u53e6\u5916\u4e00\u79cd\u65b9\u5f0f, \u4ece ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu/blob/master/shenyu-admin/src/main/resources/"},"\u914d\u7f6e\u6587\u4ef6\u5730\u5740")," \u4e2d\u628a ",(0,o.yg)("inlineCode",{parentName:"p"},"application.yml"),"\u3001",(0,o.yg)("inlineCode",{parentName:"p"},"application-mysql.yml"),"\u914d\u7f6e\u653e\u5230",(0,o.yg)("inlineCode",{parentName:"p"},"${your_work_dir}/conf")," \uff0c \u8c03\u6574",(0,o.yg)("inlineCode",{parentName:"p"},"application.yml"),"\u4e2d\u7684\u914d\u7f6e",(0,o.yg)("inlineCode",{parentName:"p"},"spring.profiles.active = mysql"),"\uff0c\u7136\u540e\u6267\u884c\u4ee5\u4e0b\u8bed\u53e5\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"docker run --name shenyu-admin -v ${your_work_dir}/conf:/opt/shenyu-admin/conf -v /${your_work_dir}/ext-lib:/opt/shenyu-admin/ext-lib -d -p 9095:9095 --net shenyu apache/shenyu-admin:${current.version}\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,o.yg)("inlineCode",{parentName:"li"},"PostgreSql")," \u6765\u5b58\u50a8\u540e\u53f0\u6570\u636e, \u6309\u7167 ",(0,o.yg)("a",{parentName:"li",href:"/zh/docs/2.5.1/deployment/deployment-before#postgresql"},"\u6307\u5f15\u6587\u6863")," \u521d\u59cb\u5316\u6570\u636e\u5e93, \u6267\u884c\u4ee5\u4e0b\u8bed\u53e5\uff1a")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'docker run --name shenyu-admin -e "SPRING_PROFILES_ACTIVE=pg" -e "spring.datasource.url=jdbc:postgresql://${your_ip_port}/shenyu?useUnicode=true&characterEncoding=utf-8&useSSL=false" -e "spring.datasource.username=${your_username}" -e "spring.datasource.password=${your_password}" -d -p 9095:9095 --net shenyu apache/shenyu-admin:${current.version}\n')),(0,o.yg)("p",null,"\u53e6\u5916\u4e00\u79cd\u65b9\u5f0f, \u4ece ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu/blob/master/shenyu-admin/src/main/resources/"},"\u914d\u7f6e\u6587\u4ef6\u5730\u5740")," \u4e2d\u628a ",(0,o.yg)("inlineCode",{parentName:"p"},"application.yml"),"\u3001",(0,o.yg)("inlineCode",{parentName:"p"},"application-pg.yml"),"\u914d\u7f6e\u653e\u5230",(0,o.yg)("inlineCode",{parentName:"p"},"${your_work_dir}/conf"),"\uff0c \u8c03\u6574",(0,o.yg)("inlineCode",{parentName:"p"},"application.yml"),"\u4e2d\u7684\u914d\u7f6e",(0,o.yg)("inlineCode",{parentName:"p"},"spring.profiles.active = pg"),"\uff0c\u7136\u540e\u6267\u884c\u4ee5\u4e0b\u8bed\u53e5\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"docker run --name shenyu-admin -v ${your_work_dir}/conf:/opt/shenyu-admin/conf -d -p 9095:9095 --net shenyu apache/shenyu-admin:${current.version}\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,o.yg)("inlineCode",{parentName:"li"},"Oracle")," \u6765\u5b58\u50a8\u540e\u53f0\u6570\u636e, \u6309\u7167 ",(0,o.yg)("a",{parentName:"li",href:"/zh/docs/2.5.1/deployment/deployment-before#oracle"},"\u6307\u5f15\u6587\u6863")," \u521d\u59cb\u5316\u6570\u636e\u5e93, \u6267\u884c\u4ee5\u4e0b\u8bed\u53e5\uff1a")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'docker run --name shenyu-admin -e "SPRING_PROFILES_ACTIVE=oracle" -e "spring.datasource.url=jdbc:oracle:thin:@localhost:1521/shenyu" -e "spring.datasource.username=${your_username}" -e "spring.datasource.password=${your_password}" -d -p 9095:9095 --net shenyu apache/shenyu-admin:${current.version}\n')),(0,o.yg)("p",null,"\u53e6\u5916\u4e00\u79cd\u65b9\u5f0f, \u4ece ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu/blob/master/shenyu-admin/src/main/resources/"},"\u914d\u7f6e\u6587\u4ef6\u5730\u5740")," \u4e2d\u628a ",(0,o.yg)("inlineCode",{parentName:"p"},"application.yml"),"\u3001",(0,o.yg)("inlineCode",{parentName:"p"},"application-oracle.yml")," \u914d\u7f6e\u653e\u5230",(0,o.yg)("inlineCode",{parentName:"p"},"${your_work_dir}/conf"),"\uff0c \u8c03\u6574",(0,o.yg)("inlineCode",{parentName:"p"},"application.yml"),"\u4e2d\u7684\u914d\u7f6e",(0,o.yg)("inlineCode",{parentName:"p"},"spring.profiles.active = oracle"),"\uff0c\u7136\u540e\u6267\u884c\u4ee5\u4e0b\u8bed\u53e5\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"docker run --name shenyu-admin -v ${your_work_dir}/conf:/opt/shenyu-admin/conf -d -p 9095:9095 --net shenyu apache/shenyu-admin:${current.version}\n")),(0,o.yg)("h3",{id:"\u542f\u52a8apache-shenyu-bootstrap"},"\u542f\u52a8Apache ShenYu Bootstrap"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"\u5728 2.5.1 \u7248\u672c\u4e4b\u540e\uff0c\u5728 ",(0,o.yg)("inlineCode",{parentName:"p"},"docker run")," \u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u6dfb\u52a0 ",(0,o.yg)("inlineCode",{parentName:"p"},'-e BOOT_JVM="xxxx"')," \u6765\u81ea\u5b9a\u4e49 JVM \u542f\u52a8\u53c2\u6570")),(0,o.yg)("p",null,"\u9996\u5148\u62c9\u53d6 Docker \u955c\u50cf"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"docker pull apache/shenyu-bootstrap:${current.version}\n")),(0,o.yg)("p",null,"\u5982\u679c\u4e0d\u9700\u8981\u4fee\u6539\u914d\u7f6e\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"docker run -d \\\n  -p 9195:9195 \\\n  --name shenyu-bootstrap \\\n  --net shenyu \\\n  --env SHENYU_SYNC_WEBSOCKET_URLS=ws://shenyu-admin:9095/websocket \\\n  apache/shenyu-bootstrap:${current.version}\n")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"\u4f7f\u7528 SHENYU_SYNC_WEBSOCKET_URLS \u73af\u5883\u53d8\u91cf\u53ef\u4ee5\u4e3a bootstrap \u6307\u5b9a\u4e0e admin \u901a\u4fe1\u7684 Websocket \u5730\u5740")),(0,o.yg)("p",null,"\u5982\u679c\u9700\u8981\u4fee\u6539\u914d\u7f6e\uff0c\u53ef\u4ee5\u4ece Github \u4e2d\u62c9\u53d6 bootstrap \u7684",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/master/shenyu-bootstrap/src/main/resources"},"\u914d\u7f6e\u6587\u4ef6"),"\uff0c\u5c06\u5176\u6240\u5728\u76ee\u5f55\u8bb0\u4e3a ",(0,o.yg)("inlineCode",{parentName:"p"},"$BOOTSTRAP_CONF"),"\uff0c\u5e76\u8fdb\u884c\u914d\u7f6e\u4fee\u6539\u3002\u4fee\u6539\u5b8c\u6bd5\u540e\uff0c\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"docker run -d \\\n  -p 9195:9195 \\\n  -v $BOOTSTRAP_CONF:/opt/shenyu-bootstrap/conf \\\n  --name shenyu-bootstrap \\\n  --net shenyu \\\n  --env SHENYU_SYNC_WEBSOCKET_URLS=ws://shenyu-admin:9095/websocket \\\n  apache/shenyu-bootstrap:${current.version}\n")))}u.isMDXComponent=!0}}]);