<template>
  <div class="heade">
    <img src="../assets/logo.png" alt srcset style="width:50px;height:50px;">
    <!-- <template v-if="listActive == '0'"> -->
    <Menu mode="horizontal" :theme="theme1">
      <Dropdown style="margin-left: 20px;float:right;padding-right:20px;">
        <Button type="primary">
          下拉菜单
          <Icon type="ios-arrow-down"></Icon>
        </Button>
        <DropdownMenu slot="list">
          <DropdownItem @click.native="loginout()">退出登录</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <div class="title">
        <ul>
          <li
            v-for="(item,index) in Lists"
            ref="lisLi"
            :class="{activeClass: currentIndex === index}"
            :key="index"
            @click="isChirdren(item.children,item,index)"
            v-if="!item.meta.hideInMenu"
          >
            <Icon type="ios-paper"/>
            {{item.meta.title}}
          </li>
        </ul>
      </div>
    </Menu>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import store from "@/store/index";
export default {
  data() {
    return {
      theme1: "dark",
      // Lists: this.$router.options.routes,  //本地所有路由
      Lists: this.$store.getters.menuList,    //权限路由 acess控制
      currentIndex: 0    //本地路由为1
    };
  },
  created() {
    console.log(this.$store.getters.menuList,'路由list')
  },
  mounted() {
    this.$nextTick(function(){
      console.log("///",this.currentIndex)
    })
    this.currentIndex =
      JSON.parse(window.sessionStorage.getItem("listActive")) || 0;  //本地路由为1
  },
  methods: {
    ...mapActions(["handleLogOut", "getUserInfo"]),
    isChirdren(lists, iteid, index) {
      this.currentIndex = index;
      this.$router.push(iteid.path);
      let item = lists;
      // let itemid = iteid;
      // //一级菜单选中高亮
      let listActive = JSON.stringify(index);
      window.sessionStorage.removeItem("listActive");
      window.sessionStorage.setItem("listActive", listActive);
      //一级菜单选中高亮
      //传菜单栏 二级给侧边栏
      var routelist = JSON.stringify(item);
      window.sessionStorage.removeItem("data");
      window.sessionStorage.setItem("data", routelist);
      this.$emit("childValue", item[0]);
    },
    loginout() {
      this.handleLogOut().then(res => {
        window.sessionStorage.clear();
        // this.getUserInfo().then(res => {
        this.$router.push("/login");
        // });
      });
    }
  }
};
</script>
<style scoped lang="less">
.heade {
  position: relative;
  img {
    position: absolute;
    left: 20px;
    top: 5px;
    z-index: 999;
  }
  .ivu-menu-item {
    padding: 0 30px !important;
  }

  .ivu-menu-dark,
  .ivu-menu-primary,
  .ivu-menu-light {
    display: flex;
    justify-content: flex-end;
    padding-right: 120px;
  }
  .ivu-dropdown {
    position: absolute;
    right: 0px;
  }
  .ivu-menu-horizontal .ivu-menu-item {
    float: right;
  }
}
.title {
  float: right;
  padding-right: 20px;
  ul {
    display: flex;
  }
}
.title ul li {
  list-style: none;
  height: 60px;
  line-height: 44px;
  background: #515a6e;
  color: #e6e0e0;
  padding: 10px;
}
.title ul .activeClass {
  color: #fff;
}
</style>
