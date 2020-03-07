---
mathjax: true
layout: post
title: Josephus Problem
author: Ahnaf Shahriar Asif
tags: [Concrete Mathematics]

subtitle: Josephus Problem হলো গনিতের জগতে একটি সুপরিচিত সমস্যা। এই সমস্য়াটি নিয়ে একটি গল্পও প্রচলিত আছে। গল্পের নায়ক জোসেফাস এক দারুন গানিতিক সমস্য়ার সমাধানের মাধ্য়মে প্রানে বেঁচে গিয়েছিলেন। তবে সবথেকে সুন্দর বিষয়টি হচ্ছে প্রব্লেমটি নিজেই। এই জোসেফাস প্রব্লেমের সলিউশনটা অনেকে দারুন এবং এটির আইডিয়া ব্যাবহার করে আমরা অনেক ধরনের সমস্যা সমাধান করতে পারি। তাই দেরি না করে শুরু করা যাক।
# background: '/img/somehow.png'
---

### Pre-requirements:

- [Binary numbers](https://en.wikipedia.org/wiki/Binary_number)
- [Basic Combinatorics](https://www.whitman.edu/mathematics/cgt_online/cgt.pdf)
- [Basic Recursion](https://sites.google.com/site/smilitude/recursion_and_dp) (If you want to understand the codes)
- [Induction](http://comet.lehman.cuny.edu/sormani/teaching/induction.html) (if you want to understand the proofs)

### Introduction:

তো আমরা আগে জেনে নেই জোসেফাস প্রব্লেমটা কি। এটা নিয়ে একটি গল্প আছে। একবার জোসেফাস আরও কিছু সৈন্য নিয়ে একটা গুহায় আটকা পড়লো। গুহা থেকে বের হলেই প্রতিপক্ষ আক্রমন করবে। তাই তারা চিন্তা করলো সবাই মিলে আত্যহত্যা করবে। কিন্তু জোসেফাসের ব্যাপারটি ভালো লাগলো না। যাই হোক, তারা প্রথমে গোল করে দাঁড়ালো এবং নিয়ম হলো, প্রথম জন তার পাশের জনকে মারবে। তার পরের জন আবার তার পাশের জনকে মারতে থাকবে। এভাবে চলতে থাকবে এবং শেষে একজন বেঁচে থাকবে। তো জোসেফাস এমনভাবে দাঁড়ালো যেন সেই সর্বশেষ ব্যাক্তি হয়। কারন তাহলে তাকে আর মরতে হচ্ছে না। আমরা এখন দেখবো জোসেফাস কীভাবে বের করেছিল যে কোথায় দাঁড়াতে হবে। যারা সমস্যাটি বুঝতে পারোনি তারা নিচের ছবি দেখ। তাহলেই বুঝতে পারবে আশা করি। ৮ জনের জন্য খেলাটি দেখানো হলো।

<img src="https://duoblogger.github.io/duoblogger-pictures/duoblogger%20pics/josephus-1.jpg" alt="pic 1" width="100%" height="auto" />
