import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ReturnsComponent } from './pages/returns/returns.component';
import { ValidatorComponent } from './pages/validator/validator.component';
import { TokenComponent } from './pages/token/token.component';
import { ScannerComponent } from './pages/scanner/scanner.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  }, {
    path: 'login', component: LoginComponent
  }, {
    path: 'dashboard', component: DashboardComponent
  }, {
    path: 'returns', component: ReturnsComponent
  }, {
    path: 'validator', component: ValidatorComponent
  }, {
    path: 'authtoken', component: TokenComponent
  }, {
    path: 'scanner', component: ScannerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
