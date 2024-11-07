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
            <LineVertical class="app-mx-2" />
          </div>

          <div
            class="app-flex app-flex-column"
            v-for="(sub, index) in data.values"
            :key="index"
          >
            <div class="app-flex">
              <LineHorizontal class="app-mt-3 app-mx-2" />
              <span
                class="f-s-12 f-w-600 bg-primary-transparent color-primary app-border-radius app-px-2"
                >{{ sub.Value }}
              </span>
              <v-tooltip :text="$t('remove')" location="bottom">
                <template v-slot:activator="{ props }">
                  <AppIconContent
                    color="bg-danger-transparent"
                    class="app-mx-2 color-danger app-pointer"
                    v-bind="props"
                    ><TrashIcon size="1x"></TrashIcon
                  ></AppIconContent>
                </template>
              </v-tooltip>
            </div>
            <LineVertical
              class="app-mx-2"
              v-if="data.values.length > index + 1"
            />
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
