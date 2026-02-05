<main>
  <div 
    class="item" onclick={click}
    role="button" 
      tabindex="0" 
      onkeydown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          click();
        }
      }}
  >
    <i class={icon}></i>
    <div class="label">{label}</div>
  </div>
</main>

<script>
let { link, icon, label } = $props();

function click(){
  window.open(link, '_blank');
}
</script>

<style>
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
  background-color: black;
  transform: scaleX(0); 
  transform-origin: center;
  transition: transform 0.2s ease-in-out; 
}
.item:hover::after{
  transform: scaleX(1);
}
</style>