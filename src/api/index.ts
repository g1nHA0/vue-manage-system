import requestUtil from "@utils/requestUtil";

// 获取全部发布
export const getEvents = (params:any) => {
  return requestUtil({
    url: 'api/event/corr',
    method: 'get',
    params:params
  });
};
// 提交失物招领
export const saveOrUpdateEvent = (saveType: number, data: any) => {
  return requestUtil({
    url: "api/event" + "?saveType=" + saveType,
    method: "POST",
    data: data,
  });
};
// 删除发布
export const deleteEvent = (eventId: string) => {
  return requestUtil({
    url: "api/event" + "?eventId=" + eventId,
    method: "delete",
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
