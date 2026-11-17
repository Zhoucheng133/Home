<template>
  <div class="front">
    <div class="title">👋 Hi, visitor!</div>

    <div class="list">
      <LinkButton 
        link="https://github.com/Zhoucheng133" 
        iconData="fa-brands fa-github" 
        label="GitHub"
      />
      <LinkButton 
        link="https://space.bilibili.com/5129395" 
        iconData="fa-brands fa-bilibili" 
        label="bilibili"
      />
      <LinkButton 
        link="https://osu.ppy.sh/users/11444852" 
        iconData="fa-solid fa-gamepad" 
        label="osu!"
      />
      <LinkButton 
        link="https://blog.zhouc1230.top" 
        iconData="fa-solid fa-blog" 
        label="Blog"
      />
      <LinkButton 
        link="https://projects.zhouc1230.top" 
        iconData="fa-solid fa-code" 
        label="Projects"
      />
      <LinkButton 
        link="https://hub.docker.com/repositories/zhouc1230" 
        iconData="fa-brands fa-docker" 
        label="Docker Hub"
      />
      <LinkButton 
        link="https://apps.microsoft.com/search/publisher?name=ZhouCheng" 
        iconData="fa-brands fa-microsoft" 
        label="Microsoft Store"
      />
      <LinkButton 
        link="https://blog.zhouc1230.top/sponsor" 
        iconData="fa-regular fa-face-kiss-wink-heart" 
        label="Sponsor"
      />
    </div>
    <FloatButton @flipHandler="flipHandler" label="About me" iconData="fa-solid fa-arrow-right" />
  </div>
</template>

<script lang="ts" setup>
import LinkButton from './LinkButton.vue';
import FloatButton from './FloatButton.vue';

const emit = defineEmits([ "flipHandler" ]);
function flipHandler(){
  emit("flipHandler");
}
</script>

<style scoped>
.front{
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;

  background-color: white;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 25px;
  box-sizing: border-box;
}
.list{
  margin-top: 20px;
}
.title{
  font-size: 20px;
}
</style>