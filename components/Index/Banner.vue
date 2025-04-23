<script setup>
  import swiper from '~/components/kits/swiper.vue';
  import banner from '@/assets/index/banner.png';

  const props = defineProps({
    banner_list: {
      type: Array,
      default: () => [
        {
          id: 1,
          img: banner,
          link: '#',
        }
      ],
    },
  });

  const list = props.banner_list.map((item) => {
    return {
      id: item.l_id,
      img: `${urlBase}${item.l_pic}`,
      link: item.l_url,
    };
  });
  
</script>
<template>
  <div class="banner">
    <swiper :list="list" />
  </div>
</template>
<style lang="scss" scoped>
.banner{
  margin-bottom: 40px;
}
</style>