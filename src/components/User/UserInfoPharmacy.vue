<template>
  <div class="user-info-pharmacy">
    <h1>{{ msg }}</h1>
    <p><label class="plainText"><strong>Where would you like to pick up your prescription(s)? Search for a pharmacy nearby:</strong></label></p>

    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input id="pharmacy_name" type="text" class="validate">
            <label for="pharmacy_name">Pharmacy Name (optional)</label>
          </div>
        </div>

        <div class="row">
          <p>
            <div class="col s4">
            </div>
            <div class="col s4">
              <label class="center"><strong>Search by City and State</strong></label>
            </div>
            <div class="col s4">
            </div>
          </p>
        </div>

        <div class="row">
          <p>
            <div class="input-field col s4">
              <input id="city" type="text" class="validate">
              <label for="city">City</label>
            </div>
            <div class="col s4">
            </div>
            <div class="input-field col s4">
              <input id="state" type="text" class="validate">
              <label for="state">State</label>
            </div>
          </p>
        </div>

        <div class="row">
          <p>
            <div class="col s4">
            </div>
            <div class="col s4">
              <label class="center"><strong>... or by zip code</strong></label>
            </div>
            <div class="col s4">
            </div>
          </p>
        </div>

        <div class="row">
          <p>
            <div class="col s4">
            </div>
            <div class="input-field col s4">
              <input id="zip" type="text" class="validate">
              <label for="zip">Zip code</label>
            </div>
            <div class="col s4">
            </div>
          </p>
        </div>

        <div class="row">
          <div class="col s12">
            <router-link class="btn" to="search">Search</router-link>
          </div>
        </div>

        <div class="">
          <p><label class="plainText"><strong>Search results:</strong></label></p>
        </div>


        <!--  <select name="state">
          	<option value="AL">Alabama</option>
          	<option value="AK">Alaska</option>
          	<option value="AZ">Arizona</option>
          	<option value="AR">Arkansas</option>
          	<option value="CA">California</option>
          	<option value="CO">Colorado</option>
          	<option value="CT">Connecticut</option>
          	<option value="DE">Delaware</option>
          	<option value="DC">District Of Columbia</option>
          	<option value="FL">Florida</option>
          	<option value="GA">Georgia</option>
          	<option value="HI">Hawaii</option>
          	<option value="ID">Idaho</option>
          	<option value="IL">Illinois</option>
          	<option value="IN">Indiana</option>
          	<option value="IA">Iowa</option>
          	<option value="KS">Kansas</option>
          	<option value="KY">Kentucky</option>
          	<option value="LA">Louisiana</option>
          	<option value="ME">Maine</option>
          	<option value="MD">Maryland</option>
          	<option value="MA">Massachusetts</option>
          	<option value="MI">Michigan</option>
          	<option value="MN">Minnesota</option>
          	<option value="MS">Mississippi</option>
          	<option value="MO">Missouri</option>
          	<option value="MT">Montana</option>
          	<option value="NE">Nebraska</option>
          	<option value="NV">Nevada</option>
          	<option value="NH">New Hampshire</option>
          	<option value="NJ">New Jersey</option>
          	<option value="NM">New Mexico</option>
          	<option value="NY">New York</option>
          	<option value="NC">North Carolina</option>
          	<option value="ND">North Dakota</option>
          	<option value="OH">Ohio</option>
          	<option value="OK">Oklahoma</option>
          	<option value="OR">Oregon</option>
          	<option value="PA">Pennsylvania</option>
          	<option value="RI">Rhode Island</option>
          	<option value="SC">South Carolina</option>
          	<option value="SD">South Dakota</option>
          	<option value="TN">Tennessee</option>
          	<option value="TX">Texas</option>
          	<option value="UT">Utah</option>
          	<option value="VT">Vermont</option>
          	<option value="VA">Virginia</option>
          	<option value="WA">Washington</option>
          	<option value="WV">West Virginia</option>
          	<option value="WI">Wisconsin</option>
          	<option value="WY">Wyoming</option>
          </select> -->


      </form>
    </div>

  </div>
</template>

<script>
export default {
  name: 'user-info-pharmacy',
  data () {
    return {
      msg: 'Pharmacy'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.plainText {
  color: #46B4BB;
  font-size: 18px;
}
.center {
  text-align: center;
}
</style>
