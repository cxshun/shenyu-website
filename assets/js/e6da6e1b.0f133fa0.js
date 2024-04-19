"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[35713],{15680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>y});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},g=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),s=u(t),c=r,y=s["".concat(p,".").concat(c)]||s[c]||m[c]||l;return t?a.createElement(y,i(i({ref:n},g),{},{components:t})):a.createElement(y,i({ref:n},g))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},88302:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=t(58168),r=(t(96540),t(15680));const l={title:"Code Suggestions",sidebar_position:1,description:"Apache ShenYu Coding Guide",author:"xiaoyu",categories:"Apache ShenYu",tags:["Code Suggestions"],date:new Date("2019-09-22T00:00:00.000Z"),cover:"/img/architecture/shenyu-framework.png"},i=void 0,o={unversionedId:"code-suggestions",id:"code-suggestions",isDocsHomePage:!1,title:"Code Suggestions",description:"Apache ShenYu Coding Guide",source:"@site/community/1-code-suggestions.md",sourceDirName:".",slug:"/code-suggestions",permalink:"/community/code-suggestions",editUrl:"https://github.com/apache/shenyu-website/edit/main/community/1-code-suggestions.md",version:"current",lastUpdatedBy:"Kerwin Bryant",lastUpdatedAt:1713543939,formattedLastUpdatedAt:"4/19/2024",sidebarPosition:1,frontMatter:{title:"Code Suggestions",sidebar_position:1,description:"Apache ShenYu Coding Guide",author:"xiaoyu",categories:"Apache ShenYu",tags:["Code Suggestions"],date:"2019-09-22T00:00:00.000Z",cover:"/img/architecture/shenyu-framework.png"},sidebar:"community",next:{title:"Issue And Pull Request",permalink:"/community/issue-pr"}},p=[{value:"General",id:"general",children:[]},{value:"Object",id:"object",children:[]},{value:"Collection",id:"collection",children:[{value:"List",id:"list",children:[]},{value:"Map",id:"map",children:[]}]},{value:"String",id:"string",children:[]},{value:"Exception",id:"exception",children:[]},{value:"Resource",id:"resource",children:[]},{value:"Several methods to judge and handle Null",id:"several-methods-to-judge-and-handle-null",children:[]}],u={toc:p},g="wrapper";function s(e){let{components:n,...t}=e;return(0,r.yg)(g,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"general"},"General"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Use as many ",(0,r.yg)("inlineCode",{parentName:"p"},"lambda function")," expressions as possible.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Method parameters must be modified with ",(0,r.yg)("inlineCode",{parentName:"p"},"final"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Constants modified ",(0,r.yg)("inlineCode",{parentName:"p"},"static final")," must be named in upper case.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Methods should not have too many parameters.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Clear unused classes and methods.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Use linux line separators.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Tab size is 4 and keep indents on empty lines.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"All code passage of Checkstyle: ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu/blob/master/script/shenyu_checkstyle.xml"},"https://github.com/apache/shenyu/blob/master/script/shenyu_checkstyle.xml"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"When adding a new file, you need to add the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu-website/blob/57f9a6b14c27d97137275453b207232f3df53205/LICENSE#L191-L201"},"apache protocol")," in the header of the file.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Try not to use a third party utility class directly.  Check to see if it is included in the util package for this project"))),(0,r.yg)("h2",{id:"object"},"Object"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Use Optional transform Null.")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Optional.ofNullable(xxx).orElse(obj)")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Use Objects Judgment Null Or NotNull.")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Objects.isNull(obj) OR Objects.nonNull(obj)")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Use ",(0,r.yg)("inlineCode",{parentName:"li"},"Objects.equals")," Judgment are they equal.")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Objects.equals(obj1, obj2)")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Creater objects outside of a for loop.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"Object object = null;\nfor () {\n    object = new Object();\n}\n")),(0,r.yg)("h2",{id:"collection"},"Collection"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"must indicate initial capacity to avoid recalculate capacity.")),(0,r.yg)("h3",{id:"list"},"List"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Use ",(0,r.yg)("inlineCode",{parentName:"p"},"LinkedList")," when you need to add or delete elements, Else use ",(0,r.yg)("inlineCode",{parentName:"p"},"ArrayList"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Use ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.commons.collections4.CollectionUtils")," Judgment Is empty Or Not empty."))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"CollectionUtils.isEmpty(list) or CollectionUtils.isNotEmpty(data)")),(0,r.yg)("h3",{id:"map"},"Map"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Use ",(0,r.yg)("inlineCode",{parentName:"p"},"ConcurrenHashMap")," when considering concurrency of threads, Else use ",(0,r.yg)("inlineCode",{parentName:"p"},"HashMap"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Iterate over map using the most efficient way Or use ",(0,r.yg)("inlineCode",{parentName:"p"},"lambda function"),"."))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"Set<Map.Entry<String, String>> entrySet = map.entrySet();\nIterator<Map.Entry<String, String>> iter = entrySet.iterator();\nwhile (iter.hasNext()) {\n        Map.Entry<String, String> entry = iter.next();\n      \n}\n")),(0,r.yg)("h2",{id:"string"},"String"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Use ",(0,r.yg)("inlineCode",{parentName:"li"},"org.apache.commons.lang3.StringUtils")," Judgment Is empty Or Not empty.")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"StringUtils.isEmpty(list) or StringUtils.isNotEmpty(data)")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"String.join")," should be used when string concatenation occurs.")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"String join(CharSequence delimiter, CharSequence... elements)")),(0,r.yg)("h2",{id:"exception"},"Exception"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Do not use try...catch in a loop, it should be on the outermost layer.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"try {\n  for () {\n  }\n} catch () {\n  \n}\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Do not use ",(0,r.yg)("inlineCode",{parentName:"p"},"printStackTrace()"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Please use custom exceptions or ",(0,r.yg)("inlineCode",{parentName:"p"},"ShenyuException"),"."))),(0,r.yg)("h2",{id:"resource"},"Resource"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Please use ",(0,r.yg)("inlineCode",{parentName:"li"},"try with resource")," to close resource.")),(0,r.yg)("h2",{id:"several-methods-to-judge-and-handle-null"},"Several methods to judge and handle Null"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Judge self if Null or not, and also need to transform self, below are some representative examples:",(0,r.yg)("br",{parentName:"p"}),"\n","current : ",(0,r.yg)("inlineCode",{parentName:"p"},"result.setXXX(null == a ? b.getXXX() : b.getXXX(a));"),(0,r.yg)("br",{parentName:"p"}),"\n","recommendation : ",(0,r.yg)("inlineCode",{parentName:"p"},"Optional.ofNullable(a).map(b::getXXX).orElse(b.getXXX());"),(0,r.yg)("br",{parentName:"p"}),"\n","current : ",(0,r.yg)("inlineCode",{parentName:"p"},"return null == a ? b.newC() : b.newC(a.getD(), a.getE());"),(0,r.yg)("br",{parentName:"p"}),"\n","recommendation : ",(0,r.yg)("inlineCode",{parentName:"p"},"return Optional.ofNullable(a).map(e -> b.newC(e.getD(),e.getE())).orElse(b.newC());"),(0,r.yg)("br",{parentName:"p"}),"\n","current : ",(0,r.yg)("inlineCode",{parentName:"p"},"return null == a.getB() ? null : a.getB().getC();"),(0,r.yg)("br",{parentName:"p"}),"\n","recommendation : ",(0,r.yg)("inlineCode",{parentName:"p"},"return Optional.ofNullable(a.getB()).map(C::getD).orElse(null);"),(0,r.yg)("br",{parentName:"p"}),"\n","current : ",(0,r.yg)("inlineCode",{parentName:"p"},"return null == a ? new B() : C.newD(a);"),(0,r.yg)("br",{parentName:"p"}),"\n","recommendation : ",(0,r.yg)("inlineCode",{parentName:"p"},"return Optional.ofNullable(a).map(B::newC).orElse(new D());"),"  ")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Directly compare current object with Null, below are some representative examples:",(0,r.yg)("br",{parentName:"p"}),"\n","current : ",(0,r.yg)("inlineCode",{parentName:"p"},"public void xxx\uff08Object o\uff09{if(null == o){retrun;}}"),(0,r.yg)("br",{parentName:"p"}),"\n","current : ",(0,r.yg)("inlineCode",{parentName:"p"},"public boolean wasNull() {return null == currentRow;}"),(0,r.yg)("br",{parentName:"p"}),"\n","recommendation \uff1aUse JDK8's Objects.isNull method.    ")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Judge self if Null or not, and also need to return self related ternary operator, below are some representative examples:",(0,r.yg)("br",{parentName:"p"}),"\n","current : ",(0,r.yg)("inlineCode",{parentName:"p"},"this.a = null == a ? new B().newC() : a;"),(0,r.yg)("br",{parentName:"p"}),"\n","recommendation : ",(0,r.yg)("inlineCode",{parentName:"p"},"Optional.ofNullable(a).orElse(new B().newC());"),(0,r.yg)("br",{parentName:"p"}),"\n","current : ",(0,r.yg)("inlineCode",{parentName:"p"},"a = null == a ? b.getC().getD() : a;"),(0,r.yg)("br",{parentName:"p"}),"\n","recommendation : ",(0,r.yg)("inlineCode",{parentName:"p"},"a  = Optional.ofNullable(a).orElse(b.getC().getD());"),(0,r.yg)("br",{parentName:"p"}),"\n","current : ",(0,r.yg)("inlineCode",{parentName:"p"},"return null == a.getB() ? c : a.getB();"),(0,r.yg)("br",{parentName:"p"}),"\n","recommendation : ",(0,r.yg)("inlineCode",{parentName:"p"},"return Optional.ofNullable(a.getB()).orElse(c);"),(0,r.yg)("br",{parentName:"p"}),"\n","current :"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'BigDecimal c;\nBigDecimal s;\nif (null == c) {\n  c = new BigDecimal("0");\n}\nif (null == s) {\n  s = new BigDecimal("0");\n}\n')),(0,r.yg)("p",{parentName:"li"},"recommendation : ",(0,r.yg)("inlineCode",{parentName:"p"},'c = Optional.ofNullable(c).orElse(new BigDecimal("0")); s = Optional.ofNullable(s).orElse(new BigDecimal("0"));'),(0,r.yg)("br",{parentName:"p"}),"\n","current : ",(0,r.yg)("inlineCode",{parentName:"p"},"return null == results.get(0) ? 0 : results.get(0);"),(0,r.yg)("br",{parentName:"p"}),"\n","recommendation : ",(0,r.yg)("inlineCode",{parentName:"p"},"return Optional.ofNullable(results.get(0)).orElse(0);"),(0,r.yg)("br",{parentName:"p"}),"\n","current : ",(0,r.yg)("inlineCode",{parentName:"p"},"return null == getA().getB() ? Collections.emptyList() : Collections.singletonList(getA().getB());"),(0,r.yg)("br",{parentName:"p"}),"\n","recommendation : ",(0,r.yg)("inlineCode",{parentName:"p"},"return Optional.ofNullable(getA().getB()).map(Collections::singletonList).orElse(Collections.emptyList());"),"  ")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Judge self if Null or not, and also need to return self independent ternary operator, below are some representative examples:",(0,r.yg)("br",{parentName:"p"}),"\n","current : ",(0,r.yg)("inlineCode",{parentName:"p"},"A a = null == b ? cMap.values().iterator().next() : cMap.get(d);"),(0,r.yg)("br",{parentName:"p"}),"\n","current : ",(0,r.yg)("inlineCode",{parentName:"p"},"return null == a ? new B() : new B(c);"),(0,r.yg)("br",{parentName:"p"}),"\n","recommendation : No modification.  ")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Judge collection is null or not, below are some representative examples:",(0,r.yg)("br",{parentName:"p"}),"\n","current :  "),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"private boolean isEmpty(final List<String> xxx) {\n    return null == xxx || xxx.isEmpty();\n}\n")),(0,r.yg)("p",{parentName:"li"},"recommendation : Add a collection tool class to make unified judgment.    ")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Judge Map's value is Null or not, below are some representative examples:",(0,r.yg)("br",{parentName:"p"}),"\n","current :  "),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"public Collection<String> getA(final String b) {\n   Collection<String> result = cMap.get(b);\n   if (null == result) {\n      result = Collections.emptySet();\n   }\n   return result;\n}\n")),(0,r.yg)("p",{parentName:"li"},"recommendation : Use Map.getOrDefault() method.   "),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"public Collection<String> getA(final String b) {\n  return cMap.getOrDefault(b, Collections.emptySet());\n}\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Judge is Null or not, if yes throw exception, else execute next step, below are some representative examples:",(0,r.yg)("br",{parentName:"p"}),"\n","current :"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'private Collection<String> doXxx(final Collection<String> a, final Object<?> b) {\n  if (null == c) {\n     throw new Exception("XXX");\n  }\n  return c.doXxx(a,new Object(b.getXXX(), b.getXXX(), b.getXXX()));\n}\n')),(0,r.yg)("p",{parentName:"li"},"recommendation :"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'private Collection<String> doXxx(final Collection<String> a, final Object<?> b) {\n     return Optional.ofNullable(c).map(e -> e.doXxx(a,\n            new Object(b.getXXX(), b.getXXX(), b.getXXX())))\n           .orElseThrow(()-> new Exception("XXX"));\n}\n'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Judge is Null or not, and return Optional wrapped object, below are some representative examples:",(0,r.yg)("br",{parentName:"p"}),"\n","current : ",(0,r.yg)("inlineCode",{parentName:"p"},"return null == a ? Optional.empty() : Optional.ofNullable(a.getXXX());"),(0,r.yg)("br",{parentName:"p"}),"\n","recommendation : ",(0,r.yg)("inlineCode",{parentName:"p"},"return Optional.ofNullable(a).map(e -> e.getXXX());")))))}s.isMDXComponent=!0}}]);