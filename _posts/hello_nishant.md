---
title: "Hello Nishant"
excerpt: "A quick guide on how to write and publish your own posts on this blog."
coverImage: "/assets/blog/hello-world/cover.jpg"
date: "2026-06-13T00:02:00.000Z"
author:
  name: Saarang
  picture: "/assets/blog/authors/tim.jpeg"
ogImage:
  url: "/assets/blog/hello-world/cover.jpg"
---

Hey Nishant, welcome to the blog. This is yours too — here's how to write on it.

## Writing a post

Every post is a Markdown file inside the `_posts/` folder. To create a new one, add a file like `_posts/your-post-title.md`.

Each file needs a frontmatter block at the top — just copy this and fill it in:

```
---
title: "Your Post Title"
excerpt: "A one-line summary of what this post is about."
coverImage: "/assets/blog/hello-world/cover.jpg"
date: "2026-06-13T00:00:00.000Z"
author:
  name: Nishant Singh
  picture: "/assets/blog/authors/tim.jpeg"
ogImage:
  url: "/assets/blog/hello-world/cover.jpg"
---
```

After the frontmatter, write whatever you want in plain Markdown.

## Markdown basics

```
## This is a heading

This is a paragraph. Write normally.

**bold**, _italic_, `code`

- bullet one
- bullet two
```

## Publishing

Once you've written your post:

1. Save the file
2. Run `git add _posts/your-post-title.md`
3. Run `git commit -m "add post: your title"`
4. Run `git push`

The site will redeploy automatically on Vercel and your post will be live in about a minute.

That's all there is to it. Go write something.
