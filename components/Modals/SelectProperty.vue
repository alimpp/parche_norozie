<template>
  <AppModal width="380px" :state="state" :title="title" @close="emit('close')">
    <template #content>
      <div class="app-w-100 app-flex app-flex-column app-px-3">
        <span class="f-s-16 f-w-600">{{ $t("properties") }}</span>
        <div
          class="app-flex app-align-center app-pointer app-py-2 app-border app-border-radius app-mb-2 app-px-2 deactive-style"
          v-for="(data, index) in propertySource"
          :key="index"
          @click="selectedProperty(data)"
          :class="{ 'active-style': data.ID == selectedPropertty.ID }"
        >
          <span class="f-s-14 f-w-600">{{ data.Title }}</span>
        </div>
        <span class="f-s-16 f-w-600">{{ $t("property value") }}</span>
        <div
          class="app-flex app-align-center app-pointer app-py-2 app-border app-border-radius app-mb-2 app-px-2 deactive-style"
          v-for="(data, index) in selectedPropertty.values"
          :key="index"
          @click="selectedValues(data)"
          :class="{ 'active-style': selectedProperttyValues.includes(data) }"
        >
          <span class="f-s-14 f-w-600">{{ data.Value }}</span>
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
