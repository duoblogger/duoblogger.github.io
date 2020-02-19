---
mathjax: true
layout: post
title: Disjoint Set Union Tricks
author: Ahnaf Shahriar Asif
tags: [dsu, tree, Data Structure]
subtitle: Disjoint Set Union(DSU) সম্পর্কে আমরা মোটামুটি সবাই কমবেশি জানি। ডাটা স্ট্রাকচার-অ্যালগরিদম জগতের সবথেকে মজার এবং রহস্যময় জিনিসগুলোর মধ্যে একটি। এটির কাজকর্ম দেখলে মনে হয় যাদুর খেলা দেখছি। আমার নিজের সবথেকে প্রিয় ডাটা-স্ট্রাকচার হলো DSU. আজকে আমি DSU নিয়ে কি কি করা যায় এবং কেমন ধরনের সমস্যা এটি দিয়ে সল্ত করা যায় সেটি দেখবো। এটি কেন একটি জাদুকরী  ডাটা স্ট্রাকচার সেটিও আমরা খুব তাড়াতাড়িই জানতে পারবো। তাই দেরি না করে শুরু করা যাক।
# background: '/img/somehow.png'
---

### Pre-requirments:

- [Disjoint Set Union Finding](http://www.shafaetsplanet.com/?p=763)

- [Basic Graph Theory](http://www.shafaetsplanet.com/?p=143)

- [Complexity Analysis](http://www.shafaetsplanet.com/?p=1642)

### Introduction:

আমি আশা করছি তোমরা উপরের Pre-requirements মোটামুটি বুঝে পড়ে ফেলেছ। না পড়ে থাকলে আগে ওটা দেখে নাও। যাই হোক, DSU এর মূল ব্যাপার হলো এটার কম্প্লেক্সিটি। যদি আমরা শুধু rank compression করি তাহলে $m$ বার অপারেশন চালালে মোটামুটি কম্প্লেক্সিটি হবে $O( m \log n)$। কিন্তু যদি আমরা Rank compression আর path compression দুটোই করি তাহলে কম্প্লেক্সিটি দাঁড়াবে $O(m \ \alpha (n)) = ~O(m)$। এখন কথা হলো, এটা কোথা থেকে আসলো? এরকম কম্প্লেক্সিটি হুট করে চলে আসার কারন কি? জানতে হলে নিচের ছবিটি দেখতে হবে।

<img src="{{ site.url }}/assets/images/don-try-to-understand.png" alt="Don't try to understand it, feel it" width="100%" height="auto" />

<!-- ![Don't try to understand it, feel it]({{ site.url }}/assets/images/don-try-to-understand.png) -->
