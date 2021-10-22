<template>
  <div
    class="w-4/6 mx-auto mt-6"
  >
  
    <div class=" bg-gray-100 rounded">
      <author :author="articles[0].author" />
    </div>

    

    <div
      
    >
      <NuxtLink to="/"
        ><p class="hover:underline">Back to All Articles</p></NuxtLink
      >
      <h3 class="mb-4 font-bold text-4xl">
        Here are a list of articles by {{ articles[0].author.name }}:
      </h3>

      <ul>
        <li
          v-for="article in articles"
          :key="article.slug"
          class="w-full px-2 xs:mb-6 md:mb-12 article-card"
        >
          <NuxtLink
            :to="{ name: 'blog-slug', params: { slug: article.slug } }"
            class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col"
          >
            <img
              v-if="article.img"
              class="h-48 xxlmin:w-1/2 xxlmax:w-full"
              :src="require(`~/assets/images/${article.img}`)"
              :alt="article.alt"
            />

            <div
              class="p-6 flex flex-col justify-between xxlmin:w-1/2 xxlmax:w-full"
            >
              <h2 class="font-bold">{{ article.title }}</h2>
              <p>{{ article.description }}</p>
              <p class="font-bold text-gray-600 text-sm">
                {{ formatDate(article.updatedAt) }}
              </p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
export default {
  // async asyncData({ $content, params }) {
  //   const articles = await $content('articles')
  //     .where({
  //       'author.name': {
  //         $regex: [params.author, 'i']
  //       }
  //     })
  //     .without('body')
  //     .sortBy('createdAt', 'asc')
  //     .fetch()
  //   return {
  //     articles
  //   }
  // },
    async fetch({ store }) {
    await store.dispatch('getArticles')
  },
  computed: mapState(['articles']),
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>