---
mathjax: true
layout: post
title: Offline Query Solution Trick
author: Shafin Alam
tags: [Data Structure]
# ads_niche: 8
categories: [Data Structure, Segment tree]
Difficulty: Hard
# metaimage: https://duoblogger.github.io/duoblogger-pictures/duoblogger%20pics/tower-of-hanoy-for-2.jpg

subtitle: অনেকেই সেগমেন্ট ট্রি ব্য়বহার করে কিভাবে একটা সমস্য়া সহজে offline এ সমাধান করা যায় জানে না । offline বলতে বোঝানো হচ্ছে আমরা সবগুলো Query আগেই ইনপুট নিয়ে নিব । তারপর সবগুলো Query সমাধান করে একবারে আউটপুট দিব । এখানে Query গুলো ইনপুট নেওয়ার সাথে সাথে সমাধান না করে Query জমা রেখে দিয়ে পরে সমাধান করছি তাই এটাকে Offline Solution বলা হয় । 

permalink: /offline-query-solution-1/
---

### Introduction



অনেকেই সেগমেন্ট ট্রি ব্য়বহার করে কিভাবে একটা সমস্য়া সহজে offline এ সমাধান করা যায় জানে না । offline বলতে বোঝানো হচ্ছে আমরা সবগুলো Query আগেই ইনপুট নিয়ে নিব । তারপর সবগুলো Query সমাধান করে একবারে আউটপুট দিব । এখানে Query গুলো ইনপুট নেওয়ার সাথে সাথে সমাধান না করে Query জমা রেখে দিয়ে পরে সমাধান করছি তাই এটাকে Offline Solution বলা হয় । 



### Problem 1 : N টি এলিমেন্ট এর একটি অ্য়ারে A[] দেওয়া আছে এবং Q টা Query থাকবে, যেখানে (L, R) দেওয়া থাকবে, বলতে হবে এই রেঞ্জের মধ্য়ে কয়টা ভিন্ন সংখ্য়া আছে ।



#### Link : [1188 - Fast Queries](http://lightoj.com/volume_showproblem.php?problem=1188)



### সমাধান :



একটা রেঞ্জের ভিতরে কয়টা distinct value আছে বের করার জন্য় আমরা MO's Algorithm ব্য়বহার করি । কিন্তু Query গুলো R increasing order এ সাজিয়ে সহজে Segment tree দিয়ে offline এ সমাধান করতে পারি । ধরে নিই অ্য়ারে ১ indexed ।index ১ থেকে আমরা আপডেট করা শুরু করব । ধরি আমরা এখন ith index এ আছি । তাহলে আমরা ith index এ শেষ হয় এমন Query গুলো সমাধান করব । এখন কথা হলো অ্য়ারের এলিমেন্ট কিভাবে আপডেট করব । কোন এলিমেন্টের এর শেষ index সববময় আপডেট করব । যদি এর আগে কখনও কোন এলিমেন্ট আপডেট হয়ে থাকে তাহলে ঐ index এ ০ করে দিয়ে নতুন index এ ১ আপডেট করে দিব । একটা উদাহরন দিয়ে বিষয়টি পরিষ্কার করা যাক । ধরি কোন এলিমেন্ট x অ্য়ারের ৩, ৬, ৮ নম্বর index এ আছে ্ এবং ৩ টা Query হলো (১, ৩), (৫, ৬), (৭, ১০) । আমরা x কে প্রথমে ৩য় index এ পাবো । কিন্ত আমরা যদি শুধু ৩য় index এ আপডেট করিতাহলে (৫, ৬) এবং (৭, ১০) এর জন্য় সঠিক সমাধান পাবো না । আবার যদি ৬ষ্ঠ index আপডেট করি তাহলে (১, ৩) ও (৭, ১০) এর জন্য় সঠিক সমাধান পাবো না । কিন্বআমরা যদি সবসময় কোন এলিমেন্ট এর সবচেয়ে ডানের index এ ১ আপডেট করি এবং এর আগে যে index এ আপডেট করা হয়েছে ঐ index এ ০ করে দিই তাহলে আমরা সবসময় সঠিক সমাধান পাবো । 



```cpp

last[] // কোন সংখ্য়া সর্বশেষ কোন index এ আপডেট করা হয়েছে ।

sort(query+1, query+q+1, cmp);

int cur = 1;

for(int i = 1; i <= n; i++)

{

  if(last[arr[i]]==-1)

  {

​    last[arr[i]] = i;

​    update(1, 1, n, last[arr[i]], 1);

  }

  else if(last[arr[i]]!=-1)

  {

​    update(1, 1, n, last[arr[i]], -1);

​    last[arr[i]] = i;

​    update(1, 1, n, last[arr[i]], 1);

  }

  while(i==query[cur].r)

  {

​    ans[query[cur].ind] = get(1, 1, n, query[cur].l, query[cur].r);

​    cur++;

​    }

  }

```



এই সমস্য়াটির MO's Algorithm এর সমাধান জানতে চাইলে নিচের লিংকে দেখতে পারেন ।

#### Link : [MO's Algorithm](https://rezwanarefin01.github.io/posts/block-decomposition-01/)



### Problem 2 : N টি ভিন্ন এলিমেন্ট এর একটি অ্য়ারে A[] দেওয়া আছে এবং Q টা Query থাকবে :

  

  \- ith Query তে (Li, Ri) দেওয়া থাকবে ।

  \- (Li, Ri) রেঞ্জের মধ্য়ে কয় জোড়া (q, w) আছে, যেন A_q, A_w কে নিঃশেষে বিভাজ্য় করে ।



#### Link : [D. Yaroslav and Divisors](https://codeforces.com/problemset/problem/301/D)



### সমাধান :



এখানেও আগের সমস্য়ার মতো সেগমেন্ট ট্রি দিয়ে offline এ সমাধান করব । এক্ষেত্রে কোন এলিমেন্ট পাওয়ার পরে ঐ এলিমেন্ট যেসকল এলিমেন্ট দিয়ে বিভাজ্য় ঐ সংখ্য়াগুলোর index আপডেট করব । ধরি ith index এ আছি । তাহলে ith index এর এলিমেন্টের যেসকল উৎপাদকগুলোর পজিশন  i থেকে ছোট ঐ সকল উৎপাদকের

index আপডেট করব । কিন্তু এতে আমরা সবসময় সঠিক সমাধান পাবো না । যদি কোন রেঞ্জে ২, ৪, ১৬, ৮ থাকে, তাহলে ১৬ এর জন্য় ২, ৪ কে গণনা করা হলেও ৮ 

গণনা করা হবে না । তাই আমরা আবার শেষ থেকে আবার লুপ চালিয়ে যে জোড়াগুলো গণনা করা হয়নি সেগুলো বের করে সমাধান এ যোগ করে নিব । 