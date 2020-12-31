// 公共api
import request from "@/utils/request";

export function activityList(data) {
  return request({
    url: "/common",
    method: "post",
    data
  });
}
