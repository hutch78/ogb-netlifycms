<template>
  <header class="sidebar flex-shrink-0 max-w-50 p-3 lg:p-5 bg-primary-100">
    <div class="">
      <div class="branding text-left">
        <h1 class="branding-heading">
          <img class="block w-20 lg:w-40" src="/img/transpareny-primary.png" alt="" />
          <span class="sr-only">OGB Sportz</span>
        </h1>
        <h2 class="sub-heading mb-0">Sports Unlocked</h2>
      </div>
      <nav class="">
        <ul class="flex flex-col items-start">
          <li class="inline-block mb-2">
            <nuxt-link class="block py-4 px-8" to="/">Home</nuxt-link>
          </li>
          <li class="inline-block mb-2">
            <nuxt-link class="block py-4 px-8" to="/blog">Blog</nuxt-link>
          </li>
          <li class="inline-block">
            <nuxt-link class="block py-4 px-8" to="/projects">Projects</nuxt-link>
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
</style>
