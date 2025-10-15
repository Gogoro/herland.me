---
title: "Fipp Marketplace"
slug: "fipp-marketplace"
description: "In late 2020 my business partner and I decided to test out another startup concept. The idea was to improve the process of buying second hand items. The idea was that we collect the items, check quality and sell the item in our store."
tags: ["Startup Journey", "Web- and mobile development"]
timestamp: 2020-10-11T00:00:00Z
featured: false
---

In late 2020 my business partner and I decided to test out another startup concept. The idea was to improve the process of buying second hand items. The idea was that we collect the items, check quality and sell the item in our store.

![Preview-app-store.png](/projects/fipp-marketplace/Preview-app-store.png)

Our idea was pretty simple, and a natural next step for getting more use out of second hand items. We already have finn.no here in Norway and their grip on the market is extreme. They basically have a monopoly on second hand items, cars, real estate and business transactions. Their system is really good, but one big issue I've always had is that there is so much work related to the process when I want to sell a bunch of things.

Here is where the idea came to be. We where going to improve the process a lot. Let me explain.

## The old way

First I will explain the process that you have to go through in order to sell your stuff on finn.no, which is the standard we where going to compete with.

_The process got changed a lot around the time we decided to end our adventure, but I will explain how the process worked when we started Fipp._

**Publishing**

1. The first job you have to do is to publish everything you want to sell.
2. You take pictures of what you want to sell
3. You enter the app, and select what you want to sell.
4. You write a text about the item.
5. You measure and weigh your item (not all types, but some)
6. You enter that into the app.
7. You publish the add, and do the same for your next item.

**Selling**

Now that you have one or many ads listed on finn.no, you need to go through the process of selling. This normally consists of:

- Getting many messages from people asking strange questions and haggling. This can be very frustrating and time consuming.
- Agreeing to meet to complete the deal, and then people don't show up. This is the most frustrating part.
- Agreeing to a deal with postal. Then either the seller has to send the package and get the money when the package is received, or the buyer needs to front the money.

This process is time consuming, and there has been many times that I'm just so frustrated of dealing with people that I end up tossing usable items because I'm tired of it all.

## The new way

1. You download the app, and send a request for us to come and pick up your items. And agree to us taking 12% of the sale, 50kr for pickup and that the items price get's reduced by 10% every week until sold.
2. We come in our big box car to your home, and you give us the items you want to sell. Each item get's labeled with a QR code, registered in our system and placed in the car. (Now, you don't need to do more, and we do the rest)
3. We drive all the items to our processing facility, where all the items are unloaded and scanned. This moves the item physically and digitally to the next step of the process.
4. The item goes through multiple steps. First it get's checked for defects, then measured, weighed, taken photos of, text is written and then put in storage until sold.
5. In the app, the item appears for sale and people can buy it just as they buy new items. Just pick what you want to buy, add it to your shopping cart and pay for everything at once.
6. This process demands VERY little of the seller, and the buyer can buy with the confidence that we have checked the quality.

## MVP

- The idea was exiting
- The potential impact was huge
- The marked is already there
- Learning curve for customers is low

So we decided to give it a shot and do a quick MVP.

Early on we got investors on board (friends and family) and we applied for government grants and got green light.

To validate the idea as fast as possible, we started building out v1 of the physical process and the app at the same time. Bardia, my business partner focused on the physical process and I on the digital part together with our first employee, Hamed.

Bardia bought a huge box car and started making it ready to collect items. In my house he made stations for every step of the process, with QR codes and a QR code label machine.

Hamed and I started hammering along on the app and systems. I created our backbone named "Hercul".

![5c8af7fa761eec40a26cba132d1b1643284bc5e4-870x396.webp](/projects/fipp-marketplace/5c8af7fa761eec40a26cba132d1b1643284bc5e4-870x396.webp)

Hercul was our management system to orchestrate the back-office processing of each item.

Hercul was built using Node, PostgreSQL, Kubernetes and React.

For the public facing app we used React Native, Node, PostgreSQL, Elasticsearch and Kubernetes. Here are some images of the mocks, since I don't have the app up and running anymore and forgot to take screenshots.

![1a - Explore.png](/projects/fipp-marketplace/1a_-_Explore.png)

![1b - Explore - Single View.png](/projects/fipp-marketplace/1b_-_Explore_-_Single_View.png)

![3b - My objects - Listing [pick-up-ordered].png](/projects/fipp-marketplace/3b_-_My_objects_-_Listing_pick-up-ordered.png)

![3c - My object - Sell -_ Choose deal.png](/projects/fipp-marketplace/3c_-_My_object_-_Sell_-__Choose_deal.png)

![90a - Tour - Intro.png](/projects/fipp-marketplace/90a_-_Tour_-_Intro.png)

![90b - Tour - Selg.png](/projects/fipp-marketplace/90b_-_Tour_-_Selg.png)

![90c - Tour - Veldedighet.png](/projects/fipp-marketplace/90c_-_Tour_-_Veldedighet.png)

![90d - Tour - Kjøp.png](/projects/fipp-marketplace/90d_-_Tour_-_Kjp.png)

![90e - Tour - Priskutt.png](/projects/fipp-marketplace/90e_-_Tour_-_Priskutt.png)

We got really far really fast, and we tested the process.

Collecting data from our initial tests we could start to calculate out how much time and energy it would take to get from A to Z. Running the numbers we started to see that we needed pretty big scale before starting to make a profit. We stood at a crossroad. Try to raise 50x more capital than we had gotten from our initial investors, or pull the plug.

We didn't want to take the risk, and decided to call it then and there.

I've always wondered what would have happened if we continued on our journey, but I'm still confident in our choice. There is a time to put your head down and fight, but this was not one of them.

Even tho I ended up loosing a fair bit of money doing this MVP run, I still feel like I'm a little bit richer. Because I learned so much and got many valuable lessons.

_Ps: We even paid back all our investors, so they didn't loose anything. I just didn't feel right about leaving them with a bad feeling_
