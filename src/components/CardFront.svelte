<main class="front">
  <div class="title">👋 Hi, visitor!</div>

  <div class="list">
    <LinkButton 
      link="https://github.com/Zhoucheng133" 
      icon="fa-brands fa-github" 
      label="GitHub"
    />
    <LinkButton 
      link="https://space.bilibili.com/5129395" 
      icon="fa-brands fa-bilibili" 
      label="bilibili"
    />
    <LinkButton 
      link="https://osu.ppy.sh/users/11444852" 
      icon="fa-solid fa-gamepad" 
      label="osu!"
    />
    <LinkButton 
      link="https://blog.z-server.top" 
      icon="fa-solid fa-blog" 
      label="Blog"
    />
    <LinkButton 
      link="https://blog.z-server.top/myprj/myprj" 
      icon="fa-solid fa-code" 
      label="Developed Projects"
    />
    <LinkButton 
      link="https://hub.docker.com/repositories/zhouc1230" 
      icon="fa-brands fa-docker" 
      label="Docker Hub"
    />
    <LinkButton 
      link="https://apps.microsoft.com/search/publisher?name=ZhouCheng" 
      icon="fa-brands fa-microsoft" 
      label="Microsoft Store"
    />
  </div>

  <FloatButton flipHandler={flipHandler} label="About me" icon="fa-solid fa-arrow-right" />
</main>

<script lang="ts">
import LinkButton from "./LinkButton.svelte";
import FloatButton from "./FloatButton.svelte";
let { flipHandler } = $props();
</script>

<style>
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
  margin-top: 30px;
}
.title{
  font-size: 20px;
}
</style>