import {Observable} from "rxjs";
import {Operator} from "../models/operator.model";

export interface OperatorPort {
  getAllOperators(): Observable<Operator[]>;
}
