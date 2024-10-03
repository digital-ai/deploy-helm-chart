"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[809],{9234:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=n(4848),i=n(8453);const r={sidebar_position:2},o="Prerequisites",l={id:"prerequisites",title:"Prerequisites",description:"This is internal documentation. This document can be used only if it was recommended by the Support Team.",source:"@site/docs/prerequisites.md",sourceDirName:".",slug:"/prerequisites",permalink:"/deploy-helm-chart/docs/prerequisites",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/deploy-helm-chart/docs/intro"},next:{title:"Chart",permalink:"/deploy-helm-chart/docs/chart"}},a={},c=[];function d(e){const t={a:"a",admonition:"admonition",h1:"h1",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsx)(t.p,{children:"This is internal documentation. This document can be used only if it was recommended by the Support Team."})}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsx)(t.p,{children:"From 10.2 version helm chart is not used directly. Use operator based installation instead."})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Kubernetes v1.17+"}),"\n",(0,s.jsxs)(t.li,{children:["A running Kubernetes cluster","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Dynamic storage provisioning enabled"}),"\n",(0,s.jsxs)(t.li,{children:["StorageClass for persistent storage. The ",(0,s.jsx)(t.a,{href:"#installing-storageclass-helm-chart",children:"Installing StorageClass Helm Chart"})," section provides steps to install storage class on OnPremise Kubernetes cluster and AWS Elastic Kubernetes Service(EKS) cluster."]}),"\n",(0,s.jsx)(t.li,{children:"StorageClass which is expected to be used with Digital.ai Deploy should be set as default StorageClass"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/",children:"Kubectl"})," installed and setup to use the cluster"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://helm.sh/docs/intro/install/",children:"Helm"})," 3 installed"]}),"\n",(0,s.jsx)(t.li,{children:"License File for Digital.ai Deploy in base64 encoded format"}),"\n",(0,s.jsx)(t.li,{children:"Repository Keystorefile in base64 encoded format"}),"\n",(0,s.jsx)(t.li,{children:"The passphrase for the RepositoryKeystore"}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var s=n(6540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);