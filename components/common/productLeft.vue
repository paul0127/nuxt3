<script setup lang="ts">
import type { classList } from '~/types'

const props = defineProps<{
  menuList: classList[]
}>()

const emit = defineEmits(['linkClick'])
const route = useRoute()
const router = useRouter()

const fliter: Ref<number | null> = computed(() => {
  const fliterParam = Array.isArray(route.params.fliter)
    ? route.params.fliter[0]
    : route.params.fliter

  const fliterNum = Number(fliterParam)

  return Number.isInteger(fliterNum) ? fliterNum : null
})

const linkClick = async (item: classList): Promise<void> => {
  const query = { fliter: item.id }
  await router.push({ path: `/brand/${route.params.id}`, query })
  emit('linkClick')
}
</script>
<template>
  <div class="left_menu">
    <div class="top_menu">商品分類</div>
    <ul>
      <li
        v-for="(item, index) in menuList"
        :key="index"
        :class="{ active: item.id == fliter }"
      >
        <a
          @click="linkClick(item)"
          >{{ item.cname }}</a
        >
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.left_menu {
  flex: 0 0 200px;
  margin-right: 30px;

  .top_menu {
    background-color: #82cbc4;
    color: #fff;
    text-align: center;
    padding: 10px 0;
    border: 1px solid #555;
  }

  ul {
    list-style: none;
    padding-left: 0;
    padding: 10px 5px 30px 5px;
    border: 1px solid #555;
    border-top: none;

    li {
      border-bottom: 1px solid #555;

      &:last-child {
        border-bottom: none;
      }

      a {
        color: #555;
        text-decoration: none;
        padding: 5px 10px;
        display: block;
        cursor: pointer;

        &:hover {
          color: #333;
        }
      }

      &.active a {
        color: #000;
      }
    }
  }
}

@media (max-width: 1200px) {
  .left_menu {
    display: none;
  }
}
</style>
