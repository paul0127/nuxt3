<script setup>
const props = defineProps({
  breads: {
    type: Array,
    default: [],
  },
  rightToggle: {
    type: Boolean,
    default: false,
  },
  orderType: {
    type: String,
    default: null,
  },
  numberOfProducts: {
    type: Number,
    default: 0,
  },
  tabType: {
    type: String,
    default: 'grid',
  },
})

const titleOrderType = ref(null)

watch(
  () => props.orderType,
  (newVal) => {
    titleOrderType.value = newVal
  },{
    immediate: true,
  }
)

const emit = defineEmits(['tabClick','orderTypeChange'])
const tabClick = (value)=>{
  emit('tabClick',value)
}

const route = useRoute()
const router = useRouter()

const orderTypeChange = async ()=>{
  if (!titleOrderType.value) {
    await router.push({ query: {...route.query,orderType:null} })
  } else {
    await router.push({ query: { ...route.query,orderType: titleOrderType.value } })
  }

  emit('orderTypeChange')
}
</script>
<template>
    <div class="title">
        <ul class="bread">
          <li v-for="(bread,index) in breads" :key="index">
            <NuxtLink :to="bread.url">{{bread.name}}</NuxtLink>
          </li>
        </ul>
        <div class="right" v-if="rightToggle">
          <div class="select">
            <select v-model="titleOrderType" @change="orderTypeChange">
              <option :value="null">預設排列</option>
              <option :value="'desc'">價格高到低</option>
              <option :value="'asc'">價格低到高</option>
            </select>
          </div>
          <div class="product_total">共{{numberOfProducts}}件商品</div>
          <ul class="tab_btns">
            <li :class="[{'active':tabType=='grid' }]" @click="tabClick('grid')"><font-awesome-icon icon="grip" /></li>
            <li :class="[{'active':tabType=='list' }]" @click="tabClick('list')"><font-awesome-icon icon="list" /></li>
          </ul>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.title {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #333;
  margin-bottom: 25px;
  margin-top: 40px;

  ul.bread {
    display: flex;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    padding-bottom: 10px;

    > li {
      display: flex;
      align-items: center;
      margin-right: 10px;

      &::before {
        content: '';
        background: url(@/assets/common/arrow.svg);
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
        width: 25px;
        height: 100%;
        margin-right: 10px;
        font-size: 1.75rem;
      }

      a {
        font-size: 1.5rem;
        color: #333;
        text-decoration: none;
      }
    }
  }

  .right {
    display: flex;
    align-items: center;

    .select {
      margin-right: 30px;

      select {
        outline: none;
        padding: 3px 10px;
      }
    }

    .product_total {
      margin-right: 30px;
      font-size: 0.75rem;
    }

    ul.tab_btns {
      display: flex;
      align-items: center;
      list-style: none;
      margin-bottom: 0;
      padding-left: 0;

      > li {
        width: 27px;
        height: 27px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #333;
        cursor: pointer;

        &.active {
          background-color: #333;
          color: #fff;
        }

        &:last-child {
          border-left: none;
        }
      }
    }
  }
}

@media (max-width: 1500px) {
  .title {
    ul.bread {
      > li,
      > li a {
        font-size: 1.25rem;
      }
    }
  }
}

@media (max-width: 1200px) {
  .title {
    flex-wrap: wrap;
    margin-top: 10px;

    ul.bread {
      > li {
        margin-right: 5px;

        &::before {
          width: 15px;
          margin-right: 5px;
        }

        a {
          font-size: 1rem;
        }
      }
    }

    .right {
      flex: 0 0 100%;
      justify-content: flex-end;
      padding-bottom: 10px;

      .select {
        margin-right: 20px;
      }

      .product_total {
        margin-right: 20px;
      }
    }
  }
}
</style>