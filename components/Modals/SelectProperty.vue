<template>
  <AppModal width="380px" :state="state" :title="title" @close="emit('close')">
    <template #content>
      <div class="app-w-100 app-flex app-flex-column app-px-3">
        <span class="f-s-16 f-w-600">{{ $t("properties") }}</span>
        <div
          class="deactive-style app-flex app-align-center app-pointer f-s-14 f-w-600"
          v-for="(data, index) in propertySource"
          :key="index"
          @click="selectedProperty(data)"
          :class="{ 'active-style': data.ID == selectedPropertty.ID }"
        >
          <CheckCircleIcon
            v-if="data.ID == selectedPropertty.ID"
            size="1x"
          ></CheckCircleIcon>
          <span class="app-px-1">{{ data.Title }}</span>
        </div>
        <span class="f-s-16 f-w-600">{{ $t("property value") }}</span>
        <div
          class="deactive-style app-flex app-align-center app-pointer f-s-14 f-w-600"
          v-for="(data, index) in selectedPropertty.values"
          :key="index"
          @click="selectedValues(data)"
          :class="{ 'active-style': selectedProperttyValues.includes(data) }"
        >
          <CheckCircleIcon
            v-if="selectedProperttyValues.includes(data)"
            size="1x"
          ></CheckCircleIcon>
          <span class="app-px-1">{{ data.Value }}</span>
        </div>

        <AppButton
          width="100px"
          class="app-my-4"
          :name="$t('submit')"
          background="bg-primary-100"
          @click="submit"
        />
      </div>
    </template>
    <template #icon>
      <AppIconContent>
        <CheckCircleIcon class="color-primary" size="1.5x"></CheckCircleIcon>
      </AppIconContent>
    </template>
  </AppModal>
</template>

<script setup>
import { usePropertyStore } from "~/store/admin/property";
const propertyStore = usePropertyStore();

const emit = defineEmits(["selected", "close"]);

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

const propertySource = computed(() => {
  return propertyStore.properties;
});

const selectedPropertty = ref({});
const selectedProperttyValues = ref([]);

const selectedProperty = (data) => {
  selectedProperttyValues.value = [];
  selectedPropertty.value = data;
};

const selectedValues = (data) => {
  if (!selectedProperttyValues.value.includes(data)) {
    selectedProperttyValues.value.push(data);
  } else {
    selectedProperttyValues.value = selectedProperttyValues.value.filter(
      (item) => {
        return item.ID != data.ID;
      }
    );
  }
};

const submit = () => {
  emit("selected", {
    ...selectedPropertty.value,
    values: selectedProperttyValues.value,
  });
  selectedPropertty.value = {};
  selectedProperttyValues.value = [];
  emit("close");
};

onMounted(async () => {
  await propertyStore.propertyList();
});
</script>

<style scoped>
.deactive-style {
  padding: 5px 5px;
  background: #d7d7d751;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px 1px;
  transition: 0.5s;
}

.active-style {
  padding: 5px 5px;
  background: #7272f512;
  color: #7272f5;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px 1px;
  transition: 0.5s;
}
</style>
