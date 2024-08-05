<template>
  <div class="menu-items-container" v-if="isOpen">
    <div class="menu-content app-bg-white slid-left-animation">
      <div class="app-w-100 app-flex app-py-3 app-px-3 app-justify-end">
        <span @click="emit('closeMenu')">
          <XIcon size="1.5x" class="custom-class app-pointer"></XIcon>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";

const emit = defineEmits(["closeMenu"]);
const router = useRouter();
const route = useRoute();

const menuItems = ref([
  { id: "000", title: "Dashboard", path: "/dashboard" },
  { id: "001", title: "Journals", path: "/journals" },
  { id: "002", title: "Create Journal", path: "/create-journal" },
  { id: "003", title: "Coins List", path: "/coin-list" },
  { id: "004", title: "Watch List", path: "/watch-list" },
  { id: "005", title: "Holder", path: "/holder" },
  { id: "001", title: "Profile", path: "/profile" },
]);

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});

const navigateTo = (path) => {
  router.push(`${path}`);
  emit("closeMenu");
};
</script>

<style scoped>
.menu-items-container {
  width: 100%;
  height: 100vh;
  background: rgba(5, 5, 5, 0.816);
  position: fixed;
  z-index: 1;
}

.menu-items-container .menu-content {
  width: 350px;
  height: 100vh;
  position: absolute;
  z-index: 1;
}
.active-route {
  border-bottom: 2px solid #7d70f1;
}
</style>
