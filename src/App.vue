<template>
  <div class="app">
    <nav class="grey lighten-2">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo logo-wrapper"><img class="logo-img" src="./assets/DialDoc.png" alt=""></a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><router-link to="/login">Login</router-link></li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>



<script>
export default {
  name: 'app'
}
</script>

<style>
  div > a.logo-wrapper {
    padding: 10px;
  }

  .logo-img {
    height: 46px;
  }
</style>
