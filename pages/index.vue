<template>
  <div>{{menuList}}</div>
</template>

<script>
export default {
  name: 'IndexPage',
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
}
</script>
