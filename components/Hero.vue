<template>
  <div class="hero flex flex-column items-center">
    <div class="hero-text">
      <div class="logo-white" />
      <div class="get-to-know">
        Get to know more about your cat breed
      </div>
      <div class="filter">
        <input
          v-model="query"
          class="search"
          type="text"
          placeholder="Enter your breed"
          @focus="focused=true"
          @blur="toBeUnFocus()"
        >
        <div v-if="focused" class="container-breeds" :class="{'no-p': !breeds.length}">
          <div class="breeds">
            <nuxt-link v-for="(breed, index) in breeds" :key="index" class="breed flex items-center" :to="'/' + breed.name">
              {{ breed.name }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    breeds: [],
    focused: false,
    query: ''
  }),
  watch: {
    query (val) {
      this.search()
    }
  },
  methods: {
    async search () {
      if (this.query) {
        const res = await this.$axios.$get(
          'https://api.thecatapi.com/v1/breeds/search?q=' + this.query, {}, {
            headers: {
              'x-api-key': 'd4361045-102a-4d10-a132-5fd3975edc86'
            }
          })
        this.breeds = res
      } else {
        this.breeds = []
      }
    },
    toBeUnFocus () {
      setTimeout(() => { this.focused = false }, 100)
    }
  }
}
</script>
