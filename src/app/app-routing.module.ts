import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { OurstoryComponent } from './pages/ourstory/ourstory.component';
import { LoginComponent } from './pages/login/login.component';
import { FranciseComponent } from './pages/francise/francise.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CartComponent } from './pages/cart/cart.component';
import { AuthGuard } from './_guards/auth.guard';
import { OrderSuccessComponent } from './pages/order-success/order-success.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'ourstory', component: OurstoryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'franchise', component: FranciseComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  {
    path: 'ordersuccess', component: OrderSuccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
