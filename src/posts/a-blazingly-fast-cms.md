---
title: A Blazingly Fast CMS
description: The only way to ensure something is done right is to do it yourself!
date: '2024-06-07'
categories:
  - Backend Development
  - Research & Learning
published: true
---

If you have read my last post then you'll be well aware of my feelings towards the headless CMS options currently out there. I want to start by saying there is absolutely nothing wrong with any of them and I'm definitely not trying to imply they are terrible services. What I am saying is that I absolutely think they could be improved and you will be able to follow along as I do just that.

## Let's Start!

Well almost, first I want to start planning my CMS around fixes to issues that were facing my Dad and his website, the first being speed! If you are like me and have just entered the world of coding I'm sure that by now you've heard and realised that programming is a lot like joining a cult. You select your language and frameworks when you start out and then spend the remainder of your time defending your choice from others telling you you're wrong. If you aren't like me and had no idea it was like this well congrats, you now do!

Along my travels in the world of programming I've heard many people say how terrible PHP (The language Wordpress is written in) is performance wise. As I was beginning to write this post I begun writing about how slow and terrible PHP is until I realised, I don't actually know that, I've only heard it. If I'm going to make such a bold assumption in an article I'm authoring I should at least have some evidence to back it up? So that's what I did. Before finding a fast way to manage data I needed to have a benchmark.

## Benchmark Testing

So in order to test the speed of other languages I first need to create a benchmark to test against and I'll be using PHP as it's what is partly responsible for my Dad's website's performance currently. To do this I created a basic HTTP API that queried a PostgresSQL database returning the following JSON data;
```json
[
  {
    "id": 1,
    "content": "Hello, world!"
  }
]
```

*If you're interested in the code used for this you can view it [here](https://github.com/JordanRobo/API_Speed_Tests) however for the sake of keeping this article as short and sweet as possible I'll just refer to these files without including all the code.*

To complete the test I used Apache Bench with the following CLI command;

```bash
$ ab -n 1000 -c 100 http://localhost:8000/api.php
```

'-n' is the total number of requests made & '-c' is the concurrency, which means the number of requests made at once. So with these numbers the program will make 100 requests 10 times and measure the information on how this API performs. The reason I tested like this is to simulate people visiting the site simultaneously and how fast the server is able to respond to their requests. *(It's important to note though that these times may differ when deployed online versus on my local environment however, for the sake of comparison testing against other languages this doesn't need to factor in).* The results were as follows;

```bash
$ ab -n 1000 -c 100 http://localhost:8000/api.php
This is ApacheBench, Version 2.3 <$Revision: 1879490 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 100 requests
Completed 200 requests
Completed 300 requests
Completed 400 requests
Completed 500 requests
Completed 600 requests
Completed 700 requests
Completed 800 requests
Completed 900 requests
Completed 1000 requests
Finished 1000 requests


Server Software:
Server Hostname:        localhost
Server Port:            8000

Document Path:          /api.php
Document Length:        38 bytes

Concurrency Level:      100
Time taken for tests:   5.437 seconds
Complete requests:      1000
Failed requests:        0
Total transferred:      204000 bytes
HTML transferred:       38000 bytes
Requests per second:    183.91 [#/sec] (mean)
Time per request:       543.745 [ms] (mean)
Time per request:       5.437 [ms] (mean, across all concurrent requests)
Transfer rate:          36.64 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.3      0       1
Processing:     6  516  96.7    542     557
Waiting:        6  516  96.7    542     557
Total:          7  516  96.5    542     557

Percentage of the requests served within a certain time (ms)
  50%    542
  66%    546
  75%    547
  80%    548
  90%    552
  95%    554
  98%    555
  99%    556
 100%    557 (longest request)
```



There is a lot of information to take in here however, we are only interested in a few key measurements,  "Time per request", "Transfer Rate" & the "Longest Request" time.  These key measurements will tell us;

1. How much data can be sent at a time.
2. How quickly each request is being completed on average.
3. How long you would likely have to wait until your web page loads.

Based on this test we can see that to complete the 1000 requests my PHP API took an average of **5.437 ms** per request, was able to send **36.64 kb/sec** and it's longest request took **557 ms**. So is this good or is that bad? Well at the moment who knows, but we'll know in a second as soon as we compare it to something else and next up we'll test Node.js.

## Node.js Testing

The reason I'm going to test Node.js now is because this is the language that all the other CMS platforms are written in so this will give us a rough comparison of something like Strapi vs. Wordpress (not a direct comparison on account of how complicated their platforms are and which databases they might have employed). Again to keep things fair and to compare apples with apples I've used the same database but this time I created a Node.js HTTP server using Express (*view the code [here](https://github.com/JordanRobo/API_Speed_Tests/blob/main/Node/index.js)*). After I ran the test all I can say is ***"Wow!"***

![Node Vs. PHP](/images/node_vs_php.webp)

The results really speak for them self, based off this test Node.js is the clear winner.

## So You chose Node.js?

No.

Why? Because everyone else is using Node.js and I'm not here to create yet another JavaScript CMS. I want to build something better, something faster!

So what language am I going to use then?

## Rust Testing

The reason for choosing Rust is because of my fascination in it and my wanting to learn and use it but not having a good reason to. Well now I finally do. Rust is a great choice, it's a systems programming language that offers unparalleled performance and memory safety. Rust's ownership system and borrow checker ensure that memory is managed efficiently and safely at compile time, eliminating entire classes of bugs and issues that can plague other languages. Additionally, Rust's zero-cost abstractions allow for writing high-level, expressive code without sacrificing performance.

To put Rust's performance to the test, I created the same simple HTTP API as before (code available [here](https://github.com/JordanRobo/API_Speed_Tests/blob/main/Rust/src/main.rs)), utilizing the Actix Web framework and the Diesel ORM for PostgreSQL. Running the same Apache Bench test with 1000 requests and 100 concurrent connections, the results were astounding (*Note I've only compared Node.js and Rust in the graph as it was almost impossible to see Rust's performance*):

![Rust Vs. Node](/images/rust_vs_node.webp)

Rust's API blew the competition out of the water, with an average time per request of just **0.022 ms**, a transfer rate of **6,488.49 kb/sec**, and the longest request taking a mere **3 ms**. When compared side-by-side with PHP and Node.js, the difference is stark:

| Language | Time per Request (ms) | Transfer Rate (kb/sec) | Longest Request (ms) |
| -------- | --------------------- | ---------------------- | -------------------- |
| PHP      | 5.437                 | 36.64                  | 557                  |
| Node.js  | 0.177                 | 1,341.55               | 37                   |
| Rust     | 0.022                 | 6,488.49               | 3                    |

Rust's performance is nearly an order of magnitude better than PHP, and it comfortably outpaces Node.js as well. This raw speed, combined with Rust's safety guarantees and expressive syntax, make it an ideal choice for building a next-generation, high-performance CMS.

Of course, Rust is not without its challenges. Its learning curve is steeper than PHP or JavaScript, and its ecosystem, while growing rapidly, is still less mature than those of more established languages. However, the benefits in terms of performance, safety, and developer productivity are, in my opinion, well worth the investment. With Rust as the foundation, I'm confident that I can build a CMS that not only meets but exceeds the speed and reliability requirements of modern web applications.
