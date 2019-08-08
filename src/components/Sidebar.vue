<template>
      <div v-if='!item.meta.hideInMenu'>
         <!-- //一级菜单 -->
         <MenuItem :name='item.path' :to="item.path" v-if="item.children == undefined">
            <Icon type="ios-people"/>
             {{item.meta.title}} 
        </MenuItem>
        <!-- //二级菜单 -->
      <Submenu :name='item.path'  v-if="item.children !=undefined">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>{{item.meta.title}}
          </template>
          <!-- 二级菜单递归 -->
          <template  v-for="(child,inde) in item.children">
            <sidebar-item 
            v-if="child.children&&child.children !=undefined"
            :key='inde'
            :item="child"/>
          <MenuItem v-else-if="child.children !='undefined'"  :name="child.path"  :to="child.path" :key='inde'>
              {{child.meta.title}}
          </MenuItem>
          </template>
      </Submenu>
      </div>
</template>
<script>
export default {
  name:"sidebarItem",
  props: {
   item: {
      type: Object,
      required: true
    },
  },
   data() {
    return {
    };
  },
  mounted() {
  }
};
</script>
<style scoped lang="less">
.ivu-menu-vertical .ivu-menu-item, 
.ivu-menu-vertical .ivu-menu-submenu-title {
  text-align: left;
}
</style>
