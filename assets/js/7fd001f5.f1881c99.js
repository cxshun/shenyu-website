"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[18605],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(r),u=a,h=d["".concat(l,".").concat(u)]||d[u]||g[u]||i;return r?n.createElement(h,s(s({ref:t},c),{},{components:r})):n.createElement(h,s({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},68142:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={title:"Client Registry Design",keywords:["Client Access"],description:"Application Client Access"},s=void 0,o={unversionedId:"design/register-center-design",id:"version-2.6.0/design/register-center-design",isDocsHomePage:!1,title:"Client Registry Design",description:"Application Client Access",source:"@site/versioned_docs/version-2.6.0/design/register-center-design.md",sourceDirName:"design",slug:"/design/register-center-design",permalink:"/docs/design/register-center-design",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.6.0/design/register-center-design.md",version:"2.6.0",frontMatter:{title:"Client Registry Design",keywords:["Client Access"],description:"Application Client Access"},sidebar:"version-2.6.0/tutorialSidebar",previous:{title:"Flow Control Design",permalink:"/docs/design/flow-control"},next:{title:"SPI Design",permalink:"/docs/design/spi-design"}},l=[{value:"Design principle",id:"design-principle",children:[]},{value:"Http Registry",id:"http-registry",children:[]},{value:"Zookeeper Registry",id:"zookeeper-registry",children:[]},{value:"Etcd Registry",id:"etcd-registry",children:[]},{value:"Consul Registry",id:"consul-registry",children:[]},{value:"Nacos Register",id:"nacos-register",children:[]},{value:"SPI",id:"spi",children:[]}],p={toc:l},c="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(c,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Application client access means to access your microservice to ShenYu gateway, currently supports HTTP, Dubbo, Spring Cloud, gRPC, Motan, Sofa, Tars and other protocols access."),(0,a.kt)("p",null,"Connecting the application client to ShenYu gateway is realized through the registration center, which involves the registration of the client and the synchronization of the server data. The registry supports HTTP, ZooKeeper, Etcd, Consul, and Nacos."),(0,a.kt)("p",null,"Refer to the client access configuration in the user documentation for ",(0,a.kt)("a",{parentName:"p",href:"/docs/user-guide/property-config/register-center-access"},"Application Client Access Config")," ."),(0,a.kt)("img",{src:"/img/shenyu/register/application-client-access-en.png",width:"70%",height:"60%"}),(0,a.kt)("h2",{id:"design-principle"},"Design principle"),(0,a.kt)("h4",{id:"client"},"Client"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(93081).Z})),(0,a.kt)("p",null,"Declare the registry client type, such as HTTP or ZooKeeper, in your microservice configuration. Use SPI to load and initialize the corresponding registry client when the application starts, implement the post-processor interface associated with the Spring Bean, get the service interface information to register in it, and place the obtained information into Disruptor."),(0,a.kt)("p",null,"The Registry client reads data from the Disruptor and registers the interface information with shenyu-admin, where the Disruptor decouples data from operations for scaling."),(0,a.kt)("h4",{id:"server"},"Server"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(74185).Z})),(0,a.kt)("p",null,"Declare the registry server type, such as HTTP or ZooKeeper, in the Shenyu-Admin configuration. When shenyu-admin is started, it will read the configuration type, load and initialize the corresponding registry server, and when the registry server receives the interface information registered by shenyu-client, it will put it into Disruptor, which will trigger the registration processing logic to update the interface information and publish a synchronous event."),(0,a.kt)("p",null,"Disruptor provides data and operations decoupling for expansion. If there are too many registration requests, resulting in abnormal registration, there is also a data buffer role."),(0,a.kt)("h2",{id:"http-registry"},"Http Registry"),(0,a.kt)("p",null,"The principle of HTTP service registration is relatively simple. After Shenyu-Client is started, the relevant service registration interface of Shenyu-Admin will be called to upload data for registration."),(0,a.kt)("p",null,"After receiving the request, shenyu-admin will update the data and publish the data synchronization event to synchronize the interface information to ShenYu Gateway."),(0,a.kt)("h2",{id:"zookeeper-registry"},"Zookeeper Registry"),(0,a.kt)("p",null,"Zookeeper storage struct is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"shenyu\n   \u251c\u2500\u2500regsiter\n   \u251c    \u251c\u2500\u2500metadata\n   \u251c    \u251c     \u251c\u2500\u2500${rpcType}\n   \u251c    \u251c     \u251c      \u251c\u2500\u2500\u2500\u2500${contextPath}\n   \u251c    \u251c     \u251c               \u251c\u2500\u2500${ruleName} : save metadata data of MetaDataRegisterDTO\n   \u251c    \u251c\u2500\u2500uri\n   \u251c    \u251c     \u251c\u2500\u2500${rpcType}\n   \u251c    \u251c     \u251c      \u251c\u2500\u2500\u2500\u2500${contextPath}\n   \u251c    \u251c     \u251c               \u251c\u2500\u2500${ip:port} : save uri data of URIRegisterDTO\n   \u251c    \u251c     \u251c               \u251c\u2500\u2500${ip:port}\n")),(0,a.kt)("p",null,"shenyu-client starts up, the service interface information (MetaDataRegisterDTO/URIRegisterDTO) wrote above the Zookeeper nodes."),(0,a.kt)("p",null,"shenyu-admin uses the Watch mechanism of Zookeeper to monitor events such as data update and deletion, and triggers the corresponding registration processing logic after data changes. Upon receipt of a change to the MetadataregisterDTO node, the data change and data synchronization event publication of the selector and rule is triggered. Upon receipt of a UriRegisterDTO node change, the upstream of the selector is triggered to publish an update and data synchronization event."),(0,a.kt)("h2",{id:"etcd-registry"},"Etcd Registry"),(0,a.kt)("p",null,"Etcd storage struct is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"shenyu\n   \u251c\u2500\u2500regsiter\n   \u251c    \u251c\u2500\u2500metadata\n   \u251c    \u251c     \u251c\u2500\u2500${rpcType}\n   \u251c    \u251c     \u251c      \u251c\u2500\u2500\u2500\u2500${contextPath}\n   \u251c    \u251c     \u251c               \u251c\u2500\u2500${ruleName} : save metadata data of MetaDataRegisterDTO\n   \u251c    \u251c\u2500\u2500uri\n   \u251c    \u251c     \u251c\u2500\u2500${rpcType}\n   \u251c    \u251c     \u251c      \u251c\u2500\u2500\u2500\u2500${contextPath}\n   \u251c    \u251c     \u251c               \u251c\u2500\u2500${ip:port} : save uri data of URIRegisterDTO\n   \u251c    \u251c     \u251c               \u251c\u2500\u2500${ip:port}\n")),(0,a.kt)("p",null,"shenyu-client starts up, the service interface information (MetaDataRegisterDTO/URIRegisterDTO) wrote in Ephemeral way above Etcd of the node."),(0,a.kt)("p",null,"shenyu-admin uses Etcd's Watch mechanism to monitor events such as data update and deletion, and triggers the corresponding registration processing logic after data changes. Upon receipt of a change to the MetadataregisterDTO node, the data change and data synchronization event publication of the selector and rule is triggered. Upon receipt of a UriRegisterDTO node change, the upstream of the selector is triggered to publish an update and data synchronization event."),(0,a.kt)("h2",{id:"consul-registry"},"Consul Registry"),(0,a.kt)("p",null,"Consul register client will save URIRegisterDTO to service instance metadata, and URIRegisterDTO will disappear with service unregister."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(41305).Z})),(0,a.kt)("p",null,"And Consul register client will save MetaDataRegisterDTO to Key/Value store, storage struct is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"shenyu\n   \u251c\u2500\u2500regsiter\n   \u251c    \u251c\u2500\u2500metadata\n   \u251c    \u251c     \u251c\u2500\u2500${rpcType}\n   \u251c    \u251c     \u251c      \u251c\u2500\u2500\u2500\u2500${contextPath}\n   \u251c    \u251c     \u251c               \u251c\u2500\u2500${ruleName} : save metadata data of MetaDataRegisterDTO\n\n")),(0,a.kt)("p",null,"When shenyu-client is started, The service interface information (MetaDataRegisterDTO/URIRegisterDTO) on the Metadata of the ServiceInstance (URIRegisterDTO) and Key-Value (MetaDataRegisterDTO), Store as described above."),(0,a.kt)("p",null,"shenyu-admin senses the update and deletion of data by monitoring the change of index of Catalog and KeyValue, and triggers the corresponding registration processing logic after the change of data. Upon receipt of a change to the MetadataregisterDTO node, the data change and data synchronization event publication of the selector and rule is triggered. Upon receipt of a UriRegisterDTO node change, the upstream of the selector is triggered to publish an update and data synchronization event."),(0,a.kt)("h2",{id:"nacos-register"},"Nacos Register"),(0,a.kt)("p",null,"Nacos registration is divided into two parts: URI and Metadata. URI is registered by instance. In case of service exception, the relevant URI data node will be deleted automatically and send events to the subscriber, and the subscriber will carry out relevant offline processing. Metadata is registered by configuration without any related up-down operation. When a URI instance is registered, the Metadata configuration will be published accordingly. The subscriber monitors data changes and carries out update processing."),(0,a.kt)("p",null,"The URI instance registration command rules are as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"shenyu.register.service.${rpcType}\n")),(0,a.kt)("p",null,"Listens on all RpcType nodes initially, and the ",(0,a.kt)("inlineCode",{parentName:"p"},"${contextPath}")," instances registered under them are distinguished by IP and Port, and carry their corresponding contextPath information. After the URI instance is offline, it triggers the update and data synchronization event publication of the selector's upstream."),(0,a.kt)("p",null,"When the URI instance goes online, the corresponding Metadata data will be published. The node name command rules are as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"shenyu.register.service.${rpcType}.${contextPath}\n")),(0,a.kt)("p",null,"The subscriber side continues to listen for all Metadata configurations, triggering selector and rule data changes and data synchronization events after the initial subscription and configuration update."),(0,a.kt)("h2",{id:"spi"},"SPI"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"th"},"SPI Name")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ShenyuClientRegisterRepository"),(0,a.kt)("td",{parentName:"tr",align:null},"ShenYu client register SPI")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"th"},"Implementation Class")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HttpClientRegisterRepository"),(0,a.kt)("td",{parentName:"tr",align:null},"Http client register repository")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ZookeeperClientRegisterRepository"),(0,a.kt)("td",{parentName:"tr",align:null},"Zookeeper client register repository")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EtcdClientRegisterRepository"),(0,a.kt)("td",{parentName:"tr",align:null},"Etcd client register repository")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ConsulClientRegisterRepository"),(0,a.kt)("td",{parentName:"tr",align:null},"Consul client register repository")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"NacosClientRegisterRepository"),(0,a.kt)("td",{parentName:"tr",align:null},"Nacos client register repository")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"th"},"SPI Name")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ShenyuServerRegisterRepository"),(0,a.kt)("td",{parentName:"tr",align:null},"ShenYu server register SPI")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"th"},"Implementation Class")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ShenyuHttpRegistryController"),(0,a.kt)("td",{parentName:"tr",align:null},"Http server repository")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ZookeeperServerRegisterRepository"),(0,a.kt)("td",{parentName:"tr",align:null},"Zookeeper server registry repository")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EtcdServerRegisterRepository"),(0,a.kt)("td",{parentName:"tr",align:null},"Etcd server registry repository")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ConsulServerRegisterRepository"),(0,a.kt)("td",{parentName:"tr",align:null},"Consul server registry repository")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"NacosServerRegisterRepository"),(0,a.kt)("td",{parentName:"tr",align:null},"Nacos server registry repository")))))}d.isMDXComponent=!0},41305:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Consul-ui-6e5afcb94cfa0232bfd9772e041b9fab.png"},93081:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/client-8ca2283dbd01d24dfceb32bd0057c8dd.png"},74185:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/server-11fb112ea24bec622c29ca1224dfee31.png"}}]);