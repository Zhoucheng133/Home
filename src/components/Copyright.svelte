<main class="body">
  <div class="license" 
    onclick={toRepo}
    role="button" 
        tabindex="0" 
        onkeydown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toRepo();
          }
    }}>
    <i class="fa-brands fa-github"></i>
    <div>Under MIT License</div>
  </div>
  <div>Copyright © {getYear} ZhouC</div>
</main>

<script>
const currentYear = new Date().getFullYear();
$: getYear = currentYear > 2026 ? `2026 - ${currentYear}` : "2026";
function toRepo(){
  window.open("https://github.com/Zhoucheng133/Home");
}
</script>

<style>
.license{
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
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