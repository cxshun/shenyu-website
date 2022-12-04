"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[58083],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),o=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=o(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=o(t),s=r,g=d["".concat(p,".").concat(s)]||d[s]||m[s]||l;return t?a.createElement(g,i(i({ref:n},c),{},{components:t})):a.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=s;var u={};for(var p in n)hasOwnProperty.call(n,p)&&(u[p]=n[p]);u.originalType=e,u[d]="string"==typeof e?e:r,i[1]=u;for(var o=2;o<l;o++)i[o]=t[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},64529:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const l={title:"\u63d2\u4ef6\u6269\u5c55",keywords:["\u6269\u5c55"],description:"\u63d2\u4ef6\u6269\u5c55"},i=void 0,u={unversionedId:"developer/custom-plugin",id:"developer/custom-plugin",isDocsHomePage:!1,title:"\u63d2\u4ef6\u6269\u5c55",description:"\u63d2\u4ef6\u6269\u5c55",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/developer/custom-plugin.md",sourceDirName:"developer",slug:"/developer/custom-plugin",permalink:"/zh/docs/next/developer/custom-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/developer/custom-plugin.md",version:"current",frontMatter:{title:"\u63d2\u4ef6\u6269\u5c55",keywords:["\u6269\u5c55"],description:"\u63d2\u4ef6\u6269\u5c55"},sidebar:"tutorialSidebar",previous:{title:"\u6b63\u786e\u83b7\u53d6IP\u4e0eHost",permalink:"/zh/docs/next/developer/custom-parsing-ip-and-host"},next:{title:"\u81ea\u5b9a\u4e49\u8fd4\u56de\u7ed3\u679c",permalink:"/zh/docs/next/developer/custom-result"}},p=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"\u5355\u4e00\u804c\u8d23\u63d2\u4ef6",id:"\u5355\u4e00\u804c\u8d23\u63d2\u4ef6",children:[]},{value:"\u5339\u914d\u6d41\u91cf\u5904\u7406\u63d2\u4ef6",id:"\u5339\u914d\u6d41\u91cf\u5904\u7406\u63d2\u4ef6",children:[]},{value:"\u8ba2\u9605\u4f60\u7684\u63d2\u4ef6\u6570\u636e\uff0c\u8fdb\u884c\u81ea\u5b9a\u4e49\u7684\u5904\u7406",id:"\u8ba2\u9605\u4f60\u7684\u63d2\u4ef6\u6570\u636e\u8fdb\u884c\u81ea\u5b9a\u4e49\u7684\u5904\u7406",children:[]},{value:"\u52a8\u6001\u52a0\u8f7d\u81ea\u5b9a\u4e49\u63d2\u4ef6",id:"\u52a8\u6001\u52a0\u8f7d\u81ea\u5b9a\u4e49\u63d2\u4ef6",children:[]}],o={toc:p};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"Apache ShenYu")," \u7f51\u5173\u7684\u6838\u5fc3\u6267\u884c\u8005\uff0c\u6bcf\u4e2a\u63d2\u4ef6\u5728\u5f00\u542f\u7684\u60c5\u51b5\u4e0b\uff0c\u90fd\u4f1a\u5bf9\u5339\u914d\u7684\u6d41\u91cf\uff0c\u8fdb\u884c\u81ea\u5df1\u7684\u5904\u7406\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"Apache ShenYu")," \u7f51\u5173\u91cc\u9762\uff0c\u63d2\u4ef6\u5206\u4e3a\u4e24\u7c7b\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e00\u7c7b\u662f\u5355\u4e00\u804c\u8d23\u7684\u8c03\u7528\u94fe\uff0c\u4e0d\u80fd\u5bf9\u6d41\u91cf\u8fdb\u884c\u81ea\u5b9a\u4e49\u7684\u7b5b\u9009\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4e00\u7c7b\u662f\u80fd\u5bf9\u5339\u914d\u7684\u6d41\u91cf\uff0c\u6267\u884c\u81ea\u5df1\u7684\u804c\u8d23\u8c03\u7528\u94fe\u3002"))),(0,r.kt)("li",{parentName:"ul"},"\u7528\u6237\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/shenyu/tree/master/shenyu-plugin"},"shenyu-plugin")," \u6a21\u5757\uff0c\u65b0\u589e\u81ea\u5df1\u7684\u63d2\u4ef6\u5904\u7406\uff0c\u5982\u679c\u6709\u597d\u7684\u516c\u7528\u63d2\u4ef6\uff0c\u53ef\u4ee5\u5411\u5b98\u7f51\u63d0\u4ea4",(0,r.kt)("inlineCode",{parentName:"li"},"pr"),"\u3002")),(0,r.kt)("h2",{id:"\u5355\u4e00\u804c\u8d23\u63d2\u4ef6"},"\u5355\u4e00\u804c\u8d23\u63d2\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5f15\u5165\u5982\u4e0b\u4f9d\u8d56\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-plugin-api</artifactId>\n    <version>${project.version}</version>\n</dependency>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7528\u6237\u65b0\u589e\u4e00\u4e2a\u7c7b ",(0,r.kt)("inlineCode",{parentName:"li"},"MyShenyuPlugin"),"\uff0c\u76f4\u63a5\u5b9e\u73b0 ",(0,r.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.api.ShenyuPlugin"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public interface ShenyuPlugin {\n\n    /**\n     * Process the Web request and (optionally) delegate to the next\n     * {@code WebFilter} through the given {@link ShenyuPluginChain}.\n     *\n     * @param exchange the current server exchange\n     * @param chain    provides a way to delegate to the next filter\n     * @return {@code Mono<Void>} to indicate when request processing is complete\n     */\n    Mono<Void> execute(ServerWebExchange exchange, ShenyuPluginChain chain);\n\n    /**\n     * return plugin order .\n     * This attribute To determine the plugin execution order in the same type plugin.\n     *\n     * @return int order\n     */\n    int getOrder();\n\n    /**\n     * acquire plugin name.\n     * this is plugin name define you must Provide the right name.\n     * if you impl AbstractShenyuPlugin this attribute not use.\n     *\n     * @return plugin name.\n     */\n    default String named() {\n        return "";\n    }\n\n    /**\n     * plugin is execute.\n     * if return true this plugin can not execute.\n     *\n     * @param exchange the current server exchange\n     * @return default false.\n     */\n    default Boolean skip(ServerWebExchange exchange) {\n        return false;\n    }\n}\n\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63a5\u53e3\u65b9\u6cd5\u8be6\u7ec6\u8bf4\u660e"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"execute()")," \u65b9\u6cd5\u4e3a\u6838\u5fc3\u7684\u6267\u884c\u65b9\u6cd5\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u91cc\u9762\u81ea\u7531\u7684\u5b9e\u73b0\u81ea\u5df1\u60f3\u8981\u7684\u529f\u80fd\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"getOrder()")," \u6307\u5b9a\u63d2\u4ef6\u7684\u6392\u5e8f\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"named()")," \u6307\u5b9a\u63d2\u4ef6\u7684\u540d\u79f0\uff0c\u547d\u540d\u91c7\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"Camel Case"),"\uff0c\u5982\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"dubbo"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"springCloud"),"\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"skip()")," \u5728\u7279\u5b9a\u7684\u6761\u4ef6\u4e0b\uff0c\u8be5\u63d2\u4ef6\u662f\u5426\u88ab\u8df3\u8fc7\u3002"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u518c\u6210",(0,r.kt)("inlineCode",{parentName:"li"},"Spring"),"\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"bean"),"\uff0c\u53c2\u8003\u5982\u4e0b\uff0c\u6216\u8005\u76f4\u63a5\u5728\u5b9e\u73b0\u7c7b\u4e0a\u52a0 ",(0,r.kt)("inlineCode",{parentName:"li"},"@Component")," \u6ce8\u89e3\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    @Bean\n    public ShenyuPlugin myShenyuPlugin() {\n        return new MyShenyuPlugin();\n    }\n")),(0,r.kt)("h2",{id:"\u5339\u914d\u6d41\u91cf\u5904\u7406\u63d2\u4ef6"},"\u5339\u914d\u6d41\u91cf\u5904\u7406\u63d2\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5f15\u5165\u5982\u4e0b\u4f9d\u8d56\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-plugin-base</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u65b0\u589e\u4e00\u4e2a\u7c7b ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomPlugin"),"\uff0c\u7ee7\u627f ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.base.AbstractShenyuPlugin"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4ee5\u4e0b\u662f\u53c2\u8003\uff1a"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'/**\n * This is your custom plugin.\n * He is running in after before plugin, implement your own functionality.\n * extends AbstractShenyuPlugin so you must user shenyu-admin And add related plug-in development.\n *\n * @author xiaoyu(Myth)\n */\npublic class CustomPlugin extends AbstractShenyuPlugin {\n\n    /**\n     * return plugin order .\n     * The same plugin he executes in the same order.\n     *\n     * @return int\n     */\n    @Override\n    public int getOrder() {\n        return 0;\n    }\n\n    /**\n     * acquire plugin name.\n     * return you custom plugin name.\n     * It must be the same name as the plug-in you added in the admin background.\n     *\n     * @return plugin name.\n     */\n    @Override\n    public String named() {\n        return "shenYu";\n    }\n\n    /**\n     * plugin is execute.\n     * Do I need to skip.\n     * if you need skip return true.\n     *\n     * @param exchange the current server exchange\n     * @return default false.\n     */\n    @Override\n    public Boolean skip(final ServerWebExchange exchange) {\n        return false;\n    }\n\n    /**\n     * this is Template Method child has Implement your own logic.\n     *\n     * @param exchange exchange the current server exchange\n     * @param chain    chain the current chain\n     * @param selector selector\n     * @param rule     rule\n     * @return {@code Mono<Void>} to indicate when request handling is complete\n     */\n    @Override\n    protected abstract Mono<Void> doExecute(ServerWebExchange exchange, ShenyuPluginChain chain, SelectorData selector, RuleData rule) {\n        LOGGER.debug(".......... function plugin start..............");\n        /*\n         * Processing after your selector matches the rule.\n         * rule.getHandle() is you Customize the json string to be processed.\n         * for this example.\n         * Convert your custom json string pass to an entity class.\n         */\n        final String ruleHandle = rule.getHandle();\n\n        final Test test = GsonUtils.getInstance().fromJson(ruleHandle, Test.class);\n\n        /*\n         * Then do your own business processing.\n         * The last execution  chain.execute(exchange).\n         * Let it continue on the chain until the end.\n         */\n        System.out.println(test.toString());\n        return chain.execute(exchange);\n    }\n}\n\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8be6\u7ec6\u8bb2\u89e3\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7ee7\u627f\u8be5\u7c7b\u7684\u63d2\u4ef6\uff0c\u63d2\u4ef6\u4f1a\u8fdb\u884c\u9009\u62e9\u5668\u89c4\u5219\u5339\u914d\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u9996\u5148\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," \u540e\u53f0\u7ba1\u7406\u7cfb\u7edf --\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u63d2\u4ef6\u7ba1\u7406 \u4e2d\uff0c\u65b0\u589e\u4e00\u4e2a\u63d2\u4ef6\uff0c\u6ce8\u610f \u540d\u79f0\u4e0e \u4f60\u81ea\u5b9a\u4e49\u63d2\u4ef6\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"named()")," \u65b9\u6cd5\u8981\u4e00\u81f4\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u91cd\u65b0\u767b\u9646  ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," \u540e\u53f0\uff0c\u53ef\u4ee5\u770b\u89c1\u521a\u65b0\u589e\u7684\u63d2\u4ef6\uff0c\u7136\u540e\u5c31\u53ef\u4ee5\u8fdb\u884c\u9009\u62e9\u5668\u89c4\u5219\u5339\u914d\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728\u89c4\u5219\u4e2d\uff0c\u6709\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"handler")," \u5b57\u6bb5\uff0c\u662f\u81ea\u5b9a\u4e49\u5904\u7406\u6570\u636e\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"doExecute()")," \u65b9\u6cd5\u4e2d\uff0c\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"final String ruleHandle = rule.getHandle();")," \u83b7\u53d6\uff0c\u7136\u540e\u8fdb\u884c\u4f60\u7684\u64cd\u4f5c\u3002")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6ce8\u518c\u6210",(0,r.kt)("inlineCode",{parentName:"p"},"Spring"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"bean"),"\uff0c\u53c2\u8003\u5982\u4e0b\u6216\u8005\u76f4\u63a5\u5728\u5b9e\u73b0\u7c7b\u4e0a\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"@Component")," \u6ce8\u89e3\u3002"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    @Bean\n    public ShenyuPlugin customPlugin() {\n        return new CustomPlugin();\n    }\n")),(0,r.kt)("h2",{id:"\u8ba2\u9605\u4f60\u7684\u63d2\u4ef6\u6570\u636e\u8fdb\u884c\u81ea\u5b9a\u4e49\u7684\u5904\u7406"},"\u8ba2\u9605\u4f60\u7684\u63d2\u4ef6\u6570\u636e\uff0c\u8fdb\u884c\u81ea\u5b9a\u4e49\u7684\u5904\u7406"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u65b0\u589e\u4e00\u4e2a\u7c7b ",(0,r.kt)("inlineCode",{parentName:"li"},"PluginDataHandler"),"\uff0c\u5b9e\u73b0 ",(0,r.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.base.handler.PluginDataHandler"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public interface PluginDataHandler {\n\n    /**\n     * Handler plugin.\n     *\n     * @param pluginData the plugin data\n     */\n    default void handlerPlugin(PluginData pluginData) {\n    }\n\n    /**\n     * Remove plugin.\n     *\n     * @param pluginData the plugin data\n     */\n    default void removePlugin(PluginData pluginData) {\n    }\n\n    /**\n     * Handler selector.\n     *\n     * @param selectorData the selector data\n     */\n    default void handlerSelector(SelectorData selectorData) {\n    }\n\n    /**\n     * Remove selector.\n     *\n     * @param selectorData the selector data\n     */\n    default void removeSelector(SelectorData selectorData) {\n    }\n\n    /**\n     * Handler rule.\n     *\n     * @param ruleData the rule data\n     */\n    default void handlerRule(RuleData ruleData) {\n    }\n\n    /**\n     * Remove rule.\n     *\n     * @param ruleData the rule data\n     */\n    default void removeRule(RuleData ruleData) {\n    }\n\n    /**\n     * Plugin named string.\n     *\n     * @return the string\n     */\n    String pluginNamed();\n\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6ce8\u610f ",(0,r.kt)("inlineCode",{parentName:"p"},"pluginNamed()")," \u8981\u548c\u4f60\u81ea\u5b9a\u4e49\u7684\u63d2\u4ef6\u540d\u79f0\u76f8\u540c\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6ce8\u518c\u6210",(0,r.kt)("inlineCode",{parentName:"p"},"Spring"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"bean"),"\uff0c\u53c2\u8003\u5982\u4e0b\u6216\u8005\u76f4\u63a5\u5728\u5b9e\u73b0\u7c7b\u4e0a\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"@Component")," \u6ce8\u89e3\u3002"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Bean\npublic PluginDataHandler pluginDataHandler() {\n    return new PluginDataHandler();\n}\n")),(0,r.kt)("h2",{id:"\u52a8\u6001\u52a0\u8f7d\u81ea\u5b9a\u4e49\u63d2\u4ef6"},"\u52a8\u6001\u52a0\u8f7d\u81ea\u5b9a\u4e49\u63d2\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5f53\u4f7f\u7528\u6b64\u529f\u80fd\u65f6\u5019\uff0c\u4e0a\u8ff0\u6269\u5c55 ",(0,r.kt)("inlineCode",{parentName:"p"},"ShenyuPlugin"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"PluginDataHandler"),", \u4e0d\u7528\u6210\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"spring bean"),"\u3002\u53ea\u9700\u8981\u6784\u5efa\u51fa\u6269\u5c55\u9879\u76ee\u7684jar\u5305\u5373\u53ef\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528\u4ee5\u4e0b\u914d\u7f6e\uff1a"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  extPlugin:\n    path:  //\u52a0\u8f7d\u6269\u5c55\u63d2\u4ef6jar\u5305\u8def\u5f84\n    enabled: true //\u662f\u5426\u5f00\u542f\n    threads: 1  //\u52a0\u8f7d\u63d2\u4ef6\u7ebf\u7a0b\u6570\u91cf\n    scheduleTime: 300 //\u95f4\u9694\u65f6\u95f4\uff08\u5355\u4f4d\uff1a\u79d2\uff09\n    scheduleDelay: 30 //\u7f51\u5173\u542f\u52a8\u540e\u5ef6\u8fdf\u591a\u4e45\u52a0\u8f7d\uff08\u5355\u4f4d\uff1a\u79d2\uff09\n")),(0,r.kt)("h4",{id:"\u63d2\u4ef6\u52a0\u8f7d\u8def\u5f84\u8be6\u89e3"},"\u63d2\u4ef6\u52a0\u8f7d\u8def\u5f84\u8be6\u89e3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6b64\u8def\u5f84\u662f\u4e3a\u5b58\u653e\u6269\u5c55\u63d2\u4ef6jar\u5305\u7684\u76ee\u5f55\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"-Dplugin-ext=xxxx")," \u6307\u5b9a\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu.extPlugin.path"),"\u914d\u7f6e\u6587\u4ef6\u6307\u5b9a\uff0c\u5982\u679c\u90fd\u6ca1\u914d\u7f6e\uff0c\u9ed8\u8ba4\u4f1a\u52a0\u8f7d\u7f51\u5173\u542f\u52a8\u8def\u5f84\u4e0b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"ext-lib"),"\u76ee\u5f55\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f18\u5148\u7ea7 \uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"-Dplugin-ext=xxxx")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu.extPlugin.path")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"ext-lib(default)")))))}c.isMDXComponent=!0}}]);