<template>
  <article v-if="blogPost" class="main flex">
    <div class="container lg:flex lg:flex-col lg:justify-center lg:items-start">
      <h1 class="heading heading--main mb-6 lg:mb-10">{{ blogPost.title }}</h1>
      <h6
        v-if="blogPost.date"
        class="inline-block py-1 px-2 my-2 bg-accent text-white font-medium rounded-sm dark:bg-accent whitespace-no-wrap"
      >
        {{ formatDate(blogPost.date) }}
      </h6>
      <div v-html="$md.render(blogPost.body)" />
    </div>
  </article>
</template>
<script>
export default {
  async asyncData({ params, payload }) {
    if (payload) return { blogPost: payload }
    else
      return {
        blogPost: await require(`~/assets/content/blog/${params.blog}.json`)
      }
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString(process.env.lang) || ''
    }
  }
}
</script>
