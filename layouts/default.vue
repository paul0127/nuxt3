<script setup>
const route = useRoute();
</script>

<template>
  <div>
    <commonHeader />
    <div class="container custom" v-if="route.name !== 'index'">
      <slot />
    </div>
    <slot v-else />
    <commonFooter />
  </div>
</template>

<style lang="scss" src="./default.scss" />
