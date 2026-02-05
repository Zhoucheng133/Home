<main class="back">
  <div class="title">😉 About me</div>
  <div class="content">
    <p>Hi my friend!</p>
    <p>I'm a software engineer</p>
    <p>Specializing in FE & client-side development</p>
    <div>I love</div>
    <ul class="hobbies">
      <li>👨🏻‍💻 coding</li>
      <li>🍿 anime</li>
      <li>✈️ travel</li>
      <li>🎮 rhythm games</li>
      <li>📷 photograph</li>
    </ul>
  </div>
  <FloatButton flipHandler={flipHandler} label="Quick Link" icon="fa-solid fa-arrow-left" />
</main>

<script lang="ts">
import FloatButton from "./FloatButton.svelte";
let { flipHandler } = $props();
</script>

<style>
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