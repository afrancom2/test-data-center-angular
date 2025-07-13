import {Recharge} from "../models/recharge.model";
import {Observable} from "rxjs";

export interface RechargePort {
  createRecharge(recharge: Partial<Recharge>): Observable<Recharge>;
  getRechargesByOperator(operatorId: number): Observable<Recharge[]>;
  getRechargesByOperatorAndSale(operatorId: number, saleId: number): Observable<Recharge[]>;
  getAll(): Observable<Recharge[]>;
}
