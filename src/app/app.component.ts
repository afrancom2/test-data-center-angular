import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RechargeFormComponent} from "./presentation/recharge-form/recharge-form.component";
import {RechargeListComponent} from "./presentation/recharge-list/recharge-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RechargeFormComponent, RechargeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test-data-center-angular';
}
