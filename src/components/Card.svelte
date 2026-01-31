<main>
  <div class="card_container">
    <div class="card_inner" class:is-flipped={flipped}>
      <CardFront flipHandler={flipCard} />
      <CardBack flipHandler={flipCard} />
    </div>
  </div>
</main>

<script lang="ts">
import CardFront from "./CardFront.svelte";
import CardBack from "./CardBack.svelte";

let flipped = false;

function flipCard() {
  flipped = !flipped;
}
</script>

<style>
.is-flipped {
  transform: rotateY(180deg);
}
.card_inner{
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

@keyframes animateIn {
  0% {
    opacity: 0;
    transform: translate(-50%, calc(-50% + 20px ));
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}

.card_container {
  width: 300px;
  height: 400px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, calc(-50% + 20px ));
  color: black;

  opacity: 0;
  animation: animateIn 0.3s ease-in-out forwards;
  animation-delay: 1.5s;
}
</style>