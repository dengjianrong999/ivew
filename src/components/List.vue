<template>
  <div>   

    <div>递归菜单</div>
    <div class="list-item" v-for="(item, index) in list" :key="index">
      <div class="item-name" @click="tagShow(item)" >
        @
        <span>{{item.label}}+</span>
      </div>
      <!-- <transition name="toTop" class="toTop"> -->
      <transition name="adc">
        <div v-if="item.children && item.children.length" class="children-item" v-show="item.show">
          <list :list="item.children"></list>
        </div>
      </transition>
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
<style scoped>
.list-item {
  padding-left: 40px;
  position: relative;
}
.children-item {
  transition: all 0.5s;
}
.adc-enter-active,
.adc-leave-active {
  transition: all 0.5s ease-out;
}
.adc-enter,
.adc-leave-to {
  height: 0;
}
.list-item {
  width: 300px;
  z-index: 2;
  overflow: hidden;
  border: 1px solid #ededed;
}
</style>



