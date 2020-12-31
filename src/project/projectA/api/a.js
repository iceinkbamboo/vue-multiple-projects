// 该项目独立api
import request from "@/utils/request";

export function a(data) {
  return request({
    url: "/a",
    method: "post",
    data
  });
}
