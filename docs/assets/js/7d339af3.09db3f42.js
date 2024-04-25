"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[944],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=d(n),u=i,g=p["".concat(l,".").concat(u)]||p[u]||c[u]||r;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8040:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return m},default:function(){return p}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],s={sidebar_position:7},l="Upgrading Helm Chart",d={unversionedId:"upgrading-helm-chart",id:"upgrading-helm-chart",isDocsHomePage:!1,title:"Upgrading Helm Chart",description:"This is internal documentation. This document can be used only if it was recommended by the Support Team.",source:"@site/docs/upgrading-helm-chart.md",sourceDirName:".",slug:"/upgrading-helm-chart",permalink:"/deploy-helm-chart/docs/upgrading-helm-chart",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Installing Helm Chart",permalink:"/deploy-helm-chart/docs/installing-helm-chart"},next:{title:"Uninstalling Helm Chart",permalink:"/deploy-helm-chart/docs/uninstalling-helm-chart"}},m=[{value:"Existing or External Databases",id:"existing-or-external-databases",children:[],level:3},{value:"Existing or External Messaging Queue",id:"existing-or-external-messaging-queue",children:[],level:3},{value:"Existing Ingress Controller",id:"existing-ingress-controller",children:[],level:3}],c={toc:m};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"upgrading-helm-chart"},"Upgrading Helm Chart"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This is internal documentation. This document can be used only if it was recommended by the Support Team."))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"From 10.2 version helm chart is not used directly. Use operator based installation instead."))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"From 23.3 version this document is outdated. Use official Digital.ai documentation."))),(0,r.kt)("p",null,"To upgrade the version ",(0,r.kt)("inlineCode",{parentName:"p"},"ImageTag")," parameter needs to be updated to the desired version. To see the list of available ImageTag for Digital.ai Deploy, refer the following links ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/xebialabs/xl-deploy/tags"},"Deploy_tags"),". For upgrade, Rolling Update strategy is used.\nTo upgrade the chart with the release name ",(0,r.kt)("inlineCode",{parentName:"p"},"xld-production"),", execute below command: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade xld-production deploy-helm-chart/\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Currently upgrading custom plugins and database drivers is not supported.\nIn order to upgrade custom plugins and database drivers, users need to build custom docker image of Digital.ai Deploy\ncontaining required files.See the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.xebialabs.com/v.9.7/deploy/how-to/customize-xl-up/#adding-custom-plugins"},"adding custom plugins"),"\nsection in the the Digital.ai (formerly Xebialabs) official documentation."))),(0,r.kt)("h3",{id:"existing-or-external-databases"},"Existing or External Databases"),(0,r.kt)("p",null,"There is an option to use external PostgreSQL database for your Digital.ai Deploy.\nConfigure values.yaml file accordingly.\nIf you want to use an existing database,  these steps need to be followed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Change ",(0,r.kt)("inlineCode",{parentName:"li"},"postgresql.install")," to false"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UseExistingDB.Enabled"),": true"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UseExistingDB.XL_DB_URL"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"jdbc:postgresql://<postgres-service-name>.<namsepace>.svc.cluster.local:5432/<xld-database-name>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UseExistingDB.XL_DB_USERNAME"),": Database User for xl-deploy"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UseExistingDB.XL_DB_PASSWORD"),": Database Password for xl-deploy")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#Passing a custom PostgreSQL to XL-Deploy\nUseExistingDB:\n  Enabled: true\n  # If you want to use existing database, change the value to "true".\n  # Uncomment the following lines and provide the values.\n  XL_DB_URL: jdbc:postgresql://xld-production-postgresql.default.svc.cluster.local:5432/xld-db\n  XL_DB_USERNAME: postgres\n  XL_DB_PASSWORD: postgres\n')),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"User might have database instance running outside the cluster. Configure parameters accordingly."))),(0,r.kt)("h3",{id:"existing-or-external-messaging-queue"},"Existing or External Messaging Queue"),(0,r.kt)("p",null,"If you plan to use an existing messaging queue, follow these steps to configure values.yaml"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Change ",(0,r.kt)("inlineCode",{parentName:"li"},"rabbitmq-ha.install")," to false"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UseExistingMQ.Enabled"),": true"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UseExistingMQ.XLD_TASK_QUEUE_USERNAME"),": Username for xl-deploy task queue"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UseExistingMQ.XLD_TASK_QUEUE_PASSWORD"),": Password for xl-deploy task queue"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UseExistingMQ.XLD_TASK_QUEUE_URL"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"amqp://<rabbitmq-service-name>.<namsepace>.svc.cluster.local:5672")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UseExistingMQ.XLD_TASK_QUEUE_DRIVER_CLASS_NAME"),": Driver class name for  xl-deploy task queue")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Passing a custom RabbitMQ to XL-Deploy\nUseExistingMQ:\n  Enabled: true\n  # If you want to use an existing Message Queue, change 'rabbitmq-ha.install' to 'false'.\n  # Set 'UseExistingMQ.Enabled' to 'true'.Uncomment the following lines and provide the values.\n  XLD_TASK_QUEUE_USERNAME: guest\n  XLD_TASK_QUEUE_PASSWORD: guest\n  XLD_TASK_QUEUE_URL: amqp://xld-production-rabbitmq-ha.default.svc.cluster.local:5672/%2F\n  XLD_TASK_QUEUE_DRIVER_CLASS_NAME: com.rabbitmq.jms.admin.RMQConnectionFactory\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"User might have rabbitmq instance running outside the cluster. Configure parameters accordingly."))),(0,r.kt)("h3",{id:"existing-ingress-controller"},"Existing Ingress Controller"),(0,r.kt)("p",null,"There is an option to use external ingress controller for Digital.ai Deploy.\nIf you want to use an existing ingress controller,  change ",(0,r.kt)("inlineCode",{parentName:"p"},"haproxy.install")," to false."))}p.isMDXComponent=!0}}]);