<script setup lang="ts">
const { data } = useFetch("/api/links");
</script>

<template>
  <pre>{{ data }}</pre>
</template>
