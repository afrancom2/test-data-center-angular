import {Injectable} from "@angular/core";
import {RechargePort} from "../../core/ports/recharge.port";
import {HttpClient} from "@angular/common/http";
import {Recharge} from "../../core/models/recharge.model";
import {map, Observable} from "rxjs";
import {BaseResponse} from "../../core/models/base.response";

@Injectable({ providedIn: 'root' })
export class RechargeApiService implements RechargePort {
  private readonly baseUrl = 'http://localhost:8080/data-center/recharge';

  constructor(private http: HttpClient) {}

  createRecharge(recharge: Partial<Recharge>): Observable<Recharge> {
    return this.http.post<Recharge>(`${this.baseUrl}`, recharge);
  }

  getRechargesByOperator(operatorId: number): Observable<Recharge[]> {
    return this.http.get<Recharge[]>(`${this.baseUrl}/by-operator`, {
      params: { operatorId: operatorId.toString() }
    });
  }

  getRechargesByOperatorAndSale(operatorId: number, saleId: number): Observable<Recharge[]> {
    return this.http.get<BaseResponse<Recharge[]>>(`${this.baseUrl}/by-operator-and-sale`, {
      params: {
        operatorId: operatorId.toString(),
        saleId: saleId.toString()
      }
    }).pipe(
      map(response => response.data)
    );
  }

  getAll(): Observable<Recharge[]> {
    return this.http.get<BaseResponse<Recharge[]>>(`${this.baseUrl}`).pipe(
      map(response => response.data)
    )
  }

}
