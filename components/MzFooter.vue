<template>
  <footer id="footer">
    <div class="footer-content">
      <p>Copyright © 2022-2023 清梦徐徐个人博客 | Powered By mzCMS</p>
      <p>网站备案号：<a href="https://beian.miit.gov.cn">京ICP备2021034088号</a></p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MzFooter'
}
</script>

<style lang="scss" scoped>
#footer {
  height: auto;
  padding: 1px;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  .footer-content {
    width: 100%;
    height: 60px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
