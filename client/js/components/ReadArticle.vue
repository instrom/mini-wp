<template>
  <b-container fluid class="mt-4" >
    <div>
      <h1 class="text-center" style="text-transform: uppercase; font-size: 50px; font-family: 'Montserrat', sans-serif;">
        {{articleData.title}}
      </h1>
    </div>
    <b-row>
      <b-col cols="12">
        <div v-if="articleData">
          <img :src="articleData.imageUrl" alt="" style="max-width: 100%;" class="rounded mx-auto d-block" fluid>
          <figcaption style="font-size: 30px;" > Created By: {{articleData.userId.username}}</figcaption>
          <p v-html="articleData.content" style="font-size: 50px;"></p>
        </div>
      </b-col>
       
    </b-row>
  </b-container>
  
</template>

<script>
const baseUrl = `http://localhost:3000/api`
export default {
  data() {
    return {
      articleData: ''
    }
  },
  props: {
    passArticleId: String
  },
  created() {
    this.getArticleData()
  },
  methods: {
    getArticleData() {
      axios.get(`${baseUrl}/articles/${this.passArticleId}`,{
        headers: {
          'token': localStorage.getItem('token')
        }
      })
        .then(({data}) => {
          this.articleData = data
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
}
</script>

<style>

</style>
