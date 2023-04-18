<template>
  <!--banner image-->

  <div class="content text-center">
    <h1>Welcome to my portfolio website</h1>
  </div>
  <div class="banner-image w-100 vh-100 d-flex justify-content-center align-items-center">
    <div  class="images">
      <div class="profile">
        <img src="../assets/aing.png" class="rounded-circle"
             height="400px" width="400px">
      </div>
      <div class="background">
      </div>
    </div>
  </div>


</template>

<script>
export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
.text-center{
  margin-top: -10px;
  color: #181818;

}

.images {
  margin-top: -90px;
}

.profile {
  padding-top: 20px;
}

#app{
  background: linear-gradient(rgba(167, 183, 158, 0.96), rgba(215, 225, 212, 0.9), rgba(215, 222, 218, 0.96)),center/cover no-repeat;
}


</style>
