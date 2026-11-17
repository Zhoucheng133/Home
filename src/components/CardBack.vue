<template>
  <div class="back">
    <div class="title">{{ t('about.title') }}</div>
    <div class="content">
      <p>{{ t('about.greeting') }}</p>
      <p>{{ t('about.role') }}</p>
      <p>{{ t('about.focus') }}</p>
      <div>{{ t('about.love') }}</div>
      <ul class="hobbies">
        <li>{{ t('about.hobbies.coding') }}</li>
        <li>{{ t('about.hobbies.anime') }}</li>
        <li>{{ t('about.hobbies.travel') }}</li>
        <li>{{ t('about.hobbies.rhythmGames') }}</li>
        <li>{{ t('about.hobbies.photograph') }}</li>
      </ul>
    </div>
    <FloatButton @flipHandler="flipHandler" :label="t('card.quickLink')" iconData="fa-solid fa-arrow-left" />
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import FloatButton from './FloatButton.vue';

const { t } = useI18n();
const emit = defineEmits([ "flipHandler" ]);
function flipHandler(){
  emit("flipHandler");
}
</script>

<style scoped>
.hobbies{
  margin: 0;
  padding-left: 20px;
}
.content{
  margin-top: 20px;
  font-size: 14px;
}
.title{
  font-size: 20px;
}
.back{
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  color: black;
  transform: rotateY(180deg);
  
  background-color: white;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 25px;
  box-sizing: border-box;
}
</style>