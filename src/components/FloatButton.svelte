<main class="container">
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
    >
      { label }
    </div>
    <!-- <i class="fa-solid fa-arrow-right"></i> -->
    <i class={icon}></i>
  </div>
</main>

<script>
let { flipHandler, label, icon } = $props();
</script>

<style>
.container{
  right: 20px;
  position: absolute;
  bottom: 25px;
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
  cursor: pointer;
  color: black;
}
</style>