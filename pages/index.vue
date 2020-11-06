<template>
  <div class="main flex">
    <div class="container lg:flex lg:flex-col lg:justify-center lg:items-start">
      <!-- <logo /> -->
      <h1 class="heading heading--main">OGB Sportz</h1>
      <h2 class="sub-heading sub-heading--main mt-1 lg:mt-2 mb-5 lg:mb-10">The Next Big Thing in Sports</h2>
      <p class="text-2xl leading-9 mb-6 lg:mb-10">
        Welcome to our new site. We are looking forward to bringing you all the latest news, stats, and rankings across
        the world of sports
      </p>
      <nuxt-link to="/about">Learn More</nuxt-link>

      <div class="bg-primary-800 px-16 py-16  mt-10 lg:mt-32 -m-16 rounded-lg">
        <span class="inline-block px-4 py-2 uppercase text-white border border-solid border-white rounded-full mb-6"
          >New</span
        >
        <h2 class="heading text-white">The Rankings</h2>
        <h3 class="sub-heading mt-1 lg:mt-2 mb-4 lg:mb-8  text-white">Stay Up-to-date Throughout the Season</h3>
        <p class="text-xl leading-7 mb-6 lg:mb-10  text-white">
          Our goal here at OGBSportz is to give you the necessary tools to take your sports viewing experience to the
          next level.
        </p>
        <nuxt-link class=" text-white" to="/about">View Latest Rankings</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
  // components: {
  //   Logo
  // },
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  }
}
</script>


<style lang="postcss" scoped>
</style>