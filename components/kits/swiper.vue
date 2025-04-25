<script setup>
    import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

    import { Swiper, SwiperSlide } from 'swiper/vue';

    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/scrollbar';


    const onSwiper = (swiper) => {
    console.log(swiper);
    };

    const onSlideChange = () => {
    console.log('slide change');
    };

    const modules = [Navigation, Pagination, Scrollbar, A11y];
      
    defineProps({
        list: {
            type: Array,
            default: () => [],
        },
    });
</script>
<template>
    <div>
        <swiper
            class="mySwiper"
            :modules="modules"
            :slides-per-view="1"
            :space-between="0"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
        >
            <swiper-slide v-for="item in list" :key="item.id">
                <NuxtLink :to="item.link" class="image">
                    <img :src="item.img" alt="" />
                </NuxtLink>
            </swiper-slide>
        </swiper>
    </div>
</template>
<style lang="scss" scoped>
.mySwiper{
    .swiper-slide{
        .image{
            cursor: pointer;
            margin-bottom: 15px;
            img{
                width: 100%;
                height: auto;
            }
        }
    }
}
</style>
