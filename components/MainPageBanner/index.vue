<template>
  <div class="app-w-100 main-page-banner">
    <div class="content">
      <div class="glass">
        <div class="typewriter1">
          <h1 class="app-font-size-18 app-font-weight-100">
            {{ $t("norozi shop") }}
          </h1>
        </div>
        <div class="typewriter2" v-if="title">
          <h1 class="app-font-size-14 app-font-weight-100">
            {{ $t("main page banner title") }}
          </h1>
        </div>
        <div class="typewriter3" v-if="subtitle">
          <h1 class="app-font-size-12 app-font-weight-100">
            {{ $t("main page banner subtitle") }}
          </h1>
        </div>
        <AppLogo theme="light" class="fade_animations" v-if="logo" />
        <AppButton
          class="fade_animations"
          v-if="logo"
          name="مشاهده محصولات ما"
          background="app-bg-white"
          @click="navigateTo('/products')"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const title = ref(false);
const subtitle = ref(false);
const logo = ref(false);

onMounted(() => {
  setTimeout(() => {
    title.value = true;
  }, 2100);
  setTimeout(() => {
    subtitle.value = true;
  }, 6400);
  setTimeout(() => {
    logo.value = true;
  }, 10000);
});
</script>

<style scoped>
.content {
  width: 100%;
  height: 100dvh;
  background-image: url("/public/banner/1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  animation: 30s animation infinite;
}
.content .glass {
  width: 100%;
  height: 100dvh;
  background: #000000c9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.typewriter1 h1 {
  border-left: 3px solid white;
  overflow: hidden;
  white-space: nowrap;
  margin: 0 auto;
  animation: typing 2s steps(30, end), blink-caret 0.75s step-end infinite;
}

.typewriter2 h1 {
  border-left: 3px solid white;
  overflow: hidden;
  white-space: nowrap;
  margin: 0 auto;
  animation: typing 4s steps(30, end), blink-caret 0.75s step-end infinite;
}

.typewriter3 h1 {
  border-left: 3px solid white;
  overflow: hidden;
  white-space: nowrap;
  margin: 0 auto;
  animation: typing 2s steps(30, end), blink-caret 0.75s step-end infinite;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: white;
  }
}

@keyframes animation {
  0% {
    background-image: url("/public/banner/11.jpg");
  }
  20% {
    background-image: url("/public/banner/12.jpg");
  }
  30% {
    background-image: url("/public/banner/13.jpg");
  }
  40% {
    background-image: url("/public/banner/4.jpg");
  }
  45% {
    background-image: url("/public/banner/5.jpg");
  }
  50% {
    background-image: url("/public/banner/6.jpg");
  }
  55% {
    background-image: url("/public/banner/7.jpg");
  }
  60% {
    background-image: url("/public/banner/8.jpg");
  }
  70% {
    background-image: url("/public/banner/10.jpg");
  }
  80% {
    background-image: url("/public/banner/11.jpg");
  }
  90% {
    background-image: url("/public/banner/12.jpg");
  }
  95% {
    background-image: url("/public/banner/13.jpg");
  }
  100% {
    background-image: url("/public/banner/14.jpg");
  }
}
</style>
