<template>
<body>
      <div class="card">
        <img src="../../images/frenchieImg.webp" alt="Avatar" style="width:100%">
        <b-container class="text-center">
          <h4><b v-html="user.name"></b></h4> 
          <p>PRO</p> 
        </b-container>
      </div>
     <b-card-group deck>
       <b-card header="Heading">
         <b-list-group>
           <b-list-group-item class="d-flex align-items-center" href="#">
                  <div class="iconAndText">
                      <i class="material-icons">computer</i>
                      <span> View Projects</span>
                  </div>
            
           </b-list-group-item>
           <b-list-group-item class="d-flex align-items-center" href="#">
               <a class="collection-item" >
                    <div class="iconAndText valign-wrapper">
                        <i class="fab fa-wordpress fa-lg"></i>
                        <span> View Posts</span>
                    </div>
                </a>
           </b-list-group-item>
           <b-list-group-item class="d-flex align-items-center">
             <b-button v-b-modal.addArticleModal> 
                <div class="iconAndText valign-wrapper">
                        <i class="fas fa-folder-plus fa-lg"></i>
                    <span v-b-modal.addArticleModal> Add Posts</span>
                </div>
             </b-button>
           </b-list-group-item>
           <b-list-group-item class="d-flex align-items-center" href="#">
             <a class="collection-item">
                <div class="iconAndText valign-wrapper">
                    <i class="fas fa-comment-dots fa-lg"></i>
                    <span> Comments</span>
                </div>
            </a>
           </b-list-group-item>
           <b-list-group-item class="d-flex align-items-center" href="#">
              <a class="collection-item">
                  <div class="iconAndText valign-wrapper">
                      <i class="far fa-money-bill-alt"></i>
                      <span> Payment Settings</span>   
                  </div>
              </a>
           </b-list-group-item>
         </b-list-group>
     </b-card-group>
</body>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: '',
        email: ''
      }
    }
  },
  created() {
    if(localStorage.getItem('username')) {
      this.getName()
    }
  },
  methods: {
    getName() {
      this.user.name = localStorage.getItem('username')
      this.user.email = localStorage.getItem('email')
    }
  }
}
</script>

<style scoped>
body {
  background-color: #D3D3D3;
  background-size: auto;
}

</style>


<div class="row">
                <!-- <div class="col s12">
                </div> -->
                <div class="col s3" id="managePost">
                    <div class="card-panel white">
                        <div class="card-image">
                            <img src="./images/frenchieImg.webp" alt="avatar" class="responsive-img">
                        </div>
                        <div class="card-content center-align">
                            <p style="font-family: 'Open Sans', sans-serif;">My name is Typsi</p>
                        </div>
                    </div>
                    <ul class="collection with-header">
                        <a class="collection-item">
                            <div class="iconAndText valign-wrapper">
                                <i class="material-icons">computer</i>
                                <span> View Projects</span>
                            </div>
                        </a>
                        <a class="collection-item">
                            <div class="iconAndText valign-wrapper">
                                <i class="material-icons">equalizer</i>
                                <span>Status</span>
                            </div>
                        </a>
                        <a class="collection-item">
                            <div class="iconAndText valign-wrapper">
                                <i class="material-icons">access_time</i>
                                <span>Activity</span>
                            </div>
                        </a>
                        <li class="collection-header">
                            <span>Manage Posts</span>
                        </li>
                        <a class="collection-item" v-on:click.prevent="showPage('posts')">
                            <div class="iconAndText valign-wrapper">
                                <i class="fab fa-wordpress fa-lg"></i>
                                <span> View Posts</span>
                            </div>
                        </a>
                        <a class="collection-item" v-on:click.prevent="showPage('addPosts')">
                            <div class="iconAndText valign-wrapper">
                                    <i class="fas fa-folder-plus fa-lg"></i>
                                <span> Add Posts</span>
                            </div>
                        </a>
                        <a class="collection-item">
                            <div class="iconAndText valign-wrapper">
                                <i class="fas fa-comment-dots fa-lg"></i>
                                <span> Comments</span>
                            </div>
                        </a>
                        <a class="collection-item">
                            <div class="iconAndText valign-wrapper">
                                <i class="fas fa-photo-video fa-lg"></i>
                                <span> Media</span>   
                            </div>
                        </a>
                        <a class="collection-item">
                            <div class="iconAndText valign-wrapper">
                                <i class="fab fa-hire-a-helper fa-lg"></i>
                                <span> Feedback</span>   
                            </div>
                        </a>
                        <li class="collection-header">
                            <span>
                                Manage Account
                            </span>
                        </li>
                        <a class="collection-item">
                            <div class="iconAndText valign-wrapper">
                                <i class="fas fa-user fa-lg"></i>
                                <span> Edit Profile</span>   
                            </div>
                        </a>
                        <a class="collection-item">
                            <div class="iconAndText valign-wrapper">
                                <i class="far fa-money-bill-alt"></i>
                                <span> Payment Settings</span>   
                            </div>
                        </a>
                    </ul>
                </div>