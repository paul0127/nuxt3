<script setup>
definePageMeta({
  layout: 'member'
})
</script>
<template>
    <div>
      <div class="m_title">
        收件地址管理
      </div>
      <div class="top_btns">
          <button class="add">新增收件資料</button>
        </div>
        <div class="form popup">
          <div class="list white">
            <div class="close"><i class="fas fa-times-circle"></i></div>
            <div class="item full">
              <label for="">收件人姓名</label>
              <input type="text" placeholder="請輸入收件人姓名" />
            </div>
            <div class="item full">
              <label for="">連絡電話</label>
              <input type="text" placeholder="請輸入連絡電話" />
            </div>
            <div class="item full">
              <label for="">市話</label>
              <div class="tel_type">
                <input type="text" />
                <span></span>
                <input type="text" placeholder="請輸入您的市話" />
              </div>
            </div>
            <div class="item full">
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
            <div class="check_button">
              <a class="cancel">取消</a>
              <a class="add">新增地址</a>
            </div>
          </div>
        </div>
        <div class="table green">
          <div class="head">
            <div class="th option">預設</div>
            <div class="th name">收件人</div>
            <div class="th address">地址</div>
            <div class="th tel">市話</div>
            <div class="th phone">手機</div>
            <div class="th operation">編輯</div>
          </div>
          <div class="body">
            <div class="tr_group">
              <div class="tr">
                <div class="td option">
                  <input type="radio" name="option" id="r_0" />
                  <label for="r_0"><span class="circle"></span></label>
                </div>
                <div class="td name">林先生</div>
                <div class="td address" data-label="地址:">100台北市中正區xxx路xx號</div>
                <div class="td tel" data-label="市話:">02-12345678</div>
                <div class="td phone" data-label="手機:">0912345678</div>
                <div class="td operation">
                  <a class="edit">編輯地址</a><a class="delete">刪除</a>
                </div>
              </div>
              <div class="tr">
                <div class="td option">
                  <input type="radio" name="option" id="r_1" />
                  <label for="r_1"><span class="circle"></span></label>
                </div>
                <div class="td name">林先生</div>
                <div class="td address" data-label="地址:">100台北市中正區xxx路xx號</div>
                <div class="td tel" data-label="市話:">02-12345678</div>
                <div class="td phone" data-label="手機:">0912345678</div>
                <div class="td operation">
                  <a class="edit">編輯地址</a><a class="delete">刪除</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>
<style lang="scss" src="./form.scss" scoped />