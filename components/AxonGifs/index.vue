<template>
  <div class="axon-gifs">
    <div
      class="right-content app-px-5"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <img src="/public/gifs/axon-1.gif" alt="image" />
    </div>
    <div
      class="left-content app-px-5"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <img src="/public/gifs/axon-2.gif" alt="image" />
    </div>
  </div>
</template>

<style scoped>
.axon-gifs {
  width: 100%;
  display: flex;
}
img {
  width: 100%;
  height: 100dvh;
  border-radius: 10px;
}
.right-content {
  width: 50%;
}
.left-content {
  width: 50%;
}

@media (max-width: 900px) {
  .axon-gifs {
    flex-direction: column;
  }
  img {
    height: auto;
  }
  .right-content {
    width: 100%;
  }
  .left-content {
    width: 100%;
  }
}
</style>
