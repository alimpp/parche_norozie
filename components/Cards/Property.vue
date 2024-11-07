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
        ><TrashIcon class="color-danger" size="1.5x"></TrashIcon>
      </ModalsConfrim>
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
            >{{ $t("property name") }}
          </span>
          <span class="f-s-12 f-w-600">{{ data.Title }}</span>
        </div>

        <div class="app-w-50 app-flex app-justify-end app-align-center">
          <span class="color-white app-pointer" @click="opeConfirm">
            <v-tooltip :text="$t('remove')" location="bottom">
              <template v-slot:activator="{ props }">
                <AppIconContent
                  color="bg-danger-transparent"
                  class="color-danger app-pointer"
                  v-bind="props"
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
