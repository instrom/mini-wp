<template>
  <b-container>
      <b-modal id="loginModal" centered size="lg" title="Login into your account" v-bind:hide-footer="true" >
        <b-form @submit.prevent="loginUser">
          <b-form-group label="Email address:" description="We will never share your email with anyone else">
            <b-form-input type="email" required placeholder="Enter Email" v-model="login.email">
            </b-form-input>
          </b-form-group>
          <b-form-group label="Password:">
            <b-form-input type="password" required placeholder="Enter password" v-model="login.password">
            </b-form-input>
          </b-form-group>
          <div class="float-right">
            <b-button type="submit" variant="success"> Submit</b-button>
            <!-- <h1>hallo</h1> -->
          </div>
        </b-form>
      </b-modal>
    </b-container>

</template>

<script>
const baseUrl = `http://localhost:3000/api`
export default {
  data() {
    return {
      login: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    loginUser() {
      axios.post(`${baseUrl}/users/login`, {
        email: this.login.email,
        password: this.login.password
      })
        .then(({data}) => {
          console.log(data)
          localStorage.setItem('token',data.token)
          localStorage.setItem('username',data.username)
          localStorage.setItem('email',data.email)
          this.$emit('showProfilePage','profile')
          Swal.fire({
            type: 'success',
            text: 'successfully logged in! '
          })
        })
        .catch((error) => {
          Swal.fire({
            type: 'error',
            text: 'username/password is wrong'
          })
        })
    }
  }
}
</script>

<style>

</style>
