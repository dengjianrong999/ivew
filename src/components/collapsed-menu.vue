<template>
  <Dropdown>
    <a href="javascript:void(0)">
      <Icon :type="item.meta.icon"></Icon>
    </a>
    <Dropdown-menu slot="list" v-for="(itemchild,index) in item.children"  :key="index">
      <Dropdown-item
        v-if="itemchild.children == undefined"
        @click.native="routerTo(itemchild)"
      >{{itemchild.meta.title}}</Dropdown-item>
      <Dropdown placement="right-start" v-if="itemchild.children != undefined">
        <Dropdown-item @click.native="routerTo1(itemchild)">{{itemchild.meta.title}}</Dropdown-item>
        <Dropdown-menu
          slot="list"
          v-for="(child,ind) in itemchild.children"
          :key="ind"
          @click.native="routerNext(child)"
        >{{child.meta.title}}</Dropdown-menu>
      </Dropdown>
    </Dropdown-menu>
  </Dropdown>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    routerTo(itemchild) {
      this.$router.push(itemchild.path);
    },
    routerTo1(itemchild) {
      if (itemchild.children != undefined) {
        return;
      } else {
        this.$router.push(itemchild.path);
      }
    },
    routerNext(child) {
      this.$router.push(child.path);
    }
  },
  mounted() {}
};
</script>
<style scoped lang="less">
.ivu-dropdown-menu {
  font-size: 12px;
}
.ivu-icon {
  color: #666;
}
.ivu-tooltip:hover .ivu-icon,
.ivu-dropdown:hover .ivu-icon {
  color: rgb(122, 204, 236);
}
</style>

