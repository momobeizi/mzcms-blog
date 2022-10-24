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
  asyncData () {
    // let result = 
    // await getMenuList().then(res => {
    //   result.menuList = res
    // })
    // console.log(result)
    return {
      menuList: [{ id: 1, name: '菜单1' }, { id: 2, name: '菜单2' }, { id: 3, name: '菜单3' }, { id: 4, name: '菜单4' }, { id: 5, name: '菜单5' }]
    }
  },
  data () {
    return {
      
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
      position: absolute;
      width: 500px;
      left: 0;
      right: 0;
      top: 10px;
      margin: auto;

      .menus-item {
        padding: 0 4px;
        position: relative;
        display: inline-block;
      }
    }
  }
}
</style>
