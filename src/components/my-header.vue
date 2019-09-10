<template>
  <div class="my-header">
    <span>{{title}}</span>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['title'])
  }
}
</script>

<style lang="less" scoped>
</style>
