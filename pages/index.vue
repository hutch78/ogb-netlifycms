<template>
  <div class="main">
    <div class="container">
      <!-- <logo /> -->
      <h1 class="heading">Welcome to OGB Sports</h1>
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
