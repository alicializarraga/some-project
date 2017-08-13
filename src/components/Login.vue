<template>
  <div class="login">
    <div class="section"></div>
    <main>
      <center>
        <div class="container">
          <div class="z-depth-1 grey lighten-4 row login-wrapper" style="">

            <form class="col s12" @click="goToFormPage($event)">
              <div class='row'>
                <div class='col s12'>
                </div>
              </div>

              <div class='row'>
                <div class='input-field col s12'>
                  <input class='validate' type='email' name='email' id='email' />
                  <label for='email'>Enter your email</label>
                </div>
              </div>

              <div class='row'>
                <div class='input-field col s12'>
                  <input class='validate' type='password' name='password' id='password' />
                  <label for='password'>Enter your password</label>
                </div>
                <label style='float: right;'>
                  <a class='pink-text' href='#!'><b>Forgot Password?</b></a>
                </label>
              </div>

              <br />
              <center>
                <div class='row'>
                  <button type='submit' class='col s12 btn btn-large waves-effect cyan'>Login</button>
                </div>
              </center>
            </form>
          </div>
        </div>
        <router-link to="/signup">I don't have an account</router-link>
      </center>
    </main>
  </div>
</template>

<script>
import router from '../router'
export default {
  name: 'login',
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

div.login-wrapper {
  margin-top: 40px;
  display: inline-block;
  padding: 32px 48px 0px 48px;
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
