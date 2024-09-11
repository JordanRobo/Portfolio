---
title: Forms Follow Function
description: Today I had an idea. Is it a good idea? Great question, I'm not sure. Let's explore whether this has any merit or if it'll just lead to a huge mess later on.
date: '2024-09-11'
categories:
  - Project Mercury
  - Backend Development
published: true

---

# Forms Follow Function: A Fresh Perspective on CMS Development

Well, well, well. It's been a minute since I've last worked on my CMS project, Mercury. But now, I'm back! And I'm looking at Mercury with fresh eyes.

Now, am I about to give you a step-by-step tutorial on how to start an API with Actix-Web? Nope. That's not what we're here for today. Today, we're diving into the philosophical side of things. We're talking about the age-old question that plagues every developer at some point: form or function?

## The Customisation Conundrum

One of the big issues I've been wrestling with is the question of customisation. Do I allow it? Do I lock it down? It's like trying to decide between a bespoke suit and one off the rack. Sure, the bespoke suit will fit you perfectly, but it's a lot more work (and usually a lot more expensive).

Customisation allows for more tailored situations. It's like giving users a blank canvas and a full palette of colors. They can create exactly what they need. Sounds great, right?

But here's the thing: no customisation is easier to develop. It's also quicker for users to set up because they have less configuration to do themselves. It's like giving users a coloring book instead of a blank canvas. Sure, it's less flexible, but it's also less intimidating.

I've decided to stick with rigid data structures for posts and other such data this keeps things simpler and more consistent.

But forms? Oh boy, forms are a different beast entirely. Sure there are the standard ones like collecting email newsletter subscriptions but then what if you decide to ask people how they feel? Every form wants to be unique, to ask its own special questions. And that's when I had an idea.

## The Lightbulb Moment

What if we could have our cake and eat it too? What if we could have a way to collect and store form submissions that also allows for custom data modeling?

Here's the idea: we have a default "form" template. When an admin creates a new form collection, it creates a new table with four field names: id, date, read, and data.

"But Jordan," I hear you cry, "that's only four fields! How is that customisable?" Well, here's where it gets interesting. The idea is to collect the form submission as a JSON object in the data field. This allows for customised data capturing while maintaining a consistent structure.

It's like having a standard envelope (our four fields) that can contain any kind of letter (our JSON object). The post office (our database) knows how to handle the envelope, and the recipient (our admin) can make sense of the contents.

## Diving Deeper: The Pros and Cons

Now, this solution seems pretty slick, right? We get the best of both worlds - a consistent structure for easy development and flexible content for customisation. But before we get too excited, let's put on our critical thinking hats and explore the potential downsides of this approach.

### The Pros:
1. Flexibility: This approach allows for virtually unlimited form structures without changing the database schema.
2. Simplicity: From a development standpoint, we're dealing with a consistent table structure across all forms.
3. Scalability: Adding new form fields doesn't require database migrations.

### The Cons:
1. Performance: Storing data as JSON objects might lead to slower querying and indexing compared to traditional relational database structures.
2. Data Integrity: Without strict schema enforcement, it's easier for malformed or inconsistent data to slip into the system.
3. Complexity in Querying: Writing queries to filter or sort based on specific fields within the JSON object can be more complex and potentially less efficient.
4. Data Validation: Ensuring the integrity and format of the data within the JSON object becomes more challenging and needs to be handled at the application level.
5. Reporting Challenges: Generating reports or analytics based on form data might require more complex logic to parse and aggregate the JSON data.
6. Schema Evolution: While we gain flexibility, we lose the ability to easily enforce schema changes across all existing data.

## To JSON or Not to JSON: That is the Question

So, is this the right approach for Mercury? Let's break it down:

1. Use Case Alignment: Mercury aims to be flexible and user-friendly. This approach aligns well with that goal, allowing users to create custom forms without needing to understand database schemas.

2. Performance Considerations: Given that Mercury is likely to handle a moderate amount of data, the performance hit from JSON storage might be acceptable. However, we need to be prepared to optimize queries and potentially implement caching strategies.

3. Data Integrity and Validation: We'll need to implement robust server-side validation to ensure data integrity. This might include creating a schema validation system for each form, which adds complexity but provides necessary safeguards.

4. Querying and Reporting: We should be prepared to implement more complex querying logic. This might involve using database-specific JSON querying features or handling most of the data processing in our application code.

5. Future-Proofing: While this approach provides flexibility, we need to consider how we'll handle major structural changes in the future. Implementing a versioning system for form schemas could be a way to manage this.

## The Verdict

After weighing the pros and cons, I believe this JSON-based form handling approach is worth pursuing for Mercury. Here's why:

1. Alignment with Goals: It provides the flexibility we want to offer users, which is a core value of Mercury.
2. Manageable Tradeoffs: The potential performance and complexity issues seem manageable given our expected scale.
3. Learning Opportunity: Implementing this system will push us to learn more about efficient JSON handling and querying, which is valuable knowledge in today's development landscape.
4. Iterative Improvement: We can start with this approach and optimize as we go, learning from real-world usage and adapting accordingly.

However, we need to keep a few things in mind as we move forward:

1. Implement robust server-side validation from the get-go.
2. Design our querying system carefully, with an eye towards future optimization.
3. Create clear documentation for users on how to effectively use and manage custom forms.
4. Plan for potential future migration strategies in case we need to shift away from this approach.

## The Road Ahead

As I stand at this crossroads in Mercury's development, I'm reminded of why I started this journey in the first place. It's not just about creating another CMS. It's about challenging the status quo, about finding new and better ways to do things.

This form handling idea might be a stroke of genius, or it might be a spectacular failure. But you know what? That's okay. Because as I've said before, the fastest way to learn is through mistakes. And boy, am I ready to learn!

So, what do you think? Is this form handling idea the next big thing in CMS development? Or am I setting myself up for a world of JSON-flavored pain? Let me know your thoughts, and stay tuned for the next installment in the "Jordan tries to reinvent the wheel" saga!

Remember, in the world of coding, it's not always about getting it right the first time. It's about being willing to try, fail, learn, and try again. So here's to trying, failing, and learning. May our code be ever flexible, our forms ever functional, and our coffee be ever strong!
