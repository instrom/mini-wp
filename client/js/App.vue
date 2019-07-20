<template>
  <div>
    <NavBar></NavBar>
    <Home></Home>
    <LoginForm></LoginForm>
    <RegisterForm></RegisterForm>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import Home from './components/HomePage'
import LoginForm from './components/LoginForm'
import RegisterForm  from './components/RegisterForm'

export default {
  components: {
    NavBar,
    Home,
    LoginForm,
    RegisterForm
  },
  data() {
    return {
      message: 'Hello world',
    };
  },
};
</script>

<style scoped>
</style>