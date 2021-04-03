<template>
  <nuxt-link class="cat-item" :to="'/' + cat.name">
    <div v-if="first" class="shadow-flip" />
    <div class="cat-pic" :style="{ backgroundImage: 'url(' + cat.image + ')' }" />
    <div class="cat-name">
      {{ cat.name }}
    </div>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    cat: {
      default: () => {},
      type: Object
    },
    first: {
      default: () => false,
      type: Boolean
    }
  }
}
</script>
