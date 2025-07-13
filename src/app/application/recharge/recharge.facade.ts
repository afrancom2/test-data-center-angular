import {Injectable} from "@angular/core";
import {RechargeApiService} from "../../infraestructure/api/recharge-api.service";
import {Recharge} from "../../core/models/recharge.model";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class RechargeFacade {
  constructor(private rechargePort: RechargeApiService) {
  }

  create(recharge: Partial<Recharge>): Observable<Recharge> {
    return this.rechargePort.createRecharge(recharge);
  }

  getByOperator(id: number): Observable<Recharge[]> {
    return this.rechargePort.getRechargesByOperator(id);
  }

  getByOperatorAndSale(operatorId: number, saleId: number): Observable<Recharge[]> {
    return this.rechargePort.getRechargesByOperatorAndSale(operatorId, saleId);
  }

  getAll(): Observable<Recharge[]> {
    return this.rechargePort.getAll();
  }
}
