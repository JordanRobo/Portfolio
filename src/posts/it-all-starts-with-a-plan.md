---
title: It All Starts With a Plan
description: Someone once said "Measure twice, cut once", I'm not sure who and it doesn't directly apply to development but, it always pays to plan ahead. 
date: '2024-07-11'
categories:
  - Project Mercury
  - Backend Development
  - Web Development
published: true

---

If you have been following along with my posts so far then you'll know that I have recently decided to shift careers into software development and that I've also decided I'm going to single handedly create my own Headless CMS that feels like Wordpress but performs far better thanks to Rust.

So... Where do I start?

Well before I start typing out a bunch of code in my chosen IDE I should probably come up with some goals and a plan. Firstly I think it'd be most beneficial to determine what it is I'm trying to accomplish with my app and what problems it's looking to solve.

## The Tech Stack: Rust, Svelte, and SQLite

You might be wondering, "Jordan, why on earth would you choose Rust for a CMS when everyone else is using Node.js?" Well, remember when I said I'm lazy? That laziness extends to waiting for things to load. I want Mercury (yes, that's what I'm calling my CMS) to be blazingly fast, and Rust is the perfect tool for the job.

As I demonstrated in my previous post, Rust outperforms both PHP and Node.js by a significant margin. Its performance, combined with its memory safety guarantees, makes it an ideal choice for building a robust backend. Plus, let's be honest, I'm a glutton for punishment and I love a good challenge.

For the backend, I'm going with Actix Web as the web framework and Diesel as the ORM. These are both popular choices in the Rust ecosystem and should give me the performance and flexibility I need.

On the frontend, I'm opting for Svelte and SvelteKit. Why? Because I like to live dangerously and apparently, I didn't think Rust was enough of a learning curve. Jokes aside, Svelte's simplicity and performance align well with my goals for Mercury. And with Bun as the JavaScript runtime, we're looking at speeds that'll make your head spin.

Lastly, I'm choosing SQLite as the database. It's lightweight, requires zero configuration, and is perfect for the type of application I'm building. Plus, it plays nicely with Rust and Diesel, which is always a bonus.

## The Architecture: Keeping It Simple with a Monolith

Now, I know what you're thinking. "A monolith? In 2024? Aren't microservices all the rage?" Well, yes, but I've decided to swim against the current here. Why? Because sometimes, simpler is better.

By building Mercury as a monolith, I'm aiming for simplicity and ease of development. It's just me working on this project, after all, and I don't need the added complexity of managing multiple services. Plus, with the performance benefits of Rust, I'm not too worried about scaling issues.

This monolithic approach is inspired by PocketBase, which has shown that you can create a powerful, all-in-one backend solution without resorting to a microservices architecture. And let's be real, if it's good enough for them, it's certainly good enough for my little project.

## Data Structures and Features

When it comes to data types, I'm taking a page out of Ghost's book. Instead of going for a fully customisable approach, I'm setting up a predefined set of data types. But don't worry, I'm planning to include a wide range of types out of the box, so whether you're managing a personal blog or a company website, Mercury should have you covered.

Key features I'm aiming for:

1. Predefined, comprehensive set of content types
2. Version control for content
3. Role-based access control
4. RESTful API
5. Built-in image optimisation
6. Markdown and rich text editing
7. Scheduled publishing
8. Multi-language support

The goal here is to strike a balance between flexibility and simplicity. You won't be able to create entirely custom content types, but the pre-defined options should be robust enough to handle most use cases.

## The Road to Version 1.0

So, when can I slap that coveted 1.0 label on Mercury? Here's my checklist:

1. Implement the core monolithic backend with Rust, Actix Web, and Diesel
2. Create a user-friendly admin interface with Svelte and SvelteKit
3. Set up SQLite database and implement all predefined data types
4. Develop comprehensive API documentation
5. Implement basic content management and CRUD operations
6. Ensure proper authentication and authorisation
7. Set up a basic deployment pipeline
8. Write thorough tests (because I'm amazing but not perfect)
9. Successfully deploy and run my dad's website on it (the ultimate test)

Is this plan ambitious? Absolutely. Is it probably going to change seventeen times before I'm done? Most definitely. But hey, that's the fun of building something from scratch, right?

So, there you have it. My grand plan to revolutionise the world of Content Management Systems, one line of Rust at a time. Will I succeed? Who knows. Will I learn a tonne and probably cry over borrowed value errors at 3 AM? Definitely.

Stay tuned, This is going to be one wild ride.
