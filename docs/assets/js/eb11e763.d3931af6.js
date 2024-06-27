"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[477],{4933:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=t(4848),o=t(8453);const r={sidebar_position:8},s="Uninstalling Helm Chart",a={id:"uninstalling-helm-chart",title:"Uninstalling Helm Chart",description:"This is internal documentation. This document can be used only if it was recommended by the Support Team.",source:"@site/docs/uninstalling-helm-chart.md",sourceDirName:".",slug:"/uninstalling-helm-chart",permalink:"/deploy-helm-chart/docs/uninstalling-helm-chart",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Upgrading Helm Chart",permalink:"/deploy-helm-chart/docs/upgrading-helm-chart"},next:{title:"Access Dashboard",permalink:"/deploy-helm-chart/docs/access-dashboard"}},c={},l=[];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"uninstalling-helm-chart",children:"Uninstalling Helm Chart"}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"This is internal documentation. This document can be used only if it was recommended by the Support Team."})}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"From 10.2 version helm chart is not used directly. Use operator based installation instead."})}),"\n",(0,i.jsxs)(n.p,{children:["To uninstall/delete the ",(0,i.jsx)(n.code,{children:"xld-production"})," deployment:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"helm delete xld-production\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Shutting down worker from XLD GUI is not supported because of replicaset functionality of Kubernetes."})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(6540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);