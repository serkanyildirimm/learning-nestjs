/* eslint-disable prettier/prettier */
import { ActivityModel } from './../models/activity.model';
import { InventoryModel } from './../models/inventory.model';
import { AuditModel } from './../models/audit.model';
import { UserModel } from './../models/user.model';
import { TicketModel } from './../models/ticket.model';
export class TicketDto{
    name:string;
    description:string;
    type:TicketModel;
    responsible:UserModel;
    audit:AuditModel;
    activities:ActivityModel[];
    inventories:InventoryModel[];
}