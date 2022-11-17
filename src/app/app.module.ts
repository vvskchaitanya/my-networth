import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProfileComponent } from './user/profile/profile.component';
import { InputComponent } from './basic/input/input.component';
import { CardComponent } from './basic/card/card.component';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './user/login/login.component';
import { AngularFireModule } from '@angular/fire/compat';
import { MaterialModule } from './shared/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderComponent } from './basic/loader/loader.component';
import { LoaderInterceptor } from './basic/loader/loader.interceptor';
import { DashboardModule } from './dashboard/dashboard.module';
import { AssetsComponent } from './dashboard/assets/assets.component';
import { LiabilitiesComponent } from './dashboard/liabilities/liabilities.component';
import { NetworthComponent } from './dashboard/networth/networth.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    InputComponent,
    CardComponent,
    LoginComponent,
    LoaderComponent,
    AssetsComponent,
    LiabilitiesComponent,
    NetworthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    MaterialModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
