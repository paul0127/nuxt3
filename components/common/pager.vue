<script setup>
const props = defineProps({
  total: {
    type: Number,
    default: 0,
  },
  page: {
    type: Number,
    default: 1,
  },
  limit: {
    type: Number,
    default: 1,
  },
})

const route = useRoute()
const router = useRouter()
const emit = defineEmits(['pageChange'])

const nowPage = computed(() => {
  return route.query.page ? parseInt(route.query.page) : 1
})

const pageCount = computed(() => {
  return Math.ceil(props.total / props.limit)
})

const pageChange = async (p) => {
  await router.push({ query: { ...route.query, page: p }, force: true })
  emit('pageChange')
}

const nextPage = async () => {
  if (nowPage.value >= pageCount.value) return
  const p = nowPage.value + 1
  pageChange(p)
}

const prePage = async () => {
  if (nowPage.value <= 1) return
  const p = nowPage.value - 1
  pageChange(p)
}

const goToPage = async (p) => {
  if (p < 1 || p > pageCount.value) return
  pageChange(p)
}
</script>
<template>
  <div>
    <ul class="pager" v-if="pageCount > 0">
      <li class="pre" :class="{ unable: nowPage <= 1 }" @click="prePage">
        <font-awesome-icon icon="angles-left" />
      </li>
      <li
        v-for="(item, index) in pageCount"
        :key="index"
        :class="{ active: index + 1 == props.page }"
        @click="goToPage(index + 1)"
      >
        {{ index + 1 }}
      </li>
      <li
        class="next"
        :class="{ unable: nowPage >= pageCount }"
        @click="nextPage"
      >
        <font-awesome-icon icon="angles-right" />
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
ul.pager {
  display: flex;
  justify-content: center;
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;

  li {
    background-color: #82cbc4;
    color: #fff;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
    border-radius: 5px;
    cursor: pointer;

    &.active {
      background-color: #6ea9a3;
    }

    &.unable {
      background-color: #707070;
      cursor: not-allowed;
    }

    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
