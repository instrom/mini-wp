

// import Editor from "@tinymce/tinymce-vue"import Vue from 'vue';
import App from './App.vue';
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Axios from 'axios'


// import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify'
// import 'vuetify/dist/vuetify.min.css'

Vue.use(BootstrapVue)
Vue.use(Axios)

// Vue.use(Vuetify)
new Vue(App).$mount('#app');
// const article = axios.create({
//     baseURL: 'http://localhost:3000/api/articles'
// });


// const app = new Vue({ //before create data ini belom ke load
//   el:'#app',
//   data: {
//     message: 'Hello vue!',
//     article: false,
//     addArticle: false,
//     page: '',
//     isLogin: false,
//     // sideBar: false,
//     artStyles: [],
//     artStylesTitle: '',
//     artStylesContent: '',
//     editId: '',
//     search: '',
//   },
//   components: {
//     Editor // <- Important part
//   },
//   created() {
//     // this.getAllArticles()
//     this.getAllArticles()
//   },
//   computed: {
//     filteredItems() {
//       return this.artStyles.filter(item => {
//          return item.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1
//       })
//     }
//   },
//   methods: {
//     registerUser() {

//     },
//     // showArticle() {
//     //   this.article = true
//     //   this.addArticle = false
//     //   this.sideBar = true
//     // },
//     // showAddArticle() {
//     //   this.addArticle = true
//     //   this.article = false
//     // },
//     // showLoginForm() {
//     //   this.addArticle = false
//     //   this.article = false
//     //   this.loginForm = true
//     //   console.log('asd')
//     // },
//     showPage(input) {
//       this.page = input
//     },
//     // showUserProfile() {
//     //   this.article = true
//     //   this.sideBar = true
//     // },
//     getAllArticles() {
//       article.get('/findArticle')
//         .then(({data}) => {
//           this.artStyles = data
//           // console.log(data)
//         })
//         .catch((err) => {
//           console.log(err)
//         })
//     },
//     addArticleDatabase() {
//       article.post('/createArticle',{
//         title: this.artStylesTitle,
//         content: this.artStylesContent
//       })
//         .then(({data}) => {
//           this.artStyles.push(data)
//           this.page ='posts'
//           this.artStylesTitle = ''
//           this.artStylesContent = ''
//         })
//         .catch((err) => {
//           console.log(err)
//         })
//     },
//     deleteArticle(id){
//       // console.log(id)
//       article.delete(`/deleteArticle/${id}`)
//       .then(({data}) => {
//         var index = this.artStyles.findIndex(artStyle => artStyle._id === id)
//         if(index > -1) {
//           this.artStyles.splice(index,1)
//         }  
//         })
//         .catch((err) => {
//           console.log(err)
//         })
//     },
//     updateArticlePage(id) {
//       this.page ='updateFormPage'
//       article.get(`/${id}`)
//         .then(({data}) => {
//           this.artStylesTitle = data.title
//           this.artStylesContent = data.content
//           this.editId = data._id
//         })
//         .catch((err) => {
//           console.log(err)
//         })
//     },
//     updateArticleSubmit() {
//       article.patch(`/${this.editId}`, {
//         title: this.artStylesTitle,
//         content: this.artStylesContent
//       })
//         .then(({data}) => {
//           this.getAllArticles()
//           this.page = 'posts'
//         })
//         .catch((err) => {
//           console.log(err);
//         })
//     }
//   }
// })

