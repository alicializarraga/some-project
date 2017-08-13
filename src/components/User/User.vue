<template>
  <div class="user">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {
      msg: 'User Component'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
