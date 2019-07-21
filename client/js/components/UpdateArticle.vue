<template>
  <b-container>
    <b-modal ref="my-modals" id="updateModal" centered size="lg" title="Update Article" v-bind:hide-footer="true" >
      <b-form @submit.prevent="updateArticleSubmit">
          <b-form-group label="Title" >
            <b-form-input type="text" required placeholder="Enter Title" v-model="title">
            </b-form-input>
          </b-form-group>
            <tinymce-editor api-key="tuo2utcwjocjuuc3jxre3zi4nqa28wh3a3nily86v8f39ho2" :init="{menubar: false}" v-model="content">
            </tinymce-editor>
          <b-form-file
            v-model="file"
            placeholder="Choose a file..."
            @change="onFilePicked"
          ></b-form-file>
          <div class="d-flex justify-content-center">
            <b-spinner variant="success" label="Spinning" v-show="loading"></b-spinner>
            <img :src="imageUrl" v-show="imageUrl">
          </div>
            <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>
          <div class="float-right">
            <b-button type="submit" variant="success" @click="hideModal"> Submit</b-button>
            <!-- <h1>hallo</h1> -->
          </div>
        </b-form>
    </b-modal>
  </b-container>
</template>

<script>
const baseUrl = `http://localhost:3000/api`
// const baseUrl = `http://localhost:3000/api`
import Editor from '@tinymce/tinymce-vue'
export default {
  data() {
    return {
      title: '',
      content: '',
      imageFile: '',
      loading: false,
      imageUrl: '',
      file: '',
      imageLinkFromGCS: '',
      editId: ''
    }
  },
  props: {
    idArticle: String
  },
  components: {
    'tinymce-editor': Editor 
  },
  created() {
    
  },
  methods: {
   updateArticlePage() {
     console.log(this.idArticle, "ASDASD")
    //  this.loading = false
      // this.page ='updateFormPage'
      axios.get(`${baseUrl}/articles/${this.idArticle}`,{
        headers: {
          'token': localStorage.getItem('token')
        }
      })
        .then(({data}) => {
          // console.log(this.idArticle)

          // console.log(data)
          // console.log(data)
          this.title = data.title
          this.content = data.content
          this.file = data.imageUrl
          this.imageUrl = data.imageUrl
          // this.editId = data._id
        })
        .catch((err) => {
          console.log(err)
        })
    },
    updateArticleSubmit() {
      axios.patch(`${baseUrl}/articles/${this.idArticle}`, {
        title: this.title,
        content: this.content,
        imageUrl: this.imageUrl
      },{
        headers: {
          'token': localStorage.getItem('token')
        }
      })
        .then(({data}) => {
          this.$emit('updatedArticle')
          Swal.fire({
            type: 'success',
            text: 'Successfully updated an article'
          })
        })
        .catch((error) => {
          Swal.fire({
            type: 'error',
            text: `${error.response.data.message}`
          })
        })
    },
    onFilePicked (e) {
      this.loading = true
      this.imageUrl = ""
      const files = e.target.files
      if(files[0] !== undefined) {
          this.imageName = files[0].name
          if(this.imageName.lastIndexOf('.') <= 0) {
              return
          }
          const fr = new FileReader ()
          fr.readAsDataURL(files[0])
          fr.addEventListener('load', () => {
              this.imageFile = files[0] // this is an image file that can be sent to server...
              const formData = new FormData()
                  formData.append('image',this.imageFile)
                  axios.post(`${baseUrl}/users/googleCloudStorage`, formData)
                    .then(({ data }) =>{
                      this.loading = false
                      this.imageUrl = fr.result
                      this.imageLinkFromGCS = data
                      })
                    .catch(err =>{
                      console.log(err.data)
                      })
          })
      } else {
          this.imageName = ''
          this.imageFile = ''
          this.imageUrl = ''
      }
    },
    hideModal() {
      this.$refs['my-modals'].hide()
    }
  },
  watch: {
    idArticle: function() {
      this.updateArticlePage()
    }
  }

}
</script>

<style>

</style>
