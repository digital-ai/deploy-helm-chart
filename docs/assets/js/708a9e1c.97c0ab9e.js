"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[759],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var l=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,l,a=function(e,t){if(null==e)return{};var r,l,a={},n=Object.keys(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=l.createContext({}),u=function(e){var t=l.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return l.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||n;return r?l.createElement(k,o(o({ref:t},p),{},{components:r})):l.createElement(k,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<n;u++)o[u]=r[u];return l.createElement.apply(null,o)}return l.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2986:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var l=r(7462),a=r(3366),n=(r(7294),r(3905)),o=["components"],i={sidebar_position:21},s="RBAC rules for the Deploy installation",u={unversionedId:"operator-rbac",id:"operator-rbac",isDocsHomePage:!1,title:"RBAC rules for the Deploy installation",description:"This is internal documentation. This document can be used only if it was recommended by the Support Team.",source:"@site/docs/operator-rbac.md",sourceDirName:".",slug:"/operator-rbac",permalink:"/xl-deploy-kubernetes-helm-chart/docs/operator-rbac",tags:[],version:"current",sidebarPosition:21,frontMatter:{sidebar_position:21},sidebar:"tutorialSidebar",previous:{title:"Deploy Installation on a Air-gapped K8S Cluster",permalink:"/xl-deploy-kubernetes-helm-chart/docs/air-gapped-installation"},next:{title:"Planning migration of an existing Digital.ai Deploy installation to Kubernetes (v23.3 and v24.1)",permalink:"/xl-deploy-kubernetes-helm-chart/docs/migration-deploy-from-on-prem-to-k8s"}},p=[{value:"Requirements",id:"requirements",children:[],level:2},{value:"RBAC rules for the <code>xl kube</code>",id:"rbac-rules-for-the-xl-kube",children:[{value:"Installation and Upgrade",id:"installation-and-upgrade",children:[],level:3},{value:"Clean",id:"clean",children:[],level:3},{value:"Upgrade",id:"upgrade",children:[],level:3}],level:2},{value:"RBAC rules for the Deploy installation",id:"rbac-rules-for-the-deploy-installation-1",children:[{value:"Role: xld-operator-leader-election",id:"role-xld-operator-leader-election",children:[],level:3},{value:"Role: xld-operator-proxy",id:"role-xld-operator-proxy",children:[],level:3},{value:"Role: xld-operator-manager",id:"role-xld-operator-manager",children:[],level:3},{value:"Cluster Role: xld-operator-manager",id:"cluster-role-xld-operator-manager",children:[],level:3}],level:2}],d={toc:p};function c(e){var t=e.components,r=(0,a.Z)(e,o);return(0,n.kt)("wrapper",(0,l.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"rbac-rules-for-the-deploy-installation"},"RBAC rules for the Deploy installation"),(0,n.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"This is internal documentation. This document can be used only if it was recommended by the Support Team."))),(0,n.kt)("p",null,"In Kubernetes, an operator is a piece of software that manages a specific application or service on behalf of its users.\nOperators typically use Kubernetes API calls to create, update, and delete resources that are associated with the application or service they manage.\nIn order to perform these operations, the operator needs to have the appropriate permissions in Kubernetes."),(0,n.kt)("h2",{id:"requirements"},"Requirements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Running k8s cluster"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"kubectl")," connected to the cluster"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"xl-cli")," installed - version 23.3.x"),(0,n.kt)("li",{parentName:"ul"},"Deploy operator - version 23.3.x")),(0,n.kt)("h2",{id:"rbac-rules-for-the-xl-kube"},"RBAC rules for the ",(0,n.kt)("inlineCode",{parentName:"h2"},"xl kube")),(0,n.kt)("h3",{id:"installation-and-upgrade"},"Installation and Upgrade"),(0,n.kt)("p",null,"During ",(0,n.kt)("inlineCode",{parentName:"p"},"xl kube install")," process is doing apply of the following resource kinds:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Service"),(0,n.kt)("li",{parentName:"ul"},"Secret"),(0,n.kt)("li",{parentName:"ul"},"CustomResourceDefinition"),(0,n.kt)("li",{parentName:"ul"},"Deployment"),(0,n.kt)("li",{parentName:"ul"},"Role"),(0,n.kt)("li",{parentName:"ul"},"RoleBinding"),(0,n.kt)("li",{parentName:"ul"},"DigitalaiDeploy.")),(0,n.kt)("p",null,"Additionally, if there is selected creation of namespace, it is needed create for:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Namespace.")),(0,n.kt)("p",null,"If there is selected nginx controller installation xl-cli needs to create:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ClusterRole"),(0,n.kt)("li",{parentName:"ul"},"ClusterRoleBinding.")),(0,n.kt)("h3",{id:"clean"},"Clean"),(0,n.kt)("p",null,"To run ",(0,n.kt)("inlineCode",{parentName:"p"},"xl kube clean")," the process needs all the resources that used with ",(0,n.kt)("inlineCode",{parentName:"p"},"xl kube install"),",\ntogether with resources that are defined for operator with:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Role: xld-operator-manager"),(0,n.kt)("li",{parentName:"ul"},"Cluster Role: xld-operator-manager.")),(0,n.kt)("p",null,"Note: Clean is not deleting the namespace, so it does not need permissions on the namespace."),(0,n.kt)("h3",{id:"upgrade"},"Upgrade"),(0,n.kt)("p",null,"To run ",(0,n.kt)("inlineCode",{parentName:"p"},"xl kube upgrade")," the process needs all the resources that used with "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"xl kube install")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"xl kube clean")),(0,n.kt)("li",{parentName:"ul"},"and all verbs on the Job resource.")),(0,n.kt)("h2",{id:"rbac-rules-for-the-deploy-installation-1"},"RBAC rules for the Deploy installation"),(0,n.kt)("p",null,"The operator needs following roles to be able to manage resources for the Deploy:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Roles:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"xld-operator-leader-election"),(0,n.kt)("li",{parentName:"ul"},"xld-operator-proxy"),(0,n.kt)("li",{parentName:"ul"},"xld-operator-manager"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Cluster role:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"xld-operator-manager (the name depends on the custom namespace)")))),(0,n.kt)("p",null,"All roles have role binding to the default service account that is located in the namespace where the operator will be installed."),(0,n.kt)("h3",{id:"role-xld-operator-leader-election"},"Role: xld-operator-leader-election"),(0,n.kt)("p",null,"Leader election role is used by operator for internal management of the operator's resources, it is using following resources:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"configmaps"),(0,n.kt)("li",{parentName:"ul"},"events"),(0,n.kt)("li",{parentName:"ul"},"leases.")),(0,n.kt)("p",null,"This role is used always by the operator."),(0,n.kt)("h3",{id:"role-xld-operator-proxy"},"Role: xld-operator-proxy"),(0,n.kt)("p",null,"The role is for operator to determine whether a user or service account has the necessary permissions to perform a particular operation,\nand to verify that a user or service account is authenticated and authorized to make API requests."),(0,n.kt)("p",null,"Operator proxy role is using following resources:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"tokenreviews"),(0,n.kt)("li",{parentName:"ul"},"subjectaccessreviews.")),(0,n.kt)("p",null,"This role is used always by the operator."),(0,n.kt)("h3",{id:"role-xld-operator-manager"},"Role: xld-operator-manager"),(0,n.kt)("p",null,"To manage all the resources that are needed for the Deploy we have this role. Role is giving permission to operator to manage all the resources."),(0,n.kt)("p",null,"It is used for managing following resources:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"events"),(0,n.kt)("li",{parentName:"ul"},"configmaps"),(0,n.kt)("li",{parentName:"ul"},"persistentvolumeclaims"),(0,n.kt)("li",{parentName:"ul"},"secrets"),(0,n.kt)("li",{parentName:"ul"},"serviceaccounts"),(0,n.kt)("li",{parentName:"ul"},"services"),(0,n.kt)("li",{parentName:"ul"},"deployments"),(0,n.kt)("li",{parentName:"ul"},"statefulsets"),(0,n.kt)("li",{parentName:"ul"},"daemonsets"),(0,n.kt)("li",{parentName:"ul"},"ingresses"),(0,n.kt)("li",{parentName:"ul"},"poddisruptionbudgets"),(0,n.kt)("li",{parentName:"ul"},"rolebindings"),(0,n.kt)("li",{parentName:"ul"},"roles"),(0,n.kt)("li",{parentName:"ul"},"digitalaideploys"),(0,n.kt)("li",{parentName:"ul"},"digitalaideploys/status"),(0,n.kt)("li",{parentName:"ul"},"digitalaideploys/finalizers.")),(0,n.kt)("p",null,"This role is used always by the operator."),(0,n.kt)("h3",{id:"cluster-role-xld-operator-manager"},"Cluster Role: xld-operator-manager"),(0,n.kt)("p",null,"This is the only cluster role that is needed by the operator, but it is only used when ingress controller is managed by the operator.\nIf ingress controller is not managed by the operator (nginx and haproxy ingresses are disabled), this role is not needed."),(0,n.kt)("p",null,"It is used for managing following resources:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"events"),(0,n.kt)("li",{parentName:"ul"},"ingressclasses"),(0,n.kt)("li",{parentName:"ul"},"clusterrolebindings"),(0,n.kt)("li",{parentName:"ul"},"clusterroles.")),(0,n.kt)("p",null,"For the openshift variant of the operator following additional resources are managed:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"poddisruptionbudgets"),(0,n.kt)("li",{parentName:"ul"},"securitycontextconstraints"),(0,n.kt)("li",{parentName:"ul"},"and all resources in the route.openshift.io API group.")))}c.isMDXComponent=!0}}]);