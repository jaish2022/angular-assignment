import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BreadComponent } from './bread/bread.component';
import { RouterModule ,Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




const routes:Routes=[
  {path: '' , component:  HomeComponent},
  {path: 'home' , component:  HomeComponent},
  {path: 'contact-us' , component:  HomeComponent},
  {path: 'about-us' , component:  HomeComponent},
  {path: 'login' , component:  LoginComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    NavbarComponent,
    BreadComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
