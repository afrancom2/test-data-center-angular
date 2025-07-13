import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {SalePort} from "../../core/ports/sale.port";
import {Sale} from "../../core/models/sale.model";
import {BaseResponse} from "../../core/models/base.response";

@Injectable({providedIn: 'root'})
export class SaleApiService implements SalePort {
  private readonly baseUrl = 'http://localhost:8080/data-center/sale';

  constructor(private http: HttpClient) {
  }

  getAllSales(): Observable<Sale[]> {
    return this.http.get<BaseResponse<Sale[]>>(`${this.baseUrl}`).pipe(
      map(response => response.data)
    );
  }
}
