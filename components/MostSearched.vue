<template>
  <div class="most">
    <div class="title">
      Most Searched Breeds
      <div class="line" />
    </div>
    <div class="flex justify-between items-end">
      <div class="result-text">
        66+ Breeds For you to discover
      </div>
      <div class="see-more">
        SEE MORE
      </div>
    </div>
    <div class="flex justify-between">
      <CatItem v-for="(cat, index) in cats" :key="index" :cat="cat" :first="index === 0" />
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    cats: [
      {
        image: 'https://images.unsplash.com/photo-1501820488136-72669149e0d4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8Y2F0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        name: 'Cat One'
      },
      {
        image: 'https://images.unsplash.com/photo-1548247416-ec66f4900b2e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        name: 'Cat Two'
      },
      {
        image: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8Y2F0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        name: 'Cat Three'
      },
      {
        image: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        name: 'Cat Four'
      }
    ]
  })
}
</script>
