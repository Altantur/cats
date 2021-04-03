<template>
  <div class="rating">
    <div v-for="index in 5" :key="index" class="bar" :class="{'filled': index <= rate}" />
  </div>
</template>
<script>
export default {
  props: {
    rate: {
      default: () => 0,
      type: Number
    }
  }
}
</script>
