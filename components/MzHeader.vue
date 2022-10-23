<template>
  <header id="header">
    <nav class="header-nav">
      <div class="menus-items">
        <div class="menus-item">
          1
        </div>
        <div class="menus-item">
          2
        </div>
        <div class="menus-item">
          3
        </div>
        <div class="menus-item">
          4
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'MzHeader'
}
</script>

<style lang="scss" scoped>
#header {
  height: 60px;
  width: 100%;
  .header-nav {
    .menus-items {
      display: flex;
      justify-content: center;
      position: absolute;
      width: 500px;
      left: 0;
      right: 0;
      top: 10px;
      margin: auto;
      .menus_item {
        position: relative;
        display: inline-block;
        padding: 0px 0px 0px 14px;
      }
    }
  }
}
</style>
