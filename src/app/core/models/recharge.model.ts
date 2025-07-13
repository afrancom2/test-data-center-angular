import {Operator} from "./operator.model";
import {Sale} from "./sale.model";

export interface Recharge {
  id: number;
  amount: number;
  dateTime: string;
  operator: Operator;
  sale: Sale;
}
