import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RechargeFacade} from "../../application/recharge/recharge.facade";
import {Operator} from "../../core/models/operator.model";
import {Sale} from "../../core/models/sale.model";
import {OperatorFacade} from "../../application/recharge/operator.facade";
import {SaleFacade} from "../../application/recharge/sale.facade";
import {CommonModule} from "@angular/common";
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import {maxTwoDecimalsValidator} from "../../shared/validators/max-two-decimals.validator";

@Component({
  selector: 'app-recharge-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './recharge-form.component.html',
  styleUrl: './recharge-form.component.scss'
})
export class RechargeFormComponent {

  form: FormGroup;

  operators: Operator[] = [];
  sales: Sale[] = [];

  constructor(
    private rechargeFacade: RechargeFacade,
    private fb: FormBuilder,
    private operatorService: OperatorFacade,
    private saleService: SaleFacade,
    private router: Router
  ) {
    this.form = this.fb.group({
      amount: [null, [Validators.required, Validators.min(1), maxTwoDecimalsValidator()]],
      operatorId: [null, Validators.required],
      saleId: [null, Validators.required]
    });

    this.operatorService.getAll().subscribe((res: Operator[]) => this.operators = res);
    this.saleService.getAll().subscribe((res: Sale[]) => this.sales = res);
  }

  submit(): void {
    if (this.form.valid) {
      const raw = this.form.value;

      const payload = {
        amount: raw.amount,
        operatorId: Number(raw.operatorId),
        saleId: Number(raw.saleId)
      };

      this.rechargeFacade.create(payload).subscribe({
        next: () => {
          Swal.fire({
            icon: 'success',
            title: '¡Recarga exitosa!',
            text: 'La recarga fue realizada correctamente',
            confirmButtonText: 'Ver recargas'
          }).then(() => {
            this.router.navigate(['/listar-recargas']);
          });
        },
        error: (err) => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un problema al realizar la recarga',
          });
          console.error(err);
        }
      });
    }
  }

}
