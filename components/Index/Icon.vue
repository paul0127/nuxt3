<template>
    <div class="index_icon">
        <div class="item">
          <div class="icon"><font-awesome-icon icon="thumbs-up" /></div>
          <div class="name">一年保固 終身保修</div>
        </div>
        <div class="item">
          <div class="icon"><font-awesome-icon icon="gift" /></div>
          <div class="name">不定期會員專屬優惠</div>
        </div>
        <div class="item">
          <div class="icon"><font-awesome-icon icon="info" /></div>
          <div class="name">電器均有商檢合格標籤</div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
/* 首頁icon */
.index_icon {
  display: flex;
  padding-bottom: 45px;

  .item {
    flex: 0 0 33.33%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .icon {
      background-color: #82cbc4;
      width: 107px;
      height: 107px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 3.5rem;
      border-radius: 100%;
      color: #fff;
      margin-bottom: 45px;
    }
  }

  @media (max-width: 800px) {
    flex-wrap: wrap;

    .item {
      flex: 0 0 100%;
      margin-bottom: 40px;

      &:last-child {
        margin-bottom: 0;
      }

      .icon {
        margin-bottom: 20px;
      }
    }
  }
}
</style>