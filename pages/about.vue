<template>
  <div class="main flex">
    <div class="container lg:flex lg:flex-col lg:justify-center lg:items-start">
      <!-- <logo /> -->
      <h1 class="heading mb-6 lg:mb-10">About Us</h1>

      <p class="text-2xl leading-9 mb-4">
        OGBSportz is dedicated to bringing you all the latest stats, rankings, articles, player bios, and everything
        else in the world of sports.
      </p>
      <p class="text-lg leading-6 mb-4">
        My name is Gerrit Graham and I am the founder of OGBSportz.com. My goal here at OGBSportz.com is to give you the
        necessary tools to take your sports viewing experience to the next level. Whether it’s in depth fantasy stats
        and rankings to player bios and articles, I’ll give you everything you need to feel like you’re a part of the
        team.
      </p>
      <p class="text-lg leading-6 mb-6 lg:mb-10">
        My vision for OGBSportz.com is to provide people with a less complicated, more streamlined approach to accessing
        all your sports content while still giving you all the in-depth player analysis and analytics you need to
        impress your friends and coworkers, or take your fantasy team to the promise land.
      </p>
      <div class="flex">
        <nuxt-link
          class="inline-block px-4 py-2 border border-solid border-accent-300 hover:border-accent hover:bg-accent hover:text-white rounded-full mr-2"
          to="/blog"
          >View Blog</nuxt-link
        >
        <nuxt-link class="inline-block px-4 py-2" to="/">Back to Home</nuxt-link>
      </div>
    </div>
  </div>
</template>
