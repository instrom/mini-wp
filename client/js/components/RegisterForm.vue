<template>
  <b-container>
    <b-modal id="registerModal" centered size="lg" title="Registration" v-bind:hide-footer="true" v-bind:ok-disabled="true">
      <b-form @submit.prevent="registerUser">
        <b-form-group label="Email address:" description="We will never share your email with anyone else">
          <b-form-input type="email" required placeholder="Enter Email" v-model="register.email">
          </b-form-input>
        </b-form-group>
        <b-form-group label="Username:">
          <b-form-input type="text" required placeholder="Enter username" v-model="register.username">
          </b-form-input>
        </b-form-group>
        <b-form-group label="Password:">
          <b-form-input type="password" required placeholder="Enter password" v-model="register.password">
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
      register: {
        username: '',
        email: '',
        password: ''
      },
      cancelDisabled: true
    }
  },
  methods: {
    registerUser() {
      console.log('asd')
      axios.post(`${baseUrl}/users/register`, {
        email: this.register.email,
        username: this.register.username,
        password: this.register.password
      })
        .then(({data}) => {
          Swal.fire({
            type: 'success',
            text: `Successfully registered! email sent to ${this.register.email}`
          })
          console.log(data)
        })
        .catch((err) => {
          if(err) {
            Swal.fire({
              type: 'error',
              text: `${err.response.data.message}`
            })
          }
        })
    }
  }
}
</script>

<style>

</style>
