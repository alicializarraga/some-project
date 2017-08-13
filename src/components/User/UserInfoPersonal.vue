<template>
  <div class="user-info-personal">
    <div class="row">
      <div class="col s4 offset-s4 center-align">
        <img class="profile-photo-holder" src="../../assets/man2.png" alt="">
        <a class="waves-effect waves-light btn">Add a Profile Picture</a>
      </div>
    </div>
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s6">
            <input id="first_name" type="text" class="validate">
            <label for="first_name">First Name</label>
          </div>
          <div class="input-field col s6">
            <input id="last_name" type="text" class="validate">
            <label for="last_name">Last Name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <input id="date-of-birth" type="text" class="validate">
            <label for="date-of-birth">Date of Birth</label>
          </div>
          <div class="input-field col s6">
            <input id="gender" type="text" class="validate">
            <label for="gender">Gender</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <input id="home-phone" type="text" class="validate">
            <label for="home-phone">Home Phone (Optional)</label>
          </div>
          <div class="input-field col s6">
            <input id="mobile-phone" type="text" class="validate">
            <label for="mobile-phone">Mobile Phone</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="Address" type="text" class="validate">
            <label for="Address">Address</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s4">
            <input id="city" type="text" class="validate">
            <label for="city">City</label>
          </div>
          <div class="input-field col s4">
            <input id="state" type="text" class="validate">
            <label for="state">State</label>
          </div>
          <div class="input-field col s4">
            <input id="zipcode" type="text" class="validate">
            <label for="zipcode">Zip Code</label>
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <router-link class="btn" to="allergies">Continue</router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user-info-personal',
  data () {
    return {
      msg: 'User Info Personal'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .profile-photo-holder {
    height: 150px;
    margin-bottom: 10px;
    margin-top: 30px;
  }
</style>
