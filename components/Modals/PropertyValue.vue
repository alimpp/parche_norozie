<template>
  <AppModal
    width="380px"
    :state="state"
    @close="close"
    :title="$t('create property value')"
  >
    <template #content>
      <div class="app-flex app-flex-column app-px-4 app-py-2">
        <div
          class="bg-primary-transparent app-border-radius app-py-1 app-px-1 app-flex app-flex-column"
        >
          <span class="f-s-12 f-w-500 color-primary"
            >. {{ $t("create property value guide 1") }}</span
          >
          <span class="f-s-12 f-w-500 color-primary"
            >. {{ $t("create property value guide 2") }}</span
          >
        </div>
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
            background="bg-primary-100"
            :loading="loading"
            @click="submit"
          />
        </div>
        <span v-if="propertyList.length != 0" class="f-s-14 f-w-600 app-mt-5">{{
          $t("property")
        }}</span>
        <div class="app-w-100 app-flex app-flex-column container">
          <span
            @click="selectProperty(data)"
            class="deactive-style app-flex app-align-center app-pointer f-s-14 f-w-600"
            :class="{ 'active-style': data.ID == property.ID }"
            v-for="(data, index) in propertyList"
            :key="index"
          >
            <CheckCircleIcon
              v-if="data.ID == property.ID"
              size="1x"
            ></CheckCircleIcon>
            <span class="app-px-1">{{ data.Title }}</span>
          </span>
        </div>
      </div>
    </template>
    <template #icon>
      <AppIconContent color="bg-primary-100">
        <PlusIcon size="1.5x"></PlusIcon>
      </AppIconContent>
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
