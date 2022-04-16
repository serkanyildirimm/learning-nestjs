/* eslint-disable prettier/prettier */
import { GroupModel } from './group.model';
import { RoleModel } from './role.model';
import { AuditModel } from './audit.model';

export class UserModel {
  id: string;
  name: string;
  surname: string;
  image: string;
  email: string;
  password: string;
  passwordHash: string;
  audit: AuditModel;
  roles:RoleModel[];
  groups:GroupModel[];
}
