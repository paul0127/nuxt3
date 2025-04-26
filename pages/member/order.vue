<script setup>
import pager from '~/components/common/pager.vue'

definePageMeta({
  layout: 'member',
})
</script>
<template>
  <div>
    <div class="m_title">訂單查詢</div>
    <div class="table">
      <div class="head">
        <div class="th">訂單編號</div>
        <div class="th shoptype">訂購方式</div>
        <div class="th">購物日期</div>
        <div class="th status">訂單狀態</div>
        <div class="th ship">寄件方式</div>
        <div class="th payment">付款方式</div>
        <div class="th operate">操作</div>
      </div>
      <div class="body">
        <div class="tr_group">
          <div class="tr">
            <div class="td">20210714001</div>
            <div class="td shoptype">零售</div>
            <div class="td">2021/07/14</div>
            <div class="td status">訂單成立</div>
            <div class="td ship">公司寄送</div>
            <div class="td payment">貨到付款</div>
            <div class="td operate"><a>檢視</a></div>
          </div>
          <div class="content">
            <div class="order_detail">
              <div class="item"><label for="">訂購方式：</label>零售</div>
              <div class="item"><label for="">寄件方式：</label>公司寄送</div>
              <div class="item"><label for="">付款方式：</label>貨到付款</div>
            </div>
            <div class="c_head">
              <div class="c_th img"></div>
              <div class="c_th">商品</div>
              <div class="c_th spec">規格</div>
              <div class="c_th price">單價</div>
              <div class="c_th qty">數量</div>
              <div class="c_th m_total">小計</div>
            </div>
            <div class="c_body">
              <div class="c_tr">
                <div class="c_td img">
                  <img src="@/assets/member/product.png" alt="" />
                </div>
                <div class="c_td">
                  本期07月每刊好物美髮轉本期07月每刊好物美髮轉 燈水槍
                  <span class="specification">- 100ml</span>
                </div>
                <div class="c_td spec"></div>
                <div class="c_td price">$79000</div>
                <div class="c_td qty">1</div>
                <div class="c_td m_total">$79000</div>
              </div>
              <div class="c_tr">
                <div class="c_td img">
                  <img src="@/assets/member/product.png" alt="" />
                </div>
                <div class="c_td">
                  本期07月每刊好物(2107-02)美髮轉 燈水槍
                  <span class="specification">- 100ml</span>
                </div>
                <div class="c_td spec"></div>
                <div class="c_td price">$79</div>
                <div class="c_td qty">1</div>
                <div class="c_td m_total">$79</div>
              </div>
              <div class="c_tr">
                <div class="c_td img">
                  <img src="@/assets/member/product.png" alt="" />
                </div>
                <div class="c_td">
                  本期07月每刊好物(2107-02)美髮轉 燈水槍
                  <span class="specification">- 100ml</span>
                </div>
                <div class="c_td spec"></div>
                <div class="c_td price">$79</div>
                <div class="c_td qty">1</div>
                <div class="c_td m_total">$79</div>
              </div>
            </div>
            <div class="c_foot">
              <div class="c_tr">
                <div class="c_td">小計</div>
                <div class="c_td m_total">$79</div>
              </div>
              <div class="c_tr">
                <div class="c_td">運費</div>
                <div class="c_td m_total">$60</div>
              </div>
              <div class="c_tr">
                <div class="c_td">應付總額</div>
                <div class="c_td m_total">$139</div>
              </div>
            </div>
          </div>
        </div>
        <div class="tr_group">
          <div class="tr">
            <div class="td">20210714001</div>
            <div class="td shoptype">零售</div>
            <div class="td">2021/07/14</div>
            <div class="td status">訂單成立</div>
            <div class="td ship">公司寄送</div>
            <div class="td payment">貨到付款</div>
            <div class="td operate"><a>檢視</a></div>
          </div>
          <div class="content">
            <div class="order_detail">
              <div class="item"><label for="">訂購方式：</label>零售</div>
              <div class="item"><label for="">寄件方式：</label>公司寄送</div>
              <div class="item"><label for="">付款方式：</label>貨到付款</div>
            </div>
            <div class="c_head">
              <div class="c_th img"></div>
              <div class="c_th">商品</div>
              <div class="c_th spec">規格</div>
              <div class="c_th price">單價</div>
              <div class="c_th qty">數量</div>
              <div class="c_th m_total">小計</div>
            </div>
            <div class="c_body">
              <div class="c_tr">
                <div class="c_td img">
                  <img src="@/assets/member/product.png" alt="" />
                </div>
                <div class="c_td">
                  本期07月每刊好物(2107-02)美髮轉 燈水槍
                  <span class="specification">- 100ml</span>
                </div>
                <div class="c_td spec"></div>
                <div class="c_td price">$79</div>
                <div class="c_td qty">1</div>
                <div class="c_td m_total">$79</div>
              </div>
            </div>
            <div class="c_foot">
              <div class="c_tr">
                <div class="c_td">小計</div>
                <div class="c_td m_total">$79</div>
              </div>
              <div class="c_tr">
                <div class="c_td">運費</div>
                <div class="c_td m_total">$60</div>
              </div>
              <div class="c_tr">
                <div class="c_td">應付總額</div>
                <div class="c_td m_total">$139</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <pager />
  </div>
</template>
<style lang="scss" src="./form.scss" scoped />
