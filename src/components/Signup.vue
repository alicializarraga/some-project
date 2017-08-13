<template>
  <div class="signup">
    <div class="section"></div>
    <main>
      <center>
        <div class="container">
          <div class="z-depth-1 grey lighten-4 row signup-wrapper" style="">

            <form class="col s12" @click="goToFormPage($event)">
              <div class='row'>
                <div class='col s12'>
                </div>
              </div>

              <div class='row'>
                <div class='input-field col s12'>
                  <input class='validate' type='email' id='email' />
                  <label for='email'>Enter your email</label>
                </div>
              </div>

              <div class='row'>
                <div class='input-field col s12'>
                  <input class='validate' type='password' id='password' />
                  <label for='password'>Enter your password</label>
                </div>
              </div>

              <div class='row'>
                <div class='input-field col s12'>
                  <input class='validate' type='password' id='password2' />
                  <label for='password2'>Verify your password</label>
                </div>
              </div>

              <br />
              <center>
                <div class='row'>
                  <button type='submit' name='btn_login' class='col s12 btn btn-large waves-effect cyan'>Register</button>
                </div>
              </center>
            </form>
          </div>
        </div>
        <router-link to="/login">I already have an account</router-link>
      </center>
    </main>
  </div>
</template>

<script>
import router from '../router'
export default {
  name: 'signup',
  data() {
    return {
      msg: 'some new component'
    }
  },
  methods: {
    goToFormPage: function(event) {
      router.push('user')
    }
  }
}
</script>

<style scoped>
div.login {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background: #fff;
}

main {
  flex: 1 0 auto;
}

.signup-wrapper {
  margin-top: 40px;
  display: inline-block;
  width: 50%;
  padding: 3% 8%;
  border: 1px solid #EEE;
}

.input-field input[type=date]:focus+label,
.input-field input[type=text]:focus+label,
.input-field input[type=email]:focus+label,
.input-field input[type=password]:focus+label {
  color: #e91e63;
}

.input-field input[type=date]:focus,
.input-field input[type=text]:focus,
.input-field input[type=email]:focus,
.input-field input[type=password]:focus {
  border-bottom: 2px solid #e91e63;
  box-shadow: none;
}
</style>
