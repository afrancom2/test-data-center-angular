import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Recharge} from "../../core/models/recharge.model";
import {map, Observable, tap} from "rxjs";
import {OperatorPort} from "../../core/ports/operator.port";
import {Operator} from "../../core/models/operator.model";
import {BaseResponse} from "../../core/models/base.response";

@Injectable({providedIn: 'root'})
export class OperatorApiService implements OperatorPort {
  private readonly baseUrl = 'http://localhost:8080/data-center/operator';

  constructor(private http: HttpClient) {
  }

  getAllOperators(): Observable<Operator[]> {
    return this.http.get<BaseResponse<Operator[]>>(`${this.baseUrl}`).pipe(
      map(response => response.data)
    );
  }
}
