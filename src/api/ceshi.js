import axios from "@/libs/api.request";
//表格数据;
export const gettable = () => {
  return axios.request({
    url: "/tab3",
    method: "get"
  });
};
export const ceshi = () => {
  return axios.request({
    url: "v2/muzzy/columns/10008/items?start=0&count=3",
    method: "get"
  });
};
