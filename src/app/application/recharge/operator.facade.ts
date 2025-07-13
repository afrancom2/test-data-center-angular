import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Operator} from "../../core/models/operator.model";
import {OperatorApiService} from "../../infraestructure/api/operator-api.service";

@Injectable({providedIn: 'root'})
export class OperatorFacade {
  constructor(private operatorPort: OperatorApiService) {
  }

  getAll(): Observable<Operator[]> {
    return this.operatorPort.getAllOperators();
  }

}
