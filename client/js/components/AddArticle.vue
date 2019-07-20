<template>
    <b-container>
        <b-modal id="addArticleModal" centered size="lg" title="Add Article" v-bind:hide-footer="true" >
          <b-form @submit.prevent="">
            <b-form-group label="Title" >
              <b-form-input type="text" required placeholder="Enter Title" v-model="title">
              </b-form-input>
            </b-form-group>
            <b-form-group label="Description:">
              <b-form-input type="text" required placeholder="Enter Description" v-model="description">
              </b-form-input>
            </b-form-group>
            <tinymce-editor api-key="tuo2utcwjocjuuc3jxre3zi4nqa28wh3a3nily86v8f39ho2" :init="{menubar: false}" v-model="content">
              </tinymce-editor>
            <div class="float-right">
              <b-button type="submit" variant="success"> Submit</b-button>
              <!-- <h1>hallo</h1> -->
            </div>
          </b-form>
        </b-modal>
    </b-container>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
export default {
  data() {
    return {
      title: '',
      content: '',
      
    }
  },
  components: {
    'tinymce-editor': Editor 
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
