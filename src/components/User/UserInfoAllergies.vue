<template>
  <div class="user-info-allergies">
    <h1>{{ msg }}</h1>
    <form>
      <p>
       <input type="checkbox" id="test5" />
       <label for="test5">Patient does not have any allergies</label>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'user-info-allergies',
  data () {
    return {
      msg: 'Allergies'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
