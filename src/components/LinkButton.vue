<template>
  <div class="item" @click=click>
    <i :class="iconData"></i>
    <div>{{ label }}</div>
  </div>
</template>

<script setup lang="ts">
const {link, iconData, label} = defineProps(["link", "iconData", "label"])
function click(){
  window.open(link, '_blank');
}
</script>

<style scoped>
.item{
  width: auto;
  display: flex;
  gap: 10px;
  width: auto;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
  position: relative;
  width: fit-content;
}
.item::after{
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background-color: var(--underline-color);
  transform: scaleX(0); 
  transform-origin: center;
  transition: transform 0.2s ease-in-out; 
}
.item:hover::after{
  transform: scaleX(1);
}
</style>