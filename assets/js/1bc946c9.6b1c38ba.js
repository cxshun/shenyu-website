"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[18454],{3905:(e,n,a)=>{a.d(n,{Zo:()=>m,kt:()=>d});var t=a(67294);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=t.createContext({}),i=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},m=function(e){var n=i(e.components);return t.createElement(p.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=i(a),y=o,d=c["".concat(p,".").concat(y)]||c[y]||u[y]||s;return a?t.createElement(d,r(r({ref:n},m),{},{components:a})):t.createElement(d,r({ref:n},m))}));function d(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=a.length,r=new Array(s);r[0]=y;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[c]="string"==typeof e?e:o,r[1]=l;for(var i=2;i<s;i++)r[i]=a[i];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}y.displayName="MDXCreateElement"},27676:(e,n,a)=>{a.r(n),a.d(n,{contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var t=a(87462),o=(a(67294),a(3905));const s={sidebar_position:4,title:"K8s Deployment",keywords:["k8s"],description:"K8s Deployment"},r=void 0,l={unversionedId:"deployment/deployment-k8s",id:"version-2.4.0/deployment/deployment-k8s",isDocsHomePage:!1,title:"K8s Deployment",description:"K8s Deployment",source:"@site/versioned_docs/version-2.4.0/deployment/deployment-k8s.md",sourceDirName:"deployment",slug:"/deployment/deployment-k8s",permalink:"/docs/2.4.0/deployment/deployment-k8s",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.0/deployment/deployment-k8s.md",version:"2.4.0",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"K8s Deployment",keywords:["k8s"],description:"K8s Deployment"},sidebar:"version-2.4.0/tutorialSidebar",previous:{title:"Docker Deployment",permalink:"/docs/2.4.0/deployment/deployment-docker"},next:{title:"Helm Deployment",permalink:"/docs/2.4.0/deployment/deployment-helm"}},p=[{value:"I. Using h2 as a database",id:"i-using-h2-as-a-database",children:[{value:"1. Create Namespace and ConfigMap",id:"1-create-namespace-and-configmap",children:[]},{value:"2. Create shenyu-admin",id:"2-create-shenyu-admin",children:[]},{value:"3. Create shenyu-bootstrap",id:"3-create-shenyu-bootstrap",children:[]}]},{value:"II. Use MySQL as the database",id:"ii-use-mysql-as-the-database",children:[{value:"1. Create Namespace and ConfigMap",id:"1-create-namespace-and-configmap-1",children:[]},{value:"2. Create Endpoints to represent MySQL",id:"2-create-endpoints-to-represent-mysql",children:[]},{value:"3. Create PV to store mysql-connector.jar",id:"3-create-pv-to-store-mysql-connectorjar",children:[]},{value:"4. Create shenyu-admin",id:"4-create-shenyu-admin",children:[]},{value:"3. Create shenyu-bootstrap",id:"3-create-shenyu-bootstrap-1",children:[]}]}],i={toc:p};function m(e){let{components:n,...a}=e;return(0,o.kt)("wrapper",(0,t.Z)({},i,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This article introduces the use of ",(0,o.kt)("inlineCode",{parentName:"p"},"K8s")," to deploy the ",(0,o.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Catalog"),(0,o.kt)("p",{parentName:"blockquote"},"I. Using h2 as a database"),(0,o.kt)("ol",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ol"},"create Namespace and ConfigMap"),(0,o.kt)("li",{parentName:"ol"},"deploying shenyu-admin"),(0,o.kt)("li",{parentName:"ol"},"deploy shenyu-bootstrap\nII. Use MySQL as the database")),(0,o.kt)("p",{parentName:"blockquote"},"Similar to the h2 process, there are two points to note"),(0,o.kt)("ol",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ol"},"you need to load ",(0,o.kt)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.18/mysql-connector-java-8.0.18.jar"},"mysql-connector.jar"),", so you need a place to store the file"),(0,o.kt)("li",{parentName:"ol"},"you need to specify an external MySQL database configuration to proxy the external MySQL database via Endpoints")),(0,o.kt)("p",{parentName:"blockquote"},"The process is as follows."),(0,o.kt)("ol",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ol"},"create Namespace and ConfigMap"),(0,o.kt)("li",{parentName:"ol"},"create Endpoints to proxy external MySQL"),(0,o.kt)("li",{parentName:"ol"},"create PV store mysql-connector.jar"),(0,o.kt)("li",{parentName:"ol"},"deploy shenyu-admin"),(0,o.kt)("li",{parentName:"ol"},"deploy shenyu-bootstrap"))),(0,o.kt)("h2",{id:"i-using-h2-as-a-database"},"I. Using h2 as a database"),(0,o.kt)("h3",{id:"1-create-namespace-and-configmap"},"1. Create Namespace and ConfigMap"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"create shenyu-ns.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Namespace\nmetadata:\n  name: shenyu\n  labels:\n    name: shenyu\n---\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: shenyu-cm\n  namespace: shenyu\ndata:\n  application-local.yml: |\n    server:\n        port: 9195\n        address: 0.0.0.0\n    spring:\n        main:\n            allow-bean-definition-overriding: true\n        application:\n            name: shenyu-bootstrap\n    management:\n        health:\n            defaults:\n            enabled: false\n    shenyu:\n        local:\n            enabled: true\n        file:\n            enabled: true\n        cross:\n            enabled: true\n        dubbo:\n            parameter: multi\n        sync:\n            websocket:\n              urls: ws://shenyu-admin-svc.shenyu.svc.cluster.local:9095/websocket\n        exclude:\n            enabled: false\n            paths:\n            - /favicon.ico\n        extPlugin:\n            enabled: true\n            threads: 1\n            scheduleTime: 300\n            scheduleDelay: 30\n        scheduler:\n            enabled: false\n            type: fixed\n            threads: 16\n    logging:\n        level:\n            root: info\n            org.springframework.boot: info\n            org.apache.ibatis: info\n            org.apache.shenyu.bonuspoint: info\n            org.apache.shenyu.lottery: info\n            org.apache.shenyu: info\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"execute ",(0,o.kt)("inlineCode",{parentName:"li"},"kubectl apply -f shenyu-ns.yaml"))),(0,o.kt)("h3",{id:"2-create-shenyu-admin"},"2. Create shenyu-admin"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"create shenyu-admin.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# Example of using the nodeport type to expose ports\napiVersion: v1\nkind: Service\nmetadata:\n  namespace: shenyu\n  name: shenyu-admin-svc\nspec:\n  selector:\n    app: shenyu-admin\n  type: NodePort\n  ports:\n  - protocol: TCP\n    port: 9095\n    targetPort: 9095\n    nodePort: 31095\n---\n# shenyu-admin\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  namespace: shenyu\n  name: shenyu-admin\nspec:\n  selector:\n    matchLabels:\n      app: shenyu-admin\n  replicas: 1\n  template:\n    metadata:\n      labels:\n        app: shenyu-admin\n    spec:\n      containers:\n      - name: shenyu-admin\n        image: apache/shenyu-admin:2.4.0\n        imagePullPolicy: Always\n        ports:\n        - containerPort: 9095\n        env:\n        - name: 'TZ'\n          value: 'Asia/Beijing'\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"execute",(0,o.kt)("inlineCode",{parentName:"li"},"kubectl apply -f shenyu-ns.yaml"))),(0,o.kt)("h3",{id:"3-create-shenyu-bootstrap"},"3. Create shenyu-bootstrap"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"create shenyu-bootstrap.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# Example of using the nodeport type to expose ports\napiVersion: v1\nkind: Service\nmetadata:\n  namespace: shenyu\n  name: shenyu-bootstrap-svc\nspec:\n  selector:\n    app: shenyu-bootstrap\n  type: NodePort\n  ports:\n  - protocol: TCP\n    port: 9195\n    targetPort: 9195\n    nodePort: 31195\n---\n# shenyu-bootstrap\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  namespace: shenyu\n  name: shenyu-bootstrap\nspec:\n  selector:\n    matchLabels:\n      app: shenyu-bootstrap\n  replicas: 1\n  template:\n    metadata:\n      labels:\n        app: shenyu-bootstrap\n    spec:\n      volumes:\n      - name: shenyu-bootstrap-config\n        configMap:\n          name: shenyu-cm\n          items:\n          - key: application-local.yml\n            path: application-local.yml\n      containers:\n      - name: shenyu-bootstrap\n        image: apache/shenyu-bootstrap:2.4.0\n        ports:\n        - containerPort: 9195\n        env:\n        - name: TZ\n          value: Asia/Beijing\n        volumeMounts:\n        - name: shenyu-bootstrap-config\n          mountPath: /opt/shenyu-bootstrap/conf/application-local.yml\n          subPath: application-local.yml\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"execute ",(0,o.kt)("inlineCode",{parentName:"li"},"kubectl apply -f shenyu-bootstrap.yaml"))),(0,o.kt)("h2",{id:"ii-use-mysql-as-the-database"},"II. Use MySQL as the database"),(0,o.kt)("h3",{id:"1-create-namespace-and-configmap-1"},"1. Create Namespace and ConfigMap"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"create shenyu-ns.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Namespace\nmetadata:\n  name: shenyu\n  labels:\n    name: shenyu\n---\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: shenyu-cm\n  namespace: shenyu\ndata:\n  application-local.yml: |\n    server:\n        port: 9195\n        address: 0.0.0.0\n    spring:\n        main:\n            allow-bean-definition-overriding: true\n        application:\n            name: shenyu-bootstrap\n    management:\n        health:\n            defaults:\n            enabled: false\n    shenyu:\n        local:\n            enabled: true\n        file:\n            enabled: true\n        cross:\n            enabled: true\n        dubbo:\n            parameter: multi\n        sync:\n            websocket:\n              urls: ws://shenyu-admin-svc.shenyu.svc.cluster.local:9095/websocket\n        exclude:\n            enabled: false\n            paths:\n            - /favicon.ico\n        extPlugin:\n            enabled: true\n            threads: 1\n            scheduleTime: 300\n            scheduleDelay: 30\n        scheduler:\n            enabled: false\n            type: fixed\n            threads: 16\n    logging:\n        level:\n            root: info\n            org.springframework.boot: info\n            org.apache.ibatis: info\n            org.apache.shenyu.bonuspoint: info\n            org.apache.shenyu.lottery: info\n            org.apache.shenyu: info\n  application-mysql.yml: |\n    spring.datasource.url: jdbc:mysql://mysql.shenyu.svc.cluster.local:3306/shenyu?useUnicode=true&characterEncoding=utf-8&useSSL=false\n    spring.datasource.username: {your_mysql_user}\n    spring.datasource.password: {your_mysql_password}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"execute ",(0,o.kt)("inlineCode",{parentName:"li"},"kubectl apply -f shenyu-ns.yaml"))),(0,o.kt)("h3",{id:"2-create-endpoints-to-represent-mysql"},"2. Create Endpoints to represent MySQL"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"create shenyu-ep.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: Service\napiVersion: v1\nmetadata:\n  name: mysql\n  namespace: shenyu\nspec:\n  ports:\n  - port: 3306\n    name: mysql\n    targetPort: {your_mysql_port}\n---\nkind: Endpoints\napiVersion: v1\nmetadata:\n  name: mysql\n  namespace: shenyu\nsubsets:\n- addresses:\n  - ip: {your_mysql_ip}\n  ports:\n  - port: {your_mysql_port}\n    name: mysql\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"execute ",(0,o.kt)("inlineCode",{parentName:"li"},"kubectl apply -f shenyu-ep.yaml"))),(0,o.kt)("h3",{id:"3-create-pv-to-store-mysql-connectorjar"},"3. Create PV to store mysql-connector.jar"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"create shenyu-store.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# Example of using PVC\u3001PV\u3001StorageClass to store jar file\napiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: shenyu-pv\nspec:\n  capacity:\n    storage: 1Gi\n  volumeMode: Filesystem\n  accessModes:\n  - ReadWriteOnce\n  persistentVolumeReclaimPolicy: Delete\n  storageClassName: local-storage\n  local:\n    path: /home/shenyu/shenyu-admin/k8s-pv  # Specify the directory on the node, which should contain `mysql-connector.jar`\n  nodeAffinity:\n    required:\n      nodeSelectorTerms:\n      - matchExpressions:\n        - key: kubernetes.io/hostname\n          operator: In\n          values:\n          - {your_node_name} # Specify node\n---\nkind: PersistentVolumeClaim\napiVersion: v1\nmetadata:\n  name: shenyu-pvc\n  namespace: shenyu\nspec:\n  accessModes:\n  - ReadWriteOnce\n  resources:\n    requests:\n      storage: 1Gi\n  storageClassName: local-storage\n---\napiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: local-storage\nprovisioner: kubernetes.io/no-provisioner\nvolumeBindingMode: WaitForFirstConsumer\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"execute ",(0,o.kt)("inlineCode",{parentName:"li"},"kubectl apply -f shenyu-pv.yaml")),(0,o.kt)("li",{parentName:"ul"},"PV mounted directory upload ",(0,o.kt)("inlineCode",{parentName:"li"},"mysql-connector.jar"))),(0,o.kt)("h3",{id:"4-create-shenyu-admin"},"4. Create shenyu-admin"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"create shenyu-admin.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# Example of using the nodeport type to expose ports\napiVersion: v1\nkind: Service\nmetadata:\n  namespace: shenyu\n  name: shenyu-admin-svc\nspec:\n  selector:\n    app: shenyu-admin\n  type: NodePort\n  ports:\n  - protocol: TCP\n    port: 9095\n    targetPort: 9095\n    nodePort: 31095\n---\n# shenyu-admin\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  namespace: shenyu\n  name: shenyu-admin\nspec:\n  selector:\n    matchLabels:\n      app: shenyu-admin\n  replicas: 1\n  template:\n    metadata:\n      labels:\n        app: shenyu-admin\n    spec:\n      volumes:\n      - name: mysql-connector-volume\n        persistentVolumeClaim:\n          claimName: shenyu-pvc\n      - name: shenyu-admin-config\n        configMap:\n          name: shenyu-cm\n          items:\n          - key: application-mysql.yml\n            path: application-mysql.yml\n      containers:\n      - name: shenyu-admin\n        image: apache/shenyu-admin:2.4.0\n        imagePullPolicy: Always\n        ports:\n        - containerPort: 9095\n        env:\n        - name: 'TZ'\n          value: 'Asia/Beijing'\n        - name: SPRING_PROFILES_ACTIVE\n          value: mysql\n        volumeMounts:\n        - name: shenyu-admin-config\n          mountPath: /opt/shenyu-admin/config/application-mysql.yml\n          subPath: application-mysql.yml\n        - mountPath: /opt/shenyu-admin/ext-lib\n          name: mysql-connector-volume\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"execute",(0,o.kt)("inlineCode",{parentName:"li"},"kubectl apply -f shenyu-ns.yaml"))),(0,o.kt)("h3",{id:"3-create-shenyu-bootstrap-1"},"3. Create shenyu-bootstrap"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"create shenyu-bootstrap.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# Example of using the nodeport type to expose ports\napiVersion: v1\nkind: Service\nmetadata:\n  namespace: shenyu\n  name: shenyu-bootstrap-svc\nspec:\n  selector:\n    app: shenyu-bootstrap\n  type: NodePort\n  ports:\n  - protocol: TCP\n    port: 9195\n    targetPort: 9195\n    nodePort: 31195\n---\n# shenyu-bootstrap\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  namespace: shenyu\n  name: shenyu-bootstrap\nspec:\n  selector:\n    matchLabels:\n      app: shenyu-bootstrap\n  replicas: 1\n  template:\n    metadata:\n      labels:\n        app: shenyu-bootstrap\n    spec:\n      volumes:\n      - name: shenyu-bootstrap-config\n        configMap:\n          name: shenyu-cm\n          items:\n          - key: application-local.yml\n            path: application-local.yml\n      containers:\n      - name: shenyu-bootstrap\n        image: apache/shenyu-bootstrap:2.4.0\n        ports:\n        - containerPort: 9195\n        env:\n        - name: TZ\n          value: Asia/Beijing\n        volumeMounts:\n        - name: shenyu-bootstrap-config\n          mountPath: /opt/shenyu-bootstrap/conf/application-local.yml\n          subPath: application-local.yml\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"execute ",(0,o.kt)("inlineCode",{parentName:"li"},"kubectl apply -f shenyu-bootstrap.yaml"))))}m.isMDXComponent=!0}}]);