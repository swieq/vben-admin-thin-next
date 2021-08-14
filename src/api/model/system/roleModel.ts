import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';

export type RoleParams = {
  roleName?: string;
  status?: string;
};

export type RolePageParams = BasicPageParams & RoleParams;

export interface RoleListItem {
  RoleId: string;
  RoleName: string;
  AppKey: string;
  IsUsable: boolean;
  Remark: string;
  CreateTime: string;
  ModifyTime: string;
}

/**
 * @description: Request list return value
 */
export type RolePageListGetResultModel = BasicFetchResult<RoleListItem>;

export type RoleListGetResultModel = RoleListItem[];
