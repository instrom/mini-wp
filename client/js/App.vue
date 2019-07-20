<template>
  <div>
    <NavBar></NavBar>
    <Home></Home>
    <LoginForm @showProfilePage="showPage"></LoginForm>
    <RegisterForm></RegisterForm>
    <SideBar v-if="page == 'profile'"></SideBar>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import Home from './components/HomePage'
import LoginForm from './components/LoginForm'
import RegisterForm  from './components/RegisterForm'
import SideBar from './components/Sidebar'

export default {
  components: {
    NavBar,
    Home,
    LoginForm,
    RegisterForm,
    SideBar
  },
  created() {
    if(localStorage.getItem('token')) {
      this.page = 'profile'
    }
  },
  data() {
    return {
      message: 'Hello world',
      page: ''
    };
  },
  methods: {
    showPage(input) {
      this.page = input
    }
  }
};
</script>

<style scoped>
</style>