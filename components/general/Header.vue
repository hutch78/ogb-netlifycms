<template>
  <header class="fixed top-0 inset-x-0 p-3 lg:p-5">
    <div class="flex justify-between">
      <div class="branding text-left">
        <h1 class="branding-title">OGB Sportz</h1>
        <h2 class="subtitle mb-0">Sports Unlocked</h2>
      </div>
      <nav class="">
        <ul class="flex justify-end">
          <li class=" mr-2">
            <nuxt-link class="block btn" to="/">Home</nuxt-link>
          </li>
          <li class=" mr-2">
            <nuxt-link class="block btn" to="/blog">Blog</nuxt-link>
          </li>
          <li class="">
            <nuxt-link class="block btn" to="/projects">Projects</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="postcss" scoped>
.nuxt-link-exact-active {
  @apply text-accent-200 bg-accent bg-opacity-20;
  &:hover {
    @apply text-white bg-accent-600;
  }
}
.light-mode {
  & .nuxt-link-exact-active {
    @apply text-accent-900;
    &:hover {
      @apply text-white;
    }
  }
}
</style>
