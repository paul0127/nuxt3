<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  layoutData: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <div>
    <div class="index_adv">
      <div class="b_title">
        <div class="inner">
          <div class="name">{{ layoutData.name }}</div>
          <div class="s_name">{{ layoutData.ename }}</div>
        </div>
      </div>

      <div
        class="column one"
        :class="[
          { one: layoutData.qt.length == 1 },
          { two: layoutData.qt.length == 2 },
        ]"
        v-if="layoutData.qt.length == 1 || layoutData.qt.length == 2"
      >
        <NuxtLink
          :to="item.url"
          v-for="(item, index) in layoutData.qt"
          :key="index"
        >
          <div
            class="img"
            :style="{ backgroundImage: `url(${urlBase}${item.pic})` }"
          ></div>
        </NuxtLink>
      </div>

      <div class="column three" v-if="layoutData.qt.length == 3">
        <NuxtLink :to="layoutData.qt[0].url">
          <div
            class="img"
            :style="{
              backgroundImage: `url(${urlBase}${layoutData.qt[0].pic})`,
            }"
          ></div
        ></NuxtLink>
        <span>
          <NuxtLink :to="layoutData.qt[1].url">
            <div
              class="img"
              :style="{
                backgroundImage: `url(${urlBase}${layoutData.qt[1].pic})`,
              }"
            ></div
          ></NuxtLink>
          <NuxtLink :to="layoutData.qt[2].url">
            <div
              class="img"
              :style="{
                backgroundImage: `url(${urlBase}${layoutData.qt[2].pic})`,
              }"
            ></div
          ></NuxtLink>
        </span>
      </div>

      <div class="column four" v-if="layoutData.qt.length == 4">
        <span>
          <NuxtLink :to="layoutData.qt[0].url">
            <div
              class="img"
              :style="{
                backgroundImage: `url(${urlBase}${layoutData.qt[0].pic})`,
              }"
            ></div
          ></NuxtLink>
          <NuxtLink :to="layoutData.qt[1].url">
            <div
              class="img"
              :style="{
                backgroundImage: `url(${urlBase}${layoutData.qt[1].pic})`,
              }"
            ></div
          ></NuxtLink>
        </span>
        <span>
          <NuxtLink :to="layoutData.qt[2].url">
            <div
              class="img"
              :style="{
                backgroundImage: `url(${urlBase}${layoutData.qt[2].pic})`,
              }"
            ></div
          ></NuxtLink>
          <NuxtLink :to="layoutData.qt[3].url">
            <div
              class="img"
              :style="{
                backgroundImage: `url(${urlBase}${layoutData.qt[3].pic})`,
              }"
            ></div></NuxtLink
        ></span>
      </div>

      <div class="column five" v-if="layoutData.qt.length == 5">
        <span>
          <NuxtLink :to="layoutData.qt[0].url">
            <div
              class="img"
              :style="{
                backgroundImage: `url(${urlBase}${layoutData.qt[0].pic})`,
              }"
            ></div
          ></NuxtLink>
          <NuxtLink :to="layoutData.qt[1].url">
            <div
              class="img"
              :style="{
                backgroundImage: `url(${urlBase}${layoutData.qt[1].pic})`,
              }"
            ></div
          ></NuxtLink>
        </span>
        <NuxtLink :to="layoutData.qt[2].url">
          <div
            class="img"
            :style="{
              backgroundImage: `url(${urlBase}${layoutData.qt[2].pic})`,
            }"
          ></div
        ></NuxtLink>
        <span
          ><NuxtLink :to="layoutData.qt[3].url">
            <div
              class="img"
              :style="{
                backgroundImage: `url(${urlBase}${layoutData.qt[3].pic})`,
              }"
            ></div
          ></NuxtLink>
          <NuxtLink :to="layoutData.qt[4].url">
            <div
              class="img"
              :style="{
                backgroundImage: `url(${urlBase}${layoutData.qt[4].pic})`,
              }"
            ></div></NuxtLink
        ></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$border-color: #9f9090;
$padding-bottom-large: 50px;
$margin-bottom-large: 70px;
$padding-bottom-small: 20px;
$margin-bottom-small: 40px;

.index_adv {
  display: block;
  padding-bottom: $padding-bottom-large;
  margin-bottom: $margin-bottom-large;
  border-bottom: 1px solid $border-color;

  .column {
    display: flex;

    a:hover {
      opacity: 0.8;
    }

    a .img {
      background-size: cover;
      background-position: center;
    }

    &.one {
      a {
        flex: 1;

        .img {
          padding-bottom: 27%;
        }
      }
    }

    &.two {
      a {
        margin-right: 10px;

        &:first-child {
          flex: 2;

          .img {
            padding-bottom: 27%;
          }
        }

        &:last-child {
          flex: 1;
          margin-right: 0;

          .img {
            padding-bottom: 54%;
          }
        }
      }
    }

    &.three {
      a {
        cursor: pointer;

        &:hover {
          opacity: 0.8;
        }
      }

      > a {
        flex: 3;
        margin-right: 10%;

        .img {
          padding-bottom: 123%;
        }
      }

      > span {
        flex: 2;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        > a {
          &:first-child {
            flex: 3;
            margin-bottom: 20%;

            .img {
              padding-bottom: 67%;
            }
          }

          &:last-child {
            flex: 4;

            .img {
              padding-bottom: 100%;
            }
          }
        }
      }
    }

    &.four {
      > span {
        flex: 2;
        margin-right: 5%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        &:last-child {
          margin-right: 0;
        }

        > a {
          margin-bottom: 10%;
          width: 80%;

          &:last-child {
            margin-bottom: 0;
          }

          .img {
            padding-bottom: 100%;
          }
        }
      }
    }

    &.five {
      a {
        cursor: pointer;

        &:hover {
          opacity: 0.8;
        }
      }

      > a {
        flex: 3;
        margin-right: 5%;

        .img {
          padding-bottom: 123%;
        }
      }

      > span {
        flex: 2;
        margin-right: 5%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        &:last-child {
          margin-right: 0;
        }

        &:first-child {
          a {
            &:first-child {
              flex: 3;
              margin-bottom: 18%;

              .img {
                padding-bottom: 67%;
              }
            }

            &:last-child {
              flex: 4;

              .img {
                padding-bottom: 100%;
              }
            }
          }
        }

        &:last-child {
          a {
            &:first-child {
              flex: 4;
              margin-bottom: 18%;

              .img {
                padding-bottom: 100%;
              }
            }

            &:last-child {
              flex: 3;

              .img {
                padding-bottom: 67%;
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 800px) {
    padding-bottom: $padding-bottom-small;
    margin-bottom: $margin-bottom-small;

    .column {
      flex-wrap: wrap;

      a img {
        width: 100%;
      }

      &.two {
        a {
          margin-right: 0;

          &:first-child {
            flex: 0 0 100%;
            margin-bottom: 20px;
          }

          &:last-child {
            flex: 0 0 100%;
          }
        }
      }

      &.three {
        > a {
          flex: 0 0 100%;
          margin-bottom: 20px;
        }

        > span {
          flex-direction: row;
          flex-wrap: wrap;

          > a {
            &:first-child {
              flex: 0 0 100%;
              margin-bottom: 20px;
            }

            &:last-child {
              flex: 0 0 100%;
            }
          }
        }
      }

      &.four {
        > span {
          flex: 0 0 100%;
          margin-right: 0;

          &:first-child {
            margin-bottom: 20px;
          }

          > a {
            margin-bottom: 20px;
          }
        }
      }

      &.five {
        > span {
          flex: 0 0 100%;
          margin-right: 0;

          &:first-child {
            margin-bottom: 20px;

            a:first-child {
              margin-bottom: 20px;
            }
          }
        }

        > a {
          flex: 0 0 100%;
          margin-right: 0;
          margin-bottom: 20px;
        }

        > span:last-child {
          a:first-child {
            margin-bottom: 20px;
          }
        }
      }
    }
  }
}
</style>
