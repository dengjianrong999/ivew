<template>
  <div class="mainTop">
    <span @click="handleScroll(240)">《</span>
    <span @click="handleScroll(-240)">》</span>
    <div class="marginLeft" ref="scrollOuter" >
      <div ref="scrollBody" class="scroll-body" :style="{left: tagBodyLeft + 'px'}">
        <Tag
          type="dot"
          closable
          color="blue"
          v-for="(item,index) in  routerList"
          :key="index"
          @click.native="linTo(item)"
          @on-close="close(item)"
        >{{item.title}}</Tag>
       </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import store from "@/store/index";
export default {
  data() {
    return {
      routerlist: [{ title: "首页", path: "/" }],
      routerList: [{ title: "首页", path: "/" }],
       tagBodyLeft: 0,
    };
  },
  mounted() {
  },
  watch: {
    $route: {
      handler: function(val, oldVal) {
        this.routerlist.push({ title: val.meta.title, path: val.path });
        this.unique10();
        this.routerList = this.routerlist;
        // console.log("默认第2次",this.routerList,store.state.a.app.tagrouter)
      },
      // 深度观察监听
      deep: true
    }
  },

  methods: {
    //数组去重
    unique10() {
      var hash = {};
      this.routerlist = this.routerlist.reduce(function(item, next) {
        hash[next.path] ? "" : (hash[next.path] = true && item.push(next));
        return item;
      }, []);
    },
    close(item) {
      this.routerList.splice(
        this.routerList.findIndex(v => v.value === item),
        1
      );
      this.routerList = this.routerList;
    },
    linTo(item) {
      this.$router.push(item.path);
    },
      handleScroll (offset) {
      const outerWidth = this.$refs.scrollOuter.offsetWidth
      const bodyWidth = this.$refs.scrollBody.offsetWidth
      if (offset > 0) {
        this.tagBodyLeft = Math.min(0, this.tagBodyLeft + offset)
      } else {
        if (outerWidth < bodyWidth) {
          if (this.tagBodyLeft < -(bodyWidth - outerWidth)) {
            this.tagBodyLeft = this.tagBodyLeft
          } else {
            this.tagBodyLeft = Math.max(this.tagBodyLeft + offset, outerWidth - bodyWidth)
          }
        } else {
          this.tagBodyLeft = 0
        }
      }
    },
  }
};
</script>
<style scoped lang="less">
.mainTop {
  padding: 5px;
  height: 38px;
  position:relative;
  background-color: antiquewhite;
  text-align: left;
  span:nth-child(1) {
    position: absolute;
    display: block;
    width: 30px;
    height: 30px;
    text-align:center;
    line-height:30px;
    background: #addcff;
    left: 0;
  }
  span:nth-child(2) {
    position: absolute;
    display: block;
    width: 30px;
    line-height:30px;
    text-align:center;
    height: 30px;
    background: #addcff;
    right: 0;
  }
  .marginLeft {
    display: inline-block;
    overflow:hidden;
    width:calc(100% - 60px);
    transition: all .5s;
    .ivu-tag {
      display: inline-block !important;
    }
  }
}
::-webkit-scrollbar {
  width: 0px;
  height: 8px;
  background-color: rgb(154, 219, 228);
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 1px transparent;
  -webkit-box-shadow: inset 0 0 1px transparent;
  border-radius: 1px;
  background-color: transparent;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 1px;
  box-shadow: inset 0 0 1px transparent;
  -webkit-box-shadow: inset 0 0 1px transparent;
  background-color: transparent;
}
  .marginLeft{
    position: absolute;
    left: 28px;
    right: 61px;
    top: 0;
    bottom: 0;
    white-space: nowrap;
    box-shadow: 0px 0 3px 2px rgba(100,100,100,.1) inset;
    .scroll-body{
      display: inline-block;
      padding: 1px 4px 0;
      position: absolute;
      overflow: visible;
      white-space: nowrap;
      transition: left .3s ease;
    }
  }
</style>
