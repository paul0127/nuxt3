<script setup>
onMounted(async ()=>{
  const store = cartStore()
  await store.getCart()
  await store.getToCartDetail()
})

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - IUBP` : 'IUBP';
  }
})
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
