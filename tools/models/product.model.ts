/* eslint-disable prettier/prettier */
import { ProductTypeModel } from './product-type.model';
import { AuditModel } from './audit.model';
export class ProductModel {
    id:string;
    name:string;
    audit:AuditModel;
    type:ProductTypeModel;
}