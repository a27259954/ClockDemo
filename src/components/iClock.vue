<script setup lang="ts">
import { defineProps, computed } from 'vue';
import secImage from '../assets/sec2.png';
import minImage from '../assets/minute2.png';
import hourImage from '../assets/hour2.png';

const props = defineProps<{ seconds: number, minutes: number, hours: number , million : number}>();

const secRotation = computed(() => {
  return props.seconds * 6 + (props.million / 1000) * 6;
});

const minRotation = computed(() => {
  return props.minutes * 6 + props.seconds * 0.1;
});

const hourRotation = computed(() => {
  return props.hours * 30 + props.minutes * 0.5;
});
</script>

<template>
  <div style="background: transparent; width: 90%; height: 90%; position: relative ;">
    <img src="../assets/RING2.png"  class=" ring" />
    <img
        class="hour"
        :src="hourImage"
        :style="{ transform: `rotate(${hourRotation}deg)` }"
    />
    <img
        class="min"
        :src="minImage"
        :style="{ transform: `rotate(${minRotation}deg)` }"
    />
    <img
        class="sec"
        :src="secImage"
        :style="{ transform: `rotate(${secRotation}deg)` }"
    />
  </div>
</template>

<style scoped>
.sec, .min, .hour, .ring  {
  position: absolute;
  width: 100%;
  height: 100%;
  background: transparent;
}


</style>