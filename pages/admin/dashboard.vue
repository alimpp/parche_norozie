<template>dashboard admin</template>

<script setup>
definePageMeta({
  middleware: ["admin-auth"],
  layout: "admin",
});
</script>
