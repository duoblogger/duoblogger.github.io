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


### Pre-Requirements: 

* [Segment Tree](http://www.shafaetsplanet.com/?p=1557)
* [Binary Indexed Tree](http://www.shafaetsplanet.com/?p=1961)



### Introduction



অনেকেই সেগমেন্ট ট্রি ব্য়বহার করে কিভাবে একটা সমস্য়া সহজে offline এ সমাধান করা যায় জানে না । offline বলতে বোঝানো হচ্ছে আমরা সবগুলো Query আগেই ইনপুট নিয়ে নিব । তারপর সবগুলো Query সমাধান করে একবারে আউটপুট দিব । এখানে Query গুলো ইনপুট নেওয়ার সাথে সাথে সমাধান না করে Query জমা রেখে দিয়ে পরে সমাধান করছি তাই এটাকে Offline Solution বলা হয় । 



### Problem 1 : 


**$N$ টি এলিমেন্ট এর একটি অ্য়ারে $A$ দেওয়া আছে এবং $Q$ টা Query থাকবে, যেখানে $(L, R)$ দেওয়া থাকবে, বলতে হবে এই রেঞ্জের মধ্য়ে কয়টা ভিন্ন সংখ্য়া আছে ।**



#### Link : [1188 - Fast Queries](http://lightoj.com/volume_showproblem.php?problem=1188)



### Solution:



একটা রেঞ্জের ভিতরে কয়টা distinct value আছে বের করার জন্য় আমরা MO's Algorithm ব্য়বহার করি । কিন্তু Query গুলো R increasing order এ সাজিয়ে সহজে Segment tree দিয়ে offline এ সমাধান করতে পারি । ধরে নিই অ্য়ারে 1 indexed । index $1$ থেকে আমরা আপডেট করা শুরু করব । ধরি আমরা এখন $i^{th}$ index এ আছি । তাহলে আমরা $i^{th}$ index এ শেষ হয় এমন Query গুলো সমাধান করব । এখন কথা হলো অ্য়ারের এলিমেন্ট কিভাবে আপডেট করব । কোন এলিমেন্টের এর শেষ index সববময় আপডেট করব । যদি এর আগে কখনও কোন এলিমেন্ট আপডেট হয়ে থাকে তাহলে ঐ index এ $0$ করে দিয়ে নতুন index এ $1$ আপডেট করে দিব । একটা উদাহরন দিয়ে বিষয়টি পরিষ্কার করা যাক । ধরি কোন এলিমেন্ট $x$ অ্য়ারের $3, 6, 8$ নম্বর index এ আছে  এবং $3$ টা Query হলো $(1, 3), (5, 6), (7, 10)$ । আমরা $x$ কে প্রথমে ৩য় index এ পাবো । কিন্ত আমরা যদি শুধু ৩য় index এ আপডেট করিতাহলে $(5,6)$ এবং $(7, 10)$ এর জন্য় সঠিক সমাধান পাবো না । আবার যদি $6^{th}$ index আপডেট করি তাহলে $(1,3)$ ও $(7, 10)$ এর জন্য় সঠিক সমাধান পাবো না । কিন্বআমরা যদি সবসময় কোন এলিমেন্ট এর সবচেয়ে ডানের index এ $1$ আপডেট করি এবং এর আগে যে index এ আপডেট করা হয়েছে ঐ index এ $0$ করে দিই তাহলে আমরা সবসময় সঠিক সমাধান পাবো । 



```cpp

last[]; // কোন সংখ্য়া সর্বশেষ কোন index এ আপডেট করা হয়েছে ।
sort(query+1, query+q+1, cmp);
int cur = 1;
for(int i = 1; i <= n; i++){
  if(last[arr[i]]==-1){
​    last[arr[i]] = i;
​    update(1, 1, n, last[arr[i]], 1);
  }
  else if(last[arr[i]]!=-1){
​    update(1, 1, n, last[arr[i]], -1);
​    last[arr[i]] = i;
​    update(1, 1, n, last[arr[i]], 1);
  }
  while(i==query[cur].r){
​    ans[query[cur].ind] = get(1, 1, n, query[cur].l, query[cur].r);
​    cur++;
​  }
}
```



এই সমস্য়াটির MO's Algorithm এর সমাধান জানতে চাইলে নিচের লিংকে দেখতে পারেন ।

#### Link : [MO's Algorithm](https://rezwanarefin01.github.io/posts/block-decomposition-01/)



### Problem 2 : 



**N টি ভিন্ন এলিমেন্ট এর একটি অ্য়ারে A[] দেওয়া আছে এবং Q টা Query থাকবে :**

  * ith Query তে $(L_i, R_i)$ দেওয়া থাকবে ।

  * $(L_i, R_i)$ রেঞ্জের মধ্য়ে কয় জোড়া $(q, w)$ আছে, যেন $A_q, A_w$ কে নিঃশেষে বিভাজ্য় করে ।



#### Link : [D. Yaroslav and Divisors](https://codeforces.com/problemset/problem/301/D)



### Solution: 



এখানেও আগের সমস্য়ার মতো সেগমেন্ট ট্রি দিয়ে offline এ সমাধান করব । এক্ষেত্রে কোন এলিমেন্ট পাওয়ার পরে ঐ এলিমেন্ট যেসকল এলিমেন্ট দিয়ে বিভাজ্য় ঐ সংখ্য়াগুলোর index আপডেট করব । ধরি $i^{th}$ index এ আছি । তাহলে $i^{th}$ index এর এলিমেন্টের যেসকল উৎপাদকগুলোর পজিশন  $i$ থেকে ছোট ঐ সকল উৎপাদকের index আপডেট করব । কিন্তু এতে আমরা সবসময় সঠিক সমাধান পাবো না । যদি কোন রেঞ্জে $2,4,16,8$ থাকে, তাহলে $16$ এর জন্য় $2$, $4$ কে গণনা করা হলেও $8$ গণনা করা হবে না । তাই আমরা আবার শেষ থেকে আবার লুপ চালিয়ে যে জোড়াগুলো গণনা করা হয়নি সেগুলো বের করে সমাধান এ যোগ করে নিব । 


### Alternate Solution: 



এই সমস্যার আরেকটি অফলাইন সমাধান আছে। সেটি করার জন্য আমাদের sieve এর মতো করে চিন্তা করতে হবে। একটা জিনিস চিন্তা করে দেখো, $1 \leq A_i \leq N$ এবং $N \leq 10^5$। এক্ষেত্রে $n \ ln(n)$ টা pair $(a,b)$ পাওয়া যাবে যেন $1 \leq a \leq b \leq N$ এবং $b \mid a$. এটি সিভের আইডিয়া থেকে প্রমান করা যায়। নিচে কোড দিচ্ছি । 

```c++
for(int a = 1; a <= n; a++){
  for(int b = a; b <= n;b+=a){
    div_pair.push_back({a,b});
    // here b devides a;
  }
}
```

এখন, চিন্তা করে দেখতে পাবে,  $a = 1$ এর জন্য নিচের লুপ $n$ বার, $a = 2$ এর জন্য $\frac{n}{2}$ বার, $a = x$ এর জন্য নিচের লুপ $\frac{n}{x}$ বার চলে। তাই মোট চলবে, 

$$
\begin{aligned}
\displaystyle{\frac{n}{1}+\frac{n}{2}+\frac{n}{3}+...+\frac{n}{n}} &= n \times \bigg( \displaystyle{\frac{1}{1}+ \frac{1}{2}+....+\frac{1}{n}} \bigg)
&= n \times \ln(n)
\end{aligned}
$$

তাহলে আমরা লুপ দিয়ে সব pair বের করে ফেলবো। পেয়ার গুলো $(a,b)$ অবস্থায় থাকবে যেখানে $a \leq b$। এখন আমরা যদি পেয়ার গুলো $b$ এর হিসেবে ছোট থেকে বড় সাজাই আর কুয়েরি গুলোকেও যদি ছোট থেকে বড় সাজাই, তাহলে কি হবে চিন্তা করো। ধরি আমরা একটা কুয়েরি নিয়ে কাজ করছি, $(L,R)$। এবার আমরা যদি $R$ এর থেকে সমান বা ছোট যতগুলো pair আছে ওগুলোকে আপডেট করে দেই, তাহলেই কিন্তু হয়ে যাচ্ছে। ওটা আপডেট করে তারপর শুধু আমরা কুয়েরি করবো $L...R$ টুকুর মধ্যে। এটাকেও আমরা কুয়েরি আর pair গুলোকে সর্ট করে একপাশ থেকে সুইপ করার মতো করে সমাধান করছি। নিচে কোড দিয়ে দিচ্ছি, দেখে নাও। আশা করি বুঝতে পারবে। 

```c++
fenwick tree;
sort(v.begin(),v.end(),cmp1);// pairs are sorted by their b
sort(q.begin(),q.end(),cmp2);// updates are sorted by their R

int cur = 0;
int sz = v.size();

for(auto x: q){
    for(;cur <sz;cur++){
        if(pos[v[cur].second] > x.r)break;
        tree.add(pos[v[cur].first],1);
        // updating the paris if their b <= query-R
    }
    ans[x.indx] = tree.get(x.r)-tree.get(x.l-1);
    // finding the answer using a binary indexed tree.
    // you can use any range upd-query ds to solve this
}
for(int i = 0; i < m;i++){
    printf("%d\n",ans[i]);// printing them in order
}
```

আজকে এ পর্যন্তই। পরবর্তীতে আরো ডিটেইলস আলোচনা করা হবে। 

<br>
<br>
