<template>
  <div>
    <b-card class="articleHeaders mt-4" text-variant="black" title="Published Article">
      <b-card-text >
        Below here, you can find articles to your liking!
      </b-card-text>
    </b-card>
    <b-row>
    <b-col cols="6" v-for="article in articles" :key="article._id">
      <div class="articleContent" style="max-width: 100%;">
        <img class="card-img-top img-fluid" :src="article.imageUrl" alt="Card image cap">
        <div class="card-body bg-light" style="max-width: 100%; word-wrap: break-word;">
          <h5 class="card-title">{{article.title}}</h5>
          <p v-line-clamp:20="2" class="card-text" v-html="article.content" style="width: 600px; height: 50px; font-size: 30px;"></p>
          <p>Created By: {{article.userId.username}}</p>
          <p>{{article.updatedAt | moment('from')}}</p>
          <a @click.prevent="getArticleId(article._id)" class="btn btn-primary">Read More!</a>
        </div>
      </div>
    </b-col>
  </b-row>
</div>

  
</template>

<script>
const baseUrl = `http://localhost:3000/api/articles`
export default {
  data() {
    return {
      articles: []
    }
  },
  props: {
    addNewArticle: Number
  },
  created() {
    this.allArticles()
    // console.log(this.addNewArticle)
  },
  methods: {
    allArticles() {
      axios.get(`${baseUrl}/findAll`,{
        headers: {
          'token': localStorage.getItem('token')
        }
      })
        .then(({data}) => {
          this.articles = data
          console.log(this.articles)
          // console.log(this.addNewArticle)
        })
        .catch(error => {
          console.log(error)
        })
    },
    getArticleId(id) {
      this.$emit('oneArticleId',id)
    }
  },
  watch: {
    addNewArticle: function(){
      this.allArticles()
    }
  }
}
</script>

<style>

 /* <b-card class="articleContent"  >
        <b-row>
          <b-col cols="4">
            <img :src="article.imageUrl" alt="" fluid>
          </b-col>
          <b-col cols="8">
            <b-card-body :title=article.title>
              <b-card-text v-html="article.content">
              </b-card-text>
            </b-card-body>
            <b-card-footer class="mt-5">
              Created By: {{article.userId.username}}
              <br>
              {{article.createdAt}}
            </b-card-footer>
          </b-col>
        </b-row>
      </b-card> */
</style>


//  <div class="col s9 grey lighten-4" id="barisKanan">
//                 <div class="container" v-if="page==='posts'">
//                     <div class="row">
//                         <div class="card-panel white wordEncounterHeaders">
//                             <div class="published">
//                                 <a href="#" class="hvr-grow" id="app">Published</a>
//                             </div>
//                             <div class="drafts">
//                                 <a href="#" class="hvr-grow">Drafts</a>
//                             </div>
//                             <div class="search">
//                                 <!-- <form class="example" action="action_page.php"> -->
//                                     <input type="text" placeholder="Search.." name="search" v-model="search">
//                                     <!-- <button type="submit"><i class="fa fa-search"></i></button> -->
//                                 <!-- </form> -->
//                             </div>
//                         </div>
//                     </div>
//                     <!-- <div class="row" >
//                         <div class="col s12">
//                             <div class="card-panel white publishedContent">
//                                 <div class="card-content">
//                                     <h5>The Journey Begins</h5>
//                                 </div>
//                                 <div class="card-image imageDiCard">
//                                     <img src="./images/logoBrand.png" class="responsive-img" alt="logo" style="width: 100px; height: 100px;">
//                                 </div>
//                             </div>
//                         </div>
//                     </div> -->
//                     <div class="row" v-for="artStyle in filteredItems">
//                         <div class="col s12">
//                             <div class="card-panel white publishedContent">
//                                 <div class="col s3">
//                                     <img src="./images//frenchieImg.webp" class="responsive-img" alt="doggie">
//                                 </div>
//                                 <div class="col s9">
//                                     <div class="card-content textContent" style="font-family: 'Open Sans', sans-serif;">
//                                         <h5>{{artStyle.title}}</h5>
//                                         <p v-html="artStyle.content"></p>
//                                     </div>
//                                     <div class="card-action linkDeleteUpdate">
//                                         <a href="#" @click.prevent="deleteArticle(artStyle._id)">Delete</a>
//                                         <a href="#" @click.prevent="updateArticlePage(artStyle._id)">Update</a>
//                                     </div>
//                                     <!-- button delete disini v-on -->
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <!-- <div class="row">
//                         <div class="col s12">
//                             <div class="card">
//                                 <div class="card-image waves-effect waves-block waves-light">
//                                     <img class="activator" src="" class="responsive-img">
//                                 </div>
//                                 <div class="card-content">
//                                     <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
//                                     <p><a href="#">This is a link</a></p>
//                                 </div>
//                                 <div class="card-reveal">
//                                     <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
//                                     <p>Here is some more information about this product that is only revealed once clicked on.</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div> -->
//                 </div>
//             </div>