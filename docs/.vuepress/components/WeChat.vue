<template>
  <div class="wechat">
    <div class="wechat-txt">
      <p>~扫码关注&lt;码路工人&gt;了吗？~</p>
      <p>~关注公众号可以第一时间获取最新文章~</p>
      <p>~扫码关注可以联系交流~</p>
    </div>
    <div class="wechat-img">
      <img src="/v-blog/img/QRCode-CoderPower.png" alt="WeChatQRCode">
    </div>
  </div>
</template>

<script>
export default {
  name: 'wechat',
}
</script>

<style>
.wechat {
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  background-color: lightblue;
  align-items:center;
}

.wechat-txt {
  display: flex;
  flex-direction:column;
  align-items:center;
}

.wechat-txt p {
  margin: 0;
}

.wechat-img {
  padding: 6px 0;
}
</style>