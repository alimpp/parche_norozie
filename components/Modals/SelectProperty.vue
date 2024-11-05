<template>
  <AppModal width="380px" :state="state" :title="title" @close="emit('close')">
    <template #content>
      <div class="app-w-100 app-flex app-flex-column app-px-3">
        <div class="app-flex app-flex-column app-w-100 app-mb-2">
          <AppInput
            height="35px"
            :label="$t('property')"
            v-model="property.Title"
            :disabled="true"
          />
        </div>
        <div
          class="app-flex app-align-center app-pointer app-py-2 app-border app-border-radius app-mb-2 app-px-2 deactive-style container"
          v-for="(data, index) in property.values"
          :key="index"
          @click="selectedValues(data)"
          :class="{ 'active-style': propertyvaluesIds.includes(data.ID) }"
        >
          <span class="app-font-size-14 app-font-weight-600">{{
            data.Value
          }}</span>
        </div>
        <span class="app-font-size-16 app-font-weight-600">{{
          $t("properties")
        }}</span>
        <div
          class="app-flex app-align-center app-pointer app-py-2 app-border app-border-radius app-mb-2 app-px-2 deactive-style container"
          v-for="(data, index) in dataSource"
          :key="index"
          @click="selectedProperty(data)"
          :class="{ 'active-style': data.ID == property.ID }"
        >
          <span class="app-font-size-14 app-font-weight-600">{{
            data.Title
          }}</span>
        </div>
        <AppButton
          width="100px"
          class="app-my-4"
          :name="$t('submit')"
          background="app-bg-primary"
          @click="submit"
        />
      </div>
    </template>
  </AppModal>
</template>

<script setup>
import { usePropertyStore } from "~/store/admin/property";
const emit = defineEmits(["selected", "close"]);

const propertyStore = usePropertyStore();

const dataSource = computed(() => {
  return propertyStore.properties;
});

const props = defineProps({
  state: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "",
  },
});

const properties = ref({
  ids: { id: null, value_ids: [] },
  values: [],
});

const property = ref({
  Title: "",
  values: [],
});

const selectedProperty = (data) => {
  property.value = data;
  propertyValues.value.property = data.Title;
};

const propertyvaluesIds = ref([]);
const propertyValues = ref({
  property: "",
  propertyValue: [],
});

const selectedValues = (data) => {
  if (!propertyvaluesIds.value.includes(data.ID)) {
    propertyvaluesIds.value.push(data.ID);
    propertyValues.value.propertyValue.push(data.Value);
  } else {
    propertyvaluesIds.value = propertyvaluesIds.value.filter(
      (item) => item != data.ID
    );
    propertyValues.value.propertyValue =
      propertyValues.value.propertyValue.filter((item) => item != data.Value);
  }
};

const submit = () => {
  properties.value.values.push(propertyValues.value);
  properties.value.ids.id = property.value.ID;
  properties.value.ids.value_ids = propertyvaluesIds.value;
  emit("selected", properties.value);

  setTimeout(() => {
    property.value = {
      Title: "",
      values: [],
    };
    propertyvaluesIds.value = [];

    propertyValues.value = {
      property: "",
      propertyValue: [],
    };
    properties.value.ids = {
      id: null,
      value_ids: [],
    };
  }, 0);

  emit("close");
};

onMounted(async () => {
  await propertyStore.propertyList();
});
</script>

<style scoped>
.container {
  max-height: 50dvh;
  overflow-y: scroll;
}

.deactive-style {
  padding: 5px 5px;
  border: 1px solid #7b7be33c;
  background: #7b7be30e;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px 1px;
  transition: 0.5s;
}

.active-style {
  padding: 5px 5px;
  border: 1px solid #7b7be368;
  background: #7b7be3c1;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px 1px;
  transition: 0.5s;
}
</style>
