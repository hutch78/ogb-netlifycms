<template>
  <header class="sidebar flex-shrink-0 max-w-50 p-3 lg:p-5">
    <div class="">
      <div class="branding text-left">
        <h1 class="branding-heading">
          <img class="logo mb-2" src="/img/transpareny-primary.png" alt="" />
          <span class="sr-only">OGB Sportz</span>
        </h1>
        <h2 class="sub-heading mb-0">Sports Unlocked</h2>
      </div>
      <nav class="">
        <ul class="flex flex-col items-start">
          <li class="inline-block mb-2">
            <nuxt-link class="block py-4 px-8 rounded-md hover:bg-primary-700" to="/">Home</nuxt-link>
          </li>
          <li class="inline-block mb-2">
            <nuxt-link class="block py-4 px-8 rounded-md hover:bg-primary-700" to="/about">About Us</nuxt-link>
          </li>
          <li class="inline-block mb-2">
            <nuxt-link class="block py-4 px-8 rounded-md hover:bg-primary-700" to="/blog">Blog</nuxt-link>
          </li>
          <li class="inline-block">
            <nuxt-link class="block py-4 px-8 rounded-md hover:bg-primary-700" to="/projects">Projects</nuxt-link>
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
.logo {
  max-width: 150px;
  display: block;
}

.nuxt-link-exact-active {
  @apply text-accent-600 bg-accent bg-opacity-20;
  &:hover {
    @apply text-white bg-primary-600;
  }
}
</style>
