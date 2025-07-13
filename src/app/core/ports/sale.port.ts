import {Observable} from "rxjs";
import {Sale} from "../models/sale.model";

export interface SalePort {
  getAllSales(): Observable<Sale[]>;
}
