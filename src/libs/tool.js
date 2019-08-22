/**
 * @param {Array} target 目标数组
 * @param {Array} arr 需要查询的数组
 * @description 判断要查询的数组是否至少有一个元素包含在目标数组中
 */
export const hasOneOf = (targetarr, arr) => {
  return targetarr.some(_ => arr.indexOf(_) > -1);
};

export const forEach = (arr, fn) => {
  if (!arr.length || !fn) return;
  let i = -1;
  let len = arr.length;
  while (++i < len) {
    let item = arr[i];
    fn(item, i, arr);
  }
};

// 表格动态高度

export const resizetab = () => {
  let Content = document.querySelector(".Maincontent");
  let tablePosi = document.querySelector(".mainTop");
  let inputBox = document.querySelector(".search");
  let tableBox = document.querySelector(".ivu-table-wrapper");
  let tablePage = document.querySelector(".ivu-page");
  let tableBody = document.querySelector(".ivu-table-body");
  let atb = document.querySelectorAll(".ivu-table-fixed-body");
  tableBox.style.height =
    Content.offsetHeight -
    tablePosi.offsetHeight -
    inputBox.offsetHeight -
    tablePage.offsetHeight -
    120 +
    "px";
  tableBody.style.height =
    Content.offsetHeight -
    tablePosi.offsetHeight -
    inputBox.offsetHeight -
    tablePage.offsetHeight -
    160 +
    "px";
  atb[0].style.height = tableBody.style.height;
  atb[1].style.height = tableBody.style.height;
  return (tableBox.style.height).slice(0, -2);
};

export const resizeWidown = () => {
  window.onresize = function() {
    resizetab();
  };
};
