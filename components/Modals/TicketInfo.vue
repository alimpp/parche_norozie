<template>
  <AppModal
    :state="state"
    @close="emit('close')"
    :title="$t('ticket info')"
    width="90%"
    height="auto"
  >
    <template #content>
      <div class="app-flex app-flex-column app-w-100 app-px-3 app-py-8">
        <span class="f-s-12 f-w-600"
          >{{ $t("name") }} {{ $t("family name") }}</span
        >
        <span class="f-s-14 f-w-600"
          >{{ data.user.name }} {{ data.user.lastname }}</span
        >
        <span class="f-s-12 f-w-600">{{ $t("phoneNumber") }}</span>
        <span class="f-s-14 f-w-600">{{ data.user.phone }}</span>
        <span class="f-s-12 f-w-600">{{ $t("ticket subject") }}</span>
        <span class="f-s-14 f-w-600">{{ data.subject }}</span>
        <span class="f-s-12 f-w-600">{{ $t("explans") }}</span>
        <span class="f-s-14 f-w-600">{{ data.title }}</span>

        <div
          class="app-flex app-flex-column bg-gray app-px-2 app-border-radius app-mt-5 app-py-5"
        >
          <div
            class="app-flex app-align-center app-pointer color-danger"
            @click="removeTicket"
          >
            <TrashIcon size="1x"></TrashIcon>
            <span class="f-s-12 f-w-600 app-px-2 app-pt-1">{{
              $t("remove ticket")
            }}</span>
          </div>
          <div
            class="app-flex app-align-center app-pointer color-danger app-mt-1"
          >
            <XIcon size="1x"></XIcon>
            <span class="f-s-12 f-w-600 app-px-2 app-pt-1">{{
              $t("block ticket")
            }}</span>
          </div>
        </div>
      </div>
    </template>
  </AppModal>
</template>

<script setup>
import { useTicketStore } from "~/store/ticket";
const emit = defineEmits(["close"]);

const props = defineProps({
  state: {
    type: Boolean,
    default: false,
  },
  data: {
    type: Object,
    default: {},
  },
});

const removeTicket = async () => {
  const ticketStore = useTicketStore();
  await ticketStore.deleteTicket(props.data);
  emit("close");
};
</script>
