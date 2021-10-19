---
title: My second Blog Post
description: Learning how to use @nuxt/content to create a blog
img: second-blog-post.jpg
alt: my second blog post

author:
  name: Selasak
  bio: All about Selasak
  image: profile-author-1.jpg

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