---
title: How to Embed Your Sveltekit UI Into Your Rust Binary
description: After a lot of trial and error and trying to decipher countless articles on similar topics I was finally able to do what the title suggests, and now you can too!
date: '2024-10-02'
categories:
  - Backend Development
  - Web Development
published: true

---

Good day to whomever is reading this, previously my posts have been more for sharing my ideas and thought process around development however, today I will be writing my first tutorial so to speak. The reason for this is that I recently had a very hard time trying to accomplish the task of embedding my Sveltekit UI into my Rust executable and as I was trying to achieve this I came upon only a handful of articles that didn't actually do what I wanted to. Normally I would avoid writing another article that has been written countless times but for the first time I find myself in a position of providing genuine support for someone like me. So without further ado, let's dive in head first.

As I've never written a guide to building something I'm going to be writing in the style most familiar to me in terms of instructional articles, a cooking recipe. I hope that you are able to easily follow along and find value in this.

## Use Cases

Obviously your use for this may differ but some examples of why you might want to do this could include;

- Content Management System (CMS)
- Personal knowledge base or note-taking application
- Inventory management system
- Customer Relationship Management (CRM) tool
- Personal finance tracker

Pretty much this can be used for any CRUD application that you would like to host on a server or your own computer. And before you ask, no this is not a tutorial on how to create a "To-Do" app, there's enough of those already. This will just focus on how to build a Full-stack app of any flavour and have it in a single executable without the need for any other files or folders.

## Learn by Example

This guide is designed primarily around the final build step of your project however, we need to build an app to highlight each of the steps so for simplicity sake we'll develop a super basic app that displays a message when a button is clicked (as seen below). This way you can understand the fundamentals without being bogged down in unnecessary information. 

![Screenshot from 2024-10-01 11-16-22](/images/rust-embed.png)

Yes, this could all just be achieved in the front-end without the need to create an API server but our goal here isn't to build something the quickest and simplest, the goal is to understand how to integrate the UI with the back-end, because while you can do this without a back-end server if the fetch request was retrieving data from a PostgreSQL database then you would need it. Again, I'm just using a simple example to show the underlying infrastructure.

To start this project we'll get our environment set up and we'll begin this by creating a new Rust project;
```bash
cargo new app
```

After this we'll add the following to our Cargo.toml file;
```toml
[package]
name = "app"
version = "0.1.0"
edition = "2021"
include = ["ui/build/**/*"]

[dependencies]
actix-web = "4.2.1"
actix-cors = "0.7.0"
rust-embed = "8"
mime_guess = "2.0.5"
serde = { version = "1.0.145", features = ["derive"] }
serde_json = "1.0.86"
```

These packages will allow us to create a basic HTTP server, some API routes to communicate with and allow us to embed our front-end into our executable.

Next we'll create our API that we will be making our request to, to do this we'll create a `lib.rs` file in our main src directory and then add the following;

```rust
use actix_cors::Cors;
use actix_web::dev::Server;
use actix_web::{get, web, App, HttpResponse, HttpServer, Responder, Result};
use actix_web::http::header;

#[get("/hi")]
async fn hello() -> Result<impl Responder> {
    let res = ("Hello world!").to_string();
    Ok(web::Json(res))
}

pub fn run() -> std::io::Result<Server> {
    let server = HttpServer::new(move || {
        let cors = Cors::default()
            .allow_any_origin()
            .allowed_methods(vec!["GET"])
            .allowed_headers(vec![header::AUTHORIZATION, header::ACCEPT])
            .allowed_header(header::CONTENT_TYPE)
            .max_age(3600);

        App::new()
            .wrap(cors)
            .service(web::scope("/api").service(hello))
    })
    .bind(("127.0.0.1", 8080))?
    .run();

    Ok(server)
}
```

And we'll also add the following into our `main.rs`;

```rust
use app::run;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    run()?.await
}
```

Now if you enter `cargo run` into your terminal and go to "http://127.0.0.1:8080/api/hi" you should see the message "Hello World!" on your screen in JSON format. Well done, you've made a basic Actix Web server, now let's get started on our front-end.

## Front-end Configuration

Ok, now that we've made the server let's build out our front-end UI, to do this make sure you have a terminal open in your apps directory then we'll run;
```bash
bun create svelte@latest ui
```

Then follow the usual steps to get your development environment set up, if you're unsure how to do that you can refer to the SvelteKit documentation [here](https://kit.svelte.dev/docs/creating-a-project]). 

So however you have decided to configure your project doesn't matter, what matters is that your directory should now look like this;
```
app/
├── src/
│   ├── lib.rs
│   └── main.rs
├── ui/
│   └── Sveltekit project
├── Cargo.toml
└── Cargo.lock
```

If this is also how your project looks so far, well done, we can move onto the next key aspect of this, ensuring that our SvelteKit app is built as a Single Page Application (SPA). We do this by installing the `@sveltejs/adapter-static` and editing our `svelte.config.js` file like the following;

```bash
bun i -D @sveltejs/adapter-static
bun install --save-dev svelte-preprocess
```

```javascript
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			fallback: 'index.html'
		})
	}
};

export default config;
```

Then the final part is to create a `+layout.ts` file in our routes directory and add the following;

```typescript
export const ssr = false;
export const prerender = true;
```

What this basically does is tell our application that when we build it we want to have the pages built as well ahead of time as opposed to on the server later on. Simply put imagine a busy restaurant that knows its most popular dishes. Instead of cooking every meal from scratch when a customer orders, the chefs prepare some dishes ahead of time during quiet periods. When a customer orders one of these pre-prepared meals, it can be served almost instantly, needing only final touches or reheating. This is basically what pre-rendering is and it's important because in order to embed the files in our Rust binary those files need to exist somewhere.

To build the button and connect to our API we can add the following code to our `+page.svelte`;

```svelte
<script lang="ts">
    let message: string = "";

    async function get_message() {
        let res = await fetch("/api/hi", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!res.ok) {
            throw new Error("Failed to load users");
        }
        return res.json();
    }

    async function handle_click() {
        if (message == "") {
            message = await get_message();
        } else {
            message = "";
        }
    }
</script>

<button on:click={handle_click}>Click Here</button>
<h1>{message}</h1>
```

This is obviously not the best way to do it as we don't have any proper error handling but for this example it works fine. You can obviously add whatever styling or additional logic as you so choose.

## Building for Prod

Alright now onto the fun part, building our application, the final step we need to do is add a `build.rs` to our root directory (it should be in the same location as your `Cargo.toml` file). Once you have created the file add the following to it;
```rust
use std::path::Path;
use std::process::Command;

fn main() {
    println!("cargo:rerun-if-changed=ui/src");
    println!("cargo:rerun-if-changed=ui/static");

    // Build SvelteKit project
    let output = Command::new("bun")
        .current_dir("ui")
        .args(&["run", "build"])
        .output()
        .expect("Failed to build SvelteKit project");

    if !output.status.success() {
        panic!(
            "SvelteKit build failed: {}",
            String::from_utf8_lossy(&output.stderr)
        );
    }

    // Check if the build directory exists
    let build_path = Path::new("ui/build");
    if !build_path.exists() || !build_path.is_dir() {
        panic!("ui/build directory does not exist after build");
    }
}
```

What this is doing is telling cargo to build our SvelteKit app anytime we run our server. So now that we have added this the very final piece of the puzzle is to add the following to our `lib.rs` file;
```rust
use mime_guess::from_path;
use rust_embed::RustEmbed;

#[derive(RustEmbed)]
#[folder = "ui/build/"]
struct Asset;

fn handle_embedded_file(path: &str) -> HttpResponse {
    match Asset::get(path) {
        Some(content) => HttpResponse::Ok()
            .content_type(from_path(path).first_or_octet_stream().as_ref())
            .body(content.data.into_owned()),
        None => HttpResponse::NotFound().body("404 Not Found"),
    }
}

#[get("/")]
async fn index() -> impl Responder {
    handle_embedded_file("index.html")
}

#[get("/{_:.*}")]
async fn dist(path: web::Path<String>) -> impl Responder {
    handle_embedded_file(path.as_str())
}
```

and then make sure you also add these two new routes to your App instance, like so;

```rust
pub fn run() -> std::io::Result<Server> {
    let server = HttpServer::new(move || {	
        
        // leave everything else as before
        
		App::new()
            .wrap(cors)
            .service(web::scope("/api").service(hello))
            .service(index) // these are the new routes to add
            .service(dist) 
        })
```

What this all does is basically tell our Rust server where our application files are located and then uses RustEmbed to, you guessed it, embed these files into the binary. Then, for each of the files and folders in this directory it uses mime_guess to determine it's file types and serves each file it's own unique URL, thus allowing our app to find the resources it needs. Finally the `index()` function tells our server where to find the index.html file for our app so that it can serve it up at our root address.

When we run `cargo run` you'll notice that if we go to "http://127.0.0.1:8080/" we can see our SvelteKit application! Also if you go to "http://127.0.0.1:8080/api/hi" you can still see the "Hello World!" message. If this is what you also see then congratulations, you have successfully followed along and now are ready to build it. To do so all we have to do is run;

``` bash
cargo build --release
```

And this will build our production ready executable in our "/target/release" directory. 

That's it, all done, you should now have a single executable called "app". Now you can host this where ever you like and run this app will a single file. No need to manage multiple files or folders, it's all right there. 

My goal in figuring this out was to make my Mercury CMS into a single file allowing people to easily download and manage it on their own servers for their own projects. Obviously there are a lot of other ways you could use this so don't let me tell you what to do, I hope you are able to use this in whatever your project may be and until next time, happy developing!
