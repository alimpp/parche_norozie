<template>
  <AppModal
    width="380px"
    :state="state"
    @close="close"
    :title="$t('create property value')"
  >
    <template #content>
      <div class="app-flex app-flex-column app-px-4 app-py-2">
        <div class="app-flex app-flex-column app-w-100">
          <AppInput
            height="35px"
            :label="$t('title')"
            v-model="form.value"
            @keyup.enter="submit"
          />
        </div>
        <div class="app-flex app-flex-column app-w-100">
          <AppInput
            height="35px"
            :label="$t('property value')"
            v-model="property.Title"
            :disabled="true"
          />
        </div>
        <div>
          <AppButton
            class="app-mt-4"
            :name="$t('submit')"
            background="app-bg-primary"
            :loading="loading"
            @click="submit"
          />
        </div>
        <span
          v-if="propertyList.length != 0"
          class="app-font-size-14 app-font-weight-600 app-mt-5"
          >{{ $t("property") }}</span
        >
        <div class="app-w-100 app-flex app-flex-column container">
          <span
            @click="selectProperty(data)"
            class="deactive-style"
            :class="{ 'active-style': data.ID == property.ID }"
            v-for="(data, index) in propertyList"
            :key="index"
            >{{ data.Title }}</span
          >
        </div>
      </div>
    </template>
  </AppModal>
</template>

<script setup>
import { usePropertyStore } from "~/store/admin/property";
const propertyStore = usePropertyStore();

const emit = defineEmits(["close"]);

const property = ref({ Title: "" });

const propertyList = computed(() => {
  return propertyStore.properties;
});

const form = ref({
  property_id: null,
  value: "",
});

const loading = ref(false);

const selectProperty = (data) => {
  if (data.ID == property.value.ID) {
    property.value = { Title: "" };
  } else {
    property.value = data;
  }
};

const close = () => {
  form.value = {
    property_id: null,
    value: "",
  };
  property.value = { Title: "" };
  emit("close");
};

const submit = async () => {
  if (form.value.value) {
    loading.value = true;
    if (property.value.ID) {
      form.value.property_id = property.value.ID;
      await propertyStore.createPropertyValue(form.value);
      close();
    }
    loading.value = false;
  }
};
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
