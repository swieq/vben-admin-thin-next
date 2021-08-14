import {
  RoleParams,
  RolePageParams,
  RolePageListGetResultModel,
  RoleListGetResultModel,
} from '/@/api/model/system/roleModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  Query = '/role/Query',
  GetAllRoleList = '/system/getAllRoleList',
  Enable = '/role/Enable',
  Disable = '/role/Disable',
}

export const getRoleListByPage = (params?: RolePageParams) =>
  defHttp.get<RolePageListGetResultModel>({ url: Api.Query, params });

export const getAllRoleList = (params?: RoleParams) =>
  defHttp.get<RoleListGetResultModel>({ url: Api.GetAllRoleList, params });

export const setRoleStatus = (id: number, isUsable: boolean) => {
  if (isUsable) {
    return defHttp.get({ url: Api.Enable + '/' + id });
  } else {
    return defHttp.get({ url: Api.Disable + '/' + id });
  }
};
