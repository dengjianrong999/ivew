<template>
  <div class="table">
    <div class="search">
      <Row :gutter="32">
        <Col span="24">
          <Row :gutter="8">
            <Col span="6" class="inputBox">
              <Col span="4" class="inputName">姓名：</Col>
              <Col span="20">
                <Input v-model="valueName" placeholder="Name" />
              </Col>
            </Col>
            <Col span="6" class="inputBox">
              <Col span="4" class="inputName">年龄：</Col>
              <Col span="20">
                <Input v-model="valueAge" placeholder="Age" />
              </Col>
            </Col>
            <Col span="6" class="inputBox">
              <Col span="4" class="inputName">地址：</Col>
              <Col span="20">
                <Input v-model="valueAddress" placeholder="Address" />
              </Col>
            </Col>
            <Col span="6">
              <Button :size="buttonSize" type="primary" @click="search()">查询</Button>
              <Button :size="buttonSize" type="primary" @click="exportExcel()">下载</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
    <Table
      :loading="loading"
      border
      stripe
      :columns="columns7"
      :height="tableHeight"
      :data="tableDataEnd.slice((pageNum - 1) * pageSize, pageNum * pageSize)"
    ></Table>
    <Page
      :total="tableDataEnd.length"
      :current="pageNum"
      :page-size="pageSize"
      :page-size-opts="pages"
      size="small"
      show-elevator
      show-sizer
      show-total
      placement="top"
      @on-page-size-change="handleSizeChange"
      @on-change="handleCurrentChange"
    ></Page>
    <Modal v-model="modal11" fullscreen title="Fullscreen Modal">
      <Button type="info" @click="modal10 = true">click</Button>
      <Modal title="Title" v-model="modal10" class-name="vertical-center-modal" draggable>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
      </Modal>
    </Modal>
  </div>
</template>
<script>
import excel from '@/libs/excel';
import { resizetab, resizeWidown } from "@/libs/tool";
import { Rectangle, stafR } from "@/libs/toolceshi";
export default {
  data() {
    return {
      loading: false, //loading  加载状态
      modal11: false,
      modal10: false,
      valueName: "",
      valueAge: "",
      valueAddress: "",
      buttonSize: "small",
      columns7: [
        {
          type: "selection", //全选
          width: 60,
          align: "center",
          fixed: "left"
        },
        {
          type: "index2",
          title: "序号",
          width: 70,
          align: "center",
          fixed: "left",
          render: (h, params) => {
            return h(
              "span",
              params.index + (this.pageNum - 1) * this.pageSize + 1
            );
          }
        },
        {
          title: "姓名",
          key: "name",
          align: "center",
          render: (h, params) => {
            return h("div", [
              h("Icon", {
                props: {
                  type: "person"
                }
              }),
              h("strong", params.row.name)
            ]);
          }
        },
        {
          title: "年龄",
          key: "ages",
          align: "center",
          sortable: true //排序
        },
        {
          title: "地址",
          key: "address",
          align: "center"
        },
        {
          title: "Action",
          key: "action",
          width: 150,
          align: "center",
          fixed: "right",
          render: (h, params) => {
            return h("div", [
              h("Icon", {
                props: {
                  type: "md-book"
                },
                style: {
                  color: "#59a5d8",
                  fontSize: "18px"
                },
                on: {
                  click: () => {
                    this.show(params.index);
                  }
                }
              }),
              h("Icon", {
                props: {
                  type: "ios-trash-outline"
                },
                style: {
                  color: "red",
                  fontSize: "20px"
                },
                on: {
                  click: () => {
                    this.remove(params.index);
                  }
                }
              })
            ]);
          }
        }
      ],
      tableData: [
        {
          name: "John Brown",
          ages: "18",
          address: "New York No. 1 Lake Park"
        },
        {
          name: "Jim Green",
          ages: "24",
          address: "London No. 1 Lake Park"
        },
        {
          name: "Joe Black",
          ages: "30",
          address: "Sydney No. 1 Lake Park"
        },
        {
          name: "Jon Snow",
          ages: "26",
          address: "Ottawa No. 2 Lake Park"
        },
        {
          name: "Jim Green",
          ages: "24",
          address: "London No. 1 Lake Park"
        },
        {
          name: "Joe Black",
          ages: "30",
          address: "Sydney No. 1 Lake Park"
        },
        {
          name: "Jon Snow",
          ages: "26",
          address: "Ottawa No. 2 Lake Park"
        },
        {
          name: "Jim Green",
          ages: "24",
          address: "London No. 1 Lake Park"
        },
        {
          name: "Joe Black",
          ages: "30",
          address: "Sydney No. 1 Lake Park"
        },
        {
          name: "Jon Snow",
          ages: "26",
          address: "Ottawa No. 2 Lake Park"
        },
        {
          name: "Jim Green",
          ages: "24",
          address: "London No. 1 Lake Park"
        },
        {
          name: "Joe Black",
          ages: "30",
          address: "Sydney No. 1 Lake Park"
        },
        {
          name: "Jon Snow",
          ages: "26",
          address: "Ottawa No. 2 Lake Park"
        },
        {
          name: "John Brown",
          ages: "18",
          address: "New York No. 1 Lake Park"
        },
        {
          name: "Jim Green",
          ages: "24",
          address: "London No. 1 Lake Park"
        },
        {
          name: "Joe Black",
          ages: "30",
          address: "Sydney No. 1 Lake Park"
        },
        {
          name: "Jon Snow",
          ages: "26",
          address: "Ottawa No. 2 Lake Park"
        },
        {
          name: "Jim Green",
          ages: "24",
          address: "London No. 1 Lake Park"
        },
        {
          name: "Joe Black",
          ages: "30",
          address: "Sydney No. 1 Lake Park"
        },
        {
          name: "Jon Snow",
          ages: "26",
          address: "Ottawa No. 2 Lake Park"
        },
        {
          name: "Jim Green",
          ages: "24",
          address: "London No. 1 Lake Park"
        },
        {
          name: "Joe Black",
          ages: "30",
          address: "Sydney No. 1 Lake Park"
        },
        {
          name: "Jon Snow",
          ages: "26",
          address: "Ottawa No. 2 Lake Park"
        },
        {
          name: "Jim Green",
          ages: "24",
          address: "London No. 1 Lake Park"
        },
        {
          name: "Joe Black",
          ages: "30",
          address: "Sydney No. 1 Lake Park"
        },
        {
          name: "John Brown",
          ages: "18",
          address: "New York No. 1 Lake Park"
        },
        {
          name: "Jim Green",
          ages: "24",
          address: "London No. 1 Lake Park"
        },
        {
          name: "Joe Black",
          ages: "30",
          address: "Sydney No. 1 Lake Park"
        },
        {
          name: "Jon Snow",
          ages: "26",
          address: "Ottawa No. 2 Lake Park"
        },
        {
          name: "Jim Green",
          ages: "24",
          address: "London No. 1 Lake Park"
        },
        {
          name: "Joe Black",
          ages: "30",
          address: "Sydney No. 1 Lake Park"
        },
        {
          name: "Jon Snow",
          ages: "26",
          address: "Ottawa No. 2 Lake Park"
        },
        {
          name: "Jim Green",
          ages: "24",
          address: "London No. 1 Lake Park"
        },
        {
          name: "Joe Black",
          ages: "30",
          address: "Sydney No. 1 Lake Park"
        },
        {
          name: "Jon Snow",
          ages: "26",
          address: "Ottawa No. 2 Lake Park"
        },
        {
          name: "Jim Green",
          ages: "24",
          address: "London No. 1 Lake Park"
        },
        {
          name: "Joe Black",
          ages: "30",
          address: "Sydney No. 1 Lake Park"
        }
      ],
      tableDataEnd: [],
      tableHeight: "",
      pageNum: 1, //当前页数
      pageSize: 10, //显示数据条数
      pages: [10, 20, 50, 100]
    };
  },
  created() {
    this.tableDataEnd = this.tableData;
    this.pageTotal = this.tableDataEnd.length;
  },
  mounted() {
    //表格自适应
    this.tableHeight = resizetab();
    resizeWidown();
    //表格自适应
    let Hg = new Rectangle(20, 120);
    Hg.getHeight();
    console.log(stafR.getHeight());
  },
  methods: {
    resicd() {
      var optimizedResize = (function() {
        var callbacks = [],
          running = false;
        // fired on resize event
        function resize() {
          if (!running) {
            running = true;
            if (window.requestAnimationFrame) {
              window.requestAnimationFrame(runCallbacks);
            } else {
              setTimeout(runCallbacks, 66);
            }
          }
        }
        // run the actual callbacks
        function runCallbacks() {
          callbacks.forEach(function(callback) {
            callback();
          });
          running = false;
        }
        // adds callback to loop
        function addCallback(callback) {
          if (callback) {
            callbacks.push(callback);
          }
        }
        return {
          // public method to add additional callback
          add: function(callback) {
            if (!callbacks.length) {
              window.addEventListener("resize", resize);
            }
            addCallback(callback);
          }
        };
      })();

      // start process
      optimizedResize.add(resizetab);
    },
    show(index) {
      this.modal11 = true;
    },
    remove(index) {
      this.tableData.splice(index, 1);
    },
    search() {
      this.tableDataEnd = [];
      this.tableData.forEach((value, index) => {
        if (
          (value.name.indexOf(this.valueName) >= 0) &
          (value.ages.indexOf(this.valueAge) >= 0) &
          (value.address.indexOf(this.valueAddress) >= 0)
        ) {
          this.tableDataEnd.push(value);
        }
      });
      this.Surplus(this.tableDataEnd);
    },
    exportExcel() {
      if (this.tableData.length) {
        this.exportLoading = true;
        const params = {
          title: ["姓名", "年龄", "地址"],
          key: ["name", "ages", "address"],
          data: this.tableData,
          autoWidth: true,
          filename: "分类列表"
        };
        excel.export_array_to_excel(params);
        this.exportLoading = false;
      } else {
        this.$Message.info("表格数据不能为空！");
      }
    },
    Surplus(list) {
      this.tableDataEnd = [];
      for (let i = 0; i < this.tableData.length; i++) {
        if (list[i]) {
          this.tableDataEnd.push(list[i]);
          this.pageTotal = this.tableDataEnd.length;
        }
      }
    },
    handleSizeChange: function(size) {
      this.pageSize = size;
    },
    handleCurrentChange: function(pageNum) {
      this.pageNum = pageNum;
    }
  }
};
</script>
<style scoped lang='less'>
.search {
  padding: 10px;
  background-color: #fff;
}

.inputBox {
  display: flex;
  align-items: center;
}

.inputName {
  text-align: right;
}

.ivu-table-wrapper {
  margin: 10px 0;
}
.ivu-table-wrapper,
.ivu-table-body,
.ivu-table-tip,
.ivu-table-fixed-body {
  height: 100%;
}
</style>