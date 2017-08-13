<template>
  <div class="user-info-main">
    <div class="row">
      <div class="col s3">
        <div class="collection">
          <a :href="item.url" v-for="item in menuItems" class="collection-item">{{item.name}}</a>
        </div>
      </div>
      <div class="col s9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user-info-main',
  data () {
    return {
      menuItems: [
        { name: "Personal", url: '/#/user/info/personal' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .col {
    border: 1px solid black;
    padding: 0;
  }
  .collection {
    margin: 0;
  }

  .collection a.collection-item {
    height: 60px;
    font-size: 30px;
    padding-top: 20px;
  }
</style>
