<template>
  <div class="container custom">
    <commonTitle
      :breads="[
        {
          name: '會員專區',
          link: '#',
        },
      ]"
    />
    <div class="page payment">
      <div class="info">
        <div class="name">結帳</div>
        <div class="table">
          <div class="head">
            <div class="th image"></div>
            <div class="th product_name">商品</div>
            <div class="th spec">規格</div>
            <div class="th price">單價</div>
            <div class="th qty">數量</div>
            <div class="th m_total">小計</div>
          </div>
          <div class="body">
            <div class="tr">
              <div class="td image">
                <img src="@/assets/cart/product.png" alt="" />
              </div>
              <div class="td_group">
                <div class="td product_name">
                  <a href="#">本期07月每刊好物(2107-02 )美髮轉燈水槍</a>
                </div>
                <div class="td spec">-</div>
                <div class="td price" data-label="單價:">$79</div>
                <div class="td qty" data-label="數量:">1</div>
                <div class="td m_total" data-label="小計:">$79</div>
              </div>
            </div>
            <div class="tr">
              <div class="td image">
                <img src="@/assets/cart/product.png" alt="" />
              </div>
              <div class="td_group">
                <div class="td product_name">
                  <a href="#">本期07月每刊好物(2107-02 )美髮轉燈水槍</a>
                </div>
                <div class="td spec">-</div>
                <div class="td price" data-label="單價:">$79</div>
                <div class="td qty" data-label="數量:">1</div>
                <div class="td m_total" data-label="小計:">$79</div>
              </div>
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
            <div class="alert">(再買861元即將享有運費)</div>
          </div>
        </div>
        <div class="information">
          <div class="section">
            <div class="name">付款方式及寄送方式</div>
            <div class="pay_logistic_select">
              <label for="">付款方式</label>
              <select name="" id="">
                <option value="null">請選擇付款方式</option>
              </select>
            </div>
            <div class="pay_logistic_select">
              <label for="">寄貨方式</label>
              <select name="" id="">
                <option value="null">請選擇寄貨方式</option>
              </select>
            </div>
          </div>
          <div class="section">
            <div class="name">備註</div>
            <textarea name="" id=""></textarea>
          </div>
          <div class="section">
            <div class="name">收件人資料</div>
            <div class="list">
              <div class="item">
                <label for="">收件人姓名</label>
                <input type="text" placeholder="請輸入收件人姓名" />
              </div>
              <div class="item">
                <label for="">連絡電話</label>
                <input type="text" placeholder="請輸入連絡電話" />
              </div>
              <div class="item">
                <label for="">市話</label>
                <div class="tel_type">
                  <input type="text" />
                  <span></span>
                  <input type="text" placeholder="請輸入您的市話" />
                </div>
              </div>
              <div class="item">
                <label for="">收件地址</label>
                <div class="address_type">
                  <select name="" id="" class="city">
                    <option value="台北市">台北市</option>
                  </select>
                  <select name="" id="" class="block">
                    <option value="中正區">中正區</option>
                  </select>
                  <input type="text" class="code" />
                  <input
                    type="text"
                    class="addr"
                    placeholder="請輸入您的地址"
                  />
                </div>
              </div>
              <div class="item">
                <label for="">電子發票</label>
                <div class="radio_type">
                  <input type="radio" name="invoice" id="personal" />
                  <label for="personal"
                    ><span class="circle"></span>個人發票(二聯式)</label
                  >
                  <input type="radio" name="invoice" id="company" />
                  <label for="company"
                    ><span class="circle"></span>公司戶(三聯式)</label
                  >
                </div>
              </div>
              <div class="item half">
                <label for="">統一編號</label>
                <input type="text" placeholder="請輸入統一編號" />
              </div>
              <div class="item half">
                <label for="">發票抬頭</label>
                <input type="text" placeholder="請填寫發票抬頭" />
              </div>
              <div class="item">
                <div class="radio_type">
                  <input type="radio" name="type" id="type_0" />
                  <label for="type_0"
                    ><span class="circle"></span>同購買人</label
                  >
                  <input type="radio" name="type" id="type_1" />
                  <label for="type_1"
                    ><span class="circle"></span>選擇常用收件人資訊</label
                  >
                  <input type="radio" name="type" id="type_2" />
                  <label for="type_2"
                    ><span class="circle"></span>新增收件人</label
                  >
                </div>
              </div>
              <div class="item">
                <label for="">收件地址</label>
                <div class="address_type">
                  <select name="" id="" class="city">
                    <option value="台北市">台北市</option>
                  </select>
                  <select name="" id="" class="block">
                    <option value="中正區">中正區</option>
                  </select>
                  <input type="text" class="code" />
                  <input
                    type="text"
                    class="addr"
                    placeholder="請輸入您的地址"
                  />
                </div>
              </div>
            </div>
          </div>
          <button class="send">立即結帳</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
/* 付款頁 商品 */
.payment {
  .info {
    .name {
      font-size: 1.75rem;
      color: #82cbc4;
      border-left: 5px solid #82cbc4;
      padding-left: 10px;
      margin-bottom: 30px;
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

    @media (max-width: 1200px) {
      padding-top: 0;

      .name {
        font-size: 1.5rem;
        margin-bottom: 20px;
      }

      .table {
        .head {
          display: none;
        }

        .body {
          border-top: 1px solid #707070;

          .tr {
            align-items: flex-start;

            .td {
              font-size: 1.25rem;
            }

            .td_group {
              flex-wrap: wrap;
              flex: 1;

              .td {
                flex: 0 0 100%;
              }
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
          justify-content: flex-end !important;
          flex-direction: row !important;

          &::before {
            content: attr(data-label);
          }
        }
      }
    }
  }

  /* 付款資料 */
  .info {
    .information {
      background: #ffffff 0% 0% no-repeat padding-box;
      box-shadow: inset 10px 50px 50px #00000033, 15px 15px 15px #00000029;
      border-radius: 5px;
      padding: 50px;

      button.send {
        width: 175px;
        height: 50px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #82cbc4;
        color: #fff;
        border: none;
        border-radius: 5px;
        font-size: 1.5rem;

        &:hover {
          opacity: 0.8;
        }
      }

      .section {
        margin-bottom: 35px;

        .pay_logistic_select {
          border: 1px solid #707070;
          display: flex;
          margin-bottom: 25px;
          border-radius: 5px;
          overflow: hidden;

          &:last-child {
            margin-bottom: 0;
          }

          label {
            flex: 0 0 138px;
            font-size: 1.25rem;
            text-align: center;
            color: #333333;
            background-color: #82cbc4;
            padding: 10px 0;
            font-weight: bold;
          }

          select {
            flex: 1;
            min-width: 0;
            border: none;
            padding: 10px;
            font-size: 1.25rem;
            outline: none;
          }
        }

        textarea {
          border: 1px solid #707070;
          border-radius: 5px;
          padding: 10px;
          width: 100%;
          min-height: 120px;
        }

        .list {
          display: flex;
          flex-wrap: wrap;
          margin: 0 -10px;

          .item {
            flex: 0 0 100%;
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 20px;
            padding: 0 10px;

            &.half {
              flex: 0 0 50%;
            }

            > label {
              flex: 0 0 100%;
              font-size: 1.25rem;
              font-weight: bold;
              margin-bottom: 10px;
            }

            > input {
              min-width: 0;
              flex: 1;
              padding: 10px;
              border-radius: 5px;
              outline: none;
              border: 1px solid #707070;
              font-size: 1.25rem;
            }

            .tel_type {
              display: flex;
              align-items: center;

              input {
                padding: 10px;
                outline: none;
                border-radius: 5px;
                border: 1px solid #707070;
                font-size: 1.25rem;

                &:first-child {
                  width: 100px;
                  min-width: 0;
                }

                &:last-child {
                  width: 250px;
                  min-width: 0;
                }
              }

              span {
                width: 12px;
                height: 2px;
                background-color: #000;
                margin: 0 10px;
              }
            }

            .address_type {
              display: flex;
              flex-wrap: wrap;
              flex: 0 0 100%;
              font-size: 1.25rem;

              .city,
              .block,
              .code {
                flex: 1;
                padding: 10px;
                margin-bottom: 10px;
                border-radius: 5px;
                border: 1px solid #707070;
                outline: none;
                text-align: center;

                &.city {
                  margin-right: 20px;
                }

                &.code {
                  margin-left: 20px;
                }
              }

              .addr {
                flex: 0 0 100%;
                padding: 10px;
                border-radius: 5px;
                border: 1px solid #707070;
                outline: none;
              }
            }

            .radio_type {
              display: flex;
              flex-wrap: wrap;
              align-items: center;

              input[type='radio'] {
                display: none;
              }

              label {
                display: flex;
                align-items: center;
                font-size: 1.25rem;
                margin-right: 20px;
                cursor: pointer;

                span.circle {
                  width: 20px;
                  height: 20px;
                  border: 1px solid #707070;
                  border-radius: 100%;
                  margin-right: 10px;
                  display: flex;
                  align-items: center;
                  justify-content: center;

                  &::before {
                    content: '';
                    width: 10px;
                    height: 10px;
                    border-radius: 100%;
                  }
                }

                input[type='radio']:checked + & span.circle::before {
                  background-color: #333;
                }
              }
            }
          }
        }
      }

      @media (max-width: 1200px) {
        padding: 50px 20px;

        .section {
          margin-bottom: 20px;

          .pay_logistic_select {
            margin-bottom: 15px;

            label {
              font-size: 1rem;
              flex: 0 0 100px;
            }

            select {
              font-size: 1rem;
            }
          }

          .list {
            .item {
              &.half {
                flex: 0 0 100%;
              }

              > input {
                font-size: 1rem;
                padding: 5px 10px;
              }

              .tel_type {
                flex: 0 0 100%;

                input {
                  font-size: 1rem;
                  padding: 5px 10px;

                  &:first-child {
                    width: 50px;
                  }

                  &:last-child {
                    width: 150px;
                  }
                }
              }

              .address_type {
                font-size: 1rem;

                .city,
                .block,
                .code {
                  flex: 0 0 100%;
                  padding: 5px 10px;

                  &.city {
                    margin-right: 0;
                  }

                  &.code {
                    margin-left: 0;
                  }
                }

                .addr {
                  padding: 5px 10px;
                }
              }

              .radio_type {
                label {
                  font-size: 1rem;
                }
              }
            }
          }
        }
      }
    }
  }

  /* 彈出收件人 */
  .info {
    .person_pop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      background-color: rgb(0 0 0 / 50%);
      display: none;

      &.active {
        display: flex;
      }

      .person_frame {
        width: 100%;
        max-width: 800px;
        margin: 0 15px;
        background-color: #fff;
        border: 1px solid #707070;
        padding: 15px 0;
        margin-bottom: 0;

        .close {
          padding: 0 15px;
          flex: 0 0 100%;
          display: flex;
          justify-content: flex-end;
          cursor: pointer;
        }

        .list {
          padding: 0 15px;
          flex: 0 0 100%;
          margin-top: 35px;

          .item {
            padding: 10px;
            border: 1px solid #707070;
            margin-bottom: 10px;
            cursor: pointer;

            &:hover {
              opacity: 0.8;
            }
          }
        }
      }
    }
  }
}
</style>