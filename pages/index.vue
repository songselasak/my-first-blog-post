<template>
  <div class="m-8">
    <TheHeader />

    <h1 class="font-bold text-4xl mb-6">Blog Posts</h1>
  
  <div>
    <a-button type="primary">
      Primary
    </a-button>
    <a-button>Default</a-button>
    <a-button type="dashed">
      Dashed
    </a-button>
    <a-button type="danger">
      Danger
    </a-button>
    <a-config-provider :auto-insert-space-in-button="false">
      <a-button type="primary">
        按钮
      </a-button>
    </a-config-provider>
    <a-button type="primary">
      按钮
    </a-button>
    <a-button type="link">
      Link
    </a-button>
  </div>

    <ul class="flex flex-wrap">
      <li
        v-for="article of articles"
        :key="article.slug"
        class="xs:w-full md:w-1/2 px-2 xs:mb-6 md:mb-12 article-card"
      >
        <NuxtLink
          :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col"
        >
          <img
            v-if="article.img"
            class="h-48 xxlmin:w-1/2 xxlmax:w-full object-cover"
            :src="require(`~/assets/images/${article.img}`)"
          />

          <div
            class="p-6 flex flex-col justify-between xxlmin:w-1/2 xxlmax:w-full"
          >
            <h2 class="font-bold">{{ article.title }}</h2>
            <p>by {{ article.author.name }}</p>
            <p class="font-bold text-gray-600 text-sm">
              {{ article.description }}
            </p>
          </div>
        </NuxtLink>
      </li>
    </ul>
    <h1 class="font-bold text-4xl mb-6">Submit Blog</h1>
    <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
    <a-form-item label="Title">
      <a-input
        v-decorator="['title', { rules: [{ required: true, message: 'Please input the blog title' }] }]"
      />
    </a-form-item>
    <a-form-item label="Description">
      <a-input
        v-decorator="['description', { rules: [{ required: true, message: 'Please input the blog description' }] }]"
      />
    </a-form-item>
    <a-form-item label="Author">
      <a-input
        v-decorator="['author', { rules: [{ required: true, message: 'Please input the blog author' }] }]"
      />
    </a-form-item>
    <!-- <a-form-item label="Image">
      <a-upload
    name="file"
    :multiple="true"
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    :headers="headers"
    @change="handleChange"
  >
    <a-button> <a-icon type="upload" /> Click to Upload </a-button>
  </a-upload>
    </a-form-item> -->
    <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
      <a-button type="primary" html-type="submit">
        Submit
      </a-button>
    </a-form-item>
  </a-form>
  </div>
  
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  // async asyncData({ $content, params }) {
  //   const articles = await $content('articles')
  //     .only(['title', 'description', 'img', 'slug', 'author'])
  //     .sortBy('createdAt', 'desc')
  //     .fetch()
  //   return {
  //     articles,
  //   }
  // },
  async fetch({ store }) {
    await store.dispatch('getArticles')
  },
  computed: mapState(['articles']),
  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          // TODO Submit values to somewhere
        }
      });
    },
    // ...mapActions(['getArticles'])
  },
}
</script>

<style class="postcss">
.article-card {
  border-radius: 8px;
}
.article-card a {
  background-color: #fff;
  border-radius: 8px;
}
.article-card img div {
  border-radius: 8px 0 0 8px;
}
</style>