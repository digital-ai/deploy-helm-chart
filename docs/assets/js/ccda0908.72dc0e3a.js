"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[365],{5301:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(4848),o=n(8453);const i={sidebar_position:3},s="Chart",a={id:"chart",title:"Chart",description:"This is internal documentation. This document can be used only if it was recommended by the Support Team.",source:"@site/docs/chart.md",sourceDirName:".",slug:"/chart",permalink:"/deploy-helm-chart/docs/chart",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Prerequisites",permalink:"/deploy-helm-chart/docs/prerequisites"},next:{title:"Tested Configuration",permalink:"/deploy-helm-chart/docs/tested-configuration"}},c={},l=[];function d(e){const t={a:"a",admonition:"admonition",h1:"h1",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"chart",children:"Chart"}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsx)(t.p,{children:"This is internal documentation. This document can be used only if it was recommended by the Support Team."})}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsx)(t.p,{children:"From 10.2 version helm chart is not used directly. Use operator based installation instead."})}),"\n",(0,r.jsx)(t.p,{children:"This chart will deploy following components:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"PostgreSQL single instance / pod"}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["For production grade installations it is recommended to use an external PostgreSQL).\nAlternatively users may want to install Postgres HA on Kubernetes. For more information,\nrefer [Crunchy PostgreSQL Operator](",(0,r.jsx)(t.a,{href:"https://www.crunchydata.com/products/crunchy-postgresql-for-kubernetes/",children:"https://www.crunchydata.com/products/crunchy-postgresql-for-kubernetes/"})]})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"RabbitMQ in highly available configuration"}),"\n",(0,r.jsx)(t.li,{children:"HAProxy ingress controller"}),"\n",(0,r.jsx)(t.li,{children:"Digital.ai Deploy multiple masters and workers"}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"Satellites are expected to be deployed outside the Kubernetes cluster."})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(6540);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);