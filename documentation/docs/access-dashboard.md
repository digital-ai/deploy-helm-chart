---
sidebar_position: 9
---

# Access Dashboard

By default, the NodePort service is exposed externally on the available k8s worker nodes and can be seen by running below command
```bash
kubectl get service
```
For production grade setups, we recommend using LoadBalancer as service type.

 For OnPremise Cluster, you can access Digital.ai Deploy UI from an outside cluster with below link 

 [http://ingress-loadbalancer-DNS:NodePort/xl-deploy/](http://NodeIP:NodePort/xl-deploy/) 

Similarly for EKS, access Digital.ai Deploy UI using below link 

 [http://ingress-loadbalancer-DNS/xl-deploy/](http://ingress-loadbalancer-DNS:NodePort/xl-deploy/)

The path should be unique across the Kubernetes cluster.(Ex "/xl-deploy/") 