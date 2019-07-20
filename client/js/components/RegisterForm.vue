<template>
  <b-container>
    <b-modal @submit.prevent="" static=true id="registerModal" centered size="lg" title="Registration">
      <b-form action="" @submit.prevent>
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
      </b-form>
      
    </b-modal>
  </b-container>
  
</template>

<script>
const baseUrl = `http://localhost`
export default {
  data() {
    return {
      register: {
        username: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    registerUser() {
      axios.post({

      })
    }
  }
}
</script>

<style>

</style>
