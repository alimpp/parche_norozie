<template>
  <AppCard>
    <template #content>
      <ModalsConfrim
        :state="deleteState"
        :title="$t('delete property value')"
        :text="$t('confirm delete property value')"
        @confrim="deleteProperty"
        @cancel="deleteState = false"
        @close="deleteState = false"
      />
      <div class="app-flex app-w-100 app-py-2 app-px-4">
        <div class="app-w-100 app-flex app-flex-column">
          <div class="app-w-100 app-flex app-flex-column">
            <span class="f-s-14 f-w-600">{{ $t("property name") }} :</span>
            <div class="app-border-radius app-py-2 app-flex">
              <span class="f-s-12 f-w-600">{{ data.Title }}</span>
            </div>
          </div>
          <span class="f-s-14 f-w-600" v-if="data"
            >{{ $t("property value") }} :</span
          >
          <div
            class="app-py-1 app-flex app-align-center app-pointer app-mt-2 app-border-radius"
            v-for="(sub, index) in data.values"
            :key="index"
          >
            <span class="f-s-12 app-w-50 f-w-600">{{ sub.Value }}</span>
            <div
              class="color-white app-w-50 app-flex app-justify-end app-align-center"
              @click="opeConfirm(sub)"
            >
              <v-tooltip :text="$t('remove')" location="bottom">
                <template v-slot:activator="{ props }">
                  <AppIconContent color="danger" v-bind="props"
                    ><TrashIcon size="1x"></TrashIcon
                  ></AppIconContent>
                </template>
              </v-tooltip>
            </div>
          </div>
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

const PropertyId = ref("");

const opeConfirm = (sub) => {
  deleteState.value = true;
  PropertyId.value = sub.ID;
};

const deleteProperty = () => {
  deleteState.value = false;
  emit("deleteProperty", PropertyId.value);
};
</script>
