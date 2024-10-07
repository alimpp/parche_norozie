<template>
  <div class="content">
    <div class="card app-flex app-flex-column" data-aos="fade-up">
      <IconsBasket width="80px" height="80px" />
      <span class="app-font-weight-600">{{ $t("online sell") }}</span>
    </div>
    <div class="card app-flex app-flex-column" data-aos="fade-down">
      <IconsDubbleCheck width="80px" height="80px" />
      <span class="app-font-weight-600">{{ $t("guarantee products") }}</span>
    </div>
    <div class="card app-flex app-flex-column" data-aos="fade-right">
      <IconsSupport width="80px" height="80px" />
      <span class="app-font-weight-600">{{ $t("online support") }}</span>
    </div>
    <div class="card app-flex app-flex-column" data-aos="fade-up-right">
      <IconsBuy width="80px" height="80px" />
      <span class="app-font-weight-600">{{ $t("sell person") }}</span>
    </div>
    <div class="card app-flex app-flex-column" data-aos="fade-up-left">
      <IconsPerformance width="80px" height="80px" />
      <span class="app-font-weight-600">{{ $t("best performance") }}</span>
    </div>
  </div>
</template>

<style scoped>
.content {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.card {
  width: 190px;
  height: 190px;
  border: 1px solid #7979792e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  margin: 20px 30px;
  cursor: pointer;
  transition: 1s;
}

.card:hover {
  transform: rotate(20deg);
}

.card span {
  font-size: 14px;
  padding-top: 10px;
}
</style>
