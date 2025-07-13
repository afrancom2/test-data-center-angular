import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Sale} from "../../core/models/sale.model";
import {SaleApiService} from "../../infraestructure/api/sale-api.service";

@Injectable({providedIn: 'root'})
export class SaleFacade {
  constructor(private salePort: SaleApiService) {
  }

  getAll(): Observable<Sale[]> {
    return this.salePort.getAllSales();
  }

}
