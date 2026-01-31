<main>
  <div class="content">
    <div class="title">👋 Hi, visitor!</div>

    <div class="list">
      <div class="item">
        <i class="fa-brands fa-github"></i>
        <div class="label_container">
          <a class="label" href="https://github.com/Zhoucheng133" target="_blank">GitHub</a>
        </div>
      </div>
      <div class="item">
        <i class="fa-brands fa-bilibili"></i>
        <div class="label_container">
          <a class="label" href="https://space.bilibili.com/5129395" target="_blank">bilibili</a>
        </div>
      </div>
      <div class="item">
        <i class="fa-solid fa-gamepad"></i>
        <div class="label_container">
          <a class="label" href="https://osu.ppy.sh/users/11444852" target="_blank">osu!</a>
        </div>
      </div>
      <div class="item">
        <i class="fa-solid fa-blog"></i>
        <div class="label_container">
          <a class="label" href="https://blog.z-server.top/" target="_blank">Blog</a>
        </div>
      </div>
      <div class="item">
        <i class="fa-solid fa-code"></i>
        <div class="label_container">
          <a class="label" href="https://blog.z-server.top/myprj/myprj" target="_blank">Developed Projects</a>
        </div>
      </div>
      <div class="item">
        <i class="fa-brands fa-docker"></i>
        <div class="label_container">
          <a class="label" href="https://hub.docker.com/repositories/zhouc1230" target="_blank">Docker Hub</a>
        </div>
      </div>
      <div class="item">
        <i class="fa-brands fa-microsoft"></i>
        <div class="label_container">
          <a class="label" href="https://apps.microsoft.com/search/publisher?name=ZhouCheng" target="_blank">Microsoft Store</a>
        </div>
      </div>
    </div>

    <div class="float_button">
      <div class="label">About me</div>
      <i class="fa-solid fa-arrow-right"></i>
    </div>

  </div>
</main>

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
.item{
  display: grid;
  width: auto;
  grid-template-columns: 35px auto;
  align-items: center;
  margin-top: 10px;
}
.list{
  margin-top: 40px;
}
.title{
  font-size: 20px;
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

.content {
  width: 300px;
  height: 400px;
  /* background-color: rgba(255, 255, 255, 0.4); */
  background-color: white;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, calc(-50% + 20px ));
  padding: 25px;
  box-sizing: border-box;
  color: black;

  /* opacity: 0;
  animation: animateIn 0.3s ease-in-out forwards;
  animation-delay: 1.5s; */
}
</style>