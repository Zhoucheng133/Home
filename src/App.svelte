<main>
  <div class="welcome_container">
    <div class="welcome" id="welcome"></div>
  </div>
  <div class='wrapper'>
    <svg class="transition" viewBox="0 0 100 100" preserveAspectRatio="xMidYMin slice">
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="99" y2="99" gradientUnits="userSpaceOnUse">
          <stop offset="0.2" stop-color="rgb(255, 135, 9)" />
            <stop offset="0.7" stop-color="rgb(247, 189, 248)" />
        </linearGradient>
      </defs>
      <path bind:this={path} class="path" stroke="url(#grad)" fill="url(#grad)" stroke-width="2px" vector-effect="non-scaling-stroke" d="M 0 100 V 100 Q 50 100 100 100 V 100 z" />
    </svg>
  </div>
  <Card />
  <Copyright />
</main>


<script lang="ts">
import Card from "./components/Card.svelte";
import Copyright from "./components/Copyright.svelte";
import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { onMount } from "svelte";
import Typed from "typed.js";

gsap.registerPlugin(MorphSVGPlugin);

const start = "M 0 100 V 50 Q 50 0 100 50 V 100 z";
const end   = "M 0 100 V 0 Q 50 0 100 0 V 100 z";

let path;
let tl: GSAPTimeline;

onMount(() => {
  new Typed("#welcome", {
    strings: ["Welcome!"],
    typeSpeed: 60,
    loop: false
  })
  path = document.querySelector(".path");

  tl = gsap.timeline({ paused: true })
    .to(path, { morphSVG: start, ease: "power2.in" })
    .to(path, { morphSVG: end, ease: "power2.out" });

  setTimeout(() => {
    tl.play();
  }, 600);
});
</script>

<style>
.welcome_container{
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  position: fixed;
  top: 0;
  left: 0;
}

.welcome{
  font-size: 20px;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.transition {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
</style>