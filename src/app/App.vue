<script setup>
import NavBar from "@/components/header/NavBar";
</script>

<template>
  <div class="app">
    <NavBar/>
    <RouterView></RouterView>
  </div>

</template>



<style>
@font-face {
  font-family: matrixFont;
  src: url(../assets/PocketMonk-15ze.ttf);
}

.app {
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;

}

.header {
  margin: 0;
  font-family: matrixFont;
  color: #ffcc01;
  font-size: 25px;
  text-shadow: #22589a 1px 0px, #22589a 1px 1px, #22589a 0px 1px, #22589a -1px 1px, #22589a -1px 0px, #22589a -1px -1px, #22589a 0px -1px, #22589a 1px -1px;
}
.container-page{
  background-color: #f8f7f7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  border-radius: 20px;
  margin:20px;
  width: 80%;

}
.link {

  width: 100%;
  color: #22589a;
}
.flex{
  display: flex;
  width: 100%
;
}

@media (max-width: 800px) {
  .container-page{
    width: 90%;
  }
  
}
@media (max-width: 500px) {
  .container-page{
    width: 100%;
    margin: 5px;


  }

}

</style>