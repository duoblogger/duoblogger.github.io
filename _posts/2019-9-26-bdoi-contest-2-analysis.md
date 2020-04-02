---
mathjax: true
layout: post
title: BDOI Practice Contest-2 Analysis
mathjax: true
author: Ahnaf Shahriar Asif
Difficulty: Hard
tags: [Contest analysis]
ads_niche: 4
categories: [contest analysis, data structure, graph, math]
subtitle: কোডফোর্সেসে আমরা নিয়মিত প্রোগ্রামিং কন্টেস্ট নিয়ে থাকি। এরকমই একটা কন্টেস্টের এডিটোরিয়াল এটি। codeforces এর BDOI Practice Group থেকে কন্টেস্টি দেখে নাও। কন্টেস্টের টাইটলে "BDOI Practice Contest-2"। কন্টেস্টটি দেখে নাও। তারপর এডিটোরিয়াল দেখা শুরু করা যাক।  
permalink: /bdoi-practice-contest-2/
# background: '/img/somehow.png'
---

## Problem 1 : Very Hard Problem

[Problem Description](/html-statements/Statements.html)

### Solution:

এর সমাধানটি একদম সহজ। আমাকে $f(n)$ দেয়া আছে, আমাকে $n$ বেড় করতে হবে। আমরা ফাংশনের দিকে তাকালেই বুঝতে পারবো। এটি আসলে $1+2+3+....+n$ করছে। তার মানে হলো $f(x)$ হলো 1 থেকে n পর্যন্ত সংখ্যাগুলোর যোগফল। তাহলে আমরা এটাও বলতে পারি $\displaystyle{f(x) = \frac{x(x+1)}{2}}$। এবার আমাদোর জন্য সমস্যাটি সমাধান করা সহজ। একটু বীজগনিত খাটালেই এরকম হবেঃ

$$n^2 + n = 2f(n)$$

$$n^2 + n -2f(n) = 0$$

এবার দ্বিঘাত সমীকরন ব্যাবহার করে x এর মান বেড় করলেই হবে। যদি পাওয়া না যায় তাহলে উত্তর -1। মজার ব্যাপার হলো এটি আমি বাইনারি সার্চ দিয়ে সমাধান করেছিলাম। অর্থাৎ, n এর উপর বাইনারি সার্চ করে বেড় করেছি, কোন $n$ এর জন্য $f(n)$ এর মান ইনপুটের সমান হয়।

## Problem 2: Infinity war without Avengers!

<!-- [Problem Description](https://codeforces.com/group/wUWXh1K7Gk/contest/253497/problem/B) -->

[ Problem Statement ]({{ "/assets/pdf/bdoi-2-prob-B.pdf" | relative_url}})

আমি এটা নিয়ে কিছু বলতে চাই না, [এই ভিডিওটা](https://www.youtube.com/watch?v=pwpOC1dph6U&t=4s) দেখে নিলেই হবে!

## Problem 3: Back to SSC Maths

<!-- [Problem Description](https://codeforces.com/group/wUWXh1K7Gk/contest/253497/problem/C) -->

[ Problem Statement ]({{ "/assets/pdf/bdoi-2-problem-c.pdf" | relative_url}})

সমস্যাটির সমাধান নামের মধ্যেই দেয়া আছে। এসএসসি সাধারন গনিত বইয়ের প্রথম চ্যাপ্টার ভালো করে পড়তে হবে। তবে ওখানে যে নিয়ম দেয়া আছে সেটা কোথা থেকে আসলো সেটা জানতে তোমাকে গুনোত্তর ধারা সম্পর্কে জানতে হবে। এজন্য এসএসসি হাইয়ার ম্যাথ বইয়ের গুনোত্তর ধারা সম্পর্কে পড়ে নিলেই পারার কথা। একটা হিন্ট দিয়ে দেই।

$$14.3333333333.....$$

$$= 14+0.3+0.03+0.003+......$$

এভাবে একটা গুনোত্তর ধারা পাওয়া যাবে। আর সেটা সল্ভ করতে পারলেই হয়ে যাবে।

## Problem 4: Four Numbers

<!-- [Problem Description](https://codeforces.com/group/wUWXh1K7Gk/contest/253497/problem/D) -->

[ Problem Statement ]({{ "/assets/pdf/bdoi-2-prob-d.pdf" | relative_url}})

এই প্রব্লেমটা খুব দারুন। সলিউশনটাও ভালো। অনেকটা greedy সলিউশন। আমাদের প্রথম আইডিয়া হলো, $A+B$ কে maximize করতে হবে আর $C-D$ কে minimized করতে হবে। তবে $C-D$ কে নিগেটিভ করা যাবেনা, তাহলে উত্তর নিগেটিভ চলে আসবে, যা maximum হবেনা। এবার এই প্রব্লেমটা $\mathcal O(n^2)$ বা $\mathcal O(n^2  \log n)$ এ সহজেই সমাধান করা যায়। যেকোন একটা পাশ ফিক্স করে আরেকটা লুপ চালিয়ে করা যায় আরকি। আমরা দেখি $\mathcal O(N)$ এ কীভাবে করা যায়।

আমরা লিস্ট টাকে decreasing অর্ডারে সর্ট করে ফেলি। তাহলে আমরা শুরুতে $A = a_1$ আর $B = a_2$ ধরে নিতে পারবো। কারন প্রথম দুটি সংখ্যা সবথেকে বড়। এবার এই দুটিকে ফিক্স করার পর বাকি সংখ্যাগুলো থেকে আমাদেরকে এমন একজোড়া সংখ্যা বেড় করতে হবে, যাদের মধ্যে পার্থক্য সবথেকে কম। এখন লক্ষ্যনীয় যে, কখনোই একটি সংখ্যার সাথে তার পাশের সংখ্যার পার্থক্য, তার ২-৩ ঘর পরের সংখ্যার পার্থক্যের থেকে বেশি হতে পারবেনা। চিন্তা করলেই বোঝা যাবে। তাই আমরা শুধুমাত্র পাশাপাশি সংখ্যা নিয়ে চেক করবো এবং $a_i,a_{i+1}$ বেড় করবো যেন $\abs{a_i - a_{i+1}}$ minimized হয়। তাহলেই হয়ে যাবে। তবে এটাই কি সঠিক সলিউশন দিবে? নিচের কেসটির কথা চিন্তা করি।

$$13 \ \ \ 12 \ \ \ 10 \ \ \ 5 \ \ \ 2$$

এখানে আমরা যদি 13+12 নিয়ে ফেলি, আর ওপাশে মিনিমাম ডিফারেন্স পাবো 3, তাহলে উত্তর হবে $\frac{25}{3} = 8.33333..$ কিন্তু আমরা যদি C = 13, D = 12 , A = 10, B = 5 নেই তাহলে আমরা পাবো 15, যা বেটার সলিউশন। তাহলে কী করা যায়? আসলে আমরা যেটা করছি, সেটা হলো $A = a_1$ আর $B = a_2$ ফিক্স করে দিচ্ছি, যেজন্য কিছু অপটিমাল সলিউশন মিস হয়ে যাচ্ছে। তবে খুব বেশি পরিমান কেস কিন্তু আর হ্যান্ডেল করার দরকার নেই। আমাদের শুধু দেখতে হবে $a_1$ বা $a_2$ এর কোনো একটি বা দুটিই C বা D হিসেবে কাজে লাগানো যাবে কিনা। কারন ওই কেস দুটি ছাড়া বাকি সবই হ্যান্ডেল করা হয়ে গেছে। এখন আমরা আরো দুটি জিনিসহ দেখলেই হয়ে যাবে। প্রথমত দেখবো $a_1$ কে C আর $a_2$ কে D ধরে। যদি সেটা ধরি, তাহলে $A,B$ কোনটা কোনটা হবে? যেহেতু লিস্ট ডিক্রিসিং অর্ডারে সাজানো, তাই সবথেকে বেটার হবে $A = a_3, B = a_4$ ধরলে, কারন এই দুটি ছাড়া A+B ম্যাক্সিমাইজ করার উপায় নেই। তার মানে, $A = a_3 , B = a_4 , C = a_1 , D = a_2$ নিয়ে দেখতে হবে একটা। আরেকটা মাত্র কেইস বাকি আছে। সেটি কি একটু চিন্তা করো। আমরা $a_1$ আর $a_2$ এর যেকোন একটিকে C বা D তে দিব, আর আরেকটিকে A বা B তে। এবার আবার ওই কথাই, পাশাপাশি জোড়া ছাড়া C,D দেয়া লাভজনক না, তাই আমরা এবার $a_2 = C ,  a_3 = D$ আর $a_1 = A , a_4 = B$ নিয়ে দেখবো কি পাওয়া যায়। আর এই ৩ টা কেইস হ্যান্ডেল করলেই হয়ে যাবে। আর কোন অপটিমাল কেইস পাওয়া সম্ভব না। সলিউশন নিচে দিয়ে দিচ্ছি, ক্লিয়ার করার জন্য:

```c++
int n;
cin >> n;
for(int i = 0; i < n;i++){
    cin >> ara[i];
}
sort(ara,ara+n,greater<int>());
int upore = ara[0]+ara[1];
int mn = 1000000000;
for(int i = 2; i < n-1;i++){
    mn = min(mn,ara[i]-ara[i+1]);
}
double ans = (upore*1.0)/(mn*1.);
double one = (ara[2]*1.+ara[3]*1.)/(ara[0]-ara[1])*1.0;
double two = (ara[0]*1.+ara[3]*1.)/(ara[1]-ara[2])*1.0;
ans = max(ans,max(one,two));
cout << fixed << setprecision(10) << ans << endl;
```

## Problem 5 : Segment Union

<!-- [Problem Description](...)
 -->

[ Problem Statement ]({{ "/assets/pdf/bdoi-2-prob-e.pdf" | relative_url}})

এই প্রব্লেমটি অনেকভাবে সমাধান করা যায়। প্রথম সাবটাস্কের জন্য সোজা লুপ। পরেরটার জন্য যেহেতু একটা মাত্র কুয়েরি, তাই একটা প্রিফিক্স অ্যারের মতো কিছু একটা রেখে, $\mathcal O(1)$ এ আাপডেট করে একদম শেষে কুয়েরির উত্তর দেয়া যায়। তার পরের সাবটাস্কটি করার জন্য অনেক কিছু করা যায়। একটা সেগমেন্ট ট্রি রাখা যায়, `sqrt Decomposition` করা যায়, $log(n)$ এ করার মতো কিছু `range minimum query` ধরনের জিনিসপত্র দিয়ে এটি সল্ভ করা যায়, এবং বলা যায় এটি অনেকটা well known, non-trivial problem। আর শেষের সাবটাস্কে $l,r \leq 10^9$, অর্থাৎ, সেগমেন্ট ট্রিতে তুমি স্বাভাবিক ভাবে করতে পারবেনা। তবে তুমি চাইলে অ্যারে এর বদলে map ব্যাবহার করতে পারো। তাহলে $\mathcal O(\log^2 n)$ পার কুয়েরিতে সল্ভ করতে পারবে। `unordered_map` দিয়ে আসলে এভারেজে $\mathcal O(\log n)$ পার কুয়েরিতে সল্ভ করা যায়। তবে এটা সমাধান করার একটি সুন্দর পদ্ধতি আছে, সেটা হলো `Implicit Segment Tree`. এটি খুব সুন্দর একটা জিনিস, এখানে আমরা নোড তখনই বানাবো, যখন আমাদের নোড বানানোর দরকার পড়বে, ডাইনামিক্যালি মেমরি অ্যালোকেট করবো আরকি। এটি ব্যাখ্যা করতে গেলে অনেক কিছুই করতে হবে। তবে আমার মনে আছে, তাসমিম ভাইয়ার কাছ থেকে `Implicit Segtree` এর একটা কোড নিয়ে আমি বসে বসে দেখে দেখে বুঝে গিয়েছিলাম কি হচ্ছে ব্যাপারটা। আসলে খুবই সোজাসাপ্টা কোড। আমি নিচে দিয়ে দিচ্ছি, আশা করি সবাই বুঝতে পারবে।

```c++
#include <bits/stdc++.h>
using namespace std;

const int maxn = 1000000006;
const int maxval = maxn;

struct node{

	int val;
	bool done = false;
	node *left;
	node *right;
	node(node *l = NULL , node *r = NULL, int s = 0,bool d = false):
		left(l),right(r),val(s),done(d){}

	node *update(int L,int R ,int l,int r){
		if(done or L > r or R < l)return this;
		if(l <= L and R <= r){
			val = R-L+1;
			done = true;
			return this;
		}
		int mid = (L+R)/2;
		if(!left)left = new node();
		if(!right)right = new node();
		left -> update(L,mid,l,r);
		right -> update(mid+1,R,l,r);

		val = left->val+right->val;
		val = min(val,R-L+1);
		return this;
	}
	int query(int L,int R,int l,int r){
		if(L > r or R < l)return 0;
		if(l <= L and R <= r)return val;
		int mid = (L+R)/2;
		int x=0,y=0;
		if(left) x = left->query(L,mid,l,r);
		if(right)y = right->query(mid+1,R,l,r);
		return x+y;
	}
}*root;


int main()
{
	int q,l,r;
	scanf("%d",&q);
	root = new node();
	while(q--){
		char ch;
		scanf(" %c",&ch);
		if(ch == '+'){
			scanf("%d%d",&l,&r);
			root = root -> update(1,maxn,l,r);
		}
		else printf("%d\n",root->query(1,maxn,1,maxn));
	}
	return 0;
}
```

## Problem 6: HrSiam Attends Parties

[ Problem Statement ]({{ "/assets/pdf/bdoi-2-prob-f.pdf" | relative_url}})

এটি মনে হয় সবথেকে সহজ সমস্যা। a,b ইনপুট, $ceiling \bigg(\displaystyle{\frac{a}{b}} \bigg)$ আউটপুট।

## Provlem 7: K-consecutive

[ Problem Statement ]({{ "/assets/pdf/bdoi-2-prob-g.pdf" | relative_url}})

এই প্রব্লেমটার মূল সলিউশন ডিপি। প্রথম সাবটাস্কে k = 1, যার মানে সলিউশন টা হবে $m \times (m-1)^{n-1} \mod m$। পরের সাবটাস্কে উরাধুরা ব্রুটফোর্স দিয়েই করে ফেলা যাবে, constraints খুব ছোট। এরপর ওই উরাধুরা ব্রুটফোর্সে $dp[ n ] [ k ] [m ]$ টাইপের কিছু একটা রেখে দিলে মোটামুটি পরের সাবটাস্ক হয়ে যাবে। এরপর শেষের সাবটাস্কে সমস্যা হলো $5000^3$ পরিমান মেমরি নেয়া পসিবল না। তাই আমাদের একটা ডাইমেনশন কমাতে হবে। আমরা চিন্তা করি, আমাদের কাছে কত ধরনের খাবার আছে, অথবা কোন খাবার নিয়ে বর্তমানে কাজ করছি, সেটা ততটা গুরুত্বপূর্ন না। কতভাবে সাজানো যায় সেটাই মূল বিষয়। তাই m কে রেখে আমাদের কোন কাজ নেই। আমরা $dp(at,cur)$ নিয়ে কাজ করবো। হয় এর পরের টায় বর্তমান ছাড়া আরেকটা নিব, তাহলে cur 1 হয়ে যাবে। কারন আমরা একটানা একাধিক খাবার নেইনি, $dp(at+1,1)$। আর যদি একই খাবার নেই তাহলে $dp(at+1,cur+1)$. এটা করলেই $\mathcal O(n^2)$ এ সমাধান করা যাবে। তবে আমার কেন যেন মনে হচ্ছে এটার আরো ভালো সলিউশন আছে, হয়তো লিনিয়ারের সাথে m বা k এর লগারিদমিক ফ্যাক্টর, তবে আমি এর থেকে ভালো সলিউশন বেড় করতে পারিনি। $\mathcal O(n^2)$ এর কোড দিয়ে দিচ্ছি।

```c++
#define ll long long
ll solve(int pos, int cur)
{
    if(pos==n+1) return 1;
    if(cur==k+1) return 0LL;
    if(dp[pos][cur]!=-1) return dp[pos][cur];
    ll ret = 0LL;
    ll x = 0, y = 0;
    if(cur<k) x = (x%mod+solve(pos+1, cur+1)%mod)%mod;
    else x = 0;
    y = (y%mod+solve(pos+1, 1)*(m-1)%mod)%mod;
    return dp[pos][cur] = (x+y)%mod;
}
```

সবাইকে ধন্যবাদ।
