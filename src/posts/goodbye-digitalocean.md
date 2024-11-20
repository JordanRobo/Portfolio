---
title: Goodbye DigitalOcean
description: Tired of paying for hosting? Learn how I replaced my $5/month hosting plan with a $500 Raspberry Pi cluster, tackled CGNAT nightmares, and discovered that sometimes the most expensive solution is actually the best learning opportunity. Bonus: Bezos gets one less yacht.
date: '2024-11-20'
categories:
  - DevOps
  - Research & Learning
published: true
---

I recently decided that enough was enough! I'm tired of paying the man $5 a month to run my very basic website, not to mention how much it costs every time I decide I want to start up a new service. To combat this I instead convinced myself that spending close to $500 was far more favourable, not to mention a good chunk off my time...

Ok, enough with the click-baity intro, what I did was buy my own Raspberry Pi powered server for three reasons;

1. I wanted to learn more about networking and Docker
2. I wanted the freedom to host as many web services as I wanted without having to pay for Jeff's next yacht and,
3. IT JUST LOOKS SO CUTE! (Look at this thing! Isn't it the most adorable thing ever!)

![A Server For Ants](/images/a_server_for_ants.jpg)

So, what did I learn while setting this bad boy up? Lots. I envy those that have never heard of CGNAT, Port Forwarding, Tunnelling, Overlay Networks, Processor Architectures and Swarm Managers. You're probably wondering what the bulk of this means and how it applies to my Pi Server but fret not, by the end of this article you too will understand the magic that allows you to view this post right now.

## The Hardware

Before diving into the esoteric world of server software initialisation, let's start simple with the hardware powering it. Below is a full list of all the parts I used;

- 3x Raspberry Pi 3 B+ devices
- Uctronics Raspberry Pi Cluster case
- TP-Link 5-Port Gigabit network switch
- 4x Cat5e Data cables
- 3x USB-A to Micro USB cables
- 3x Micro SD cards
- USB-A Wall Charger

## Setting Up the Cluster

You may have also looked into something like this before and learnt that you could just run a server using one Pi, so why didn't I do that? One Pi could certainly handle hosting my website, but remember what I said about wanting to learn? A cluster setup introduces concepts like load balancing, high availability, and container orchestration – things that are incredibly valuable to understand in modern development.

I decided to set up Docker Swarm (Which I absolutely feel should be named Docker School keeping with the ocean naming theme) across the cluster, with one Pi acting as the manager node and the other two as workers. This configuration allows me to deploy services across the cluster and ensures that if one Pi decides to take an unscheduled vacation, the others can pick up the slack. It's like having a team of tiny, reliable employees who never complain about working overtime!

### The Configuration

Each Pi runs Raspberry Pi OS Lite (because GUI are for the weak) and I've set up SSH keys for secure remote access. The network configuration is pretty straightforward:

- Manager Node: 192.168.0.138
- Worker Node 1: 192.168.0.139
- Worker Node 2: 192.168.0.140

The switch connects all the Pis together in their own little network.

## Teeny Tiny Hurdles

### Pi Party Unable to Consolidate Power

My first major roadblock came when the Pis kept randomly rebooting. At first, I thought they were staging a rebellion against their new overlord (me), but the truth was much simpler – they were hangry. The USB power supply I initially used wasn't providing enough juice to keep all three Pis happy.

I was able to discover this by inspecting the one of my Pi's logs, I did this by using `journalctl -b -1` (Which allowed me to view messages from the previous boot (before last restart)). After scouring the logs I saw `Nov 19 18:23:22 pi-worker2 kernel: hwmon hwmon1: Undervoltage detected!` this partialy answered my questions but I needed to confirm.

By running `vcgencmd get_throttled` on each of the Pis I was given an output of `throttled=0x50000` this confirmed that indeed each of them were not receiving the power that they needed to run.

The solution? I upgraded to a beefier power supply capable of delivering 2.5A per port. Suddenly, my tiny computer was stable and content. Lesson learned: never underestimate the importance of proper power delivery! Also how to use logs for troubleshooting issues.

### What on Earth is a CGNAT?

Just when I thought I was in the clear, I discovered something that would make any aspiring self-hoster cry: my Internet Service Provider (ISP) uses Carrier-Grade Network Address Translation (CGNAT). This technology came about to fix the issue of there not being enough IP addresses for everyone (there's only 4,294,967,296 possible combinations, not even enough for every single person currently alive today). Basically what happens is your ISP has an IP address that they split up for multiple people, shown in the diagram below.

![CGNAT Diagram](/images/CGNAT.jpg)

In layman terms, this means I couldn't set up a static IP address to make my services accessible to the outside world. It was like building a store in a gated community, no one on the outside would ever be able to find me.

After much research (and maybe a little crying), I found the solution: Cloudflare Tunnels. This service creates a secure tunnel from my cluster to Cloudflare's edge network, making my services accessible without needing a public IP address. It's like having a secret underground passage to your store that somehow ends up on the main street and essentially bypasses the other IPs.

## Why Not Just Keep Paying for Hosting?

I know what some of you are thinking: "This seems like a lot of work just to save $5 a month." And you're absolutely right! If my goal was simply to host a website in the most convenient way possible, this would be complete overkill. But that was never the point.

This project was about learning, about understanding the infrastructure that powers modern web applications. It's about knowing what happens when you type a URL into your browser and hit enter. It's about becoming a more well-rounded developer who understands not just how to write code, but how to deploy and maintain it in the real world.

Yes, it was difficult. Yes, it continues to eat into my time as I maintain and upgrade it. And yes, I've probably spent more on hardware than I would have on years of hosting. But the knowledge and experience I've gained? Priceless. (Well, not exactly priceless – it cost about $500)

## What's Next?

Now that I have my own little data center, the possibilities are endless. I'm planning to set up:

- A personal Git server
- A CI/CD pipeline for automatic deployments
- A personal cloud storage solution
- Maybe even a video streaming platform (Why stop at website hosting when I can deprive Bezos of my Prime Video subscription too?)

Remember, sometimes the hard way is the right way – especially when you're learning. Now if you'll excuse me, I need to go stare at the pretty, flickering lights on my server some more.
