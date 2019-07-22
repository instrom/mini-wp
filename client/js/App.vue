<template>
  <div class="bodyHtml">
    <NavBar @logOut="showPage" :pageNow="page"></NavBar>
    <Home v-if="page == 'home' && page !== 'profile'"></Home>
    <LoginForm @showProfilePage="showPage"></LoginForm>
    <RegisterForm></RegisterForm>
    <b-row>
      <b-col cols="3" v-if="page == 'profile' || page == 'myArticlesPage' || page =='readArticle'">
        <SideBar @myArticles="showPage" @allArticlesPage="showPage"></SideBar>
      </b-col>
      <b-col cols="9">
        <div class="containerArticles">
          <AllArticles v-if="page =='profile'" :addNewArticle="articleData" :updated="articleData" @oneArticleId="getReadArticle"></AllArticles>
          <MyArticles v-if="page =='myArticlesPage'" :addNewArticle="articleData" @updateArticleModal="getArticleId" :updated="articleData"></MyArticles>
          <ReadArticle :passArticleId="articleId" v-if="page =='readArticle'"></ReadArticle >
        </div>
      </b-col>
    </b-row>
    <AddArticle @addedArticle="addedArticleData"></AddArticle>
    <UpdateArticle :idArticle="articleId" @updatedArticle="addedArticleData"></UpdateArticle>
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
import MyArticles from './components/MyArticles'
import UpdateArticle from './components/UpdateArticle'
import ReadArticle from './components/ReadArticle'

export default {
  components: {
    NavBar,
    Home,
    LoginForm,
    RegisterForm,
    SideBar,
    AllArticles,
    AddArticle,
    MyArticles,
    UpdateArticle,
    ReadArticle
  },
  created() {
    if(localStorage.getItem('token')) {
    // this.showPage()
      // this.isLogin = true
      this.page = 'profile'
      // this.showPage()
      // console.log(this.page)
    } else {
      // this.showPage()
      this.page = 'home'
    }
  },
  data() {
    return {
      message: 'Hello world',
      page: '',
      isLogin: false,
      articleData: 0,
      articleId: '',
    };
  },
  methods: {
    showPage(input) {
      // console.log(input)
      this.page = input
    },
    addedArticleData() {
      this.articleData++;
    },
    getArticleId(input) {
      // console.log(input)
      this.articleId = input
    },
    getReadArticle(input) {
      this.articleId = input
      // console.log(this.articleId)
      this.page = 'readArticle'
    }

}
};
</script>

<style scoped>
.bodyHtml {
  background-color: #e6e6e6;
}
</style>