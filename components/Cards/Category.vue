<template>
  <AppCard>
    <template #content>
      <ModalsConfrim
        :state="deleteState"
        :title="$t('delete category')"
        :text="$t('confirm delete category')"
        @confrim="deleteCategory"
        @cancel="deleteState = false"
        @close="deleteState = false"
      />
      <div class="app-flex app-w-100 app-py-2 app-px-4">
        <div class="app-w-50 app-flex app-flex-column">
          <span
            style="width: 60px"
            class="app-flex app-align-center app-justify-center bg-primary-transparent color-primary app-border-radius"
          >
            <HashIcon size="1x"></HashIcon>
            <span>{{ data.ID }}</span>
          </span>
          <span class="f-s-12 f-w-600 color-primary"
            >{{ $t("category name") }}
          </span>

          <span class="f-s-12 f-w-600">{{ data.Title }}</span>
          <LineVertical class="app-mx-2" />

          <div
            class="app-flex app-flex-column"
            v-for="(sub, index) in data.subcategories"
            :key="index"
          >
            <div class="app-flex">
              <LineHorizontal class="app-mt-3 app-mx-2" />
              <span
                class="f-s-12 f-w-600 bg-primary-transparent color-primary app-border-radius app-px-2"
                >{{ sub.Title }}
              </span>
            </div>
            <LineVertical
              class="app-mx-2"
              v-if="data.subcategories.length > index + 1"
            />
          </div>
        </div>

        <div class="app-w-50 app-flex app-justify-end app-align-center">
          <span class="color-white app-pointer" @click="opeConfirm">
            <v-tooltip :text="$t('remove')" location="bottom">
              <template v-slot:activator="{ props }">
                <AppIconContent color="danger" v-bind="props"
                  ><TrashIcon size="1x"></TrashIcon
                ></AppIconContent>
              </template>
            </v-tooltip>
          </span>
        </div>
      </div>
    </template>
  </AppCard>
</template>

<script setup>
import { useCategoryStore } from "~/store/admin/category";

const emit = defineEmits(["deleteCategory"]);

const categoryStore = useCategoryStore();

const deleteState = ref(false);

const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
});

const opeConfirm = () => {
  deleteState.value = true;
};

const deleteCategory = () => {
  deleteState.value = false;
  emit("deleteCategory", props.data);
};
</script>
