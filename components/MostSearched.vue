<template>
  <div class="most">
    <div class="title">
      Most Searched Breeds
      <div class="line" />
    </div>
    <div class="flex justify-between items-end mb-4 flex-wrap">
      <div class="result-text">
        66+ Breeds For you to discover
      </div>
      <nuxt-link class="see-more" to="/discover">
        SEE MORE
      </nuxt-link>
    </div>
    <div class="flex justify-between flex-wrap">
      <CatItem v-for="(cat, index) in cats" :key="index" :cat="cat" :first="index === 0" />
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    cats: [
      {
        image: 'https://images.unsplash.com/photo-1613467505303-2708826e2201?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fGJlbmdhbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        name: 'Bengal'
      },
      {
        image: 'https://snappygoat.com/b/259ed861fb3eef30ccb2b21cf0cca968b7d624b2',
        name: 'Savannah'
      },
      {
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Norwegian_Forest_Cat_Portrait.JPG',
        name: 'Norwegian Forest Cat'
      },
      {
        image: 'https://images.unsplash.com/photo-1465244085115-0c89caa46915?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c3BoeW54fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        name: 'Sphynx'
      }
    ]
  })
}
</script>
