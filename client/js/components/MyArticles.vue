<template>
 
  <div class="articleContainer">
    <b-card  class="articleHeaders mt-4" text-variant="black" title="My Articles">
    </b-card>
      <b-card class="articleContent" v-for="article in articles" :key="article._id">
        <b-row>
          <b-col cols="4">
            <img :src="article.imageUrl" alt="" fluid>
          </b-col>
          <b-col cols="8">
            <b-card-body :title=article.title>
              <b-card-text v-line-clamp:20="3" v-html="article.content" style="height: 80px;">
              </b-card-text>
            </b-card-body>
              <b-card-footer style="margin-top: 200px;">
              <b-link @click.prevent="deleteArticle(article._id)" class="card-link">Delete</b-link>
              <b-link @click.prevent="updateArticle(article._id)" v-b-modal.updateModal class="card-link">Update</b-link>
              </b-card-footer>
          </b-col>
        </b-row>
      </b-card>
  </div>
</template>

<script>
const baseUrl = 'http://localhost:3000/api/articles'
export default {
  data() {
    return {
      articles: []
    }
  },
  props: {
    addNewArticle: Number,
    updated: Number
  },
  created() {
    this.myArticles()
  },
  mounted() {
    // this.updateArticle(id)
  },
  methods: {
    myArticles() {
      axios.get(`${baseUrl}/findMyArticles`, {
        headers: {
          'token': localStorage.getItem('token')
        }
      })
        .then(({data}) => {
          // console.log(data)
          this.articles = data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    deleteArticle(id) {
      axios.delete(`${baseUrl}/deleteArticle/${id}`,{
        headers: {
          'token': localStorage.getItem('token')
        }
      })
        .then((data) => {
          // console.log(data)
          Swal.fire({
            type: 'success',
            text: 'Successfully deleted'
          })
          this.myArticles()
        })
    },
    updateArticle(id) {
      console.log(id)
      this.$emit('updateArticleModal',id)
    },
  },
  
  watch: {
     addNewArticle: function() {
       this.myArticles()
     },
     updated: function() {
       this.myArticles()
     }
   }
}
</script>

<style scoped>


</style>
