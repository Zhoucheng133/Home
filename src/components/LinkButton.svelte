<main>
  <div class="item">
    <i class={icon}></i>
    <a class="label" href={link} target="_blank">{label}</a>
  </div>
</main>

<script>
let { link, icon, label } = $props();
</script>

<style>
a{
  text-decoration: none;
  color: black;
}
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