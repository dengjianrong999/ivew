<template>
  <div>
    <div class="list-item" v-for="(item, index) in list" :key="index">
      <div class="item-name" :class="item.show?'activeCol':''" @click="tagShow(item)">
        @
        <span>{{item.label}}+</span>
      </div>
      <!-- <transition name="toTop" class="toTop"> -->
      <div
        v-if="item.children && item.children.length"
        class="children-item"
        :class="item.show?'open':''"
      >
        <list :list="item.children"></list>
      </div>
      <!-- </transition> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "List",
  props: {
    list: Array
  },
  methods: {
    tagShow(item) {
      item.show = !item.show;
    }
  }
};
</script>
<style lang="less" scoped>
div {
  box-sizing: border-box;
}
.children-item {
  background-color: #fff;
  cursor: pointer;
  max-height: 0px;
  -webkit-transition: all 0.3s;
  transition: all 1s;
}
.open {
  max-height: 600px;
  -webkit-transition: max-height 0.5s;
  transition: max-height 0.5s;
}
.list-item {
  cursor: pointer;
  padding-left: 40px;
  text-align: left;
  position: relative;
  z-index: 2;
  overflow: hidden;
  border-top: 1px solid #fff;
}
.item-name {
  padding: 8px 30px;
  background-color: #FFF;
  color: #333;
}
.activeCol {
  background-color: rgb(173, 180, 81);
}
</style>



