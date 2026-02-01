<main class="back">
  <FloatButton flipHandler={flipHandler} label="Quick Link" icon="fa-solid fa-arrow-left" />
</main>

<script lang="ts">
import FloatButton from "./FloatButton.svelte";
let { flipHandler } = $props();
</script>

<style>
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