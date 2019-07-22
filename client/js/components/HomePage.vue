<template>
<body>
  <b-container class="homeContainer">
    <b-col md="8">
      <b-jumbotron header="NoPlace Like Home" lead="A place where you can share creativity">
        <p>Log in to share your creativity and have fun!</p>
        <b-button variant="success" href="#">Log in</b-button>
      </b-jumbotron>
    </b-col>
  </b-container>
</body>

  
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>

body {
  background: url('../../images/background.jpg');
  background-repeat: no-repeat;
  height: 100vh;
  background-size: contain;
  background-size: cover;
  background-position: center;
  /* background-position:center; */
}

p {
  color: #51A39A;
 font-family: 'Josefin Sans', sans-serif;
 font-size: 20px;
}

</style>
