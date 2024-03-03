"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[94068],{15680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>g});var t=r(96540);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=t.createContext({}),c=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(r),y=o,g=p["".concat(i,".").concat(y)]||p[y]||d[y]||s;return r?t.createElement(g,l(l({ref:n},u),{},{components:r})):t.createElement(g,l({ref:n},u))}));function g(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=r.length,l=new Array(s);l[0]=y;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a[p]="string"==typeof e?e:o,l[1]=a;for(var c=2;c<s;c++)l[c]=r[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},74768:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>i});var t=r(58168),o=(r(96540),r(15680));const s={title:"Build And Deploy Kubernetes Controller",description:"Build And Deploy Kubernetes Controller"},l=void 0,a={unversionedId:"user-guide/kubernetes-controller/build-deploy",id:"version-2.6.0/user-guide/kubernetes-controller/build-deploy",isDocsHomePage:!1,title:"Build And Deploy Kubernetes Controller",description:"Build And Deploy Kubernetes Controller",source:"@site/versioned_docs/version-2.6.0/user-guide/kubernetes-controller/build-deploy.md",sourceDirName:"user-guide/kubernetes-controller",slug:"/user-guide/kubernetes-controller/build-deploy",permalink:"/docs/2.6.0/user-guide/kubernetes-controller/build-deploy",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.6.0/user-guide/kubernetes-controller/build-deploy.md",version:"2.6.0",frontMatter:{title:"Build And Deploy Kubernetes Controller",description:"Build And Deploy Kubernetes Controller"},sidebar:"version-2.6.0/tutorialSidebar",previous:{title:"Websocket Proxy",permalink:"/docs/2.6.0/user-guide/proxy/websocket-proxy"},next:{title:"Kubernetes Controller Config",permalink:"/docs/2.6.0/user-guide/kubernetes-controller/config"}},i=[{value:"Construct",id:"construct",children:[]},{value:"deployment",id:"deployment",children:[]}],c={toc:i},u="wrapper";function p(e){let{components:n,...r}=e;return(0,o.yg)(u,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"This article introduces how to use ShenYu Ingress Controller."),(0,o.yg)("h2",{id:"construct"},"Construct"),(0,o.yg)("p",null,"It is recommended to refer to ",(0,o.yg)("a",{parentName:"p",href:"/docs/2.6.0/deployment/deployment-custom"},"Custom Deployment")," to build a custom gateway, add the shenyu-kubernetes-controller dependency to the Maven dependency of the gateway, and the gateway can integrate the kubernetes controller."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-xml"},"         <dependency>\n             <groupId>org.apache.shenyu</groupId>\n             <artifactId>shenyu-spring-boot-starter-k8s</artifactId>\n             <version>${project.version}</version>\n         </dependency>\n")),(0,o.yg)("p",null,"You can also directly use the officially built docker image (TODO, unfinished)"),(0,o.yg)("h2",{id:"deployment"},"deployment"),(0,o.yg)("p",null,"K8s deployment files can refer to:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Namespace\nmetadata:\n  name: shenyu-ingress\n---\napiVersion: v1\nautomountServiceAccountToken: true\nkind: ServiceAccount\nmetadata:\n  name: shenyu-ingress-controller\n  namespace: shenyu-ingress\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: shenyu-ingress-controller\n  namespace: shenyu-ingress\n  labels:\n    app: shenyu-ingress-controller\n    all: shenyu-ingress-controller\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: shenyu-ingress-controller\n  template:\n    metadata:\n      labels:\n        app: shenyu-ingress-controller\n    spec:\n      containers:\n      - name: shenyu-ingress-controller\n        image: apache/shenyu-integrated-test-k8s-ingress:latest\n        ports:\n        - containerPort: 9195\n        imagePullPolicy: IfNotPresent\n      serviceAccountName: shenyu-ingress-controller\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: shenyu-ingress-controller\n  namespace: shenyu-ingress\nspec:\n  selector:\n    app: shenyu-ingress-controller\n  type: NodePort\n  ports:\n    - port: 9195\n      targetPort: 9195\n      nodePort: 30095\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: shenyu-ingress-controller\nrules:\n- apiGroups:\n  - ""\n  resources:\n  - namespaces\n  - services\n  - endpoints\n  - secrets\n  - pods\n  verbs:\n  - get\n  - list\n  - watch\n- apiGroups:\n  - networking.k8s.io\n  resources:\n  - ingresses\n  verbs:\n  - get\n  - list\n  - watch\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: shenyu-ingress-controller\n  namespace: shenyu-ingress\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: shenyu-ingress-controller\nsubjects:\n- kind: ServiceAccount\n  name: shenyu-ingress-controller\n  namespace: shenyu-ingress\n')),(0,o.yg)("p",null,"Among them, Service can be changed to ",(0,o.yg)("inlineCode",{parentName:"p"},"LoadBalancer")," type according to the actual situation."))}p.isMDXComponent=!0}}]);