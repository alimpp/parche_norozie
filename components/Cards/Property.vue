<template>
  <AppCard>
    <template #content>
      <ModalsConfrim
        :state="deleteState"
        :title="$t('delete property')"
        :text="$t('confirm delete property')"
        @confrim="deleteProperty"
        @cancel="deleteState = false"
        @close="deleteState = false"
      />
      <div class="app-flex app-w-100 app-py-2 app-px-4">
        <div class="app-w-50 app-flex app-flex-column">
          <span class="app-font-size-14 app-font-weight-600"
            >{{ $t("property name") }} :</span
          >
          <span class="app-font-size-12 app-font-weight-600">{{
            data.Title
          }}</span>
        </div>

        <div class="app-w-50 app-flex app-justify-end app-align-center">
          <span class="app-color-white app-pointer" @click="opeConfirm">
            <AppIconContent color="danger">
              <TrashIcon size="1x"></TrashIcon>
            </AppIconContent>
          </span>
        </div>
      </div>
    </template>
  </AppCard>
</template>

<script setup>
const emit = defineEmits(["deleteProperty"]);

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

const deleteProperty = () => {
  deleteState.value = false;
  emit("deleteProperty", props.data);
};
</script>
