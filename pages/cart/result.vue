<script setup>
import Title from '~/components/common/Title.vue'
</script>
<template>
  <div class="container custom">
    <Title
      :breads="[
        {
          name: '會員專區',
          link: '#',
        },
      ]"
    />
    <div class="page result">
      <div class="info">
        <div class="name">訂單明細</div>
        <div class="paymentInfo">
          <div class="item">
            <label for="">訂單編號</label><span>ORD20220118171237809</span>
          </div>
          <div class="br_line"></div>
          <div class="item">
            <label for="">付款方式</label><span>信用卡刷卡</span>
          </div>
          <div class="item">
            <label for="">寄送方式</label><span>全家超商配送</span>
          </div>
          <div class="item">
            <label for="">收件人</label><span>林丕宏</span>
          </div>
          <div class="item">
            <label for="">聯絡手機</label><span>0981329186</span>
          </div>
          <div class="item">
            <label for="">聯絡市話</label><span>0229803551</span>
          </div>
          <div class="br_line"></div>
          <div class="item">
            <label for="">配送地址</label
            ><span>新北市三重區大仁街45號一樓</span>
          </div>
          <div class="br_line"></div>
          <div class="item">
            <label for="">配送超商編號</label><span>240226</span>
          </div>
          <div class="br_line"></div>
          <div class="item">
            <label for="">配送超商門市</label><span>仟發門市</span>
          </div>
          <div class="br_line"></div>
          <div class="item">
            <label for="">配送超商地址</label
            ><span>台北市大同區民生西路95號97號</span>
          </div>
        </div>
        <div class="table">
          <div class="head">
            <div class="th product_name">商品</div>
            <div class="th spec">規格</div>
            <div class="th price">單價</div>
            <div class="th qty">數量</div>
            <div class="th m_total">小計</div>
          </div>
          <div class="body">
            <div class="tr">
              <div class="td product_name">
                本期07月每刊好物(2107-02 )美髮轉燈水槍
              </div>
              <div class="td spec">-</div>
              <div class="td price" data-label="單價:">$79</div>
              <div class="td qty" data-label="數量:">1</div>
              <div class="td m_total" data-label="小計:">$79</div>
            </div>
            <div class="tr">
              <div class="td product_name">
                本期07月每刊好物(2107-02 )美髮轉燈水槍
              </div>
              <div class="td spec">-</div>
              <div class="td price" data-label="單價:">$79</div>
              <div class="td qty" data-label="數量:">1</div>
              <div class="td m_total" data-label="小計:">$79</div>
            </div>
          </div>
          <div class="foot">
            <div class="tr">
              <div class="td">小計</div>
              <div class="td m_total">$1000</div>
            </div>
            <div class="tr">
              <div class="td">運費</div>
              <div class="td m_total">$50</div>
            </div>
            <div class="tr">
              <div class="td">應付總額</div>
              <div class="td m_total">$1050</div>
            </div>
          </div>
        </div>
        <div class="back">
          <a href="./index.html">回首頁</a>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
/* 結果 商品 */
.result {
  .info {
    .name {
      font-size: 1.75rem;
      color: #82cbc4;
      border-left: 5px solid #82cbc4;
      padding-left: 10px;
      margin-bottom: 30px;
    }

    .paymentInfo {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 20px;
      font-size: 1.25rem;

      .item {
        flex: 0 0 50%;
        margin-bottom: 10px;

        label {
          font-weight: bold;
          margin-right: 10px;
        }
      }

      .br_line {
        flex: 0 0 100%;
      }
    }

    .table {
      margin-bottom: 50px;

      .head {
        display: flex;
        border: 1px solid #707070;

        .th {
          flex: 1;
          color: #333;
          font-size: 1.35rem;
          padding: 10px;
          font-weight: 700;
          display: flex;
          justify-content: center;
        }
      }

      .body {
        border-left: 1px solid #707070;
        border-right: 1px solid #707070;

        .tr {
          display: flex;
          padding-bottom: 30px;
          margin-bottom: 30px;
          border-bottom: 1px solid #707070;

          &:first-child {
            padding-top: 20px;
          }

          &:last-child {
            margin-bottom: 0;
          }

          .td_group {
            flex: 0 0 calc(100% - 120px);
            display: flex;
            align-items: center;
          }

          .td {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 1.5rem;
            padding: 0 10px;

            img {
              max-width: 100px;
              border: 1px solid #707070;
            }

            a {
              color: #333;
            }

            button:hover {
              opacity: 0.8;
            }
          }
        }
      }

      .foot {
        border-left: 1px solid #707070;
        border-right: 1px solid #707070;
        border-bottom: 1px solid #707070;
        padding-top: 30px;
        padding-bottom: 15px;

        .tr {
          display: flex;

          .td {
            flex: 1;
            font-size: 1.25rem;
            padding: 0 10px;
            text-align: center;

            &:first-child {
              text-align: right;
            }

            &:last-child {
              color: #333 !important;
            }
          }
        }

        .alert {
          text-align: right;
          margin-bottom: 0;
        }
      }

      .image {
        flex: 0 0 120px !important;
      }

      .spec {
        flex: 0 0 150px !important;
      }

      .price {
        flex: 0 0 150px !important;
        color: #333;
      }

      .qty {
        flex: 0 0 100px !important;
      }

      .m_total {
        flex: 0 0 150px !important;
        color: #333;
      }

      .operate {
        flex: 0 0 120px !important;
      }
    }

    .back {
      display: flex;
      align-items: center;
      justify-content: center;

      a {
        background-color: #82cbc4;
        color: #fff;
        font-size: 1.5rem;
        padding: 7px 30px;
        border-radius: 30px;
        text-decoration: none;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }

  @media (max-width: 1200px) {
    .info {
      padding-top: 0;

      .name {
        font-size: 1.5rem;
        margin-bottom: 20px;
      }

      .paymentInfo {
        font-size: 1rem;

        .item {
          flex: 0 0 100%;
        }
      }

      .table {
        .head {
          display: none;
        }

        .body {
          border-top: 1px solid #707070;

          .tr {
            align-items: flex-start;
            flex-wrap: wrap;
            flex: 1;

            .td {
              flex: 0 0 100%;
              font-size: 1.25rem;
            }
          }
        }

        .foot {
          .tr {
            .td {
              &.m_total {
                flex: 1 !important;
                text-align: right;
              }

              &.operate {
                display: none;
              }
            }
          }
        }

        .image {
          flex: 0 0 120px !important;
        }

        .product_name,
        .spec {
          flex: 0 0 100% !important;
          align-items: flex-start !important;
        }

        .price,
        .qty,
        .m_total {
          flex: 0 0 100% !important;
          justify-content: flex-start !important;
          flex-direction: row !important;

          &::before {
            content: attr(data-label);
          }
        }
      }
    }
  }
}
</style>