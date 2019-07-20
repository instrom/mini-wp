<template>
  <div class="bodyHtml">
    <NavBar></NavBar>
    <Home v-if="isLogin"></Home>
    <LoginForm @showProfilePage="showPage"></LoginForm>
    <RegisterForm></RegisterForm>
    <b-row>
      <b-col cols="3" v-if="page == 'profile'">
        <SideBar ></SideBar>
      </b-col>
      <b-container>
        <b-col cols="9"  v-if="page =='profile'">
          <AllArticles></AllArticles>
        </b-col>
      </b-container>
    </b-row>
    <AddArticle></AddArticle>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import Home from './components/HomePage'
import LoginForm from './components/LoginForm'
import RegisterForm  from './components/RegisterForm'
import SideBar from './components/Sidebar'
import AllArticles from './components/AllArticles'
import AddArticle from './components/AddArticle'

export default {
  components: {
    NavBar,
    Home,
    LoginForm,
    RegisterForm,
    SideBar,
    AllArticles,
    AddArticle
  },
  created() {
    if(localStorage.getItem('token')) {
      this.page = 'profile'
      console.log(this.page)
    }
  },
  data() {
    return {
      message: 'Hello world',
      page: '',
      isLogin: false
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
.bodyHtml {
  background-color: #e6e6e6;
}
</style>