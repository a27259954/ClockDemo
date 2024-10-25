<script setup lang="ts">
import {onMounted, onUnmounted, ref} from 'vue';
import IClock from "@/components/iClock.vue";
import SClock from "@/components/SClock.vue";


const nowTime = ref(new Date());
const selectedTime = ref({
  hours: 0,
  minutes: 0,
  seconds: 0,
});
const offsetSeconds = ref(0);

const isEditing = ref(false);
const updateTime = () => {
  nowTime.value = new Date(new Date().getTime() + offsetSeconds.value * 1000);
};
const openEditModal = () => {
  isEditing.value = true;
  selectedTime.value.hours = nowTime.value.getHours();
  selectedTime.value.minutes = nowTime.value.getMinutes();
  selectedTime.value.seconds = nowTime.value.getSeconds();
};
const closeEditModal = () => {
  isEditing.value = false;
};
const setTime = (newHours, newMinutes, newSeconds) => {
  const thisTime = new Date();
  const currentTotalSeconds = thisTime.getHours() * 3600 + thisTime.getMinutes() * 60 + thisTime.getSeconds();
  const newTotalSeconds = newHours * 3600 + newMinutes * 60 + newSeconds;
  offsetSeconds.value = newTotalSeconds - currentTotalSeconds;
  console.log('offsetSeconds:' + offsetSeconds.value);

  closeEditModal();
};

const animate = () => {
  updateTime();
  requestAnimationFrame(animate);
};

onMounted(() => {
  animate();
});

onUnmounted(() => {
  cancelAnimationFrame(animate);
});
</script>

<template>
  <div class="main">

    <div @click="openEditModal" class="edit-button" style="z-index: 999">
      <font-awesome-icon icon="pen-to-square" class="icon" />
    </div>

    <div class="lbox">
      <SClock></SClock>
    </div>

    <div class="rbox">
      <IClock :seconds=" nowTime.getSeconds()" :minutes=" nowTime.getMinutes()" :hours=" nowTime.getHours()"  :million="nowTime.getMilliseconds()"></IClock>
    </div>

    <div v-if="isEditing" class="modal">
      <p style="font-weight: bold; font-size:x-large">時 間 調 整</p>
      <div class="inputArea">
        <div class="fic">
          <input class="Dainput" type="number" v-model="selectedTime.hours" min="0" max="23" style="width: 50px">時
        </div>
        <div class="fic">
          <input class="Dainput" type="number" v-model="selectedTime.minutes" min="0" max="59" style="width: 50px">分
        </div>
        <div class="fic">
          <input class="Dainput" type="number" v-model="selectedTime.seconds" min="0" max="59" style="width: 50px">秒
        </div>
      </div>
      <div class="btArea">
        <button class="DaBT" @click="closeEditModal">
          <font-awesome-icon icon="times" style="font-size: 20px;" />
        </button>
        <button class="DaBT" @click="setTime(selectedTime.hours, selectedTime.minutes, selectedTime.seconds)">
          <font-awesome-icon icon="check" style="font-size: 20px;" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  width: 100dvw;
  height: 100dvh;
  display: flex;
  background-color: #212f22;
  overflow: hidden;
  background-image: url('./assets/bg.png');
  background-size: cover;
  background-position: center;
}
.lbox{
  width: 50dvw;
  height: 50dvw;
  display: flex;
  align-items: center;
  justify-content: end ;
}
.rbox {
  margin-top: 200px;
  width: 50dvw;
  height: 50dvw;
}

.edit-button {
  position: absolute;
  bottom: 5%;
  right: 10%;
  width: 50px;
  height: 50px;

  background: transparent;
  border: none;
  cursor: pointer;
}
.icon {

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #956f51;
}


.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  gap: 50px;
  max-width: 500px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 20px 40px 20px 40px;
  background: #775e40;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.51);
}

.inputArea {
  display: flex;
  justify-content: space-around;
  gap: 10px;
  flex-wrap: wrap;
  width: 100%;
}

.fic {
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  gap: 10px;
}

.Dainput {
  flex-grow: 1;
  border-radius: 5px;
  border: none;
  padding: 5px;
  font-size: xx-large;
  background: #a69581;
  text-align: center;
  color: #37240f;
}

.btArea {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.DaBT{
  padding: 10px 30px 10px 30px;
  border-radius: 5px;
  background: #775e40;
  border: 1px solid #37240f;
  color: #37240f;
  font-size: large;
  cursor: pointer;
}

@media (max-width: 768px) {
  .modal {
    gap: 20px;
    height: auto;
  }

  .inputArea {
    flex-direction: column;
    align-items: center;
  }

  .fic {
    width: 80%;
    justify-content: center;
  }

  .main{
    flex-direction: column;
    align-items: center;
  }

  .lbox{
    width:50dvh;
    height: 50dvh;
  }

  .rbox{
    margin-top: 0px;
    align-content: start;
    width:50dvh;
    height: 50dvh;
  }
}


</style>