<template>
  <div class="hero flex flex-column items-center">
    <div class="hero-text">
      <div class="logo-white" />
      <div class="get-to-know">
        Get to know more about your cat breed
      </div>
      <div class="filter">
        <input class="search" type="text" placeholder="Enter your breed">
        <div class="container-breeds" :class="{'no-p': !breeds.length}">
          <div class="breeds">
            <div v-for="(breed, index) in breeds" :key="index" class="breed flex items-center">
              {{ breed.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    breeds: [
      {
        name: 'Cat One'
      },
      {
        name: 'Cat Two'
      },
      {
        name: 'Cat Three'
      },
      {
        name: 'Cat Four'
      },
      {
        name: 'Cat Five'
      },
      {
        name: 'Cat Six'
      },
      {
        name: 'Cat Seven'
      }
    ]
  }),
  methods: {
    search () {
    }
  }
}
</script>
