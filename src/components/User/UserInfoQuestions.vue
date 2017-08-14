<template>
  <div class="user-info-questions">
    <h1>{{ msg }}</h1>

    <p><label class="plainText"><strong>Have you ever abused any substances or drugs</strong></label></p>

    <input name="qx1" type="radio" id="r1">
    <label for="r1">Yes</label>

    <input name="qx1" type="radio" id="r2">
    <label for="r2">No</label>
    <br>
    <p><label class="plainText"><strong>Do you have a history of psychiatric disorders or hospitalizations</strong></label></p>

    <input name="qx2" type="radio" id="r1">
    <label for="r1">Yes</label>

    <input name="qx2" type="radio" id="r2">
    <label for="r2">No</label>
    <br>
    <p><label class="plainText"><strong>Do you have a history of suicidal ideations or attempts</strong></label></p>

    <input name="qx3" type="radio" id="r1">
    <label for="r1">Yes</label>

    <input name="qx3" type="radio" id="r2">
    <label for="r2">No</label>
    <br>
    <p><label class="plainText"><strong>Does your family have a history of suicidal attempts</strong></label></p>

    <input name="qx4" type="radio" id="r1">
    <label for="r1">Yes</label>

    <input name="qx4" type="radio" id="r2">
    <label for="r2">No</label>
    <p> <div class="row">
          <div class="col s12">
              <router-link class="btn" to="pharmacy">Continue</router-link>
          </div>
        </div>
    </p>

  </div>
</template>

<script>
export default {
  name: 'user-info-questions',
  data () {
    return {
      msg: 'Questions'
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
</style>
