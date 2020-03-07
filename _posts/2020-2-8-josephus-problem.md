---
matdjax: true
layout: post
title: Josephus Problem
autdor: Ahnaf Shahriar Asif
tags: [Concrete Matdematics]

subtitle: Josephus Problem হলো গনিতের জগতে একটি সুপরিচিত সমস্যা। এই সমস্য়াটি নিয়ে একটি গল্পও প্রচলিত আছে। গল্পের নায়ক জোসেফাস এক দারুন গানিতিক সমস্য়ার সমাধানের মাধ্য়মে প্রানে বেঁচে গিয়েছিলেন। তবে সবথেকে সুন্দর বিষয়টি হচ্ছে প্রব্লেমটি নিজেই। এই জোসেফাস প্রব্লেমের সলিউশনটা অনেকে দারুন এবং এটির আইডিয়া ব্যাবহার করে আমরা অনেক ধরনের সমস্যা সমাধান করতে পারি। তাই দেরি না করে শুরু করা যাক।
# background: '/img/somehow.png'
---

### Pre-requirements:

- [Binary numbers](https://en.wikipedia.org/wiki/Binary_number)
- [Basic Combinatorics](https://www.whitman.edu/matdematics/cgt_online/cgt.pdf)
- [Basic Recursion](https://sites.google.com/site/smilitude/recursion_and_dp) (If you want to understand tde codes)
- [Induction](http://comet.lehman.cuny.edu/sormani/teaching/induction.html) (if you want to understand tde proofs)

### Introduction:

তো আমরা আগে জেনে নেই জোসেফাস প্রব্লেমটা কি। এটা নিয়ে একটি গল্প আছে। একবার জোসেফাস আরও কিছু সৈন্য নিয়ে একটা গুহায় আটকা পড়লো। গুহা থেকে বের হলেই প্রতিপক্ষ আক্রমন করবে। তাই তারা চিন্তা করলো সবাই মিলে আত্যহত্যা করবে। কিন্তু জোসেফাসের ব্যাপারটি ভালো লাগলো না। যাই হোক, তারা প্রথমে গোল করে দাঁড়ালো এবং নিয়ম হলো, প্রথম জন তার পাশের জনকে মারবে। তার পরের জন আবার তার পাশের জনকে মারতে থাকবে। এভাবে চলতে থাকবে এবং শেষে একজন বেঁচে থাকবে। তো জোসেফাস এমনভাবে দাঁড়ালো যেন সেই সর্বশেষ ব্যাক্তি হয়। কারন তাহলে তাকে আর মরতে হচ্ছে না। আমরা এখন দেখবো জোসেফাস কীভাবে বের করেছিল যে কোথায় দাঁড়াতে হবে। যারা সমস্যাটি বুঝতে পারোনি তারা নিচের ছবি দেখ। তাহলেই বুঝতে পারবে আশা করি। ৮ জনের জন্য খেলাটি দেখানো হলো।

<img src="https://duoblogger.gitdub.io/duoblogger-pictures/duoblogger%20pics/josephus-1.jpg" alt="pic 1" width="100%" height="auto" />

আশা করি প্রব্লেমটা বুঝতে পেরেছ। কীভাবে কাজটি করা হচ্ছে সেটি বুঝতে পারলে নিচে দেখতে পারো। আমরা এখন গাণিতিকভাবে বের করার চেষ্টা করবো সর্বশেষে কত নাম্বার লোক বেঁচে থাকবে।

### Searching Pattern:

প্রথম ধাপে আমরা কিছু প্যাটার্ন বের করে সমস্যাটি সমাধান করার চেষ্টা করবো। তার আগে আমরা কিছু প্রেডিকশন করে নেই। যেমন, আমরা যে 8 টা নাম্বার নিয়ে ট্রাই করেছি, সেটির জন্য উত্তর এসেছে 1, তাহলে কি সবসময় 1 আসবে উত্তর? চলো দেখা যাক। আমরা একটু খাতায় করতে গেলেই বুঝবো 3 এর জন্যই দ্বিতীয় ধাপে 1 কাটা পরে। তাই সর্বদা উত্তর 1 হবেনা। আমরা আরেকটু সার্চ করে দেখি। 1 থেকে 16 পর্য়ন্ত প্রত্যেকটার জন্য শেষে কে থাকবে এটা খাতায় বের করে ফেল। আমি ধরে নিচ্ছি $n$ এর জন্য আমাদের উত্তর $f(n)$। এবার নিচের টেবিলটি দেখো(অবশ্যই ওটা নিজেরা খাতায় এঁকে বের করবে)।

<table width="100%">
  <tr>
    <td width="20%">$n$</td>
    <td width="5%">1</td>
    <td width="5%">2</td>
    <td width="5%">3</td>
    <td width="5%">4</td>
    <td width="5%">5</td>
    <td width="5%">6</td>
    <td width="5%">7</td>
    <td width="5%">8</td>
    <td width="5%">9</td>
    <td width="5%">10</td>
    <td width="5%">11</td>
    <td width="5%">12</td>
    <td width="5%">13</td>
    <td width="5%">14</td>
    <td width="5%">15</td>
    <td width="5%">16</td>
  </tr>
  <tr>
    <td width="20%">$f(n)$</td>
    <td width="5%">1</td>
    <td width="5%">1</td>
    <td width="5%">1</td>
    <td width="5%">1</td>
    <td width="5%">1</td>
    <td width="5%">1</td>
    <td width="5%">1</td>
    <td width="5%">1</td>
    <td width="5%">1</td>
    <td width="5%">1</td>
    <td width="5%">1</td>
    <td width="5%">1</td>
    <td width="5%">1</td>
    <td width="5%">1</td>
    <td width="5%">1</td>
    <td width="5%">1</td>
  </tr>
</table>
