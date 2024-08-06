---
title: How Far Have I Progressed?
description: In a year of learning and upskilling my knowledge on different languages and technologies, just how far have I come?
date: '2024-mm-dd'
categories:
  - 
published: false


---



Recently I've been asking myself just how much I have learnt and how far I've come in terms of my developer skills. Then I begun wondering of ways I could perform some *end-to-end tests* of my new found skills and overall personal growth. After a very short amount of reflection I thought, "Hey, why not redo a previous project of mine?"

What a great Idea, I thought to myself in a very self congratulatory kind of way, and what better project than the Christmas Trivia App I made last year. Having built that only 9-10 months earlier and trying out a lot of techniques and technologies for the first time during the build, it really is the obvious choice. I'm still quite proud of the app I built back then and feel that after having actually used it with my family I've had the time and ability to reflect on what features need improving, what choices I'd change and what new features I could bring to the app. 

## The Good, The Bad & The Needs Updating...

First and foremost for anyone new to the channel here is a link to the current [Christmas Trivia App](https://github.com/JordanRobo/Christmas_Trivia) on my GitHub. For this project I'll be creating a new repository as opposed to just editing the existing code. This is for two reasons; Firstly I want to swap out some choices I made originally (such as using Bun instead of Node), and secondly I'm nostalgic and would like to keep the original. 

1. Old version used Svelte, SvelteKit & NodeJS with Socket.io
2. New Version will be; Frontend = Svelte, Sveltekit & Bun; Backend = Bun & Hono; Typescript used across the two
3. Will be adding an SQLite database
4. Won't be using an ORM though as I'm trying to improve my SQL skills

### Issues from previous version => Updates for new version

- If a player closed the window on phone they had to log in again and lost their data => Will add in proper auth with persistent sessions
- Previously frontend handled gamestate using svelte stores => Will now manage gamestate on the server
- Only showed the first person to buzz in and had to reset buzzer each time => Will create a list showing the order all players buzz in
- 
