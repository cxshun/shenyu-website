"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[77648],{15680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>m});var t=r(96540);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),s=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,m=u["".concat(l,".").concat(d)]||u[d]||y[d]||a;return r?t.createElement(m,i(i({ref:n},c),{},{components:r})):t.createElement(m,i({ref:n},c))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},80226:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var t=r(58168),o=(r(96540),r(15680));const a={sidebar_position:3,title:"Docker Deployment",keywords:["docker","Deployment"],description:"Docker Deployment"},i=void 0,p={unversionedId:"deployment/deployment-docker",id:"version-2.5.0/deployment/deployment-docker",isDocsHomePage:!1,title:"Docker Deployment",description:"Docker Deployment",source:"@site/versioned_docs/version-2.5.0/deployment/deployment-docker.md",sourceDirName:"deployment",slug:"/deployment/deployment-docker",permalink:"/docs/2.5.0/deployment/deployment-docker",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.5.0/deployment/deployment-docker.md",version:"2.5.0",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Docker Deployment",keywords:["docker","Deployment"],description:"Docker Deployment"},sidebar:"version-2.5.0/tutorialSidebar",previous:{title:"Docker-compose Deployment",permalink:"/docs/2.5.0/deployment/deployment-docker-compose"},next:{title:"K8s Deployment",permalink:"/docs/2.5.0/deployment/deployment-k8s"}},l=[{value:"Start Apache ShenYu Admin",id:"start-apache-shenyu-admin",children:[]},{value:"Start Apache ShenYu Bootstrap",id:"start-apache-shenyu-bootstrap",children:[]}],s={toc:l},c="wrapper";function u(e){let{components:n,...r}=e;return(0,o.yg)(c,(0,t.A)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"This article introduces the use of ",(0,o.yg)("inlineCode",{parentName:"p"},"docker")," to deploy the ",(0,o.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway."),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Before you read this document, you need to complete some preparations before deploying Shenyu according to the ",(0,o.yg)("a",{parentName:"p",href:"/docs/2.5.0/deployment/deployment-before"},"Deployment Prerequisites document"),".")),(0,o.yg)("h3",{id:"start-apache-shenyu-admin"},"Start Apache ShenYu Admin"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"docker pull apache/shenyu-admin:${current.version}\ndocker network create shenyu\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"use ",(0,o.yg)("inlineCode",{parentName:"li"},"h2")," to store data:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"docker run -d -p 9095:9095 --net shenyu apache/shenyu-admin:${current.version}\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"use ",(0,o.yg)("inlineCode",{parentName:"li"},"MySQL")," to store data, follow the ",(0,o.yg)("a",{parentName:"li",href:"/docs/2.5.0/deployment/deployment-before#mysql"},"guide document")," to initialize the database, copy ",(0,o.yg)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.29/mysql-connector-java-8.0.29.jar"},"mysql-connector.jar")," to ",(0,o.yg)("inlineCode",{parentName:"li"},"/$(your_work_dir)/ext-lib"),"\uff1a")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'docker run -v /${your_work_dir}/ext-lib:/opt/shenyu-admin/ext-lib \\\n-e "SPRING_PROFILES_ACTIVE=mysql" \\\n-e "spring.datasource.url=jdbc:mysql://${your_ip_port}/shenyuuseUnicode=true&characterEncoding=utf8 \\\n&useSSL=false&serverTimezone=Asia/Shanghai&zeroDateTimeBehavior=convertToNull" \\\n-e "spring.datasource.username=${your_username}" \\\n-e "spring.datasource.password=${your_password}" \\\n-d -p 9095:9095 --net shenyu apache/shenyu-admin:${current.version}\n')),(0,o.yg)("p",null,"another way is to put the ",(0,o.yg)("inlineCode",{parentName:"p"},"application.yml"),"\u3001",(0,o.yg)("inlineCode",{parentName:"p"},"application-mysql.yml")," configuration in  ${your_work_dir}/conf from ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu/blob/master/shenyu-admin/src/main/resources/"},"Configure address")," , modify the configuration ",(0,o.yg)("inlineCode",{parentName:"p"},"spring.profiles.active = mysql")," in ",(0,o.yg)("inlineCode",{parentName:"p"},"application.yml"),", and then execute the following statement\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"docker run -v ${your_work_dir}/conf:/opt/shenyu-admin/conf \\\n-v /${your_work_dir}/ext-lib:/opt/shenyu-admin/ext-lib \\\n-d -p 9095:9095 --net shenyu apache/shenyu-admin:${current.version}\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"use ",(0,o.yg)("inlineCode",{parentName:"li"},"PostgreSql")," to store data, follow the ",(0,o.yg)("a",{parentName:"li",href:"/docs/2.5.0/deployment/deployment-before#postgresql"},"guide document")," to initialize the database, execute the following statement\uff1a")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'docker run -e "SPRING_PROFILES_ACTIVE=pg" \\\n-e "spring.datasource.url=jdbc:postgresql://${your_ip_port}/shenyu?useUnicode=true&characterEncoding=utf-8&useSSL=false" \\\n-e "spring.datasource.username=${your_username}" \\\n-e "spring.datasource.password=${your_password}" \\\n-d -p 9095:9095 --net shenyu apache/shenyu-admin:${current.version}\n')),(0,o.yg)("p",null,"another way is to put the ",(0,o.yg)("inlineCode",{parentName:"p"},"application.yml"),"\u3001",(0,o.yg)("inlineCode",{parentName:"p"},"application-pg.yml")," configuration in ${your_work_dir}/conf, modify the configuration ",(0,o.yg)("inlineCode",{parentName:"p"},"spring.profiles.active = pg")," in ",(0,o.yg)("inlineCode",{parentName:"p"},"application.yml"),",and then execute the following statement\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"docker run -v ${your_work_dir}/conf:/opt/shenyu-admin/conf \\\n-d -p 9095:9095 --net shenyu apache/shenyu-admin:${current.version}\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"use ",(0,o.yg)("inlineCode",{parentName:"li"},"Oracle")," to store data, follow the ",(0,o.yg)("a",{parentName:"li",href:"/docs/2.5.0/deployment/deployment-before#oracle"},"guide document")," to initialize the database, execute the following statement\uff1a")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'docker run -e "SPRING_PROFILES_ACTIVE=oracle" \n-e "spring.datasource.url=jdbc:oracle:thin:@localhost:1521/shenyu" \\\n-e "spring.datasource.username=${your_username}" \\\n-e "spring.datasource.password=${your_password}" \\\n-d -p 9095:9095 --net shenyu apache/shenyu-admin:${current.version}\n')),(0,o.yg)("p",null,"another way is to put the ",(0,o.yg)("inlineCode",{parentName:"p"},"application.yml"),"\u3001",(0,o.yg)("inlineCode",{parentName:"p"},"application-oracle.yml")," configuration in ${your_work_dir}/conf, modify the configuration ",(0,o.yg)("inlineCode",{parentName:"p"},"spring.profiles.active = oracle")," in ",(0,o.yg)("inlineCode",{parentName:"p"},"application.yml"),", and then execute the following statement\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"docker run -v ${your_work_dir}/conf:/opt/shenyu-admin/conf \n-d -p 9095:9095 \\\n--net shenyu apache/shenyu-admin:${current.version}\n")),(0,o.yg)("h3",{id:"start-apache-shenyu-bootstrap"},"Start Apache ShenYu Bootstrap"),(0,o.yg)("p",null,"In the host, the directory where the bootstrap ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/master/shenyu-bootstrap/src/main/resources"},"configuration file")," is located is recorded as ",(0,o.yg)("inlineCode",{parentName:"p"},"$BOOTSTRAP_CONF"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"docker network create shenyu\ndocker pull apache/shenyu-bootstrap:${current.version}\ndocker run -d \\\n  -p 9195:9195 \\ \n  -v $BOOTSTRAP_CONF:/opt/shenyu-bootstrap/conf \\\n  apache/shenyu-bootstrap:${current.version}\n")))}u.isMDXComponent=!0}}]);