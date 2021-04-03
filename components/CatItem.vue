<template>
  <div class="cat-item">
    <div v-if="first" class="shadow-flip" />
    <div class="cat-pic" :style="{ backgroundImage: 'url(' + cat.image + ')' }" />
    <div class="cat-name">
      {{ cat.name }}
    </div>
  </div>
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
