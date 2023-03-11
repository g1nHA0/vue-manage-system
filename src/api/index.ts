import requestUtil from "@utils/requestUtil";

export const fetchData = () => {
  return requestUtil({
    url: 'api/event/corr',
    method: 'get'
  });
};
// 获取公告
export const getAnnouncements = () => {
  return requestUtil({
    url: "api/announcement",
    method: "GET",
  });
};
// 保存或更新公告
export const saveOrUpdateAnnouncements = (saveType: number, data: any) => {
  return requestUtil({
    url: "api/announcement",
    method: "POST",
    params: {saveType: saveType},
    data: data,
  });
};
// 删除公告
export const deleteAnnouncements = (announcementId: string) => {
  return requestUtil({
    url: "api/announcement",
    method: "DELETE",
    params: {announcementId: announcementId}
  });
};
