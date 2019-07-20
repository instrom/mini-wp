<template>
  <b-nav class="colourNav nav-wrapper d-flex" >
    <b-navbar-brand class="brand-logo left logoBrand">
      <img class="imgNavBar" src="../../images/logoBrand.png" alt="WordEncounter">
    </b-navbar-brand>
      <b-navbar-brand class="brand-logo">
        <h4>Word Encounter</h4>
      </b-navbar-brand>
      <b-nav class="linkRegister" tabs align="center">
        <b-nav-item> <b-button>Home</b-button></b-nav-item>
        <b-nav-item><b-button v-b-modal.loginModal>Login</b-button></b-nav-item>
        <b-nav-item><b-button v-b-modal.registerModal>Register</b-button></b-nav-item>
      </b-nav>
  </b-nav>
</template>

<script>
export default {

}
</script>

<style lang="css">
  .colourNav{
    background-color: #1E2A39;
  }
  .colourNav .logoBrand img {
    width: 100px;
    height: 100px;
  }
</style>

//  <nav>
//                 <div class="nav-wrapper">
//                     <a href="#" class="brand-logo left logoBrand"><img src="images/logoBrand.png" alt="Logo"></a>
//                     <a href="#" class="brand-logo center valign-wrapper" style="font-family: 'Poppins', sans-serif;">Word Encounter</a>
//                         <ul id="nav-mobile" class="right valign-wrapper">
//                             <li><a href="#" class="btn waves-effect waves-teal">Home</a></li>
//                             <li><a class="btn waves-effect waves-teal" v-on:click.prevent="showPage('loginFormPage')">Login</a></li>
//                             <li><a href="#" class="btn waves-effect waves-teal">Register</a></li>
//                         </ul>
//                 </div>
//             </nav>