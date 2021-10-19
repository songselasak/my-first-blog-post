<template>
  <div class="p-2">
    <img class="mx-auto rounded-full w-24 h-24" :src="require(`~/assets/images/${author.image}`)" />
    <div class="text-center">
      <h4 class="font-bold">Author</h4>
      <p>{{ author.name }}</p>
      <p>{{ author.bio }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      author: {
        type: Object,
        required: true
      }
    }
  }
</script>