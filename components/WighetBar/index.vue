<template>
  <div
    class="shopping-card-container"
    v-if="isOpen"
    @click.self="emit('close')"
  >
    <div
      class="content slid-right-animation-3"
      :class="{
        'app-bg-secondary': themeStore.theme == 'light',
        'app-bg-dark': themeStore.theme == 'dark',
        'app-bg-primary-custom': themeStore.theme == 'custom',
      }"
    >
      <div
        class="app-w-100 app-flex app-flex-column app-py-3 app-px-3 app-justify-start"
      >
        <span @click="emit('close')">
          <XIcon size="1.5x" class="custom-class app-pointer"></XIcon>
        </span>
        <div class="app-w-100 app-mt-5">
          <AppDivider name="تم برنامه" :hasLine="true" width="60px" />
        </div>
        <div
          class="app-flex app-justify-center app-align-center app-mt-5 app-w-100"
        >
          <div
            @click="changeThemeState('light')"
            class="app-flex app-flex-column app-justify-center app-align-center app-pointer"
          >
            <div
              style="width: 60px; height: 60px"
              class="app-bg-white app-border-radius"
            ></div>
            <span class="app-font-size-14 app-font-weight-600">روشن</span>
            <CheckCircleIcon v-if="themeStore.theme == 'light'" />
          </div>
          <div
            @click="changeThemeState('dark')"
            class="app-flex app-flex-column app-justify-center app-align-center app-pointer app-mx-5"
          >
            <div
              style="width: 60px; height: 60px"
              class="app-bg-dark app-border-radius app-border"
            ></div>
            <span class="app-font-size-14 app-font-weight-600">تیره</span>
            <CheckCircleIcon v-if="themeStore.theme == 'dark'" />
          </div>
          <div
            @click="changeThemeState('custom')"
            class="app-flex app-flex-column app-justify-center app-align-center app-pointer"
          >
            <div
              style="width: 60px; height: 60px"
              class="app-bg-secondary-custom app-border-radius"
            ></div>
            <span class="app-font-size-14 app-font-weight-600">کاستوم</span>
            <CheckCircleIcon v-if="themeStore.theme == 'custom'" />
          </div>
        </div>
        <div class="app-w-100 app-mt-5">
          <AppDivider name="حالت کارت ها" :hasLine="true" width="88px" />
          <div class="app-flex app-mt-2">
            <div
              class="app-flex app-flex-column app-justify-center app-align-center"
            >
              <div
                @click="setWighetCard('hasBorder')"
                class="app-flex app-flex-column app-px-2 app-py-2 primary-border has-border-default"
              >
                <div
                  class="app-w-100 app-bg-gray app-border-radius"
                  style="height: 130px"
                ></div>
                <div
                  class="app-w-100 app-bg-gray app-border-radius app-mt-2"
                  style="height: 25px"
                ></div>
                <div
                  class="app-w-100 app-bg-gray app-border-radius app-mt-2"
                  style="height: 25px"
                ></div>
              </div>
              <CheckCircleIcon
                class="app-mt-2"
                v-if="themeStore.wighet.baseCard.border == 'hasBorder'"
              />
            </div>
            <div
              class="app-flex app-flex-column app-justify-center app-align-center"
            >
              <div
                @click="setWighetCard('hasShadow')"
                class="app-flex app-flex-column app-mx-2 app-px-2 app-py-2 primary-shadow has-shadow-default"
              >
                <div
                  class="app-w-100 app-bg-gray app-border-radius"
                  style="height: 130px"
                ></div>
                <div
                  class="app-w-100 app-bg-gray app-border-radius app-mt-2"
                  style="height: 25px"
                ></div>
                <div
                  class="app-w-100 app-bg-gray app-border-radius app-mt-2"
                  style="height: 25px"
                ></div>
              </div>
              <CheckCircleIcon
                class="app-mt-2"
                v-if="themeStore.wighet.baseCard.border == 'hasShadow'"
              />
            </div>
          </div>
        </div>
        <div class="app-w-100 app-mt-5">
          <AppDivider name="حالت نمایش کارت ها" :hasLine="true" width="130px" />
          <div
            class="app-flex app-flex-column app-justify-center app-align-center app-mt-5"
          >
            <div
              class="app-flex app-flex-column app-justify-center app-align-center"
            >
              <div
                @click="setDisplayCard('row')"
                class="app-flex app-flex-column app-mx-2 app-px-2 app-py-2 app-border"
                style="width: 150px; height: 200px; border-radius: 6px"
              >
                <div
                  class="app-w-100 app-bg-gray app-border-radius"
                  style="height: 130px"
                ></div>
                <div
                  class="app-w-100 app-bg-gray app-border-radius app-mt-2"
                  style="height: 25px"
                ></div>
                <div
                  class="app-w-100 app-bg-gray app-border-radius app-mt-2"
                  style="height: 25px"
                ></div>
              </div>
              <CheckCircleIcon
                class="app-mt-2"
                v-if="themeStore.wighet.product.display == 'row'"
              />
            </div>
            <div
              class="app-flex app-flex-column app-justify-center app-align-center app-mt-2"
            >
              <div
                @click="setDisplayCard('column')"
                class="app-flex app-mx-2 app-px-2 app-py-2 app-border"
                style="width: 300px; height: 120px; border-radius: 6px"
              >
                <div
                  class="app-bg-gray app-border-radius"
                  style="height: 100px; width: 130px"
                ></div>

                <div
                  class="app-flex app-flex-column app-px-2"
                  style="width: 160px; height: 100px"
                >
                  <div
                    class="app-w-100 app-bg-gray app-border-radius"
                    style="height: 19px"
                  ></div>
                  <div
                    class="app-w-100 app-bg-gray app-border-radius app-mt-2"
                    style="height: 19px"
                  ></div>
                  <div
                    class="app-w-100 app-bg-gray app-border-radius app-mt-2"
                    style="height: 19px"
                  ></div>
                  <div
                    class="app-w-100 app-bg-gray app-border-radius app-mt-2"
                    style="height: 19px"
                  ></div>
                </div>
              </div>
              <CheckCircleIcon
                class="app-mt-2"
                v-if="themeStore.wighet.product.display == 'column'"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

import { useThemeStore } from "@/store/theme/index";
import { useUserStore } from "~/store/user";

const themeStore = useThemeStore();
const userStore = useUserStore();

const emit = defineEmits(["close"]);

const { t } = useI18n();

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});

const changeThemeState = (val) => {
  if (userStore.user) {
    userStore.sendProfile({ ...userStore.user, theme: val });
  }
  themeStore.updateThemeState(val);
};

const setWighetCard = (val) => {
  themeStore.wighet.baseCard.border = val;
};

const setDisplayCard = (val) => {
  themeStore.wighet.product.display = val;
};
</script>

<style scoped>
.shopping-card-container {
  width: 100%;
  height: 100vh;
  background: rgba(5, 5, 5, 0.816);
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: end;
}

.shopping-card-container .content {
  width: 350px;
  height: 100vh;
  position: absolute;
  z-index: 1;
  overflow-y: scroll;
}

.has-shadow-default {
  border: 1px solid #787878;
  width: 150px;
  height: 200px;
  border-radius: 6px;
}

.has-border-default {
  width: 150px;
  height: 200px;
  border-radius: 6px;
}
</style>
