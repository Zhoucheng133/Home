<template>
  <div class="front">
    <div class="title">{{ t('card.greeting') }}</div>

    <div class="list">
      <LinkButton 
        link="https://github.com/Zhoucheng133" 
        iconData="fa-brands fa-github" 
        label="GitHub"
      />
      <LinkButton 
        link="https://space.bilibili.com/5129395" 
        iconData="fa-brands fa-bilibili" 
        :label="t('card.bilibili')"
      />
      <LinkButton 
        link="https://osu.ppy.sh/users/11444852" 
        iconData="fa-solid fa-gamepad" 
        label="osu!"
      />
      <LinkButton 
        link="https://blog.zhouc1230.top" 
        iconData="fa-solid fa-blog" 
        :label="t('card.blog')"
      />
      <LinkButton 
        link="https://projects.zhouc1230.top" 
        iconData="fa-solid fa-code" 
        :label="t('card.projects')"
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
        :label="t('card.sponsor')"
      />
    </div>
    <FloatButton @flipHandler="flipHandler" :label="t('card.aboutMe')" iconData="fa-solid fa-arrow-right" />
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import LinkButton from './LinkButton.vue';
import FloatButton from './FloatButton.vue';

const { t } = useI18n();
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

  background-color: var(--surface-bg);
  box-shadow: var(--surface-shadow);
  border-radius: 10px;
  padding: 25px;
  box-sizing: border-box;
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}
.list{
  margin-top: 20px;
}
.title{
  font-size: 20px;
}
</style>