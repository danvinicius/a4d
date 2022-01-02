<template>
  <div>
    <Main/>
    <CardsContainer/>
    <NewsletterPodcastContainer/>
  </div>
</template>

<script>
import Main from "../components/Main.vue"
import NewsletterPodcastContainer from "../components/NewsletterPodcastContainer.vue"
import CardsContainer from "../components/CardsContainer.vue"

export default {
  name: 'Home',
  components: {
    Main,
    NewsletterPodcastContainer,
    CardsContainer
  }
}
</script>

<style scoped>

</style>
