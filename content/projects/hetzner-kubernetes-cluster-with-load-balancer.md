---
title: "Hetzner Kubernetes Cluster With Load Balancer"
slug: "hetzner-kubernetes-cluster-with-load-balancer"
description: "As shown in the linked repository, I created an Ansible setup from scratch to install a Kubernetes cluster comprising two load balancer nodes, three master nodes, and three worker nodes."
tags: ["Open Source", "Cloud and Infrastructure", "Systems and Integrations"]
timestamp: 2024-10-13T00:00:00Z
externalUrl: https://github.com/Gogoro/hetzner-kubernetes-cluster-with-load-balancers
featured: true
---

![kubernetes+hetzner.jpg](/projects/hetzner-kubernetes-cluster-with-load-balancer/kuberneteshetzner.jpg)

[https://github.com/Gogoro/hetzner-kubernetes-cluster-with-load-balancers](https://github.com/Gogoro/hetzner-kubernetes-cluster-with-load-balancers)

As shown in the linked repository, I created an Ansible setup from scratch to install a Kubernetes cluster comprising two load balancer nodes, three master nodes, and three worker nodes.

The load balancer uses HAProxy with a floating IP that switches between the two nodes for high availability.

The scripts are designed to be idempotent, allowing safe repeated execution without risking infrastructure disruption.

# Motivations

There was two main motivations for doing this project.

We needed a Kubernetes cluster, and Google cloud was way to expensive.

In the GitHub repository I also break down the price difference between running a Kubernetes Cluster in Google vs running it on Hetzner. Spoiler alert, it's 10x the price running it in the Google Cloud!!
