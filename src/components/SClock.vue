<script setup lang="ts">
const today = new Date();
</script>

<template>
  <div style="background: transparent; width: 80%; height: 80%; position: relative ;">
    <img src="../assets/dotcase.png"  class=" ring" />
    <div class="strArea">
      <p class="pp1">{{today.getFullYear()}}</p>
      <p class="pp2">{{today.getMonth()}}月</p>
      <p class="pp3">{{today.getDate()}}</p>
    </div>

  </div>
</template>

<style scoped>
.ring {
  position: absolute;
  width: 100%;
  height: 100%;
  background: transparent;
}

.strArea {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.strArea p {
  margin: 0;
  font-weight: bold;
  color: #956f51;
}
.pp1{
  font-size: 6dvw;
  font-family: 'ThePeakFontBeta', sans-serif;
}
.pp2{
  font-size: 5dvw;
  font-family: 'ThePeakFontBeta', sans-serif;
}
.pp3{
  font-size: 14dvw;
  font-family: 'ThePeakFontBeta', sans-serif;
}
@media (max-width: 768px) {
  .pp1{
    font-size: 6dvh;
  }
  .pp2{
    font-size: 5dvh;
  }
  .pp3{
    font-size: 14dvh;
  }

}


</style>