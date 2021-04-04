<template>
  <div class="discover">
    <div class="title">
      Discover most searched breeds
    </div>
    <nuxt-link v-for="(breed, index) in breeds" :key="index" class="content" :to="'/' + breed.name">
      <div class="cat-pic" :style="{ backgroundImage: 'url(' + getImage(breed) + ')' }" />
      <div class="text">
        <div class="cat-name">
          {{ index + 1 }}. {{ breed.name }}
        </div>
        <div class="">
          {{ breed.description }}
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data: () => ({
    breeds: []
  }),
  created () {
    this.fetchBreeds()
  },
  methods: {
    async fetchBreeds () {
      const res = await this.$axios.$get(
        'https://api.thecatapi.com/v1/breeds', {}, {
          headers: {
            'x-api-key': 'd4361045-102a-4d10-a132-5fd3975edc86'
          }
        })
      this.breeds = res
    },
    getImage (breed) {
      if (breed.image) {
        return breed.image.url
      }
      return '/no-image.png'
    }
  }
}
</script>
