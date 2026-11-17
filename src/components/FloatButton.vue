<template>
  <div class="container">
    <div class="float_button" @click=flipHandler>
      <div>{{ label }}</div>
      <i :class="iconData"></i>
    </div>
  </div>
</template>

<script lang="ts" setup>
const {label, iconData} = defineProps(["label", "iconData"])

const emit = defineEmits([ "flipHandler" ]);
function flipHandler(){
  emit("flipHandler");
}

</script>

<style scoped>
.container{
  right: 20px;
  position: absolute;
  bottom: 25px;
  cursor: pointer;
}
.float_button{
  display: flex;
  gap: 10px;
  align-items: center;
  width: fit-content;
}
.float_button:hover::after{
  transform: scaleX(1);
}
.float_button::after{
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background-color: black;
  transform: scaleX(0); 
  transform-origin: center;
  transition: transform 0.2s ease-in-out; 
}
.label{
  text-decoration: none;
  position: relative;
  color: black;
}
</style>