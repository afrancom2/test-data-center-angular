import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Operator} from "../../core/models/operator.model";
import {Sale} from "../../core/models/sale.model";
import {Recharge} from "../../core/models/recharge.model";
import {RechargeFacade} from "../../application/recharge/recharge.facade";
import {OperatorFacade} from "../../application/recharge/operator.facade";
import {SaleFacade} from "../../application/recharge/sale.facade";
import {CommonModule, DatePipe} from "@angular/common";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-recharge-list',
  standalone: true,
  imports: [
    CommonModule,
    DatePipe,
    ReactiveFormsModule
  ],
  templateUrl: './recharge-list.component.html',
  styleUrl: './recharge-list.component.scss'
})
export class RechargeListComponent {
  filterForm: FormGroup;
  operators: Operator[] = [];
  sales: Sale[] = [];
  recharges: Recharge[] = [];

  constructor(
    private fb: FormBuilder,
    private operatorFacade: OperatorFacade,
    private saleFacade: SaleFacade,
    private rechargeFacade: RechargeFacade,
    private router: Router
  ) {
    this.filterForm = this.fb.group({
      operatorId: ['', Validators.required],
      saleId: ['', Validators.required]
    });
    this.operatorFacade.getAll().subscribe(res => this.operators = res);
    this.saleFacade.getAll().subscribe(res => this.sales = res);
    this.getAllRecharges();
  }


  fetchRecharges(): void {
    const { operatorId, saleId } = this.filterForm.value;

    if (this.filterForm.valid) {
      this.rechargeFacade.getByOperatorAndSale(operatorId, saleId).subscribe({
        next: (response) => {
          this.recharges = response;
          Swal.fire({
            icon: 'success',
            title: '¡Datos cargados exitosamente!',
            text: 'Los parametros son correctos y estas son las recargas',
            confirmButtonText: 'Ver recargas'
          });
        },
        error: (err) => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: err.error.message,
          });
          this.filterForm.reset();
          this.recharges = [];
        }
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/']); // o la ruta que desees, como '/listar-recargas'
  }

  getAllRecharges(): void {
    this.rechargeFacade.getAll().subscribe(res => this.recharges = res);
  }
}
