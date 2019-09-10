<template>
  <div class="item" v-if="detail">
    <img
      :src="`https://images.weserv.nl/?url=${detail.images.large}`"
      alt
    />
    <div>
      <p>豆瓣评分：{{detail.rating.average}}</p>
      <p>产地：<span v-for="item in detail.countries" :key="item">{{item}} </span> </p>
      <p>
        <span class="tag" v-for="tag in detail.genres" :key="tag">{{tag}}</span>
      </p>
      <p>{{detail.summary}}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState(['detail'])
  },
  created () {
    this.getDetail(this.$route.params.id)
  },
  methods: {
    ...mapActions(['getDetail'])
  }
}
</script>

<style lang="less" scoped>
</style>
