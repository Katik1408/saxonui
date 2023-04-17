import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './pages/top-nav/top-nav.component';
import { HomeComponent } from './pages/home/home.component';
import { FranciseComponent } from './pages/francise/francise.component';
import { OurstoryComponent } from './pages/ourstory/ourstory.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './pages/signup/signup.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CustomizeModalComponent } from './pages/customize-modal/customize-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatRadioModule } from '@angular/material/radio';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { CartComponent } from './pages/cart/cart.component';
import { OrderSuccessComponent } from './pages/order-success/order-success.component';
@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    HomeComponent,
    FranciseComponent,
    OurstoryComponent,
    ContactUsComponent,
    LoginComponent,
    SignupComponent,
    CustomizeModalComponent,
    CartComponent,
    OrderSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    MatCheckboxModule,
    MatRadioModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
