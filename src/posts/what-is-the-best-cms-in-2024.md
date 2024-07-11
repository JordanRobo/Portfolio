---
title: What is the best CMS in 2024?
description: My research into a suitable content management system replacement for Wordpress.
date: '2024-06-06'
categories:
  - Research & Learning
  - Web Development
published: true
---

I recently started creating a website for my Dad's business which he had previously built using Wordpress and Elementor. The reason I was tasked with the rebuild was predominantly because his biggest qualm with the current configuration was how poor the performance was. He had mentioned that he'd previously paid someone on Fiverr to speed it up for him and, to their credit, they did manage to do this, briefly. It wasn't long until yet again his site was under performing, so it was when he mentioned this to me one day that I suggested using a Javascript framework and a headless Content Management System (CMS) to speed things up. He seemed intrigued by this notion however the main reason he didn't want to switch was because he enjoyed and was familiar with the Wordpress User Interface. This was a fair response however I wasn't going to leave him with sub par website performance so I begun researching.

## The Contenders

I started to scour the internet for various CMS options and weighing up their pros and cons. In my searching I was able to narrow it down to Sanity, Ghost, Strapi and Directus.  Let's have a look at each of there platforms and analyse what they do well, their shortcomings and what they would be best used for;

### Sanity:

Strengths:

- Highly customisable and flexible content modelling
- Real-time collaboration and live previews
- Powerful querying and filtering capabilities
- Scalable architecture suitable for large projects
- Extensive API support (REST, GraphQL, GROQ)

Weaknesses:

- Steeper learning curve compared to some other headless CMS options
- Pricing can be higher for projects with high bandwidth and API usage

Best used for:

- Large-scale, complex projects requiring advanced content modeling and querying
- Projects with real-time collaboration and preview requirements
- Applications with custom front-end frameworks or static site generators

### Ghost:

Strengths:

- Focused on simplicity and ease of use
- Built-in blogging and publication features
- Clean and intuitive content editor
- SEO-friendly out of the box
- Extensible with themes and integrations

Weaknesses:

- Limited content modelling options compared to other headless CMS
- Primarily geared towards blogging and content-centric websites

Best used for:

- Blogging platforms and content-heavy websites
- Projects prioritising simplicity and quick setup
- Websites with a strong focus on SEO and content discoverability

### Strapi:

Strengths:

- Open-source and self-hosted, providing full control over data and infrastructure
- Flexible and extensible content modeling
- Supports multiple databases (e.g., MongoDB, PostgreSQL, MySQL)
- Built-in REST and GraphQL API endpoints
- Large community and extensive plugin ecosystem

Weaknesses:

- Requires technical expertise for setup and maintenance
- Limited scalability compared to managed services

Best used for:

- Projects requiring complete control over the CMS and data
- Applications with specific backend requirements or custom integrations
- Development teams comfortable with self-hosting and maintenance

### Directus:

Strengths:

- Open-source and self-hosted
- Intuitive and user-friendly admin interface
- Supports any SQL database as the content repository
- Provides REST and GraphQL API endpoints out of the box
- Extensive access control and permissions management

Weaknesses:

- Limited content modeling flexibility compared to some other headless CMS options
- Requires technical knowledge for setup and hosting

Best used for:

- Projects with existing SQL databases
- Applications requiring granular access control and permissions
- Teams looking for an open-source, self-hosted solution with a user-friendly interface

## So which one is the winner?

Well the one I chose in the end was Ghost because of it's user friendly interface and it's text editor used for writing posts.  It's important to note though that this wasn't a perfect fit for what I needed. In order to successfully provide all the same functionality as what my Dad currently has, I needed to set up an additional database to store user form submissions. While this wasn't a big issue it does add additional running costs and results in the form submissions being  disconnected from the rest of the admin UI. 

## The Solution

My goal is to create a truly headless CMS that can be used to manage content for custom websites. A CMS that works for everyone involved in a website, the developer, the site admin and the site's visitors. So what do each of these people want from a website and by extension the CMS?

![CMS Diagram](/images/cms-diagram.webp)

Breaking this down we are able to find that what is important to everyone is:

1. Performance and speed
2. User experience and ease of use
3. Security
4. Customisation and extensibility
5. Content organisation and structure
6. Accessibility
7. SEO
8. Integration with other tools and services

If we rank each of the Content Management Systems, as well as Wordpress, against the above criteria the system that caters to all this the best would be Wordpress. 

![Comparisson](/images/compare-diagram.webp)

No wonder that even after it's release in 2003 it's still one of the most popular CMS out there. 

## So can't I just use Wordpress?

Well I could however, it's now over 20 years old and it really shows. It's time for a new Wordpress, a new way for people of all coding experience to build and maintain websites. So if we're going to try build a replacement for Wordpress and something that can outperform every other CMS out there where do we start? Building a CMS from scratch is a monumental task, something that is probably well above my experience level but I'm a firm believer that;

> The fastest way to learn is through mistakes.

And I'm sure I'll make many in this tremendous undertaking. 