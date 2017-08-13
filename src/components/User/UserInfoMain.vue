<template>
  <div id="user-info-main">
    <div class="row">
      <div class="col s3">
        <div class="collection">
          <a
            :href="item.url"
            v-for="(item, index) in menuItems"
            class="collection-item"
            v-on:click="changeRoute(index)">
            {{item.name}}
          </a>
        </div>
      </div>
      <div class="col s9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import router from '../../router'
export default {
  name: 'user-info-main',
  data () {
    return {
      menuItems: [
        { name: "1. Personal", url: '/#/user/info/personal' },
        { name: "2. Allergies", url: '/#/user/info/allergies' },
        { name: "3. Medications", url: '/#/user/info/medications' },
        { name: "4. Medical History", url: '/#/user/info/medical-history' },
        { name: "5. Procedures", url: '/#/user/info/procedures' },
        { name: "6. Family History", url: '/#/user/info/family-history' },
        { name: "7. Questions", url: '/#/user/info/questions' },
        { name: "8. Pharmacy", url: '/#/user/info/pharmacy' },
        { name: "9. Payment", url: '/#/user/info/payment' },
        { name: "10. Doctors", url: '/#/user/info/doctors' },
        { name: "11. Settings", url: '/#/user/info/settings' },
      ]
    }
  },
  methods: {
    changeRoute(index) {
      var menuItems = document.getElementsByClassName('collection-item');
      var newItems = Array.from(menuItems);
      newItems.map(function(item, ind) {
        if(ind === index) {
          item.style.backgroundColor = "#EC7424";
        } else {
          item.style.backgroundColor = "#46B4BB";
        }
      })

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
    background-color: #46B4BB;
    color: white;
    height: 60px;
    font-size: 30px;
    padding-top: 20px;
  }
</style>
