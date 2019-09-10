<template>
  <div id="app">
    <my-header></my-header>
    <div class="wrapper">
      <router-view></router-view>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import myHeader from '@/components/my-header'
import myFooter from '@/components/my-footer'
export default {
  components: {
    myHeader,
    myFooter
  }
}
</script>

<style lang="less" scoped>

</style>
