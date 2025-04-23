<script setup>
import Title from '~/components/common/Title.vue'
import productImg from '@/assets/cart/product.png'
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
    <div class="page cart">
      <div class="info">
        <div class="name">購物車清單</div>
        <div class="list">
          <div class="item">
            <div class="brand_name">
              <input type="checkbox" id="checkbox_01" />
              <label for="checkbox_01"></label>
              <div
                class="img"
                :style="{ backgroundImage: `url(${productImg})` }"
              ></div>
              <a href="#">品牌名稱</a>
            </div>
            <div class="table">
              <div class="head">
                <div class="th image"></div>
                <div class="th product_name">商品</div>
                <div class="th spec">規格</div>
                <div class="th price">單價</div>
                <div class="th qty">數量</div>
                <div class="th m_total">小計</div>
                <div class="th operate"></div>
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
                    <div class="td qty">
                      <select name="" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                    <div class="td m_total" data-label="小計:">$79</div>
                    <div class="td operate">
                      <button class="add_favorite">加入收藏</button
                      ><button class="del_item">移除</button>
                    </div>
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
                    <div class="td qty">
                      <select name="" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                    <div class="td m_total" data-label="小計:">$79</div>
                    <div class="td operate">
                      <button class="add_favorite">加入收藏</button
                      ><button class="del_item">移除</button>
                    </div>
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
                    <div class="td qty">
                      <select name="" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                    <div class="td m_total" data-label="小計:">$79</div>
                    <div class="td operate">
                      <button class="add_favorite">加入收藏</button
                      ><button class="del_item">移除</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="foot">
                <div class="tr">
                  <div class="td">總計：</div>
                  <div class="td m_total">$1000</div>
                  <div class="td operate"></div>
                </div>
                <div class="alert">(該品牌未滿3000元不可加入結帳)</div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="brand_name">
              <input type="checkbox" id="checkbox_02" />
              <label for="checkbox_02"></label>
              <div
                class="img"
                :style="{ backgroundImage: `url(${productImg})` }"
              ></div>
              <a href="#">品牌名稱</a>
            </div>
            <div class="table">
              <div class="head">
                <div class="th image"></div>
                <div class="th product_name">商品</div>
                <div class="th spec">規格</div>
                <div class="th price">單價</div>
                <div class="th qty">數量</div>
                <div class="th m_total">小計</div>
                <div class="th operate"></div>
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
                    <div class="td qty">
                      <select name="" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                    <div class="td m_total" data-label="小計:">$79</div>
                    <div class="td operate">
                      <button class="add_favorite">加入收藏</button
                      ><button class="del_item">移除</button>
                    </div>
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
                    <div class="td qty">
                      <select name="" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                    <div class="td m_total" data-label="小計:">$79</div>
                    <div class="td operate">
                      <button class="add_favorite">加入收藏</button
                      ><button class="del_item">移除</button>
                    </div>
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
                    <div class="td qty">
                      <select name="" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                    <div class="td m_total" data-label="小計:">$79</div>
                    <div class="td operate">
                      <button class="add_favorite">加入收藏</button
                      ><button class="del_item">移除</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="foot">
                <div class="tr">
                  <div class="td">總計：</div>
                  <div class="td m_total">$1000</div>
                  <div class="td operate"></div>
                </div>
                <div class="alert">(該品牌未滿3000元不可加入結帳)</div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="discount_list">
            <div class="item">
              <label for="">低消1000,折抵50元</label>
              <div class="discount_price">
                <svg
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 1 5 35"
                  style="fill: red"
                >
                  <path
                    d="M0 0v2.27a2 2 0 010 3.46v2.54a2 2 0 010 3.46v2.54a2 2 0 010 3.46V19h2v-1h-.76A2.99 2.99 0 001 13.76v-1.52a3 3 0 000-4.48V6.24a3 3 0 000-4.48V1h1V0H0z"
                  ></path>
                </svg>
                <span>-$50</span>
                <svg
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 1 5 35"
                  style="fill: red"
                >
                  <path
                    d="M0 0v2.27a2 2 0 010 3.46v2.54a2 2 0 010 3.46v2.54a2 2 0 010 3.46V19h2v-1h-.76A2.99 2.99 0 001 13.76v-1.52a3 3 0 000-4.48V6.24a3 3 0 000-4.48V1h1V0H0z"
                  ></path>
                </svg>
              </div>
              <button>取消</button>
            </div>
          </div>
          <div class="discount">
            <div class="text">
              <label for="">折扣碼:</label>
              <input type="text" />
            </div>
            <button>加入</button>
          </div>
          <div class="right">
            <div class="total">
              <label for="">商品總額</label>
              $139
            </div>
            <div class="btns">
              <button class="go_shop" onclick="location.href='./'">
                繼續購物
              </button>
              <button class="go_pay" onclick="location.href='./payment.html'">
                結帳
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped src="./cart.scss" />