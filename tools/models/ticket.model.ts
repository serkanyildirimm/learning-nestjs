/* eslint-disable prettier/prettier */
import { InventoryModel } from './inventory.model';
import { ActivityModel } from './activity.model';
import { AuditModel } from './audit.model';
import { UserModel } from './user.model';
import { TicketTypeModel } from './ticket-type.model';
export class TicketModel {
    id:string;
    name:string;
    description:string;
    type:TicketTypeModel;
    responsible:UserModel;
    audit:AuditModel;
    activities:ActivityModel[];
    inventories:InventoryModel[];
}