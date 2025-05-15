<script setup>
const breads = reactive([
    {
        name: '會員專區',
        link: '/member',
    }
]);
</script>
<template>
    <div>
        <commonHeader />
        <div class="container custom">
            <commonTitle :breads="breads" />
            <div class="page member">
                <commonMemberLeft />
                <div class="right_frame">
                    <slot />
                </div>
            </div>
        </div>
        <commonFooter />
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
