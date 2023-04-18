<template>
  <div class="main-container">
    <div class="container-one">
      <div class="profile">
        <img src="../assets/aing.png" alt="">
        <br>
        <h3>Arfan Muhtada</h3>

      </div>

    </div>
    <div class="container-two">
      <div class="contact">
        <h1><strong>Contact</strong></h1>
        <div class="sosial-links">

          <div class="link">
            <a href="https://github.com/RyuzakiKai"><img src="../assets/github.png" alt="" style="width:50px;height:50px;margin: 5px;" ></a>
            <a href="https://www.instagram.com/arfan_mhtd/"><img src="../assets/instagram.png" alt="" style="width:50px;height:50px;margin: 5px"></a>
            <a href="https://t.me/Arfan_mhtd"><img src="../assets/telegram.png" alt="" style="width:50px;height:50px;margin:5px"></a>
            <a href="http://wa.me/6285263821519"><img src="../assets/whatsapp.png" alt="" style="width:50px;height:50px;margin:5px"></a>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
img{
  height: 35px;
}
.main-container{
  display: flex;
  flex-direction: row;
  background-color: rgb(255, 255, 255);
  border-radius: 25px;

}
.container-one{padding: 2.5%;
  margin: 2%;
  color: #0e0d0c;
  width: 30%;
  border-radius: 25px;
}

.profile img{
  height: 13rem;
}
.link a{
  text-decoration: none;
  color: rgb(67, 67, 67);
  font-size: 10px;
}
.link img{
  height: 13rem;
}
.container-two{
  margin: 2.5%;
  margin-left: 2%;
  border-radius: 2%;
  color: #0e0d0c;
  width: 70%;
}
.contact{
  text-align: left;
}
.logo img{
  height: 4rem;
}

.project-button a{
  text-decoration: none;
  color: rgb(255, 255, 255);
}

</style>
