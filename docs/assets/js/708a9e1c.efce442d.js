"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[341],{1038:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>d});var l=r(4848),i=r(8453);const s={sidebar_position:21},o="RBAC rules for the Deploy installation",t={id:"operator-rbac",title:"RBAC rules for the Deploy installation",description:"This is internal documentation. This document can be used only if it was recommended by the Support Team.",source:"@site/docs/operator-rbac.md",sourceDirName:".",slug:"/operator-rbac",permalink:"/deploy-helm-chart/docs/operator-rbac",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:21,frontMatter:{sidebar_position:21},sidebar:"tutorialSidebar",previous:{title:"Deploy Installation on a Air-gapped K8S Cluster",permalink:"/deploy-helm-chart/docs/air-gapped-installation"},next:{title:"Planning migration of an existing Digital.ai Deploy installation to Kubernetes (v23.3 and v24.1)",permalink:"/deploy-helm-chart/docs/migration-deploy-from-on-prem-to-k8s"}},a={},d=[{value:"Requirements",id:"requirements",level:2},{value:"RBAC rules for the <code>xl kube</code>",id:"rbac-rules-for-the-xl-kube",level:2},{value:"Installation and Upgrade",id:"installation-and-upgrade",level:3},{value:"Clean",id:"clean",level:3},{value:"Upgrade",id:"upgrade",level:3},{value:"RBAC rules for the Deploy installation",id:"rbac-rules-for-the-deploy-installation-1",level:2},{value:"Role: xld-operator-leader-election",id:"role-xld-operator-leader-election",level:3},{value:"Role: xld-operator-proxy",id:"role-xld-operator-proxy",level:3},{value:"Role: xld-operator-manager",id:"role-xld-operator-manager",level:3},{value:"Cluster Role: xld-operator-manager",id:"cluster-role-xld-operator-manager",level:3}];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"rbac-rules-for-the-deploy-installation",children:"RBAC rules for the Deploy installation"}),"\n",(0,l.jsx)(n.admonition,{type:"caution",children:(0,l.jsx)(n.p,{children:"This is internal documentation. This document can be used only if it was recommended by the Support Team."})}),"\n",(0,l.jsx)(n.p,{children:"In Kubernetes, an operator is a piece of software that manages a specific application or service on behalf of its users.\nOperators typically use Kubernetes API calls to create, update, and delete resources that are associated with the application or service they manage.\nIn order to perform these operations, the operator needs to have the appropriate permissions in Kubernetes."}),"\n",(0,l.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Running k8s cluster"}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"kubectl"})," connected to the cluster"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"xl-cli"})," installed - version 23.3.x"]}),"\n",(0,l.jsx)(n.li,{children:"Deploy operator - version 23.3.x"}),"\n"]}),"\n",(0,l.jsxs)(n.h2,{id:"rbac-rules-for-the-xl-kube",children:["RBAC rules for the ",(0,l.jsx)(n.code,{children:"xl kube"})]}),"\n",(0,l.jsx)(n.h3,{id:"installation-and-upgrade",children:"Installation and Upgrade"}),"\n",(0,l.jsxs)(n.p,{children:["During ",(0,l.jsx)(n.code,{children:"xl kube install"})," process is doing apply of the following resource kinds:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Service"}),"\n",(0,l.jsx)(n.li,{children:"Secret"}),"\n",(0,l.jsx)(n.li,{children:"CustomResourceDefinition"}),"\n",(0,l.jsx)(n.li,{children:"Deployment"}),"\n",(0,l.jsx)(n.li,{children:"Role"}),"\n",(0,l.jsx)(n.li,{children:"RoleBinding"}),"\n",(0,l.jsx)(n.li,{children:"DigitalaiDeploy."}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Additionally, if there is selected creation of namespace, it is needed create for:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Namespace."}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"If there is selected nginx controller installation xl-cli needs to create:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"ClusterRole"}),"\n",(0,l.jsx)(n.li,{children:"ClusterRoleBinding."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"clean",children:"Clean"}),"\n",(0,l.jsxs)(n.p,{children:["To run ",(0,l.jsx)(n.code,{children:"xl kube clean"})," the process needs all the resources that used with ",(0,l.jsx)(n.code,{children:"xl kube install"}),",\ntogether with resources that are defined for operator with:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Role: xld-operator-manager"}),"\n",(0,l.jsx)(n.li,{children:"Cluster Role: xld-operator-manager."}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Note: Clean is not deleting the namespace, so it does not need permissions on the namespace."}),"\n",(0,l.jsx)(n.h3,{id:"upgrade",children:"Upgrade"}),"\n",(0,l.jsxs)(n.p,{children:["To run ",(0,l.jsx)(n.code,{children:"xl kube upgrade"})," the process needs all the resources that used with"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"xl kube install"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"xl kube clean"})}),"\n",(0,l.jsx)(n.li,{children:"and all verbs on the Job resource."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"rbac-rules-for-the-deploy-installation-1",children:"RBAC rules for the Deploy installation"}),"\n",(0,l.jsx)(n.p,{children:"The operator needs following roles to be able to manage resources for the Deploy:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Roles:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"xld-operator-leader-election"}),"\n",(0,l.jsx)(n.li,{children:"xld-operator-proxy"}),"\n",(0,l.jsx)(n.li,{children:"xld-operator-manager"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Cluster role:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"xld-operator-manager (the name depends on the custom namespace)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"All roles have role binding to the default service account that is located in the namespace where the operator will be installed."}),"\n",(0,l.jsx)(n.h3,{id:"role-xld-operator-leader-election",children:"Role: xld-operator-leader-election"}),"\n",(0,l.jsx)(n.p,{children:"Leader election role is used by operator for internal management of the operator's resources, it is using following resources:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"configmaps"}),"\n",(0,l.jsx)(n.li,{children:"events"}),"\n",(0,l.jsx)(n.li,{children:"leases."}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"This role is used always by the operator."}),"\n",(0,l.jsx)(n.h3,{id:"role-xld-operator-proxy",children:"Role: xld-operator-proxy"}),"\n",(0,l.jsx)(n.p,{children:"The role is for operator to determine whether a user or service account has the necessary permissions to perform a particular operation,\nand to verify that a user or service account is authenticated and authorized to make API requests."}),"\n",(0,l.jsx)(n.p,{children:"Operator proxy role is using following resources:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"tokenreviews"}),"\n",(0,l.jsx)(n.li,{children:"subjectaccessreviews."}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"This role is used always by the operator."}),"\n",(0,l.jsx)(n.h3,{id:"role-xld-operator-manager",children:"Role: xld-operator-manager"}),"\n",(0,l.jsx)(n.p,{children:"To manage all the resources that are needed for the Deploy we have this role. Role is giving permission to operator to manage all the resources."}),"\n",(0,l.jsx)(n.p,{children:"It is used for managing following resources:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"events"}),"\n",(0,l.jsx)(n.li,{children:"configmaps"}),"\n",(0,l.jsx)(n.li,{children:"persistentvolumeclaims"}),"\n",(0,l.jsx)(n.li,{children:"secrets"}),"\n",(0,l.jsx)(n.li,{children:"serviceaccounts"}),"\n",(0,l.jsx)(n.li,{children:"services"}),"\n",(0,l.jsx)(n.li,{children:"deployments"}),"\n",(0,l.jsx)(n.li,{children:"statefulsets"}),"\n",(0,l.jsx)(n.li,{children:"daemonsets"}),"\n",(0,l.jsx)(n.li,{children:"ingresses"}),"\n",(0,l.jsx)(n.li,{children:"poddisruptionbudgets"}),"\n",(0,l.jsx)(n.li,{children:"rolebindings"}),"\n",(0,l.jsx)(n.li,{children:"roles"}),"\n",(0,l.jsx)(n.li,{children:"digitalaideploys"}),"\n",(0,l.jsx)(n.li,{children:"digitalaideploys/status"}),"\n",(0,l.jsx)(n.li,{children:"digitalaideploys/finalizers."}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"This role is used always by the operator."}),"\n",(0,l.jsx)(n.h3,{id:"cluster-role-xld-operator-manager",children:"Cluster Role: xld-operator-manager"}),"\n",(0,l.jsx)(n.p,{children:"This is the only cluster role that is needed by the operator, but it is only used when ingress controller is managed by the operator.\nIf ingress controller is not managed by the operator (nginx and haproxy ingresses are disabled), this role is not needed."}),"\n",(0,l.jsx)(n.p,{children:"It is used for managing following resources:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"events"}),"\n",(0,l.jsx)(n.li,{children:"ingressclasses"}),"\n",(0,l.jsx)(n.li,{children:"clusterrolebindings"}),"\n",(0,l.jsx)(n.li,{children:"clusterroles."}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"For the openshift variant of the operator following additional resources are managed:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"poddisruptionbudgets"}),"\n",(0,l.jsx)(n.li,{children:"securitycontextconstraints"}),"\n",(0,l.jsx)(n.li,{children:"and all resources in the route.openshift.io API group."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>t});var l=r(6540);const i={},s=l.createContext(i);function o(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);