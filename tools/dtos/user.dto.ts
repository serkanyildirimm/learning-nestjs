/* eslint-disable prettier/prettier */
import { GroupModel } from './../models/group.model';
import { RoleModel } from './../models/role.model';

export class UserCreateDto {
  name: string;
  surname: string;
  image:string;
  password: string;
  email: string;
  birthdate: Date;
}
export class UserUpdateDto{
  name:string;
  surname:string;
  image:string;
  password: string;
  email: string;
  birthdate: Date;
  roles:RoleModel[];
  groups:GroupModel[];
 }


export class UserLoginDto {
  email: string;
  password: string;
}
