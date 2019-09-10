<template>
  <ul class="list">
    <li v-for="item in list" :key="item.id">
      <router-link :to="`/detail/${item.id}`">
        <img
          :src="`https://images.weserv.nl/?url=${item.images.small}`"
        />
        <div class="info">
          <h3>{{item.title}}</h3>
          <p>豆瓣评分：{{item.rating.average}}</p>
          <p>
            <span class="tag" v-for="tag in item.genres" :key="tag">{{tag}}</span>
          </p>
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState(['list'])
  },
  created () {
    // this.getData('in_theaters')
    this.getListPage('in_theaters')
  },
  methods: {
    // getData (url) {
    //   this.$store.dispatch('getListPage', url)
    // }
    ...mapActions(['getListPage'])
  }
}
</script>

<style lang="less" scoped>
</style>
