import HttpRequest from "@/libs/axios";
import config from "@/config";
let baseUrl = "";

switch (process.env.NODE_ENV) {
  case "development":
    baseUrl = config.baseUrl.dev; //这里是本地的请求url
    break;
  case "alpha":
    baseUrl = config.baseUrl.alp; //这里是测试环境中的url
    break;
  case "production":
    baseUrl = config.baseUrl.pro; //生产环境url
    break;
}

const axios = new HttpRequest(baseUrl);
export default axios;
