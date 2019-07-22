<template>
    <b-container>
        <b-modal ref="my-modals" id="addArticleModal" centered size="lg" title="Add Article" v-bind:hide-footer="true" >
          <b-form @submit.prevent="submitArticle">
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
              <br>
              <b-spinner variant="success" label="Spinning" v-show="loading"></b-spinner>
              <img :src="imageUrl" v-show="imageUrl">
            </div>
              <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>
            <div class="float-right">
              <b-button type="submit" variant="success"> Submit</b-button>
              <!-- <h1>hallo</h1> -->
            </div>
          </b-form>
        </b-modal>
    </b-container>
</template>

<script>
const baseUrl = `http://localhost:3000/api`
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
      imageLinkFromGCS: ''
    }
  },
  components: {
    'tinymce-editor': Editor 
  },
  methods: {
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
    submitArticle() {
      axios.post(`${baseUrl}/articles/createArticle`,{
        title: this.title,
        content: this.content,
        imageUrl: this.imageLinkFromGCS
      },{
        headers: {
          'token': localStorage.getItem('token')
        }
      })
        .then(({data}) => {
          Swal.fire({
            type: 'success',
            text: 'successfully added'
          })
          this.$emit('addedArticle')
          this.title = ''
          this.content = ''
          this.imageUrl = ''
          this.imageFile = ''
          this.loading = false
          this.hideModal()
          // console.log(data)
        })
        .catch((error) => {
          Swal.fire({
            type: 'error',
            text: `${error.response.data.message}`
          })
        })
    },
    hideModal() {
        this.$refs['my-modals'].hide()
    },
  }
}
</script>

<style>

</style>

<div class="container">
                <div class="card-panel white">
                    <form @submit.prevent="addArticleDatabase">
                        <label for="title">Title</label>
                        <input type="text" name="title" v-model="artStylesTitle">
                        <editor api-key="tuo2utcwjocjuuc3jxre3zi4nqa28wh3a3nily86v8f39ho2
                        " :init="{menubar: false}" v-model="artStylesContent"></editor>
                        <button type="submit">Submit</button>
                        <p v-html="artStylesContent"></p>
                    </form>
                </div>
            </div>
