<template>
  <div
    class="admin-header-content app-flex mt-4 app-bg-element-dark app-border-radius"
  >
    <div class="app-w-50 app-flex app-flex app-align-center">
      <div class="app-mx-3 app-mt-2 app-pointer app-mx-4">
        <ShoppingCartIcon size="1.5x"></ShoppingCartIcon>
        <v-badge color="white" content="9"></v-badge>
      </div>
      <div class="app-mx-3 app-mt-2 app-pointer">
        <FileTextIcon size="1.5x"></FileTextIcon>
        <v-badge color="white" content="8"></v-badge>
      </div>
    </div>
    <div class="app-w-50 app-flex app-align-center app-justify-end">
      <div class="app-flex app-px-3">
        <div class="app-flex app-flex-column app-justify-center app-px-2">
          <span class="app-font-size-14 app-font-weight-500">ali_norozie</span>
          <span class="app-font-size-10 app-font-weight-500 app-color-gray">{{
            $t("role admin")
          }}</span>
        </div>
        <AppAvatar background="app-bg-white" name="A" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.admin-header-content {
  width: 95%;
  height: 80px;
  border: 1px solid #ffffff41;
}
</style>
