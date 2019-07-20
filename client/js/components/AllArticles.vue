<template>
 <b-container fluid>
  <b-card  class="articleHeaders mt-4" text-variant="black" title="Published Article">
    <b-card-text>
      Below here, you can find articles to your liking!
    </b-card-text>
  </b-card>
 </b-container>
  
</template>

<script>
export default {

}
</script>

<style scoped>


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