<template>
  <header id="header">
    <nav class="header-nav">
      <div class="menus-items">
        <div class="menus-item" v-for="(item, index) in menuList" :key="index">
          {{ item.name }}
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'MzHeader',
  async fetch () {
    this.menuList = [{ id: 1, name: '菜单1' }, { id: 2, name: '菜单2' }, { id: 3, name: '菜单3' }, { id: 4, name: '菜单4' }, { id: 5, name: '菜单5' }]
  },
  fetchOnServer: true,
  data () {
    return {
      menuList: []
    }
  }
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
      align-items: center;
      position: absolute;
      width: 500px;
      height: 60px;
      left: 0;
      right: 0;
      top: 0;
      margin: auto;

      .menus-item {
        padding: 4px 20px;
        position: relative;
        display: inline-block;
        &:hover{
          cursor: pointer;
        }
      }
    }
  }
}
</style>
