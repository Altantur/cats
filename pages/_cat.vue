<template>
  <div>
    <div class="cat-profile">
      <div class="section-1">
        <div class="shadow-flip" />
        <div class="cat-profile-pic" :style="{ backgroundImage: 'url(' + image + ')' }" />
      </div>
      <div class="section-2">
        <div class="title">
          {{ current.name }}
        </div>
        <div class="description">
          {{ current.description }}
        </div>
        <div class="field">
          <strong>Temperament: </strong>
          {{ current.temperament }}
        </div>
        <div class="field">
          <strong>Origin: </strong>
          {{ current.origin }}
        </div>
        <div class="field">
          <strong>Life Span: </strong>
          {{ current.life_span }} years
        </div>
        <div class="field rating-1">
          <strong>Adaptability: </strong>
          <Rating :rate="current.adaptability" />
        </div>
        <div class="field rating-1">
          <strong>Affection level: </strong>
          <Rating :rate="current.affection_level" />
        </div>
        <div class="field rating-1">
          <strong>Child Friendly: </strong>
          <Rating :rate="current.child_friendly" />
        </div>
        <div class="field rating-1">
          <strong>Grooming: </strong>
          <Rating :rate="current.grooming" />
        </div>
        <div class="field rating-1">
          <strong>Intelligence: </strong>
          <Rating :rate="current.intelligence" />
        </div>
        <div class="field rating-1">
          <strong>Health issues: </strong>
          <Rating :rate="current.health_issues" />
        </div>
        <div class="field rating-1">
          <strong>Social needs: </strong>
          <Rating :rate="current.social_needs" />
        </div>
        <div class="field rating-1">
          <strong>Stranger friendly: </strong>
          <Rating :rate="current.stranger_friendly" />
        </div>
      </div>
    </div>
    <div class="other">
      <div class="text">
        Other photos
      </div>
      <div class="photos">
        <div v-for="i in other_images" :key="i" class="photo" :style="{ backgroundImage: 'url(' + i + ')' }" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ params, redirect }) {
    let cat = null
    await fetch(
      'https://api.thecatapi.com/v1/breeds/search?q=' + params.cat, {
        method: 'GET',
        headers: {
          'x-api-key': 'd4361045-102a-4d10-a132-5fd3975edc86'
        }
      })
      .then((res) => {
        if (!res.ok) {
          redirect('/')
        }
        return res.json()
      })
      .then((data) => {
        cat = data
        if (!cat.length) {
          redirect('/')
        }
      })
    return { cat }
  },
  data: () => ({
    current: {},
    other_images: [],
    image: ''
  }),
  created () {
    if (!this.cat.length) {
      this.$router.push({ path: '/' })
    }
    this.current = this.cat[0]
    this.getImage()
  },
  methods: {
    async getImage () {
      const res = await this.$axios.$get(
        'https://api.thecatapi.com/v1/images/search?limit=9&breed_id=' + this.current.id, {}, {
          headers: {
            'x-api-key': 'd4361045-102a-4d10-a132-5fd3975edc86'
          }
        })
      if (res.length) {
        this.image = res[0].url
        this.other_images = res.reduce((acc, curr, id) => {
          if (id !== 0) { acc.push(curr.url) }
          return acc
        }, [])
      }
    }
  }
}
</script>
