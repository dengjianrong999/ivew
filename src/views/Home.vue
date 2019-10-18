<template>
  <div class="layout">
    <Header @childValue="fnValue"></Header>
    <div class="content" :style="{display: 'flex',height:'100%'}">
      <!-- <div class="side" v-show="this.ChildrenValue.length>0" :class="[leftshow ? '': 'activelist']"> -->
      <!--不显示首页侧边栏-->
      <div class="side" :class="[leftshow ? '': 'activelist']">
        <Sider hide-trigger :style="{background: '#fff'}">
          <!-- 展开的侧边栏 -->
          <Menu
            theme="light"
            width="auto"
            accordion
            :active-name="$route.path"
            :open-names="openmane.length==0?active:openmane"
            @on-select="selectvalue"
            @on-open-change="changename"
            ref="itemid"
            v-show="leftshow"
          >
            <Sidebar
              v-for="(routeChildren,index) in this.ChildrenValue"
              :inx="index"
              :item="routeChildren"
            ></Sidebar>
          </Menu>
          <!-- 收起的侧边栏 -->
          <template v-for="(routeChildren,index) in ChildrenValue">
            <collapsed-menu
              v-if="routeChildren.children && routeChildren.children.length > 0"
              :key="index"
              :item="routeChildren"
              v-show="!leftshow"
            ></collapsed-menu>
            <Tooltip
              v-show="!leftshow"
              v-else
              :key="index"
              placement="right"
              :content="routeChildren.meta.title"
              @click.native="routerTo(routeChildren)"
            >
              <Icon :type="routeChildren.meta.icon"></Icon>
            </Tooltip>
          </template>
        </Sider>
        <div class="turn-but" @click="tagshow()">
          <img src="../assets/logo.png" alt srcset style="height:50px;" />
        </div>
      </div>
      <div class="Maincontent">
        <Tagsnav></Tagsnav>
        <!-- <Breadcrumb></Breadcrumb> -->
        <template>
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import collapsedMenu from "../components/collapsed-menu";
import Tagsnav from "../components/Tagsnav";
import store from "@/store/index";
export default {
  data() {
    return {
      Lists: [],
      parentList: [],
      ChildrenValue: [],
      itempath: "",
      openmane: [],
      leftshow: true,
      active: JSON.parse(window.sessionStorage.getItem("actives")) || []
    };
  },
  components: {
    Sidebar,
    Header,
    Breadcrumb,
    collapsedMenu,
    Tagsnav
  },
  created() {},
  mounted() {

    this.parentList =
      JSON.parse(window.sessionStorage.getItem("data")) ||
      this.$router.options.routes[1].children;
    this.ChildrenValue =  this.parentList;
        console.log(this.ChildrenValue,'dsdsdsd')
      // JSON.parse(window.sessionStorage.getItem("data")).children ||
      // this.$router.options.routes[1].children; //传来的二级菜单以下的数据
    this.openmane =
      JSON.parse(window.sessionStorage.getItem("opennames")) || [];
    this.$nextTick(() => {
      this.$refs.itemid.updateOpened();
      this.$refs.itemid.updateActiveName();
    });
  },
  methods: {
    fnValue(childValue) {
      this.parentList =
        JSON.parse(window.sessionStorage.getItem("data")) ||
        this.$router.options.routes[1].children;
      this.ChildrenValue = JSON.parse(
        window.sessionStorage.getItem("data")
      ).children;
      let muneLIst = childValue.children[0];
      //头部一级菜单点击默认打开第一个侧边栏
      // **注目前侧边栏只有三级  要四级的话就 muneLIst.children[0].children[0].children[0].children.length
      let arrty = [];
      if (muneLIst.children == undefined) {
        var pat0 = muneLIst.path; //子菜单
        arrty.push(pat0);
      } else if (muneLIst.children[0].children == undefined) {
        var pat1 = muneLIst.children[0].path; //子菜单
        var pat2 = muneLIst.path; //父级
        arrty.push(pat1);
        arrty.push(pat2);
      } else if (muneLIst.children[0].children[0].children == undefined) {
        var pat3 = muneLIst.children[0].path;
        var pat4 = muneLIst.path;
        arrty.push(pat3);
        arrty.push(pat4);
      }
      let actives = JSON.stringify(arrty);
      window.sessionStorage.removeItem("actives");
      window.sessionStorage.setItem("actives", actives);
      this.openmane = JSON.parse(window.sessionStorage.getItem("actives"));
      this.$nextTick(() => {
        this.$refs.itemid.updateOpened();
        this.$refs.itemid.updateActiveName();
      });
    },
    // 侧边栏没有二级的点击事件
    selectvalue(selection) {
      window.sessionStorage.removeItem("actives");
      let itemname = JSON.stringify(selection);
      window.sessionStorage.removeItem("itemname");
      window.sessionStorage.setItem("itemname", itemname);
      // window.sessionStorage.removeItem("actives");
      this.$nextTick(() => {
        this.$refs.itemid.updateOpened();
        this.$refs.itemid.updateActiveName();
      });
    },
    // 侧边栏有二级的点击事件
    changename(selection) {
      window.sessionStorage.removeItem("actives");
      let openName = JSON.stringify(selection);
      window.sessionStorage.removeItem("opennames");
      window.sessionStorage.setItem("opennames", openName);
      this.$nextTick(() => {
        this.$refs.itemid.updateOpened();
        this.$refs.itemid.updateActiveName();
      });
    },
    tagshow() {
      this.leftshow = !this.leftshow;
    },
    routerTo(routeChildren) {
      this.$router.push(routeChildren.path);
    }
  }
};
</script>
<style scoped lang="less">
.Maincontent {
  display: flex;
  flex-direction: column;
}
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: calc(100% - 0px);
  .ivu-layout {
    height: 100%;
    .ivu-menu {
      position: static !important;
    }
    .ivu-collapse {
      padding: 10px;
      background-color: #fff;
    }
    .ivu-breadcrumb {
      display: flex;
      padding-left: 10px;
    }
  }
  .layout-logo {
    width: 100px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-nav {
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }
}

.content {
  width: 100%;
  .side {
    // width: 200px;
    height: 100%;
    float: left;
    background: #fff;
    position: relative;
    border-right: 1px solid #ebebeb;
    .turn-but {
      width: 100%;
      height: 60px;
      line-height: 60px;
      position: absolute;
      top: -60px;
      z-index: 999;
      cursor: pointer;
      overflow: hidden;
      background-color: #57a3f3;
    }
  }
  .Maincontent {
    height: 100%;
    width: 100%;
    padding: 0px 10px 10px 10px;
    overflow: auto;
  }
}
.layout-logo {
  width: 100px;
  height: 30px;
  line-height: 30px;
  color: #fff;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.activelist .ivu-layout-sider {
  width: 50px !important;
  min-width: 50px !important;
  max-width: 0px !important;
  flex: 0 0 0px !important;
  transform: all 0.5s;
}
.ivu-select-dropdown {
  margin-left: 50px;
}
.ivu-tooltip,
.ivu-dropdown {
  display: block;
  font-size: 20px;
  cursor: pointer;
}
.ivu-icon {
  color: #666;
}
.ivu-tooltip:hover .ivu-icon,
.ivu-dropdown:hover .ivu-icon {
  color: rgb(74, 179, 221);
}
</style>