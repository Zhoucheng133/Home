<main class="body">
  <div class="license">
    <i class="fa-brands fa-github" 
      onclick={toRepo}
      role="button" 
      tabindex="0" 
      onkeydown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toRepo();
        }
      }}
    ></i>
    <div>Under MIT License</div>
  </div>
  <div>Copyright © 2026-present ZhouC</div>
</main>

<script>
function toRepo(){
  window.open("https://github.com/Zhoucheng133/Home");
}
</script>

<style>
.fa-github{
  cursor: pointer;
}
.license{
  display: flex;
  align-items: center;
  gap: 10px;
}
@keyframes fadeIn { 
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.body{
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  animation: fadeIn .2s ease-in-out forwards;
  animation-delay: 1.5s;
  width: 100%;
}
</style>