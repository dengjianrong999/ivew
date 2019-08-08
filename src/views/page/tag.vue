<template>
  <div class="tag">
    <Row :gutter="32">
    </Row>
    <Tag type="border">标签三</Tag>
    <Tag type="border" closable>标签四</Tag>
    <Tag type="dot">标签一</Tag>
    <Tag type="dot" closable>标签二</Tag>
   <div>{{data}}</div>
  </div>
</template>
<script>
// import { createNamespacedHelpers } from 'vuex'
import { mapState, mapActions } from  "vuex"
import { gettable } from "@/api/ceshi";
// const { mapState, mapActions } = createNamespacedHelpers('some/nested/module')
export default {
  data() {
    return {
      data:[],
    };
  },
  mounted(){
   this.onLoad();
  },
  computed:{
    ...mapState({
      // b: state => state.b
    })
  },
  methods:{
    async  onLoad() {
       const response = await gettable();
        // if (response.status === 200) {
          this.data = response;
        // }
    }
  }
};
</script>
<style scoped lang='less'>
.demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-content {
  height: 120px;
  margin-top: -16px;
}

.demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-content > .ivu-tabs-tabpane {
  background: #fff;
  padding: 16px;
}

.demo-tabs-style1 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {
  border-color: transparent;
}

.demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active {
  border-color: #fff;
}
.demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {
  border-radius: 0;
  background: #fff;
}
.demo-tabs-style2
  > .ivu-tabs.ivu-tabs-card
  > .ivu-tabs-bar
  .ivu-tabs-tab-active {
  border-top: 1px solid #3399ff;
}
.demo-tabs-style2
  > .ivu-tabs.ivu-tabs-card
  > .ivu-tabs-bar
  .ivu-tabs-tab-active:before {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background: #3399ff;
  position: absolute;
  top: 0;
  left: 0;
}
</style>

