<template>
  <main v-if="blogPosts" class="main flex">
    <div class="container lg:flex lg:flex-col lg:justify-center lg:items-start">
      <h1 class="heading text-left mb-6 lg:mb-10">The Latest from OGB</h1>
      <ul class="articles">
        <nuxt-link
          v-for="(blogPost, index) in blogPosts"
          :key="index"
          :to="`blog/${blogPost.slug}`"
          class="block bg-white"
        >
          <h3 class="text-3xl font-black">{{ blogPost.title }}</h3>
          <h4 v-if="blogPost.date" class="mt-1 text-lg font-med text-primary-500  dark:text-primary-200">
            {{ formatDate(blogPost.date) }}
          </h4>
          <div class="mt-4 mb-6 lg:mt-10">
            <p class="block leading-7">{{ blogPost.description }}</p>
          </div>
          <p class="font-med">Learn More</p>
        </nuxt-link>
      </ul>
    </div>
  </main>
</template>
<script>
export default {
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts
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
