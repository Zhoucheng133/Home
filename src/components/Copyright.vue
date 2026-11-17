<template>
  <div class="body">
    <div class="license" @click=toRepo>
      <i class="fa-brands fa-github"></i>
      <div>Under MIT License</div>
    </div>
    <div>Copyright {{ getYear }} ZhouC | 苏ICP备2026075704号</div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

function toRepo(){
  window.open("https://github.com/Zhoucheng133/Home");
}
const getYear=computed(()=>{
  const currentYear = new Date().getFullYear();
  return currentYear > 2026 ? `2026 - ${currentYear}` : "2026";
})
</script>

<style scoped>
.license{
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}
@keyframes fadeIn { 
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.body{
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  animation: fadeIn .2s ease-in-out forwards;
  animation-delay: 1.5s;
  width: 100%;
}
</style>