<template>
  <article class="w-4/6 mx-auto my-4">
    
    <div>
      <AppSearchInput />

      <h1 class="font-bold text-4xl pt-4">{{ article.title }}</h1>
      <p class="pt-4">{{ article.description }}</p>
      <p class="pb-4">Article last updated: {{ formatDate(article.updatedAt) }}</p>
      <nav>
        <ul>
            <li v-for="link of article.toc" :key="link.id">
            <NuxtLink class="hover:underline" :class="{ 'py-2 font-bold': link.depth === 2, 'ml-2 pb-2': link.depth === 3 }" :to="`#${link.id}`">{{ link.text }}</NuxtLink>
            </li>
        </ul>
      </nav>
    </div>
    <div>
      <img :src="require(`~/assets/images/${article.img}`)" :alt="article.alt" class="container my-4" />
    </div>
    
    
    <!-- <pre>{{ article }}</pre> -->

    <div>
      <nuxt-content :document="article" />

    <div class=" bg-gray-100 rounded">
      <author :author="article.author" />
    </div>
    
      <prev-next :prev="prev" :next="next" />
    </div>

  </article>
</template>

<script>
  export default {
      
    // async asyncData({ $content, params }) {
    //   const article = await $content('articles', params.slug).fetch()

    //   return { article }
    // },
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()

      const [prev, next] = await $content('articles')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .surround(params.slug)
        .fetch()

      return {
        article,
        prev,
        next
      }
    },
    methods: {
        formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('en', options)
        }
    }
  }
  
</script>

<style>
  .nuxt-content h2 {
    font-weight: bold;
    font-size: 28px;
  }
  .nuxt-content h3 {
    font-weight: bold;
    font-size: 22px;
  }
  .nuxt-content p {
    margin-bottom: 20px;
  }
  /* .icon.icon-link {
    background-image: url('~assets/svg/icon-hashtag.svg');
    display: inline-block;
    width: 20px;
    height: 20px;
    background-size: 20px 20px;
  } */
</style>



