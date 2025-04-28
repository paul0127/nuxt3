<script setup>
import Header from '~/components/common/Header.vue';
import Footer from '~/components/common/Footer.vue';

const route = useRoute();
</script>

<template>
  <div>
    <Header />
    <div class="container custom" v-if="route.name !== 'index'">
      <slot />
    </div>
    <slot v-else />
    <Footer />
  </div>
</template>

<style lang="scss" src="./default.scss" />
