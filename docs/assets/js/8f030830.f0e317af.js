"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[618],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7857:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],i={sidebar_position:11},s="Development",p={unversionedId:"development",id:"development",isDocsHomePage:!1,title:"Development",description:"Let's have a look here about the easiest way to setup the cluster for a development on a local computer.",source:"@site/docs/development.md",sourceDirName:".",slug:"/development",permalink:"/xl-deploy-kubernetes-helm-chart/docs/development",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Parameters",permalink:"/xl-deploy-kubernetes-helm-chart/docs/parameters"},next:{title:"Useful links",permalink:"/xl-deploy-kubernetes-helm-chart/docs/useful-links"}},u=[{value:"Troubleshooting",id:"troubleshooting",children:[],level:2}],c={toc:u};function m(e){var t=e.components,i=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"development"},"Development"),(0,a.kt)("p",null,"Let's have a look here about the easiest way to setup the cluster for a development on a local computer."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Copy ",(0,a.kt)("inlineCode",{parentName:"li"},"values-haproxy.yaml")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"values-nginx.yaml")," and rename it as ",(0,a.kt)("inlineCode",{parentName:"li"},"values.yaml")," "),(0,a.kt)("li",{parentName:"ol"},"Replace all usages in ",(0,a.kt)("inlineCode",{parentName:"li"},"values.yaml")," of ",(0,a.kt)("inlineCode",{parentName:"li"},'storageClass: "-"')," to ",(0,a.kt)("inlineCode",{parentName:"li"},'storageClass: "standard"'),". This way we will use\nlocal file system as a dynamic storage class with no need of configuring NFS server."),(0,a.kt)("li",{parentName:"ol"},"Define ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=values.yaml",title:"values.yaml"},"AdminPassword:\n  admin\n\nxldLicense:\n    # Convert xl-deploy.lic files content to base64\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Comment out ",(0,a.kt)("inlineCode",{parentName:"p"},"RepositoryKeystore")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"KeystorePassphrase"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Turn of persistence with"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Persistence:\n  Enabled: false\n")),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"You can also change ",(0,a.kt)("inlineCode",{parentName:"li"},"XldMasterCount")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"XldWorkerCount")," to 1 or 2. Depends on your computer capacity.\nSame for RabbitMq. On Dev environment, you can just use 1 replica.")),(0,a.kt)("p",null,"Once all of that is done you are ready to run it from the root of the project:\n",(0,a.kt)("inlineCode",{parentName:"p"},"helm install xld-production ."),"\nOnly make sure, that you installed kubernetes (currently it works on 1.17-1.20) and helm. "),(0,a.kt)("p",null,"When you want to clean it up: ",(0,a.kt)("inlineCode",{parentName:"p"},"helm delete xld-production")," plus you have to remove your ",(0,a.kt)("inlineCode",{parentName:"p"},"pvc"),", like\n",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl delete pvc data-xld-production-postgresql-0 data-xld-production-rabbitmq-0"),". ",(0,a.kt)("br",null),"\nYou might have slightly different names, if so, first list ",(0,a.kt)("inlineCode",{parentName:"p"},"pvcs")," to check what you have with ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get pvc"),"."),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"Most of the cases what you have to know to troubleshoot your cluster locally:"),(0,a.kt)("p",null,"1) Check logs of the pod ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl logs POD_NAME -f")),(0,a.kt)("p",null,"2) Check the state of pod/service/etc by ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl describe POD_NAME|SERVICE_NAME|ETC"),". "),(0,a.kt)("p",null,"To find all what you have on your system up and running ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get all"),"\n",(0,a.kt)("img",{alt:"kubectl get all",src:n(2150).Z}),". First thing you need to pay your attention to is the readiness of the Pods.\nFor ingress that you have external IP address to be able connect to UI from your browser."))}m.isMDXComponent=!0},2150:function(e,t,n){t.Z=n.p+"assets/images/k-get-all-ea1527a2f1d56486b1862d6a0edc6cb1.png"}}]);