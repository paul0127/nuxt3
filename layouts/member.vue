<script setup>
import Header from '~/components/common/Header.vue';
import Footer from '~/components/common/Footer.vue';
import Title from '~/components/common/Title.vue';
import memberLeft from '~/components/common/memberLeft.vue';
const breads = reactive([
    {
        name: '會員專區',
        url: '/member',
    }
]);
</script>
<template>
    <div>
        <Header />
        <div class="container custom">
            <Title :breads="breads" />
            <div class="page member">
                <memberLeft />
                <div class="right_frame">
                    
                    <slot />
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>
<style lang="scss" src="./default.scss" />
<style lang="scss" scoped>
.page.member {
    display: flex;
    align-items: flex-start;
    .right_frame {
        flex: 1;
    }
}
</style>
