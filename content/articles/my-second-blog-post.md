---
title: My second Blog Post
description: Learning how to use @nuxt/content to create a blog
img: second-blog-post.jpg
alt: my seoncd blog post

author:
  name: Selasak
  bio: All about Selasak
  image: https://images.unsplash.com/photo-1593643946890-b5b85ade6451?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1978&q=80

---

<!-- <author :author="author"></author> -->

<div class="p-4 mb-4 text-white bg-blue-500">
  This is HTML inside markdown that has a class of note
</div>

<info-box>
  <template #info-box>
    This is a vue component inside markdown using slots
  </template>
</info-box>

```
export default {
  nuxt: 'is the best'
}
```


# My second blog post

Welcome to my second blog post using content module

## This is a heading

This is some more info

### This is a sub heading

This is some more info

### This is another sub heading

This is some more info

## This is another heading

This is some more info