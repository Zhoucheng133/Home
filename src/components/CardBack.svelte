<main class="back">
  <div class="float_button">
    <div class="label" 
      onclick={ flipHandler } 
      role="button" 
      tabindex="0" 
      onkeydown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          flipHandler();
        }
      }}
    >Quick link</div>
    <i class="fa-solid fa-arrow-left"></i>
  </div>
</main>

<script lang="ts">
let { flipHandler } = $props();
</script>

<style>
.float_button{
  right: 20px;
  position: absolute;
  bottom: 25px;
  display: flex;
  gap: 10px;
  align-items: center;
}
.label:hover::after{
  transform: scaleX(1);
}
.label::after{
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
  cursor: pointer;
  color: black;
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