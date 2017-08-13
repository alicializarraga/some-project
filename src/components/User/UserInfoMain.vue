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
        { name: "Personal", url: '/#/user/info/personal' },
        { name: "Allergies", url: '/#/user/info/allergies' },
        { name: "Medications", url: '/#/user/info/medications' },
        { name: "Medical History", url: '/#/user/info/medical-history' },
        { name: "Procedures", url: '/#/user/info/procedures' },
        { name: "Family History", url: '/#/user/info/family-history' },
        { name: "Questions", url: '/#/user/info/questions' },
        { name: "Pharmacy", url: '/#/user/info/pharmacy' },
        { name: "Payment", url: '/#/user/info/payment' },
        { name: "Doctors", url: '/#/user/info/doctors' },
        { name: "Settings", url: '/#/user/info/settings' },
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
