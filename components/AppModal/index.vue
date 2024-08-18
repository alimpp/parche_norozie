<template>
  <div class="text-center">
    <v-dialog v-model="dialog" max-width="400" persistent>
      <div class="app-w-100 app-bg-white app-px-5 app-py-5 app-border-radius">
        slm
      </div>
    </v-dialog>
  </div>
</template>

<script setup>
const props = defineProps({
  state: {
    type: Boolean,
    default: false,
  },
  width: {
    type: Boolean,
    default: false,
  },
});
const dialog = ref(props.state);
</script>
